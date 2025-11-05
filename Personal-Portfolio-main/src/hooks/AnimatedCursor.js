import React, { useEffect, useRef, useState, useCallback } from "react";

const IsDevice = (() => {
  if (typeof navigator == 'undefined') return;

  let ua = navigator.userAgent;

  return {
    info: ua,

    Android() {
      return ua.match(/Android/i);
    },
    BlackBerry() {
      return ua.match(/BlackBerry/i);
    },
    IEMobile() {
      return ua.match(/IEMobile/i);
    },
    iOS() {
      return ua.match(/iPhone|iPad|iPod/i);
    },
    iPad() {
      return (
          ua.match(/Mac/) &&
          navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2
      );
    },
    OperaMini() {
      return ua.match(/Opera Mini/i);
    },

    any() {
      return (
          IsDevice.Android() ||
          IsDevice.BlackBerry() ||
          IsDevice.iOS() ||
          IsDevice.iPad() ||
          IsDevice.OperaMini() ||
          IsDevice.IEMobile()
      );
    }
  };
})();

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function CursorCore({
                      outerStyle,
                      innerStyle,
                      color = '255, 0, 150', // Bright pink by default
                      glowColor = '255, 0, 150', // Matching pink glow
                      outerAlpha = 0.2,
                      size = 9, // Both inner and outer size are the same
                      scale = 0.7, // Unified scaling factor for both circles
                      trailingSpeed = 8,
                      clickables = [
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link'
                      ]
                    }) {
  const cursorOuterRef = useRef();
  const cursorInnerRef = useRef();
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  let endX = useRef(0);
  let endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current.style.top = `${clientY}px`;
    cursorInnerRef.current.style.left = `${clientX}px`;
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
      (time) => {
        if (previousTimeRef.current !== undefined) {
          coords.x += (endX.current - coords.x) / trailingSpeed;
          coords.y += (endY.current - coords.y) / trailingSpeed;
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animateOuterCursor);
      },
      [requestRef] // eslint-disable-line
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnterViewport = useCallback(() => setIsVisible(true), []);
  const onMouseLeaveViewport = useCallback(() => setIsVisible(false), []);

  useEventListener('mousemove', onMouseMove);
  useEventListener('mousedown', onMouseDown);
  useEventListener('mouseup', onMouseUp);
  useEventListener('mouseover', onMouseEnterViewport);
  useEventListener('mouseout', onMouseLeaveViewport);

  useEffect(() => {
    if (isActive || isActiveClickable) {
      cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      cursorOuterRef.current.style.boxShadow = `0 0 15px rgba(${glowColor}, 0.7)`;
    } else {
      cursorInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOuterRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOuterRef.current.style.boxShadow = `0 0 8px rgba(${glowColor}, 0.4)`;
    }
  }, [scale, glowColor, isActive, isActiveClickable]);

  useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current.style.opacity = 1;
      cursorOuterRef.current.style.opacity = 1;
    } else {
      cursorInnerRef.current.style.opacity = 0;
      cursorOuterRef.current.style.opacity = 0;
    }
  }, [isVisible]);

  useEffect(() => {
    const clickableEls = document.querySelectorAll(clickables.join(','));

    clickableEls.forEach((el) => {
      el.style.cursor = 'none';

      el.addEventListener('mouseover', () => {
        setIsActive(true);
      });
      el.addEventListener('click', () => {
        setIsActive(true);
        setIsActiveClickable(true);
      });
      el.addEventListener('mousedown', () => {
        setIsActiveClickable(true);
      });
      el.addEventListener('mouseup', () => {
        setIsActive(true);
        setIsActiveClickable(false);
      });
      el.addEventListener('mouseout', () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickableEls.forEach((el) => {
        el.removeEventListener('mouseover', () => {
          setIsActive(true);
        });
        el.removeEventListener('click', () => {
          setIsActive(true);
          setIsActiveClickable(true);
        });
        el.removeEventListener('mousedown', () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener('mouseup', () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener('mouseout', () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive, clickables]);

  const styles = {
    cursorInner: {
      zIndex: 999,
      display: 'block',
      position: 'fixed',
      borderRadius: '50%',
      width: size,
      height: size,
      pointerEvents: 'none',
      backgroundColor: `rgba(${color}, 1)`,
      ...(innerStyle && innerStyle),
      transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
    },
    cursorOuter: {
      zIndex: 999,
      display: 'block',
      position: 'fixed',
      borderRadius: '50%',
      width: size,
      height: size,
      pointerEvents: 'none',
      backgroundColor: `rgba(${color}, ${outerAlpha})`,
      boxShadow: `0 0 8px rgba(${glowColor}, 0.4)`,
      transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out, box-shadow 0.25s ease-in-out',
      willChange: 'transform',
      ...(outerStyle && outerStyle),
    },
  };

  document.body.style.cursor = 'none';

  return (
      <React.Fragment>
        <div ref={cursorOuterRef} style={styles.cursorOuter} />
        <div ref={cursorInnerRef} style={styles.cursorInner} />
      </React.Fragment>
  );
}

function AnimatedCursor({
                          outerStyle,
                          innerStyle,
                          color,
                          glowColor,
                          outerAlpha,
                          size, // Unified size for both inner and outer circles
                          scale, // Unified scaling factor for both circles
                          trailingSpeed,
                          clickables,
                        }) {
  if (typeof navigator !== 'undefined' && IsDevice.any()) {
    return <React.Fragment></React.Fragment>;
  }
  return (
      <CursorCore
          outerStyle={outerStyle}
          innerStyle={innerStyle}
          color={color}
          glowColor={glowColor}
          outerAlpha={outerAlpha}
          size={size}
          scale={scale}
          trailingSpeed={trailingSpeed}
          clickables={clickables}
      />
  );
}

export default AnimatedCursor;

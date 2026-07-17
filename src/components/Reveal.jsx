import { useReveal } from '../hooks/useReveal';

/**
 * Generic scroll-reveal wrapper. Renders as `as` (default div) with the
 * `reveal`/`reveal in` classes and an optional transition delay, matching
 * the prototype's `.reveal[.in]` + `data-delay` pattern.
 */
export function Reveal({
  as: Tag = 'div',
  initiallyIn = false,
  delay,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, isIn] = useReveal(initiallyIn);
  const cls = `${className} reveal${isIn ? ' in' : ''}`.trim();
  const mergedStyle = delay ? { transitionDelay: `${delay}ms`, ...style } : style;
  return (
    <Tag ref={ref} className={cls} style={mergedStyle} {...rest}>
      {children}
    </Tag>
  );
}

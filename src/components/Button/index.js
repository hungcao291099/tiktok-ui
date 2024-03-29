import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  onClick,
  primary = false,
  outline = false,
  text = false,
  small = false,
  large = false,
  disabled = false,
  round = false,
  className,
  rightIcon,
  leftIcon,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'fuction') {
        delete props[key];
      }
    });
  }
  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    round,
    leftIcon,
    rightIcon,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;

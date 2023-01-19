import React from "react";
import StyledButton from "./StyledButton";
import { StyledIcon } from "./StyledButton";
import PropTypes from "prop-types";
import { COLORS, SIZES } from "../../../utils/utils";
import "./buttonStyle.css";
import { Spinner } from "../../spinner/spinner";
export const Button = (props) => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  const {
    color = "primary",
    size = "md",
    children,
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    onClick,
    ripple = false,
    loadingText = "Loading",
    className,
    ...rest
  } = props;

  const spinnerStyles = {
    size: size === "large" ? 25 : size === "default" ? 20 : 15,
    light: true,
  };
  const childrenWithIcon =
    !leftIcon && !rightIcon ? (
      children
    ) : !leftIcon ? (
      <>
        {children}
        <StyledIcon as={rightIcon} />
      </>
    ) : (
      <>
        <StyledIcon as={leftIcon} />

        {children}
      </>
    );

  return (
    <StyledButton
      as="button"
      type="button"
      color={color}
      size={size}
      disabled={disabled}
      loading={loading}
      withText = {children != null }
      leftIcon = {leftIcon != null }
      rightIcon = {rightIcon != null}
      onClick={
        ripple
          ? (e) => {
              const rect = e.target.getBoundingClientRect();
              setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              onClick && onClick(e);
            }
          : { onClick }
      }
      {...rest}
      className={ripple ? `ripple-button ${className}` : { className }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      {loading ? (
        <>
          {loadingText}
          <Spinner {...spinnerStyles} />
        </>
      ) : (
        childrenWithIcon
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(COLORS),
  leftIcon: PropTypes.elementType,
  rightIcon: PropTypes.elementType,
  size: PropTypes.oneOf(SIZES),
  children: PropTypes.string,
  disabled: PropTypes.bool,
  ripple: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

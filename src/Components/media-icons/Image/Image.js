import React from "react";
import ImageStyled from "./StyledImage";

export function Image(props) {
  const {
    src,
    alt,
    width,
    height,
    className,
    onError,
    onClick,
    isLoading,
    onLoad,
    fit="cover",
    radius,
    shadow,
    ...rest
  } = props;
  return (
    <ImageStyled
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={onError}
      onClick={onClick}
      isLoading={isLoading}
      onLoad={onLoad}
      radius={radius}
      shadow={shadow}
      fit={fit}
      {...rest}
    ></ImageStyled>
  );
}

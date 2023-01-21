import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Spinner } from "../../spinner/spinner";
import { withTheme } from "../../Theme/withTheme";

const Container = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: transparent;
`;

const Loading = styled.div`
  position: absolute;
  font-size: 1rem;
  color: gray;
`;

const Error = styled.div`
  position: absolute;
  overflow: hidden;
  text-align: center;
  align-items: center;
  color: red;
  
  font-size: 10px;
`;

const StyledImg = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  object-fit: ${(props) => props.fit || "cover"};
  border-radius: ${(props) => props.radius || "0"};
  box-shadow: ${(props) =>
    props.shadow ? props.theme.shadows[props.shadow] : "none"};
`;

const ImageStyled = ({
  src,
  alt,
  width,
  height,
  className,
  onError,
  onClick,
  isLoading,
  onLoad,
  fit,
  radius,
  shadow
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <Container
      width={width}
      height={height}
      className={className}
      onClick={onClick}
      
    >
      {isLoading ? (
        loading && (
          <Loading>
            <Spinner></Spinner>
          </Loading>
        )
      ) : (
        <></>
      )}
      {error && <Error>{alt}</Error>}
      <StyledImg
        fit={fit}
        radius={radius}
        src={src}
       
        shadow={shadow}
        width={width}
        height={height}
        onLoad={
          onLoad
            ? onLoad
            : () => {
                setError(false);
                setLoading(false);
              }
        }
        onError={
          onError
            ? onError
            : () => {
                setError(true);
                setLoading(false);
              }
        }
      />
    </Container>
  );
};
export default withTheme(ImageStyled);

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Image = ({ src, alt, width, height, className, onError, onClick }) => {
  const [loading, setLoading] = useState(true);

  return (
    <Container width={width} height={height} className={className} onClick={onClick}>
      {loading && <Loading />}
      <StyledImg
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoading(false)}
        onError={onError}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Loading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: gray;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default Image;

import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotateCube = keyframes`
  0% { transform: rotateX(0deg) rotateY(360deg) rotateZ(90deg); }
  25% { transform: rotateX(90deg) rotateY(270deg) rotateZ(180deg); }
  50% { transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg); }
  75% { transform: rotateX(270deg) rotateY(90deg) rotateZ(360deg); }
  100% { transform: rotateX(360deg) rotateY(0deg) rotateZ(270deg); }
`;

const CubeContainer = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 1000px;
`;

const Cube = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: ${rotateCube} 10s infinite;
`;

const CubeFace = styled.div`
  width: 200px;
  height: 200px;
  display: block;
  position: absolute;
  border: none;
  line-height: 200px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
`;

const FrontFace = styled(CubeFace)`
  background: rgba(255, 0, 0, 0.5);
`;

const BackFace = styled(CubeFace)`
  background: rgba(0, 255, 0, 0.5);
`;

const RightFace = styled(CubeFace)`
  background: rgba(0, 0, 255, 0.5);
`;

const LeftFace = styled(CubeFace)`
  background: rgba(0, 255, 255, 0.5);
`;

const TopFace = styled(CubeFace)`
  background: rgba(255, 0, 255, 0.5);
`;

const BottomFace = styled(CubeFace)`
  background: rgba(255, 255, 0, 0.5);
`;

function CubeAnimation() {
  return (
    <CubeContainer>
      <Cube>
        <FrontFace>Front</FrontFace>
        <BackFace>Back</BackFace>
        <RightFace>Right</RightFace>
        <LeftFace>Left</LeftFace>
        <TopFace>Top</TopFace>
        <BottomFace>Bottom</BottomFace>
      </Cube>
    </CubeContainer>
  );
}

export default CubeAnimation;

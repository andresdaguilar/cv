import React from 'react';
import { styled } from '@mui/system';

const Hexagon = styled('div')({
  position: 'relative',
  width: '130px',
  height: '130px',
  backgroundColor: '#fff',  
  margin: '0 auto',
  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  borderRadius: '20px',
  overflow: 'hidden',
});

const HexagonImage = styled('img')({
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

function HexagonWithImage(props) {
  const { src, alt } = props;

  return (
    <Hexagon>
      <HexagonImage src={src} alt={alt} />
    </Hexagon>
  );
}

export default HexagonWithImage;
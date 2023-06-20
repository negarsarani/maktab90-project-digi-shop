import React from 'react';
import ReactImageZoom from 'react-image-zoom';

interface props {
  width: number;
  height: number;
  zoomWidth: number;
  img: string;
}
const Index = ({ width, height, zoomWidth, img }: props) => {
 return <ReactImageZoom {img:ing , width:width , height:height , zoomWidth:zoomWidth} />
};

export default Index;

import React from 'react';
import Sponser from './Sponser';
import PriceChart from './PriceChart';
import FullScreenVideo from './FullScreenVideo';
import TextWithVideo from './TextWithVideo';

function Hero() {
  return (
    <>
      <FullScreenVideo />
      <TextWithVideo />
      <PriceChart />
      <Sponser />;
    </>
  );
}

export default Hero;

import React, { PureComponent } from 'react';
import { Carrousel, BarTop } from '../components/Components';

export const Home = () => {
  return (
    <>
      <BarTop />
      <div className='mx-3'>
        <Carrousel />
      </div>
    </>
  );
}
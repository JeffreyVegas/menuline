import React from 'react';
import Header from '../components/Header';

const LayoutBasic = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayoutBasic;

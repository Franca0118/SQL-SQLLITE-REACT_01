import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './baseTeste';


export default () => {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />} ></Route>
            </Routes>
    </BrowserRouter>
  );
};



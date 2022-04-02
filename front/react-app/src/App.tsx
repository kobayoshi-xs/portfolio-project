import './App.css';
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*import Home from "components/pages/Home"*/
import CommonLayout from 'components/layouts/CommonLayout';
import SignUp from 'components/pages/SignUp';

import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />} />
        <SignUp path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

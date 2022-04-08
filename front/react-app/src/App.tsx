import './App.css';
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from 'components/pages/Home';
import CommonLayout from 'components/layouts/CommonLayout';
import SignUp from 'components/pages/SignUp';
import { SignIn } from 'components/pages/SignIn';
import { Notfound } from 'components/pages/NotFound';

import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={< Notfound />} />
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  )
}

export default App

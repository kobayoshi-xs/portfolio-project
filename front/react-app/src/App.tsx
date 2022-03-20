import './App.css';
import React, { useState, useEffect, createContext } from "react";

/*import Home from "components/pages/Home"*/
import CommonLayout from 'components/layouts/CommonLayout';

import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"

const App: React.FC = () => {
  return (
    <CommonLayout />
  )
}

export default App

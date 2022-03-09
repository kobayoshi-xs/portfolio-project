import './App.css';
import React, { useState, useEffect, createContext } from "react"

import Home from "components/pages/Home"

import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"

const App: React.FC = () => {
  return (
    <h1>Hello World!</h1>
  )
}

export default App

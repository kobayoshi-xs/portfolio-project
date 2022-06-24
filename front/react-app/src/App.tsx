import './App.css';
import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from 'components/pages/Home';
import CommonLayout from 'components/layouts/CommonLayout';
import SignUp from 'components/pages/SignUp';
import { SignIn } from 'components/pages/SignIn';
import { Notfound } from 'components/pages/NotFound';
import RecipeSeach from 'components/pages/RecipeSeach';
import RecipeArea from 'components/layouts/RecipeArea';
import RecipeLarge from 'components/pages/RecipeLarge';
import RecipeMedium from 'components/pages/RecipeMedium';

import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"

const App: React.VFC = () => {
  return (
    <BrowserRouter>
      <CommonLayout>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="signup" element={< SignUp />} />
          <Route path="signin" element={< SignIn />} />
          <Route path="*" element={< Notfound />} />
          <Route path="recipe" element={< RecipeSeach />}/>
          <Route path="recipeArea" element={< RecipeArea />}>
            <Route path="large" element={< RecipeLarge />}>
              <Route path="medium" element={< RecipeMedium />}/>
            </Route>
          </Route>
          <Route path="recipelarge" element={< RecipeLarge />}/>
        </Routes>
      </CommonLayout>
    </BrowserRouter>
  )
}

export default App

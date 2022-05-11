import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Groceries from 'pages/groceries';
import Header from 'components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/create" element={<Groceries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
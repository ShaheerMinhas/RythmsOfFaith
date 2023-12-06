  import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

import Dashboard from './components/Dashboard';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  );
};

export default App;

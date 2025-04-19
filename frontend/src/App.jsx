import { useState } from 'react';
import './App.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
import Dashboard from './Dashboard';
import PageNotFound from './PageNotFound';
import { GoogleOAuthProvider } from '@react-oauth/google';
import RefrshHandler from './RefreshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Wrap the login component and pass down the setter
  const GoogleAuthWrapper = () => (
    <GoogleOAuthProvider clientId="946447966764-4v1mhpqud8t08v4224iog3c2se8d5tif.apps.googleusercontent.com">
      <GoogleLogin setIsAuthenticated={setIsAuthenticated} />
    </GoogleOAuthProvider>
  );

  // Protect dashboard route
  const PrivateRoute = ({ element }) =>
    isAuthenticated ? element : <Navigate to="/login" replace />;

  return (
    <HashRouter>
      {/* On every route change we refresh auth state */}
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute element={<Dashboard />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './utils/auth';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          {/* <ProtectedRoute exact path="/profile" onLoginFail="/login" component={Profile} /> */}
          {/* <ProtectedRoute exact path="/results" onLoginFail="/login" component={Results} /> */}
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
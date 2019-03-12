import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PackageOptions from './Pages/PackageOptions';
import PasswordReset from './Pages/PasswordReset';
import RecoveryCode from './Pages/RecoveryCode';
import ResetEmail from './Pages/ResetEmail';
import LoginSignup from './Pages/LoginSignup';
import MainRoot from './App/App';

const Separate = () => (
  <Switch>
    <Route path="/package-options" component={PackageOptions} />
    <Route path="/password-reset" component={PasswordReset} />    
    <Route path="/recovery-code" component={RecoveryCode} />
    <Route path="/reset-email" component={ResetEmail} />
    <Route path="/signin" component={LoginSignup} />
    <Route path="/" component={MainRoot} />
  </Switch>
);

export default Separate;

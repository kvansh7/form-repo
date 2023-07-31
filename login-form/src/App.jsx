import React from 'react';
import LoginForm from './LoginForm';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <LoginForm />
      <FooterComponent />
    </div>
  );
};

export default App;

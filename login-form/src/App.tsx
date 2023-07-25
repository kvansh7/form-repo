import LoginForm from './LoginForm';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <LoginForm />
       <FooterComponent></FooterComponent>
    </div>
  );
};

export default App;

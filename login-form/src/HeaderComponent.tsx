import './HeaderComponent.css';

const HeaderComponent: React.FC = () => {
  return (
    <div className="header-container">
      <div className="logo">
        {<img src='C:\Users\kruti\Downloads\Logo.png'></img>}
        <p>Logo goes here</p>
      </div>
    </div>
  );
};

export default HeaderComponent;

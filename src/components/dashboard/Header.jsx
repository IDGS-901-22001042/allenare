import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="user-profile">
        <img src="https://graph.facebook.com/1449527692254051/picture?height=256&width=256" alt="User Avatar" className="avatar" />
        <div className="user-info">
          <h1>Bienvenido, (username)</h1>
          <p>(correo)</p>
        </div>
      </div>
      <div className="header-icons">
        <div className="icon-circle">⚙️</div>
        <div className="icon-circle">🔔</div>
      </div>
    </header>
  );
};

export default Header;
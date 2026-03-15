import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Url Shortener(Google-like) </div>

      <ul className="nav-links">
        <li>Platform</li>
        <li>Solutions</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>

      <div className="nav-actions">
        <button className="primary">Sign up Free</button>
      </div>
    </nav>
  );
}
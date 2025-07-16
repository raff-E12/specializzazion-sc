import { Link, useNavigate } from "react-router-dom";

function Header() {
  const root = useNavigate();
    return (
      <header className="header">
        <h2>Questo è l'Header</h2>
        <ul>
          <li><Link to={"/btn"}>Increments</Link></li>
          <li><Link to={"/list"}>List</Link></li>
          <li><Link to={"/cards"}>Cards</Link></li>
          <li><button onClick={()=>{root("/")}}>Home</button></li>
        </ul>
      </header>
    );
  }
  
  export default Header
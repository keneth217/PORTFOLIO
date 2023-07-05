
import react from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
<nav class="navbar navbar-expand-lg navbar-light fixed-top card-shadow bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">KENETH</Link>
    <button class="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
        <li class="nav-item">
         < Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
         < Link class="nav-link" to="/about">about</Link>
        </li>
        <li class="nav-item">
         < Link class="nav-link" to="/projects">Projects</Link>
        </li>
        <li class="nav-item">
         < Link class="nav-link" to="/contacts">contacts</Link>
        </li>
        <li class="nav-item dropdown">
         < Link class="nav-link dropdown-toggle" to="/articles" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            articles
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/articles">articles</Link></li>
            <li><Link class="dropdown-item" to="/articlesone">articlesone</Link></li>
            <li><Link class="dropdown-item" to="/articlestwo">articlestwo</Link></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default NavBar;
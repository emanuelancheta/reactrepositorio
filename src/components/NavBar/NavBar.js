import React from 'react';
import adidas from '../../img/adidas.png';
import './NavBarStyle.css';
import CartWidget from '../CartWidget/CartWidget';


function NavBar  () {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		<div className="container-fluid">
		  <a className="navbar-brand" href="#">
			<img
			  className="logo horizontal-logo"
			  src={adidas}
			  alt="ADIDAS LOGO"
			/>
		  </a>
		  <button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		  >
			<span className="navbar-toggler-icon"></span>
		  </button>

		

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav ml-auto">
			  <li className="nav-item">
				<a className="nav-link" href="#">
				  Promociones con tarjetas
				</a>
			  </li>
			  <li className="nav-item dropdown">
				<a
				  className="nav-link dropdown-toggle"
				  href="#"
				  id="navbarDropdown1"
				  role="button"
				  data-toggle="dropdown"
				  aria-haspopup="true"
				  aria-expanded="false"
				>
				  Zapatillas
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown1">
				  <a className="dropdown-item" href="#">
					Masculino
				  </a>
				  <a className="dropdown-item" href="#">
					Femenino
				  </a>
				  <div className="dropdown-divider"></div>
				  <a className="dropdown-item" href="#">
					Genderless
				  </a>
				</div>
			  </li>
			  <li className="nav-item dropdown">
				<a
				  className="nav-link dropdown-toggle"
				  href="#"
				  id="navbarDropdown2"
				  role="button"
				  data-toggle="dropdown"
				  aria-haspopup="true"
				  aria-expanded="false"
				>
				  Remeras
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown2">
				  <a className="dropdown-item" href="#">
					Masculino
				  </a>
				  <a className="dropdown-item" href="#">
					Femenino
				  </a>
				  <div className="dropdown-divider"></div>
				  <a className="dropdown-item" href="#">
					Genderless
				  </a>
				</div>
			  </li>
			  <li className="nav-item dropdown">
				<a
				  className="nav-link dropdown-toggle"
				  href="#"
				  id="navbarDropdown2"
				  role="button"
				  data-toggle="dropdown"
				  aria-haspopup="true"
				  aria-expanded="false"
				>
				  Pantalones
				</a>
				<div className="dropdown-menu" aria-labelledby="navbarDropdown2">
				  <a className="dropdown-item" href="#">
					Masculino
				  </a>
				  <a className="dropdown-item" href="#">
					Femenino
				  </a>
				  <div className="dropdown-divider"></div>
				  <a className="dropdown-item" href="#">
					Genderless
				  </a>
				</div>
			  </li>
			  <CartWidget/>
			</ul>
		  </div>
		</div>
	  </nav>
	)
}




NavBar();
export default NavBar; 

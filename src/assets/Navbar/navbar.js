import './navbar.css';
import { useRef } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("show_menu");
    }
    return (
		//Add Icons to each individual anchor
        <header className="header1">
			<nav className="nav container" >
				<a href="#home" className="logo">Learn2Program</a>
				<div className='nav_menu' ref={navRef}>
					<ul className='nav_list grid'>
						<Link to="/">Home</Link>
						<Link to="/sandbox">Sandbox</Link>
						<Link to="/documentation">Docs</Link>
						<Link to="/quiz">Quiz</Link>
					</ul>	

					<i onClick={showNavbar} className="fa-solid fa-xmark nav_close"></i>
				</div>
				<i onClick={showNavbar} className="fa-solid fa-bars nav_toggle"></i>
			</nav>
		</header>   
    )
}

export default Navbar;
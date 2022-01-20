import React,{useState} from 'react';
import logo from '../images/logo.png';



const Navbar = () => {

    const [nav,setnav] = useState(false);
    const changeBackground =()=>{
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='#' className='logo'>
                <img src={logo} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><a href="main" smooth={true} duration={2000}>Home</a></li>
                <li><a href="features" smooth={true} duration={2000}>Features</a></li>
                <li><a href="about" smooth={true} duration={2000}>About</a></li>
                <li><a href="presentaion" smooth={true} duration={2000}>UI SS</a></li>
                <li><a href="contact" smooth={true} duration={2000}>Download</a></li>

            </ul>
        </nav>
    )
}

export default Navbar

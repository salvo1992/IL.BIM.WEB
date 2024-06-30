import React, { useState, useEffect } from "react";
import useSession from "../hooks/useSession";
import styles from "../layouts/MainLayout.module.css"
import { Link } from "react-router-dom";
import "./NavigationBar.scss"; // Assicura di avere il percorso corretto

const NavigationBar = () => {
    const [isAddNewPostModalOpen, setIsAddNewPostModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const session = useSession();
  
    const toggleAddNewPostModal = () =>
      setIsAddNewPostModalOpen(!isAddNewPostModalOpen);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    
    useEffect(() => {
      const handleScroll = () => {
        const navbar = document.getElementById("main-navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("transparent");
        } else {
          navbar.classList.remove("transparent");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <>
        <nav className="navbar bg-body-tertiary" id="main-navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="/assets/il bim.png"
                alt="Logo CamelNetwork"
                width="70" // Dimensione ridotta per l'immagine
                height="70" // Dimensione ridotta per l'immagine
                className="d-inline-block align-text-top rounded-circle"
              />
              
              <span className="camel-text">BIM Network</span>
            </Link>

               <li className="nav-item">
                <Link className="nav-link" to="/contatti">Contattaci</Link>
              </li>

             

              <li className="nav-item">
                <Link className="navbar-User" to="/UserProfile">
                  <img
                      src={session && session.user ? session.user.profilePic : '/assets/il bim.png'}
                      alt="User Profile"
                      width="70"
                      height="70"
                      className="d-inline-block align-text-top rounded-circle"
                  />
                  {session && session.user ? session.user.name : ''}
                </Link>
              </li>
             </div> 
             <div>
              <div className="dropdown-menu-button">
            <button onClick={toggleMenu} className="dropdown-toggle">
                Menu
            </button><ul className={`d-flex align-items-center list-unstyled gap-3 ${isMenuOpen ? 'dropdown-visible' : ''}`}>
            {isMenuOpen && (
                <div className="dropdown-menu-button">
                    <button className="dropdown-item"><Link className="nav-link" to="/contatti">Contattaci</Link></button>
                    <button className="dropdown-item"><Link className="nav-link" to="/UserProfile">UserProfile</Link></button>
                </div>
            )}
            </ul>
          </div>
             </div>
          
        </nav>
        
     
      </>
    );
  };
  
  export default NavigationBar;

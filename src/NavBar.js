
import "./Navbar.css";
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {
  let user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (<>
 
 <header className="header">
      <div className="header__content">
        <Link to="/" className="header__content__logo">
          Navbar
        </Link>
        <nav
          className={`${
            menuOpen && size.width < 768 ? "header__content__nav isMenu" : "header__content__nav"
          }`}
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">Products</Link>
            </li>
            <li>
              <Link to="/SmallBasket">SmallBasket</Link>
            </li>
            <li>
              <Link to="/">Premium</Link>
            </li>
            <li>
              <Link to="/Basket">Basket</Link>
            </li>

            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
            <Link to="/login">
              <button className="btn btn__login">Login</button>
            </Link>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
    </>
  );
};

export default NavBar;
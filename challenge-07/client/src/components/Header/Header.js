import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../actions/auth";
import EventBus from "./common/EventBus";
import logo from "./assets/logo.png";

const Header = () => {

    // const { user: currentUser } = useSelector((state) => state.auth);
    // const dispatch = useDispatch();

    // const logOut = useCallback(() => {
    //   dispatch(logout());
    // }, [dispatch]);

    // EventBus.on("logout", () => {
    //     logOut();
    //   });
  
    //   return () => {
    //     EventBus.remove("logout");
    //   };
    // }, [currentUser, logOut]);
  
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              <img src={logo} alt="logo" />
            </Link>
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
              {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              //# 1. First Attenttion - false result from currentUser null or not
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
  
                 {/* 1. link navbar sign up/ register */}
  
                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    <div className="btn btn-success">
                      Register
                    </div>
                  </Link>
                </li>
              </div>
            )}
            </div>
      </nav>      
    )
}

export default Header;
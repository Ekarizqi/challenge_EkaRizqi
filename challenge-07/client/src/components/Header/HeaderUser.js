import React from "react";
import { useDispatch } from "react-redux";

const HeaderUser = () => {

    const { user: currentUser } = useSelector((state) => state.auth);
    const logOut = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);
  
    return (
      <div>
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
              <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
              </li>
            </div>  
          </nav>
        </div>      
  
    )
  }
  export default HeaderUser;
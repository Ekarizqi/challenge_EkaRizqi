import React from 'react';

function navbarUser(props) {
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
{/* 
                    {showModeratorBoard && (
                    <li className="nav-item">
                        <Link to={"/mod"} className="nav-link">
                        Moderator Board
                        </Link>
                    </li>
                    )}

                    {showAdminBoard && (
                    <li className="nav-item">
                        <Link to={"/admin"} className="nav-link">
                        Admin Board
                        </Link>
                    </li>
                    )} */}

                    {currentUser && (
                    <li className="nav-item">
                        <Link to={"/user"} className="nav-link">
                        User
                        </Link>
                    </li>
                    )}

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
        </div>
    );
}

export default navbarUser;
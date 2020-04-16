import React from 'react'
import {Link} from 'react-router-dom'

function Menu ({ children }){

    return(
        <div>
            <nav className='navbar navbar-inverse'>
                <div className="container">
                    <div className="navbar-header">
                        <Link to={'/'} className="navbar-brand">
                            Product CRUD
                        </Link>
                        <button data-toggle="collapse" data-target="#myMenu" className="navbar-toggle">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>

                        </button>
                    </div>

                    <div className="navbar-collapse collapse" id="myMenu">
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to={'/product'}>Products</Link>
                            </li>
                            <li>
                            <Link to={'/create'}>Create</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link to={'/login'}>Login</Link>
                            </li>

                        </ul>
                    </div>
                    
                </div>

            </nav>

    <div className="container">{children}</div>
        </div>
    )

}


export default Menu
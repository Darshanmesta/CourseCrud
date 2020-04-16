import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Pnf extends Component{
    render(){
        return(
            <div className="container">

                <div className='row'>

                    <div className="col-sm-12 col-md-12 jumbotron text-center">
                        <h1 className="text-center">404 Error</h1>
                        <h3 className="text-center">Sorry Page Not Found</h3>
                        <Link to= {"/"} className="btn btn-md btn-danger">Return to Home Page</Link>
                        <Link></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pnf;
import React  from 'react';

import './App.css';
import {Router, Switch, Route} from 'react-router-dom'
import Menu from './route/Menu'
import createBrowserHistory from 'history/createBrowserHistory'


import Product from './components/Product'
import Edit from './components/Edit'
import Create from './components/Create'
import Pnf from './components/Pnf'

const App=()=>{
    return(
        <Router history={createBrowserHistory()}>
            <Switch>
                 <Route exact path="/" render={()=> <Menu><Product/></Menu>}/>
                <Route exact path="/product" render={()=> <Menu><Product/></Menu>}/>
                <Route exact path="/create" render={()=> <Menu><Create/></Menu>}/>
                <Route exact path="/edit:id" render={()=> <Menu><Edit/></Menu>}/>
                <Route exact path="**" render={()=> <Menu><Pnf/></Menu>}/>
             </Switch>
        </Router>
         


       
    )
}
export default App;

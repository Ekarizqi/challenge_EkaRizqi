import { 
    BrowserRouter as Router, 
    Switch,
    Route
  } from 'react-router-dom';

import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail"

import React from 'react';

function index(props) {
    return (
        <div>
            <Router>
                {/* <Header/> */}
                <Switch>
                    {/* <Route path='/' element={<Home />} /> */}
                    <Route path='/product' component={ProductListing} />
                    <Route path='/product/product/:productId' component={ProductDetail} />
                    <Route>404 Not Found!</Route>
                </Switch>
                {/* <Footer/> */}
            </Router>
        </div>
    );
}

export default index;
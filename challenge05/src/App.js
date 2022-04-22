import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Header from "./containers/Header"
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail"
import Footer from "./containers/Footer" ;
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className='App'>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<ProductListing />} />
            <Route path='/product/:productId' element={<ProductDetail/>} />
            <Route>404 Not Found!</Route>
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}




export default App;

import React, {useEffect, useState} from 'react';
import ListCari from './ListCari';
import Cari from './Cari';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detail from './Detail';

export default function CarComponent(props){
//   const [id, setId] = useState(1);

  const [cars, setCars] = useState([])

  const getCar = async () => {
    try {
      const response = await  axios.get(`https://rent-cars-api.herokuapp.com/customer/car`);
      const data = await response.data;
      setCars(data);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() =>{
    getCar();
  }, [])

 console.log(cars)

  return (
      <div>
          <BrowserRouter>
          <Routes>

           <Route path='/' 
            element={<Cari/>}/>  
          <Route path='/ListCari' element={<ListCari data={cars}/>}/>
          <Route path='/Detail' element={<Detail/>}/>
          </Routes>
          </BrowserRouter>
            {/* <Cari/>
            <ListCari data={cars}/>
            <Detail/> */}
          
      </div>
  )
}
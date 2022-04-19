import React, {useEffect, useState} from 'react';
import ListCari from './ListCari';
import Cari from './Cari';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detail from './Detail';

export default function CarComponent(props){
//   const [id, setId] = useState(1);

  const [cars, setCars] = useState([])

  const getCars = async () => {
    try {
      const response = await  axios.get(`https://rent-cars-api.herokuapp.com/customer/car`);
      const data = await response.data;
      setCars(data);
    } catch(e){
      console.log(e.message);
    }
  }

  useEffect(() =>{
    getCars();
  }, [])

 console.log(cars)
  
 const [filtered, setFiltered] = useState([]);
//  const [status, setStatus] = useState("");

 useEffect(() => {
   async function getFiltered() {
     const request = await axios.get (`https://rent-cars-api.herokuapp.com/customer/car`);
     const response = await request;
     setFiltered(response.data)
   }
   getFiltered();
 }, [])

  const handleSearch = (event) =>{
    let car = event.target.filtered.toLowerCase();
    let result = [];
    console.log(car);

    result= filtered.filter((data) =>{
      return data.status(filtered) === car.status
    });
    setFiltered(result);
  }


  return (
      <div>
          <BrowserRouter>
          <Routes>

           <Route path='/' 
            element={<Cari/>}/>  
          <Route path='/ListCari' element={<ListCari handleSearch={handleSearch} data={cars}/>}/>
          <Route path='/ListCari/:DetailId' element={<Detail/>}/>
          <Route
            path="*"
            element={
              <index style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </index>
            }
          />
          </Routes>
          </BrowserRouter>
            {/* <Cari/>
            <ListCari data={cars}/>
            <Detail/> */}
          
      </div>
  )
}
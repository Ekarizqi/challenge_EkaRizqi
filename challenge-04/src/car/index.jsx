import React, {useEffect, useState} from 'react';
import ListCari from './ListCari';
import Cari from './Cari';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detail from './Detail';

export default function CarComponent(props){
//   const [id, setId] = useState(1);

  const [cars, setCars] = useState([])

  const [filter, setFilter] = useState(cars);
  const handleSearch = (event) =>{
    let car = event.target.cars.toLowerCase();
    let result = [];
    console.log(car);

    result= cars.filter((data) =>{
      return data.status(cars) === car.status
    });
    setFilter(result);
  }

  const getFilterData = async () => {
    try {
      const response = await  axios.get(`https://rent-cars-api.herokuapp.com/customer/car`);
      const data = await response.data;
      setFilter(data);
    } catch(e){
      console.log(e.message);
    }
  }
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
    getFilterData();
  }, [])

 console.log(cars)
  
 const getDetail = async (id) => {
   await axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${id}`);
   const DetailId = cars.filter((item) => item.id === id);
   setCars(DetailId);
 };

 useEffect(() =>{
   getDetail();
 })
 

  return (
      <div>
          <BrowserRouter>
          <Routes>

           <Route path='/' 
            element={<Cari/>}/>  
          <Route path='ListCari' element={<ListCari handleSearch={handleSearch} data={cars}/>}/>
          <Route path=':DetailId' element={<Detail detail={getDetail}/>}/>
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
import React, { useContext, useEffect, useState } from "react"
import { apiUrl } from "../utils"
import carData from "./carData.json" // Mock data, not from API
import carImage1 from '../assets/car-photos-thumbnails/thumbnail-1.jpg'
import carImage2 from '../assets/car-photos-thumbnails/thumbnail-2.jpg'
import carImage3 from '../assets/car-photos-thumbnails/thumbnail-3.jpg'
import carImage4 from '../assets/car-photos-thumbnails/thumbnail-4.jpg'
import carImage5 from '../assets/car-photos-thumbnails/thumbnail-5.png'
import carImage6 from '../assets/car-photos-thumbnails/thumbnail-6.jpg'
import carImage7 from '../assets/car-photos-thumbnails/thumbnail-7.jpg'
import carImage8 from '../assets/car-photos-thumbnails/thumbnail-8.jpg'
import carImage9 from '../assets/car-photos-thumbnails/thumbnail-9.jpg'
import carImage10 from '../assets/car-photos-thumbnails/thumbnail-10.jpg'

const CarsContext = React.createContext()

const carThumbnails = [carImage1, carImage2, carImage3, carImage4, carImage5, carImage6, carImage7, carImage8, carImage9, carImage10,]

export function getCarThumbnail(number1to10) {
  return carThumbnails[number1to10]
}

export function useCars() {
  return useContext(CarsContext)
}

export const CarsProvider = ({ children }) => {
  const [cars, setCars] = useState([]) // Mock data - const [cars, setCars] = useState(carData)

  useEffect(() => {
    fetch(`${apiUrl}/car`)
      .then(res => res.json())
      .then(data => {
        setCars(data)
        console.log(data)
      })
  }, [])

  function getCar(id) {
    return cars.find(car => car.id === id)
  }

  function addCar(id) {
  }

  function deleteCar({ id }) {
  }

  return <CarsContext.Provider value={{
    cars,
    getCar,
    getCarThumbnail,
  }} >
    {children}
  </CarsContext.Provider>
}
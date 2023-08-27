import { useCars } from "./contexts/CarsContext";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import SearchBar from "./components/SearchBar";
import CarCard from "./components/CarCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ViewCarModal from "./components/ViewCarModal";
import SearchCard from "./components/SearchCard";
import Nav from "./components/Nav"
import Image from 'react-bootstrap/Image';

import carBannerImage1 from './assets/car-photos-banners/360_F_294688686_eBbqaZUVeRr8BoCDuhxsWl4fjwV51FcV.jpg'


function App() {
  const { cars } = useCars();

  const [showViewCarModal, setShowViewCarModal] = useState(false);
  const [viewCarModalCarId, setViewCarModalCarId] = useState(null);
  function handleViewCarClick(carId) {
    setViewCarModalCarId(carId);
    setShowViewCarModal(true);
  }

  function CarResultsList() {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 1fr)',
          gap: '1rem',
          alignItems: 'flex-start'
        }}
      >
        {cars.map(car => {
          return (
            <CarCard
              key={car.id}
              carId={car.id}
              onViewCarClick={() => { handleViewCarClick(car.id) }}
            />
          )
        })}
      </div>
    )
  }

  function SearchPage() {
    return (
      <>
        <Container className="my-4">
          <Stack direction='horizontal' gap='5' className='mb-5 justify-content-between align-items-end'>
            <h1 className='my-0'>Car Rentals</h1>
            <SearchBar className='searchbar' />
          </Stack>
          {cars.length ? (<CarResultsList />) : (<LoadingSpinner />)}
        </Container>
        <ViewCarModal
          show={showViewCarModal}
          carId={viewCarModalCarId}
          handleClose={() => { setShowViewCarModal(false) }}
        />
      </>
    )
  }

  return (<>
    <Nav />
    <Container className="my-5">
      <SearchCard />
      <div className="d-flex justify-content-center">
        <Image src={carBannerImage1} className="w-100 px-5" />
      </div>
    </Container>
  </>);
}

export default App;

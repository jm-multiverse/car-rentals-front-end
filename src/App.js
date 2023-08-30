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

import banner3 from './assets/car-photos-banners/banner-promo-2.jpg'

function App() {
  const { cars } = useCars();

  const [showViewCarModal, setShowViewCarModal] = useState(false);
  const [viewCarModalCarId, setViewCarModalCarId] = useState(null);
  function handleViewCarClick(carId) {
    setViewCarModalCarId(carId);
    setShowViewCarModal(true);
  }

  function CarResultsList() {
    return (<>
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
    </>
    )
  }

  return (<>
    <Nav />
    <Container className="my-5">
      <SearchCard />
      <div className="d-flex justify-content-center mb-5 banner">
        <Image src={banner3} />
      </div>
      <h5 className="mb-4">Browse Rentals</h5>
      <SearchBar />
      <CarResultsList />
    </Container>
  </>);
}

export default App;

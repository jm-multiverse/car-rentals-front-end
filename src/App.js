import { useCars } from "./contexts/CarsContext";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import SearchBar from "./components/SearchBar";
import CarCard from "./components/CarCard";
import LoadingSpinner from "./components/LoadingSpinner";
import ViewCarModal from "./components/ViewCarModal";

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
          const randomImageNumber = Math.floor(Math.random() * 10) + 1;
          return (
            <CarCard
              key={car.id}
              carId={car.id}
              onViewCarClick={() => { handleViewCarClick(car.id) }}
              randomImageNumber={randomImageNumber}
            />
          )
        })}
      </div>
    )
  }

  return (<>
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
  </>);
}

export default App;

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { currencyFormatter } from '../utils'
import { useCars } from '../contexts/CarsContext'

export default function CarCard({
  carId,
  onViewCarClick,
}) {
  const { getCar, getCarThumbnail } = useCars()
  const { make, model, manufacturingYear, color, capacity, transmission, fuelType, carType, pricePerDay, imageUrl } = getCar(carId)


  return (
    <Card className='car-card' onClick={onViewCarClick}>
      <div className='d-flex align-items-center justify-content-center'>
        <div className="car-thumbnail-container">
          <img src={getCarThumbnail((carId % 10))} alt={`${make} ${model}`}
            className='w-100 h-100 object-fit-contain px-4'
          />
        </div>
        <div className='flex-grow-1 d-flex flex-column p-4'>
          <div className='d-flex justify-content-between'>
            <h3 className='fw-normal'>{make} {model}</h3>
            <div>
              <h5 className='fw-normal mb-0'>{currencyFormatter.format(pricePerDay)}</h5>
              <div className='text-muted'>per day</div>
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <div>
              <div>
                <span className='text-muted'>
                  Type:&nbsp;
                </span>
                {carType}
              </div>
              <div>
                <span className='text-muted'>
                  Year:&nbsp;
                </span>
                {manufacturingYear}
              </div>
              <div>
                <span className='text-muted'>
                  Capacity:&nbsp;
                </span>
                {capacity}
              </div>
              <div>
                <span className='text-muted'>
                  Transmission:&nbsp;
                </span>
                {transmission}
              </div>
              <div>
                <span className='text-muted'>
                  Fuel:&nbsp;
                </span>
                {fuelType}
              </div>
            </div>
            <div className='action-buttons-container d-flex gap-2 justify-content-end mt-auto'>
              <Button variant='primary' className='mt-auto reserve-button'>Reserve</Button>
              <Button variant='outline-secondary' className='mt-auto'>Save</Button>
            </div>
          </div>
        </div>

      </div>
    </Card>
  )
}

// <div className='d-flex justify-content-between py-4'>
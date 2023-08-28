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
    <Card className='p-4 car-card ' onClick={onViewCarClick}>
      <div className='d-flex'>
        <div className="car-thumbnail-container me-5">
          <img src={getCarThumbnail((carId % 10))} alt={`${make} ${model}`}
            className='w-100 h-100 object-fit-contain'
          />
        </div>
        <div className=''>
          <h3 className='fw-normal'>{make} {model}</h3>
          <h5 className='fw-normal mb-1'>{carType}</h5>
          <div className=''>Seats: {capacity}</div>
          <div className=''>Color: {color}</div>
          <div className=''>Year: {manufacturingYear}</div>
          <div className=''>{transmission}</div>
          <div className=''>{fuelType}</div>
        </div>
        <div className="d-flex flex-column flex-grow-1 justify-content-between">
          <div className='text-end no-wrap ms-auto mt-1'>
            <h5 className='fw-normal mb-0'>{currencyFormatter.format(pricePerDay)}</h5>
            <div className='text-muted'>per day</div>
          </div>
          <div className='action-buttons-container d-flex gap-2 justify-content-end'>
            <Button variant='primary' className='mt-auto reserve-button'>Reserve</Button>
            <Button variant='outline-secondary' className='mt-auto'>Save</Button>
          </div>
        </div>

      </div>
    </Card>
  )
}

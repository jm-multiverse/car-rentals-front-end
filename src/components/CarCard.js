import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { currencyFormatter } from '../utils'
import { useCars } from '../contexts/CarsContext'
import { Row, Col } from 'react-bootstrap';

export default function CarCard({
  carId,
  onViewCarClick,
}) {
  const { getCar, getCarThumbnail } = useCars()
  const { make, model, manufacturingYear, color, capacity, transmission, fuelType, carType, pricePerDay, imageUrl } = getCar(carId)


  return (
    <Card className='car-card' onClick={onViewCarClick} >
      <Row className='d-flex'>
        <Col md={4} className='d-flex' >
          <img
            className='car-thumbnail p-2'
            src={getCarThumbnail((carId % 10))} alt={`${make} ${model}`}
          />
        </Col>
        <Col md={8}>
          <div className='flex-grow-1 d-flex flex-column p-4'>
            <div className='d-flex justify-content-between'>
              <h4 className='fw-normal'>{make} {model}</h4>
              <div>
                <h5 className='fw-normal mb-0'>{currencyFormatter.format(pricePerDay)}</h5>
                <div className='text-muted'>per day</div>
              </div>
            </div>

            <Row className='d-flex justify-content-between'>
              <Col>
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
              </Col>
              <Col className='action-buttons-container d-flex gap-2 justify-content-end mt-auto pt-2'>
                <Button variant='secondary' className='mt-auto reserve-button'>Reserve</Button>
                <Button variant='light' className='mt-auto'>Save</Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Card >
  )
}

// <div className='d-flex justify-content-between py-4'>
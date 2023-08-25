import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import { currencyFormatter } from '../utils'
import { useCars } from '../contexts/CarsContext'

export default function ViewCarModal({ show, carId, handleClose }) {
  const { getCar } = useCars()
  const car = getCar(carId)

  return (<>
    {carId &&
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div>{car.name}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack direction="vertical" gap="3">
            <div>{car.description}</div>
            <div className="d-flex justify-content-between align-items-baseline">
              <div className="fw-bold">Price</div>
              <div className="d-flex align-items-baseline">
                {currencyFormatter.format(car.price)}
              </div>
            </div>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    }
  </>)
}

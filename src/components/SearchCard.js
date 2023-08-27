import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function SearchCard() {
  const today = new Date()
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  function formatDateToYYYYMMDD(date) {
    return date.toISOString().split('T')[0];
  }

  const roundUpToNextHour = (date) => {
    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
  };

  const getRoundedUpTime = (date) => {
    roundUpToNextHour(date)
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime
  }

  const handlePickUpDateSelection = () => {
    // If the new selection of a pick up date makes the drop off date occur before the new pick up date, then lets handle that so the drop off date is equal to the pick up date.  

  }


  const [pickUpDate, setPickUpDate] = useState(formatDateToYYYYMMDD(today));
  const [pickUpTime, setPickUpTime] = useState(getRoundedUpTime(today));

  const [dropOffDate, setDropOffDate] = useState(formatDateToYYYYMMDD(tomorrow));
  const [dropOffTime, setDropOffTime] = useState(getRoundedUpTime(tomorrow));

  return (
    <>
      <Form className="w-75 m-auto p-2">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="pick-up-location">
            <FloatingLabel
              controlId="pick-up-location"
              label="Pick Up Location"
              className="mb-3"
            >
              <Form.Control placeholder="" />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="drop-off-location">
            <FloatingLabel
              controlId="drop-off-location"
              label="Drop Off Location"
              className="mb-3"
            >
              <Form.Control placeholder="" />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="pick-up-date">
            <FloatingLabel
              controlId="pick-up-date"
              label="Pick Up Date"
              className="mb-3"
            >
              <Form.Control
                type="date"
                value={pickUpDate}
                onChange={(e) => setPickUpDate(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="drop-off-date">
            <FloatingLabel
              controlId="drop-off-date"
              label="Drop Off Date"
              className="mb-3"
            >
              <Form.Control
                type="date"
                value={dropOffDate}
                onChange={(e) => setDropOffDate(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="pick-up-time">
            <FloatingLabel
              controlId="pick-up-time"
              label="Pick Up Time"
              className="mb-3"
            >
              <Form.Control
                type="time"
                value={pickUpTime}
                onChange={(e) => setPickUpTime(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} controlId="drop-off-time">
            <FloatingLabel
              controlId="drop-off-time"
              label="Drop Off Time"
              className="mb-3"
            >
              <Form.Control
                type="time"
                value={dropOffTime}
                onChange={(e) => setDropOffTime(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </>
  )
}

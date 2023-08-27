import Spinner from "react-bootstrap/Spinner"

function LoadingSpinner() {
    return (<div className="loading-spinner d-flex justify-content-center pt-3">
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>)
}

export default LoadingSpinner;
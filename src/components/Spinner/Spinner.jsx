import React from 'react'
// import Spinner from "reactstrap/Spinner"
import "./Spinner.css"

const Cargando = () => {
    return (
        <>
        <div class="d-flex justify-content-center" className="bodySpinner">
            {/* <Spinner animation="border" role="status" style= {{width: "3rem", height: "3rem", marginTop: "5rem"}}>
            </Spinner> */}
                <span className="visually-hidden">Loading...</span>

        </div>
        </>
)
}

export default Cargando


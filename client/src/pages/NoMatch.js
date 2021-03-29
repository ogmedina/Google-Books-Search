import React from "react";
import Jumbotron from "../components/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';


const NoMatch = () => {
    return(
        <>
        <Jumbotron>
            <h1>404 Error!</h1>
            <h6>No Books or Signs of Life here</h6>
            <br />
            <Link to ="/">
            <Button className="gohome" variant="danger">Go Home</Button>
            </Link>
        </Jumbotron>
        </>
    )
}

export default NoMatch;
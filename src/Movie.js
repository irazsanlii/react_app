import React, { useState } from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Movie = (props) => {

    const [choice, setChoice] = useState("");

    const handleChoiceChanges = (e) => {
        setChoice(e.target.value)
    }

    const reset = () => setChoice("");

    const chooseMovieFunction = (e) => {
        e.preventDefault();
        props.choose(choice);
        reset();
    }

    return (
            <Col sm="4" style={{'display':'inline-block'}}>
                <Card
                    value={props.movie.imdbID}
                    onChange={handleChoiceChanges}
                >
                    <img
                        onClick={chooseMovieFunction}
                        width="100%"
                        src={props.movie.Poster}
                        alt={props.movie.Title} ></img>
                    <CardBody className="text-center">
                        <CardTitle className="font-weight-bold mb-4">{props.movie.Title}</CardTitle>
                        <hr />
                        <p className="dark-grey-text mt-4"></p>
                        <CardText >{props.movie.Year}</CardText>
                    </CardBody>
                </Card>
            </Col>
    )
}

export default Movie;
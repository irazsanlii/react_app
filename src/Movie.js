import React, { useState } from 'react';
import { Col, Row, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Redirect } from 'react-router-dom';


const Movie = (props) => {

    const [redirect, setRedirect] = useState(false);

    const check = () => setRedirect(!redirect);

    const renderRedirect = () => {
        if (redirect) {
            return <Redirect to="/MovieDetail.js" />
        }
    }

    return (
        <Row>
            <Col sm="4">
                <Card
                    // value={props.movies.Title}
                    onChange={check}
                >
                    <img
                        onClick={renderRedirect}
                        // {loading && !errorMessage ? (
                        //     <span>loading... </span>
                        // ) : errorMessage ? (
                        //     <div className="errorMessage">{errorMessage}</div>
                        // ) : (
                        //             <MovieDetail key={`${movie.Title}`} details={details} select={select}/>
                        //         )}
                        width="75%"
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
        </Row>
    )
}

export default Movie;
import React, { useState } from 'react';
import { Col, Card, CardBody, CardTitle, CardText, CardImg, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const defaultPoster =
    "https://i.pinimg.com/originals/0c/cd/6a/0ccd6a5e74067bab2d43b4c3e7501fd1.jpg";

const Movie = (props) => {
    const [choice, setChoice] = useState(props.movie.imdbID);

    const handleChanges = (e) => {
        setChoice(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(choice);
        props.getDetail(choice);
    }

    return (
        <Col sm="4" style={{ 'display': 'inline-block' }}>
            <Card
                value={choice}
                onChange={handleChanges}
                onClick={handleClick}>
                <CardImg
                    width="100%"
                    src={props.movie.Poster === "N/A" ? defaultPoster : props.movie.Poster}
                    alt={props.movie.Title} />
                <Link to="/details">
                    <CardBody className="text-center">
                        <CardTitle className="font-weight-bold mb-4">{props.movie.Title}</CardTitle>
                        <hr />
                        <p className="dark-grey-text mt-4"></p>
                        <CardText >{props.movie.Year}</CardText>
                        {/* {renderRedirect()}
                        <button onClick={goTo}>movieDetail</button> */}
                    </CardBody>
                </Link>
            </Card>
            <br />
        </Col>
    )
}

export default Movie;

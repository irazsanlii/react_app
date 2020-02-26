import React
, { useState }
    from 'react';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
const Movie = (props) => {

    const [choice, setChoice] = useState(props.movie.imdbID);

    const handleChanges = (e) => {
        setChoice(e.target.value);
    }

    //   const reset = () => setChoice("");

    const handleClick = (e) => {
        e.preventDefault();
        console.log(choice);
        props.getDetail(choice);
        //      reset();
    }

    return (
        <Col sm="4" style={{ 'display': 'inline-block' }}>
            <Card
                // value={choice}
                onChange={handleChanges}
            >
                <img
                    onClick={handleClick}
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

import React
    // , { useEffect }
    from 'react';
import { Container, Col, Table, Media, Card, Row } from 'reactstrap';

const MovieDetail = (props) => {

    //     useEffect(() => {
    //         props.getDetail();
    //     });

    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>
                    <Media
                        src={props.getMovie.Poster}
                        alt={props.getMovie.Title} />
                </Col>
                <Col xs={6} md={8}>
                    <Table>
                        <tbody>
                            <tr key={props.getMovie.Title}>
                                <td>Title</td>
                                <td>{props.getMovie.Title}</td>
                            </tr>
                            <tr key={props.getMovie.Year}>
                                <td>Year</td>
                                <td>{props.getMovie.Year}</td>
                            </tr>
                            <tr key={props.getMovie.Released}>
                                <td>Released</td>
                                <td>{props.getMovie.Released}</td>
                            </tr>
                            <tr key={props.getMovie.Runtime}>
                                <td>Runtime</td>
                                <td>{props.getMovie.Runtime}</td>
                            </tr>
                            <tr key={props.getMovie.Genre}>
                                <td>Genre</td>
                                <td>{props.getMovie.Genre}</td>
                            </tr>
                            <tr key={props.getMovie.Director}>
                                <td>Director</td>
                                <td>{props.getMovie.Director}</td>
                            </tr>
                            <tr key={props.getMovie.Writer}>
                                <td>Writer</td>
                                <td>{props.getMovie.Writer}</td>
                            </tr>
                            <tr key={props.getMovie.Actors}>
                                <td>Actors</td>
                                <td>{props.getMovie.Actors}</td>
                            </tr>
                            <tr key={props.getMovie.Plot}>
                                <td>Plot</td>
                                <td>{props.getMovie.Plot}</td>
                            </tr>
                            <tr key={props.getMovie.Language}>
                                <td>Language</td>
                                <td>{props.getMovie.Language}</td>
                            </tr>
                            <tr key={props.getMovie.Country}>
                                <td>Country</td>
                                <td>{props.getMovie.Country}</td>
                            </tr>
                            <tr key={props.getMovie.Awards}>
                                <td>Awards</td>
                                <td>{props.getMovie.Awards}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col >
            </Row>
        </Container>
    )
}

export default MovieDetail;


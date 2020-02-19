import React from 'react';
import { Container, Col, Media, Table } from 'reactstrap';

const MovieDetail = ({ details }) => {

    return (
        <div>

            <Container>
                <Col>
                    <Media object data-src={details.Poster} alt="Card image cap" />
                </Col>
                <Col>
                    <Table>
                        <tbody>
                            <tr key={details.Title}>
                                <td>Title</td>
                                <td>{details.Title}</td>
                            </tr>
                            <tr key={details.Year}>
                                <td>Year</td>
                                <td>{details.Year}</td>
                            </tr>
                            <tr key={details.Released}>
                                <td>Released</td>
                                <td>{details.Released}</td>
                            </tr>
                            <tr key={details.Runtime}>
                                <td>Runtime</td>
                                <td>{details.Runtime}</td>
                            </tr>
                            <tr key={details.Genre}>
                                <td>Genre</td>
                                <td>{details.Genre}</td>
                            </tr>
                            <tr key={details.Director}>
                                <td>Director</td>
                                <td>{details.Director}</td>
                            </tr>
                            <tr key={details.Writer}>
                                <td>Writer</td>
                                <td>{details.Writer}</td>
                            </tr>
                            <tr key={details.Actors}>
                                <td>Actors</td>
                                <td>{details.Actors}</td>
                            </tr>
                            <tr key={details.Plot}>
                                <td>Plot</td>
                                <td>{details.Plot}</td>
                            </tr>
                            <tr key={details.Language}>
                                <td>Language</td>
                                <td>{details.Language}</td>
                            </tr>
                            <tr key={details.Country}>
                                <td>Country</td>
                                <td>{details.Country}</td>
                            </tr>
                            <tr key={details.Awards}>
                                <td>Awards</td>
                                <td>{details.Awards}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Container>
            )}
        </div>
    )
}

export default MovieDetail;
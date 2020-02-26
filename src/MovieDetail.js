import React, { Component } from 'react';
import { Container, Col, Media, Table } from 'reactstrap';



class MovieDetail extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Col>
                        <Media object data-src={this.props.getMovie.Poster} alt="Card image cap" />
                    </Col>
                    <Col>
                        <Table>
                            <tbody>
                                <tr key={this.props.getMovie.Title}>
                                    <td>Title</td>
                                    <td>{this.props.getMovie.Title}</td>
                                </tr>
                                <tr key={this.props.getMovie.Year}>
                                    <td>Year</td>
                                    <td>{this.props.getMovie.Year}</td>
                                </tr>
                                <tr key={this.props.getMovie.Released}>
                                    <td>Released</td>
                                    <td>{this.props.getMovie.Released}</td>
                                </tr>
                                <tr key={this.props.getMovie.Runtime}>
                                    <td>Runtime</td>
                                    <td>{this.props.getMovie.Runtime}</td>
                                </tr>
                                <tr key={this.props.getMovie.Genre}>
                                    <td>Genre</td>
                                    <td>{this.props.getMovie.Genre}</td>
                                </tr>
                                <tr key={this.props.getMovie.Director}>
                                    <td>Director</td>
                                    <td>{this.props.getMovie.Director}</td>
                                </tr>
                                <tr key={this.props.getMovie.Writer}>
                                    <td>Writer</td>
                                    <td>{this.props.getMovie.Writer}</td>
                                </tr>
                                <tr key={this.props.getMovie.Actors}>
                                    <td>Actors</td>
                                    <td>{this.props.getMovie.Actors}</td>
                                </tr>
                                <tr key={this.props.getMovie.Plot}>
                                    <td>Plot</td>
                                    <td>{this.props.getMovie.Plot}</td>
                                </tr>
                                <tr key={this.props.getMovie.Language}>
                                    <td>Language</td>
                                    <td>{this.props.getMovie.Language}</td>
                                </tr>
                                <tr key={this.props.getMovie.Country}>
                                    <td>Country</td>
                                    <td>{this.props.getMovie.Country}</td>
                                </tr>
                                <tr key={this.props.getMovie.Awards}>
                                    <td>Awards</td>
                                    <td>{this.props.getMovie.Awards}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Container>
                )}
        </div>
        )
    }
}
export default MovieDetail;
import React, { useReducer, useEffect, useState } from "react";
import { Container, Navbar, NavbarToggler, Collapse, NavbarBrand, Nav, NavItem, Form } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";
// import Paginate from "./Paginate";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "movieRequest":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "movieLoaded":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "failure":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => { // COMPONENT DID MOUNT

    fetch("http://omdbapi.com/?apikey=cc4daf76&s=green") // GET DATA
      .then(response => response.json())
      .then(jsonResponse => {

        dispatch({ // SEND
          type: "movieLoaded",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = (item) => {
    dispatch({
      type: "movieRequest"
    });

    fetch(`https://www.omdbapi.com/?s=${item}&apikey=cc4daf76`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "movieLoaded",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "failure",
            error: jsonResponse.Error
          });
        }
      })
  };

  // const [details, setDetails] = useState(null);
  // useEffect(() => {
  // By moving this function inside the effect, we can clearly see the values it uses.
  // const getDetail = (choice) => {
  //   fetch(`https://www.omdbapi.com/?i=${choice}&apikey=cc4daf76`)
  //     .then(response => response.json())
  //     .then(json => setDetails(json))
  // };
  //      getDetail();
  //    }, [details);  // Valid because our effect only uses details.
  // console.log(details);
  //  ...
  // } // End of the class.

  var getMovie = [];

  const getDetail = (choice) => {
    fetch(`https://www.omdbapi.com/?i=${choice}&apikey=cc4daf76`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {

          getMovie = jsonResponse
          console.log(getMovie)

        } else {
          dispatch({
            type: "failure",
            error: jsonResponse.Error
          });
        }
      })
  };

  const { movies, errorMessage, loading } = state;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container fluid>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">movieSearch</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav left className="ml-auto" navbar>
              <NavItem></NavItem>
            </Nav>
            <Nav right navbar>
              <NavItem>
                <Form inline>
                  <Search search={search} />
                </Form>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <Container>
        <div style={{ paddingTop: 50 }} >
          <Router>
            <Switch>
              <Route
                exact path="/"
                render={props => (
                  loading && !errorMessage ? (
                    <span>loading... </span>
                  ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                  ) : (
                        movies.map((movie, index) => (
                          <Movie {...props} key={`${index}-${movie.Title}`} getDetail={getDetail} movie={movie} />
                        ))
                      )
                )}
              />
              <Route
                path="/details"
                render={props => (
                  loading && !errorMessage ? (
                    <span>loading... </span>
                  ) : errorMessage ? (
                    <div className="errorMessage">{errorMessage}</div>
                  ) : (
                        <MovieDetail {...props} getMovie={getMovie} />
                      )
                )}
              // component={MovieDetail}
              />
            </Switch>
          </Router>
        </div>
      </Container>
      {/* <div style={{ paddingTop: 50 }} >
        <Paginate allMovies={movies} />
      </div> */}
    </Container>
  );
};

export default App;
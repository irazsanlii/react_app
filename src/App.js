import Movie from "./Movie";
import MovieDetail from "./MovieDetail";
import Search from "./Search";
import React, { useReducer, useEffect, useState } from "react";
import {
  Container,
  Navbar,
  NavbarToggler,
  Collapse,
  NavbarBrand,
  Nav,
  NavItem,
  Form,
} from "reactstrap";
import { Route, Switch } from "react-router-dom";


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

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => { // COMPONENT DID MOUNT

    fetch("http://omdbapi.com/?apikey=cc4daf76&s=sun")
      .then(response => response.json())
      .then(jsonResponse => {

        dispatch({
          type: "movieLoaded",
          payload: jsonResponse.Search
        });
      });
  }, []);

  const search = item => {
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
      });
  };

  // const select = selected => {
  //   dispatch({
  //     type: "detailRequest"
  //   });

  //   fetch(`https://www.omdbapi.com/?t=${selected}&apikey=cc4daf76`)
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       if (jsonResponse.Response === "True") {
  //         dispatch({
  //           type: "detailLoaded",
  //           payload: jsonResponse.MovieDetail
  //         });
  //       } else {
  //         dispatch({
  //           type: "failure",
  //           error: jsonResponse.Error
  //         });
  //       }
  //     });
  // };

  const { movies, errorMessage, loading } = state;

  return (
    <Container fluid>
      <div>
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
        <div style={{ paddingTop: 100 }} >
          <Search search={search} />
        </div>
        <div style={{ paddingTop: 50 }} >
          <Container >
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
                          <Movie {...props} key={`${index}-${movie.Title}`} movie={movie}
                          //  select={select} 
                          />
                        )))
                )}
              />
              <Route
                exact path="/details"
                render={props => (
                  <MovieDetail
                    {...props}
                  />
                )}
              />
            </Switch>





          </Container>
        </div>
      </div>
    </Container>
  );
};

export default App;
import React, { useReducer, useEffect } from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Movie from "./Movie";
import MovieDetail from "./MovieDetail";

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

    fetch("http://omdbapi.com/?apikey=cc4daf76&s=green") // Get
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({ // Send
          type: "movieLoaded",
          payload: jsonResponse.Search
        });
        console.log(jsonResponse.totalResults);
      });
  }, []);

  const search = (item, index) => {
    dispatch({
      type: "movieRequest"
    });

    if (item) {
      fetch(`https://www.omdbapi.com/?s=${item}&page=${index}&apikey=cc4daf76`)
        .then(response => response.json())
        .then(jsonResponse => {
          if (jsonResponse.Response === "True") {
            dispatch({
              type: "movieLoaded",
              payload: jsonResponse.Search
            });
            console.log(jsonResponse.totalResults);
          } else {
            dispatch({
              type: "failure",
              error: jsonResponse.Error
            });
          }
        });
    } else {
      dispatch({
        type: "failure",
        error: "Please enter a value."
      });
    }
  };

  let getMovie = [];

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

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">movieSearch</NavbarBrand>
      </Navbar>
      <div className="d-flex justify-content-center" style={{ paddingTop: 50 }} >
        <Search search={search} />
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
              />
            </Switch>
          </Router>
        </div>
      </Container>
    </div>
  );
};

export default App;
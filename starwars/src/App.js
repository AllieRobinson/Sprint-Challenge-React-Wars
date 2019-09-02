import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StarWarsCard from './components/StarWarsCard';
import styled from 'styled-components';

const AppDiv = styled.div`
width: 800px;
margin: 0 auto;
`

const StyledLink = styled.a`
font-family: monospace;
font-decoration: none;
font-size: 1.2rem;
margin: 0px 170px;
color: #443e3e;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsChars, setStarWarsChars] = useState([]);
  const [next, setNext] = useState([]);
  const [previous, setPrevious] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people")
    .then(response => {
      setStarWarsChars(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    })
  }, [])  

function getPrevious(e) {
    e.preventDefault();
    axios.get(previous)
    .then(response => {
      setStarWarsChars(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    })
}

function getNext(e) {
  e.preventDefault();
    axios.get(next)
    .then(response => {
      setStarWarsChars(response.data.results);
      setNext(response.data.next);
      setPrevious(response.data.previous);
    })
}
  
  return (
    <AppDiv className="App">
      <h1 className="Header">React Wars</h1>
      <StyledLink href="{previous}" onClick={getPrevious}>Previous</StyledLink> <StyledLink href="{next}" onClick={getNext}>Next</StyledLink><br />
      {starWarsChars.map(data => (
        <StarWarsCard name={data.name}
                      height={data.height}
                      birth_year={data.birth_year}
                      key={data.name} />
         ))}

    </AppDiv>
  );
}

export default App;

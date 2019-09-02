import React from 'react';
// import styled from 'styled-components';

function StarWarsCard(props) {
return (
    <div>
        <h3>{props.name}</h3> 
        <p>Height: {props.height}</p> 
        <p>Birth year: {props.birth_year}</p>
    </div>
        )};

export default StarWarsCard;
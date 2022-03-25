import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios'

const App = () => {

  const [ character, setCharacter ] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then((res) => {
        setCharacter(res.data.results);
        })
      .catch((err) => {
        console.error(err);
        })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {character.map(props => {
        return <Character name={props.name} birth_year={props.birth_year} key={"id" + props.name} />
      })}
    </div>
  );
}

export default App;
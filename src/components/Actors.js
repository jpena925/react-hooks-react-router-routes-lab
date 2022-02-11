import React from "react";
import { actors } from "../data";

function Actors() {

  const eachActor = actors.map(actor => (
  <div key={actor.name}>
    <h1>Name: {actor.name}</h1>
    <p>Movies:</p>
    <ul>{actor.movies.map(movie => <li key={movie}>{movie}</li>)}</ul>
  </div>))

  return (
  <div>
    <h1>Actors Page</h1>
    {eachActor}
  </div>);
}

export default Actors;

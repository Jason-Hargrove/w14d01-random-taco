import { useState } from "react";
import './App.css';

function App(props) {
  const [taco, updateTaco] = useState("Jason");
  const[query, updateQuery] = useState({
    searchURL: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
  });
  const handleChange = event => {
    updateQuery( ...query, ...{ [event.target.id]: event.target.value});
  };
  const handleSubmit = event => {
    event.preventDefault();
    updateQuery({
      ...query,
    }, );
  };

    return (
    <div className="page-wrapper">
      <h2>Hypatia App</h2>
      <h3>{taco}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          type="text"
          value={query.title}
          onChange={handleChange}
        />
        <input type="submit" value="Find Random Taco" />
      </form>
      <a href={query.searchURL}>{query.searchURL}</a>
    </div>
  );
}

export default App;

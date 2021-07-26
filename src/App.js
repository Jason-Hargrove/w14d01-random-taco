import { useState, useEffect } from "react";
import './App.css';
import TacoInfo from './TacoInfo';

function App(props) {

  const [name, updateName] = useState("Jason");

  const[query, updateQuery] = useState({
    searchURL: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
  });

  const [taco, updateTaco] = useState({});
  useEffect(() => {
      query.searchURL.length > 0 &&
        (async () => {
          try {
            const response = await fetch(query.searchURL);
            const data = await response.json();
            updateTaco( ['fart'] );
            updateQuery({ ...query, searchURL:'' });
          } catch (e) {
              console.error(e);
          }
        })();
  }, [query]);

  const handleChange = event => {
    updateQuery( ...query, ...{ [event.target.id]: event.target.value});
  };

  const handleSubmit = async event => {
    event.preventDefault();
    updateQuery({
      ...query,
    });
  };

    return (
    <div className="page-wrapper">
      <h2>Hypatia App</h2>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          type="text"
          value={query.slug}
          onChange={handleChange}
        />
        <input type="submit" value="Find Random Taco" />
      </form>
      <main className="page">
        {Object.keys(taco).length ? <TacoInfo taco={taco} /> : ''}
      </main>
    </div>
  );
}

export default App;

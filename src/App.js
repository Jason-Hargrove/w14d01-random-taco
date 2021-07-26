import { useState, useEffect } from "react";
import './App.css';
import TacoInfo from './TacoInfo';

function App(props) {

  const [name] = useState("Want a Random Taco?");

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
            updateTaco({ ...data });
            updateQuery({ ...query, searchURL:'' });
          } catch (e) {
              console.error(e);
          }
        })();
  }, [query]);

  function refreshPage() {
    window.location.reload(false);
  }

    return (
    <div className="page-wrapper">
      <h1>{name}</h1>
      <div>
        <button onClick={refreshPage}>
          Click for a Different Taco
        </button>
      </div>
      <main className="page">
        {Object.keys(taco).length ? <TacoInfo taco={taco} /> : ''}
      </main>
    </div>
  );
}

export default App;

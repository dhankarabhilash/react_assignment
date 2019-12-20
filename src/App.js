import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Continents from './continentsView';
import ContinentDetails from './continentDetails';
import './App.css';

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
})



function App() {

  const [continentValue, setContinentValue] = useState(null)

  return (
    <ApolloProvider client={client}>
      <div class="page-header">
        <h1>
          <button type="button" class="btn btn-default" aria-label="Home" onClick={() => setContinentValue(null)}>
            <span class="glyphicon glyphicon glyphicon-home" aria-hidden="true"></span>
          </button> Continents
          <small>
            {continentValue && continentValue.name
            }
          </small>
        </h1>
      </div>
      { !continentValue ? ( 
        <Continents setContinentValue={setContinentValue}>
        </Continents> ) : (
        <ContinentDetails setContinentValue={setContinentValue} continentValue={continentValue}>
        </ContinentDetails>
      )}
    </ApolloProvider>
  );
}

export default App;

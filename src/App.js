import React, { useEffect } from "react";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";

import wpEndpoint from "./Wordpress";

const axios = require("axios");

function App() {
  useEffect(() => {
    getPosts();
  });

  const getPosts = () => {
    axios
      .get(wpEndpoint)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <h1>Posts going here</h1>
      </Container>
    </div>
  );
}

export default App;

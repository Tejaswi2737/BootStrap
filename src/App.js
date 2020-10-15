import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <>
        <div class="jumbotron text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div>
        <div class="container-sm  text-center">
          <div class="row  pt-3">
            <div class="col-sm-4">
              <h3>Column 1</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 2</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
            <div class="col-sm-4">
              <h3>Column 3</h3>
              <p>Lorem ipsum dolor..</p>
            </div>
          </div>
        </div>
        <div class="container-sm text-right  pt-3">
          <h1>My First Bootstrap Page</h1>
          <p>This is some text.</p>
        </div>
        <div class="container-sm-fluid text-left  pt-3">
          <h1>My First Bootstrap Page</h1>
          <p>This is some text.</p>
        </div>
        <div class="container-sm p-3 my-3 border text-left">
          <h1>
            My First Bootstrap Page
          </h1>
          <p>
            This container-sm has a dark background color and a white text, and some extra padding and margins.
          </p>
        </div>

        <div class="container-sm p-3 my-3 bg-dark text-white">
          <h1>
            My First Bootstrap Page
          </h1>
          <p>
            This container-sm has a dark background color and a white text, and some extra padding and margins.
          </p>
        </div>

        <div class="container-sm p-3 my-3 bg-primary text-white">
          <h1>
            My First Bootstrap Page
          </h1>
          <p>
            This container-sm has a dark background color and a white text, and some extra padding and margins.
          </p>
        </div>
      </>
  );
}

export default App;

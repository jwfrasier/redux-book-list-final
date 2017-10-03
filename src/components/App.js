import React, { Component } from 'react';
import '../styles/App.css';
import BookList from "../containers/BookList.js"
import BookDetail from "../containers/BookDetail.js"
class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="App">
        <h1>Booklist Stuff for the List</h1>
        <BookList/>
        <BookDetail/>
      </div>
      </div>
    );
  }
}

export default App;

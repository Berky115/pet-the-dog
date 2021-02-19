import React, { Component } from "react";
import './App.css';
import PhotoContainer from './PhotoContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      photo: "",
      dogThoughts: [
        "Gosh...I wish I could have a pet. That would be just a delight.",
        "Truly, if some kind soul would pet me, I would be the happiest of dogs...",
        "Where...WHERE have the pets gone? What sort of world leaves honest dogs lost and without a single head pat...if only",
        "I LONG for a pet. Will YOU answer the call?",
        "Are you RAD ENOUGH to pet this fine upstanding creature?",
        "Be the change. Pet the dog."
      ]
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        console.log('Response is ...', response);
        if( !response.ok) {
          throw Error("Error fetching the cute doggo!")
        }
        return response.json()
        .then(allData => {
          console.log("all data ---------------" + allData.message);
          this.setState({ photo: allData})
        })
        .catch(err => {
          throw Error(err.message);
        });
      });
  }

     fetchDogImage = () => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        console.log('Response is ...', response);
        if( !response.ok) {
          throw Error("Error fetching the cute doggo!")
        }
        return response.json()
        .then(allData => {
          console.log("all data ---------------" + allData.message);
          this.setState({ photo: allData})
        })
        .catch(err => {
          throw Error(err.message);
        });
      });
  }

  render() {
    return (
    <div className="App">
      <button onClick={this.fetchDogImage}> Pet the doggo</button>
      <p>
      {this.state.dogThoughts[Math.floor((Math.random() * this.state.dogThoughts.length-1))]}
      </p>
      <PhotoContainer photo={this.state.photo}/>
    </div>
    );
  }
  }

export default App;

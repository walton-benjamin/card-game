/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

let quotesDiv = document.getElementById('quotes')

class Game extends React.Component{
    constructor(prop){
        super(prop)
       

    }
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
*/
/*
function startNewDeck({
    let quotesDiv = document.getElementById('quotes');

    fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res=>res.json())
    .then(thisDeck=>{
    quotesDiv.innerHTML += `<p>${thisDeck.remaining}</p>`
    quotesDiv.innerHTML += `<p>${thisDeck.shuffled}</p>`
    }) 

})
*/
//this.deck = thisDeck
//this.deckId = this.deck.deck_id



import React, { Component } from "react";
//import ReactDOM from 'react-dom/client';

//import axios from "axios";
//import Card from "./Card";
//import "./Deck.css";

const BASE_API_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      cards: []
    };
    this.getCard = this.getCard.bind(this);
    this.loadGame = this.loadGame.bind(this);
    this.restart = this.restart.bind(this)
  };
}
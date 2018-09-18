import React, { Component } from 'react';
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Title from "./components/Title";
import Cover from "./components/Cover";
import Item from "./components/Item";
import Subtitle from "./components/Subtitle";
import Description from './components/Description';


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Title text="ACE VENTURA EN AFRIQUE"/>
      <div id="main">
      <Cover url="https://images-na.ssl-images-amazon.com/images/I/51S480FZPZL._SY445_.jpg"/>
      <div id="second">
      <Item label="Date de sortie " info="10 juillet 1996"/>
      <Item label="De " info="Steve Oedekerk"/>
      <Item label="Avec " info="Jim Carrey, Ian McNeice, Simon Callow plus "/>
      <Item label="Genres " info=" Aventure, Comédie"/>
      <Item label="Nationalité " info="américain"/>
      <Button text="Bande-Annonce" theme="black"/>
      <Button text="Films en VOD" theme="grey"/>
      </div>
      </div>
      <div id="third">
      <Subtitle text="SYNOPSIS ET DÉTAILS"/>
      <Description text="Quand il apprend qu'une chauve-souris blanche et sacrée, Shikaka, a disparu au coeur de l'Afrique, Ace Ventura abandonne sa retraite himalayenne pour retrouver le petit animal. Deux tribus, les Wachati et les Wachootoo, vénérant l'animal, se rejettent la responsabilité de sa disparition."/>
      </div>
      </div>
    );
  }
}

export default App;

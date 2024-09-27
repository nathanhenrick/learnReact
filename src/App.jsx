import { useState } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Person from "./components/Person";
import List from "./components/List";

function App() {
  return (
    <>
      <h1 id="title">Hello World!</h1>
      <HelloWorld />
      <Person name="Nathan" idade="19" profissao="Desenvolvedor Frontend" />

      <h1 className='titleList'>Minha Lista</h1>
      <List item1="Item 1" item2=" Item 2" item3="Item 3" />
      <List item1="Nathan" item2="Henrick" item3="Martempe" />
    </>
  );
}

export default App;

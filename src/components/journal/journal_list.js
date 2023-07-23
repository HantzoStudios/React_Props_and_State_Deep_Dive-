import React, { Component } from "react";
import { JournalEntry } from "./journal_entry";

//aqui metemos el contenido, generalmente proveniente de n API
const rawJournalData = [
  { title: "Post One", content: "Post content", status: "draft" },
  { title: "Post Two", content: "mas lio", status: "published" },
  { title: "Post Three", content: "lata", status: "published" },
  { title: "Post Four", content: "comida de oreja", status: "published" }
];

//componente funcional, si lo activo se rompe ya que ya hay una variable con el nombre JournalEntry
// const JournalEntry = props => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//     </div>
//   )
// }


//class component. permite contenudo dinamico, por ejemplo, comtadores etc.
//el constructor siempre va unido al super, que el el que abre el abanico de herramientas de react
export default class JournalList extends Component {
  constructor(props) {
    super();

//esto es el estado inicial del constructor, hay que definirlo para que funcione
    this.state = {
      journalData: rawJournalData,
      isOpen: true
    };
  }

  //aqui abajo tenemos la definicion de los botones y su comportamiento, para ppder mostrar u ocultar el contenido de los arrais
  //boton para ocultar arrais
  clearEntries = () => {
    this.setState({ journalData: [], isOpen: false });
  };

  //boton para mostrar arrais
  showAllEntries = () => {
    this.setState({ journalData: rawJournalData, isOpen: true });
  };

  //boton interruptor que alterna entre mostrar y ocultar arrais
  toggleStatus = () => {
    if (this.state.isOpen) {
      this.setState({ journalData: [], isOpen: false });
    } else {
      this.setState({ journalData: rawJournalData, isOpen: true });
    }
  };


  //apartado de renderizado, es lo que mostrara, lo que no este aqui no se muestra¿?¿?¿
  //*** ESTE APARTADO REQUIERE ESTUDIO Y REPASO POR MI PARTE!! (que no me entero) */
  render() {
    const journalEntries = this.state.journalData.map(journalEntry => {
      return (
        <div key={journalEntry.title}>
          <JournalEntry
            title={journalEntry.title}
            content={journalEntry.content}
          />
        </div>
      );
    });

    //aqui el renderizado de los botones y su comportamiento (onClick etc)
    return (
      <div>
        <h1>{this.props.heading}</h1>
        {journalEntries}
        <button onClick={this.clearEntries}>Clear Journal Entries</button>
        <button onClick={this.showAllEntries}>Show All Journal Entries</button>
        <button onClick={this.toggleStatus}>Toggle Status</button>
      </div>
    );
  }
}
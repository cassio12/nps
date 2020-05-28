import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      efectScore: null,
      score: null,
      um: null,
      dois: null,
      tres: null,
      quatro: null,
      cinco: null, 
      seis: null,
      sete: null,
      oito: null,
      nove: null,
      dez: null,
    }
  }

  load = () => {
    this.setState ({
      um: document.getElementById('um'),
      dois: document.getElementById('dois'),
      tres: document.getElementById('tres'),
      quatro: document.getElementById('quatro'),
      cinco: document.getElementById('cinco'), 
      seis: document.getElementById('seis'),
      sete: document.getElementById('sete'),
      oito: document.getElementById('oito'),
      nove: document.getElementById('nove'),
      dez: document.getElementById('dez'),
      efectScore: document.getElementsByClassName('box-score')
    })
    // console.log(this.state.dez)
  }

  hoverEventEnter = (e) => {
    this.load()
    // console.log(e.target.attribute)
    // e.target.setAttribute("class", 'select-pointer')
  }

  // hoverEventLeave = (e) => {
  //   // console.log(e.target)
  //   e.target.setAttribute("class", 'diseble-select-pointer')
  // }

  cilckEvent = (e, n) => {
    // console.log(e , n)
    if (n == 10){
      if (this.state.dez.className == 'diseble-select-pointer'){
        this.setState({
          score: 10
        })
        this.state.dez.setAttribute("class", 'select-pointer')
        this.state.nove.setAttribute("class", 'select-pointer')
        this.state.oito.setAttribute("class", 'select-pointer')
        this.state.sete.setAttribute("class", 'select-pointer')
        this.state.seis.setAttribute("class", 'select-pointer')
        this.state.cinco.setAttribute("class", 'select-pointer')
        this.state.quatro.setAttribute("class", 'select-pointer')
        this.state.tres.setAttribute("class", 'select-pointer')
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.setState({
          score: 0
        })
        this.state.dez.setAttribute("class", 'diseble-select-pointer')
        this.state.dez.setAttribute("class", 'diseble-select-pointer')
        this.state.nove.setAttribute("class", 'diseble-select-pointer')
        this.state.oito.setAttribute("class", 'diseble-select-pointer')
        this.state.sete.setAttribute("class", 'diseble-select-pointer')
        this.state.seis.setAttribute("class", 'diseble-select-pointer')
        this.state.cinco.setAttribute("class", 'diseble-select-pointer')
        this.state.quatro.setAttribute("class", 'diseble-select-pointer')
        this.state.tres.setAttribute("class", 'diseble-select-pointer')
        this.state.dois.setAttribute("class", 'diseble-select-pointer')
        this.state.um.setAttribute("class", 'diseble-select-pointer')
      }
    }
    if (n == 9){
      if (this.state.nove.className == 'diseble-select-pointer'){
        if (this.state.score < 9){
          this.setState({
            score:9
          })
        }
        this.state.nove.setAttribute("class", 'select-pointer')
        this.state.oito.setAttribute("class", 'select-pointer')
        this.state.sete.setAttribute("class", 'select-pointer')
        this.state.seis.setAttribute("class", 'select-pointer')
        this.state.cinco.setAttribute("class", 'select-pointer')
        this.state.quatro.setAttribute("class", 'select-pointer')
        this.state.tres.setAttribute("class", 'select-pointer')
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.dez.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 9){
          this.state.nove.setAttribute("class", 'diseble-select-pointer')
          this.state.oito.setAttribute("class", 'diseble-select-pointer')
          this.state.sete.setAttribute("class", 'diseble-select-pointer')
          this.state.seis.setAttribute("class", 'diseble-select-pointer')
          this.state.cinco.setAttribute("class", 'diseble-select-pointer')
          this.state.quatro.setAttribute("class", 'diseble-select-pointer')
          this.state.tres.setAttribute("class", 'diseble-select-pointer')
          this.state.dois.setAttribute("class", 'diseble-select-pointer')
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 9){
          this.setState({
            score: 9
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }
    if (n == 8){
      if (this.state.oito.className == 'diseble-select-pointer'){
        if (this.state.score < 8){
          this.setState({
            score:8
          })
        }
        this.state.oito.setAttribute("class", 'select-pointer')
        this.state.sete.setAttribute("class", 'select-pointer')
        this.state.seis.setAttribute("class", 'select-pointer')
        this.state.cinco.setAttribute("class", 'select-pointer')
        this.state.quatro.setAttribute("class", 'select-pointer')
        this.state.tres.setAttribute("class", 'select-pointer')
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.nove.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 8){
          this.state.oito.setAttribute("class", 'diseble-select-pointer')
          this.state.sete.setAttribute("class", 'diseble-select-pointer')
          this.state.seis.setAttribute("class", 'diseble-select-pointer')
          this.state.cinco.setAttribute("class", 'diseble-select-pointer')
          this.state.quatro.setAttribute("class", 'diseble-select-pointer')
          this.state.tres.setAttribute("class", 'diseble-select-pointer')
          this.state.dois.setAttribute("class", 'diseble-select-pointer')
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 8){
          this.setState({
            score: 8
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }
    if(n == 7){
      if (this.state.sete.className == 'diseble-select-pointer'){
        if (this.state.score < 7){
          this.setState({
            score:7
          })
        }
        this.state.sete.setAttribute("class", 'select-pointer')
        this.state.seis.setAttribute("class", 'select-pointer')
        this.state.cinco.setAttribute("class", 'select-pointer')
        this.state.quatro.setAttribute("class", 'select-pointer')
        this.state.tres.setAttribute("class", 'select-pointer')
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.oito.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 7){ 
          this.state.sete.setAttribute("class", 'diseble-select-pointer')
          this.state.seis.setAttribute("class", 'diseble-select-pointer')
          this.state.cinco.setAttribute("class", 'diseble-select-pointer')
          this.state.quatro.setAttribute("class", 'diseble-select-pointer')
          this.state.tres.setAttribute("class", 'diseble-select-pointer')
          this.state.dois.setAttribute("class", 'diseble-select-pointer')
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 7){
          this.setState({
            score: 7
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }
    if (n == 6){
      if (this.state.seis.className == 'diseble-select-pointer'){
        if (this.state.score < 6){
          this.setState({
            score:6
          })
        }
        this.state.seis.setAttribute("class", 'select-pointer')
        this.state.cinco.setAttribute("class", 'select-pointer')
        this.state.quatro.setAttribute("class", 'select-pointer')
        this.state.tres.setAttribute("class", 'select-pointer')
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.sete.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 6){ 
          this.state.seis.setAttribute("class", 'diseble-select-pointer')
          this.state.cinco.setAttribute("class", 'diseble-select-pointer')
          this.state.quatro.setAttribute("class", 'diseble-select-pointer')
          this.state.tres.setAttribute("class", 'diseble-select-pointer')
          this.state.dois.setAttribute("class", 'diseble-select-pointer')
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 6){
          this.setState({
            score: 6
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }
    if (n == 5){
      if (this.state.cinco.className == 'diseble-select-pointer'){
        if (this.state.score < 5){
          this.setState({
            score:5
          })
        }
        this.state.cinco.setAttribute("class", 'select-pointer')
        this.state.quatro.setAttribute("class", 'select-pointer')
        this.state.tres.setAttribute("class", 'select-pointer')
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.seis.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 5){ 
          this.state.cinco.setAttribute("class", 'diseble-select-pointer')
          this.state.quatro.setAttribute("class", 'diseble-select-pointer')
          this.state.tres.setAttribute("class", 'diseble-select-pointer')
          this.state.dois.setAttribute("class", 'diseble-select-pointer')
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 5){
          this.setState({
            score: 5
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }
    if (n == 4){
      if (this.state.quatro.className == 'diseble-select-pointer'){
        if (this.state.score < 4){
          this.setState({
            score:4
          })
        }
        this.state.quatro.setAttribute("class", 'select-pointer')
        this.state.tres.setAttribute("class", 'select-pointer')
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.cinco.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 4){ 
          this.state.quatro.setAttribute("class", 'diseble-select-pointer')
          this.state.tres.setAttribute("class", 'diseble-select-pointer')
          this.state.dois.setAttribute("class", 'diseble-select-pointer')
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 4){
          this.setState({
            score: 4
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }
    if (n == 3){
      if (this.state.tres.className == 'diseble-select-pointer'){
        if (this.state.score < 3){
          this.setState({
            score:3
          })
        }
        this.state.tres.setAttribute("class", 'select-pointer')
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.quatro.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 3){ 
          this.state.tres.setAttribute("class", 'diseble-select-pointer')
          this.state.dois.setAttribute("class", 'diseble-select-pointer')
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 3){
          this.setState({
            score: 3
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }
    if (n == 2){
      if (this.state.dois.className == 'diseble-select-pointer'){
        if (this.state.score < 2){
          this.setState({
            score:2
          })
        }
        this.state.dois.setAttribute("class", 'select-pointer')
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.tres.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 2){ 
          this.state.dois.setAttribute("class", 'diseble-select-pointer')
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 2){
          this.setState({
            score: 2
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }
    if (n == 1){
      if (this.state.um.className == 'diseble-select-pointer'){
        if (this.state.score < 1){
          this.setState({
            score:1
          })
        }
        this.state.um.setAttribute("class", 'select-pointer')
      }
      else {
        this.state.dois.setAttribute("class", 'diseble-select-pointer')
        if (this.state.score == 1){ 
          this.state.um.setAttribute("class", 'diseble-select-pointer')
        }
        if (this.state.score > 1){
          this.setState({
            score: 1
          })
        }
        else {
          this.setState({
            score: 0
          })
        }
      }
    }

    // if (this.state.score == 10){
    //   this.state.efectScore.style.color = "green"

    // }
    // switch(this.state.score){
    //   case '10':
    // }
    // else {
    //   e.target.setAttribute("class", 'diseble-select-pointer')
    // }
    console.log(this.state.score)
    // console.log(this.state.efectScore.style.color)
  }

  render(){
    return (
      <div className="App">
        <div className="nps-container" onMouseEnter={()=>this.hoverEventEnter()}>
          <div className="box-score"> 
            <p className="value-score">1</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,1)}><div id="um" className="diseble-select-pointer"></div></div>
          </div>
          <div className="box-score">
            <p className="value-score">2</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,2)}><div id="dois" className="diseble-select-pointer"  ></div></div>  
          </div>
          <div className="box-score">
            <p className="value-score">3</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,3)}><div id="tres" className="diseble-select-pointer"></div></div>
          </div>
          <div className="box-score">
            <p className="value-score">4</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,4)} ><div id="quatro" className="diseble-select-pointer" ></div></div>
          </div>
          <div className="box-score">
            <p className="value-score">5</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,5)} ><div id="cinco" className="diseble-select-pointer"></div></div>
          </div>
          <div className="box-score">
            <p className="value-score">6</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,6)} ><div id="seis" className="diseble-select-pointer" ></div></div>
          </div>
          <div className="box-score">
            <p className="value-score">7</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,7)} ><div id="sete" className="diseble-select-pointer" ></div></div>
          </div>
          <div className="box-score">
            <p className="value-score">8</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,8)} ><div id="oito" className="diseble-select-pointer" ></div></div>
          </div>
          <div className="box-score">
            <p className="value-score">9</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,9)} ><div id="nove" className="diseble-select-pointer"></div></div>
          </div>
          <div className="box-score">
            <p className="value-score">10</p>
            <div className="score" onClick={(e) => this.cilckEvent(e,10)}><div id="dez" className="diseble-select-pointer"></div></div>    
          </div>
        </div>
      </div>
    );
  }
}
export default App;

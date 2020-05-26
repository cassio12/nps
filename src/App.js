import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

  }

  hoverEventEnter = (e) => {
    console.log(e.target)
    e.target.setAttributte("className", 'select-pointer')
  }

  hoverEventLeave = (e) => {
    console.log(e.target)
    e.target.setAttributte("className", 'diseble-select-pointer')
  }

  render(){
    return (
      <div className="App">
        <div className="nps-container">
          <div className="score"><div id="um" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>
          <div className="score"><div id="dois" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>  
          <div className="score"><div id="tres" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>
          <div className="score"><div id="quatro" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>
          <div className="score"><div id="cinco" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>
          <div className="score"><div id="seis" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>
          <div className="score"><div id="sete" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>
          <div className="score"><div id="oito" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>
          <div className="score"><div id="nove" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>
          <div className="score"><div id="dez" className="diseble-select-pointer" onMouseEnter={(e) => this.hoverEventEnter(e)} onMouseLeave={(e) => this.hoverEventLeave(e)}></div></div>    
        </div>
      </div>
    );
  }
}
export default App;

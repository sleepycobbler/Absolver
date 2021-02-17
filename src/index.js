import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import * as data from './moves'

function Sidebar(props) {
    return (
        <div style={{width: props.active ? "200px" : "0px"}} className="Absolver-sidebar">
            <a href="javascript:void(0)" className="closebtn" onClick={props.onClick}>&times;</a>
            <a href="#">Bare Hands</a>
            <a href="#">Wargloves</a>
            <a href="#">Sword</a>
        </div>)
}

function Footer(props) {
    return (
        <div className="Absolver-footer">
            <a href="https://twitter.com/maxistired">
                <p>
                    My Twitter
                </p>
            </a>
            <a href="https://github.com/sleepycobbler/Absolver">
                <p>
                    GitHub
                </p>
            </a>
            <a href="https://absolvergame.com/">
                <p>
                    Absolver Website
                </p>
            </a>
        </div>)
}

function Header(props) {
    return (
        <div className="Absolver-header">
            <span className="Absolver-sidebar-open" onClick={props.onClick}>&#9776;</span>
            <h1>Absolver Deckbuilder</h1>
        </div>)
}


function Move(props) {
    if(props.value === "+") {
        return (<div className="Absolver-move-plus">{props.value}</div>);
    }
    var moveData = data.getBareHands().find(e => e['name'] === props.value)
    return (
        <div className="Absolver-move">
            <img 
                src={"https://raw.githubusercontent.com/sleepycobbler/Absolver/main/src/images/" + props.value.toLowerCase().replaceAll(' ', '-') + ".png"}>
            </img>
            <div>{moveData["frames"]['startup'] + 'f'}</div>
        </div>);
}

function Stance(props) {
    return (
        <div className="Absolver-stance">
            <div className={typeof(props.value) === "number" ? "Absolver-stance-square-active" : "Absolver-stance-square-inactive"}>
                <div className={"Absolver-stance-pointer-" + String(props.value)}>
                </div>
            </div>
        </div>
    )
}

function Alt(props) {
    return (
        <div className="Absolver-altmove">
            <Stance value={props.value}></Stance>
            <Move value={props.rowState}></Move>
            <Stance></Stance>
        </div>
    );
}

function Combo(props) {
    return (
    <div className="Absolver-combo">
        <Stance value={props.value}></Stance>
        <Move value={props.rowState[0]}></Move>
        <Stance></Stance>
        <Move value={props.rowState[1]}></Move>
        <Stance></Stance>
        <Move value={props.rowState[2]}></Move>
        <Stance></Stance>
    </div>)
}

function Deckrow(props) {
    return (
        <div className="Absolver-deckrow">
        <Combo value={props.value} rowState={props.rowState}></Combo>
        <Alt value={props.value} rowState={props.rowState[3]}></Alt>
        </div>
    );
}

function Deckbuilder(props) {
    return (
        <div className="Absolver-deckbuilder">
            <Deckrow value={0} rowState={props.deckArray[0]}></Deckrow>
            <Deckrow value={1} rowState={props.deckArray[1]}></Deckrow>
            <Deckrow value={2} rowState={props.deckArray[2]}></Deckrow>
            <Deckrow value={3} rowState={props.deckArray[3]}></Deckrow>
        </div>);
}

class Movelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }

      render() {
          return (
            <div>
            </div>
          )
      }
}

class Movechooser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deckArray: this.props.deckArray,
            rowtarget: this.props.rowtarget,
            rowHighlight: this.props.rowHighlight,
        };
      }

      render() {
        return (
            <div className="Absolver-movechooser">
                {this.comboOrAlt(this.state.rowtarget)}
                <Movelist></Movelist>
            </div>) 
    }

    comboOrAlt(rowtarget) {
        if (rowtarget < 3) {
            return <Combo value={rowtarget} rowState={this.state.deckArray[this.state.rowHighlight]}></Combo>
        }
        return <Alt value={this.state.rowHighlight} rowState={this.state.deckArray[this.state.rowHighlight][rowtarget]}></Alt>
    }
}

class Absolver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          deckType: 0,
          sidebar: false,
          rowHighlight: 0,
          pickingMoves: false,
          deckHistory: [{
              'barehands': [
                ["360 Tornado Kick","+","+","+"],
                Array(4).fill("+"),
                Array(4).fill("+"),
                Array(4).fill("+")
              ],
              'wargloves': [
                Array(4).fill("+"),
                Array(4).fill("+"),
                Array(4).fill("+"),
                Array(4).fill("+")
              ],
              'sword': [
                Array(4).fill("+"),
                Array(4).fill("+"),
                Array(4).fill("+"),
                Array(4).fill("+")
              ],
            }],
        };
      }

    render() {
        var bh_moves = data.getBareHands();
        var sword_moves = data.getSword();
        return (
            <div className="Absolver-app">
                <Sidebar active={this.state.sidebar} onClick={i => this.toggleSidebar()}></Sidebar>
                <div style={{opacity: this.state.sidebar ? '50%' : '100%'}}>
                    <Header onClick={i => this.toggleSidebar()}></Header>
                    {this.returnMainScreen()}
                    <Footer></Footer>
                </div>
            </div>
        )
    }

    toggleSidebar() {
        this.setState({sidebar: !this.state.sidebar})
    }

    returnMainScreen() {
        if (this.state.pickingMoves) {
            return <Movechooser deckArray={this.state.deckHistory[0]['barehands']} rowHighlight={0} rowtarget={0} ></Movechooser>
        }
        return <Deckbuilder deckArray={this.state.deckHistory[0]['barehands']}></Deckbuilder>;
    }
}

// ========================================

ReactDOM.render(
  <Absolver />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

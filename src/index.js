import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: <p>Im a sidebar</p>
        };
      }

      render() {
        return (
            <div className="Absolver-sidebar">
                {this.state.value}
            </div>)
      }
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: (
            <React.Fragment>
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
            </React.Fragment>),
        };
      }

    render() {
        return (
            <div className="Absolver-footer">
                {this.state.value}
            </div>)
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: <h1>Absolver Deckbuilder</h1>,
        };
      }

      render() {
        return (
            <div className="Absolver-header">
                {this.state.value}
            </div>)
    }
}


class Move extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        }
    }
    render() {
        if(typeof(this.props.value) === "string") {
            return (<div className="Absolver-move-plus">{this.props.value}</div>);
        }
        return (<div className="Absolver-move">{this.props.value}</div>);
    }
}

class Stance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        }
    }
    render() {
        return (
            <div className="Absolver-stance">
                <div className={typeof(this.props.value) === "number" ? "Absolver-stance-square-active" : "Absolver-stance-square-inactive"}>
                    <div className={"Absolver-stance-pointer-" + String(this.props.value)}>
                    </div>
                </div>
            </div>
        )
    }
}

class Alt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            rowState: this.props.rowState,
        }
    }
        render() {
            return (
                <div className="Absolver-altmove">
                <Stance value={this.props.value}></Stance>
                <Move value={this.props.rowState}></Move>
                <Stance></Stance>
                </div>
            );
        }
    }


class Deckrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            rowState: this.props.rowState,
        }
    }

    render() {
        return (
            <div className="Absolver-deckrow">
            <div className="Absolver-combo">
            <Stance value={this.props.value}></Stance>
            <Move value={this.props.rowState[0]}></Move>
            <Stance></Stance>
            <Move value={this.props.rowState[1]}></Move>
            <Stance></Stance>
            <Move value={this.props.rowState[2]}></Move>
            <Stance></Stance>
            </div>
            <Alt value={this.props.value} rowState={this.props.rowState[3]}></Alt>
            </div>
        );
    }
}

class Deckbuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deckArray: this.props.deckArray
        };
      }

      render() {
        return (
            <div className="Absolver-deckbuilder">
                <Deckrow value={0} rowState={this.props.deckArray[0]}></Deckrow>
                <Deckrow value={1} rowState={this.props.deckArray[1]}></Deckrow>
                <Deckrow value={2} rowState={this.props.deckArray[2]}></Deckrow>
                <Deckrow value={3} rowState={this.props.deckArray[3]}></Deckrow>
            </div>) 
    }
}

class Absolver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          deckType: 0,
          deckHistory: [{
              deckState: [
                  Array(4).fill("+"),
                  Array(4).fill("+"),
                  Array(4).fill("+"),
                  Array(4).fill("+")
              ],
            }],
        };
      }

    render() {
        return (
            <div className="Absolver-app">
                <Header></Header>
                <div className="Absolver-body">
                    <Sidebar></Sidebar>
                    <Deckbuilder deckArray={this.state.deckHistory[0].deckState}></Deckbuilder>
                </div>
                <Footer></Footer>
            </div>
        )
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

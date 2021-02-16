import App from './oldApp';
import store from './app/store';
import { Provider } from 'react-redux';
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
            <a href="https://github.com/sleepycobbler/Absolver">
                <p>
                    Github
                </p>
            </a>
            <a href="https://twitter.com/maxistired">
                <p>
                    Twitter
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
            value: "A move"
        }
    }
    render() {
        return (
            <div className="Absolver-move">{this.state.value}</div>
        )
    }
}

class Stance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "A stance"
        }
    }
    render() {
        return (
            <div className="Absolver-stance"></div>
        )
    }
}

class Alt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
        render() {
            return (
                <div className="Absolver-altmove">
                <Stance></Stance>
                <Move></Move>
                <Stance></Stance>
                </div>
            );
        }
    }


class Deckrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    render() {
        return (
            <div className="Absolver-deckrow">
            <div className="Absolver-combo">
            <Stance></Stance>
            <Move></Move>
            <Stance></Stance>
            <Move></Move>
            <Stance></Stance>
            <Move></Move>
            <Stance></Stance>
            </div>
            <Alt></Alt>
            </div>
        );
    }
}

class Deckbuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "this.props.moves"
        };
      }

      render() {
        return (
            <div className="Absolver-deckbuilder">
                <Deckrow value={0}></Deckrow>
                <Deckrow value={1}></Deckrow>
                <Deckrow value={2}></Deckrow>
                <Deckrow value={3}></Deckrow>
            </div>) 
    }
}

class Absolver extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          deckType: 0,
          deckHistory: [{
              deckState: Array(16).fill(null),
            }],
        };
      }

    render() {
        return (
            <div className="Absolver-app">
                <Header></Header>
                <div className="Absolver-body">
                    <Sidebar></Sidebar>
                    <Deckbuilder></Deckbuilder>
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

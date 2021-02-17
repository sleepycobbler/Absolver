import React from 'react';
import Deckbuilder from './Deckbuilder.js';
import Movechooser from './Movechooser.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';
import * as data from './Moves.js';

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

export default Absolver;
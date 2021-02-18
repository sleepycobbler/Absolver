import React, { useState } from 'react';
import Deckbuilder from './Deckbuilder.js';
import Movechooser from './Movechooser.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';
import * as data from './Moves.js';
import { useSelector, useDispatch } from 'react-redux'
import {
  switchDeckType, 
  setPower, 
  setStyle, 
  updateDecks, 
  undoChange,
  selectStyle,
  selectDeckType,
  selectPowers,
  getDeckHistory,
  getCurrentDecks
} from './slices/loadoutSlice.js'

function Absolver(){
        var bh_moves = data.getBareHands();
        var sword_moves = data.getSword();
        var decksHistory = useSelector(getDeckHistory);
        var currentDecks = decksHistory[decksHistory.length - 1];
        const [row, setRow] = useState(-1);
        const [column, setColumn] = useState(-1);
        const [isSidebarOpen, toggleSidebar] = useState(false);
        const [deckType, setDeckType] = useState("barehands");
        const [selectedMove, setSelectedMove] = useState("none");
        const dispatch = useDispatch();

        function changeView(moveName, moveRow, moveColumn) {
          setSelectedMove(moveName);
          setRow(moveRow);
          setColumn(moveColumn);
        }

        return (
            <div className="Absolver-app">
                <Sidebar 
                  active={isSidebarOpen} 
                  onClick={i => toggleSidebar(!isSidebarOpen)} 
                  onDeckChange={setDeckType}>
                </Sidebar>
                <div style={{opacity: isSidebarOpen ? '50%' : '100%'}}>
                    <Header onClick={i => toggleSidebar(!isSidebarOpen)}></Header>
                    {row > -1 && column > -1 ? 
                    <Movechooser deckArray={currentDecks[deckType]} row={row} column={column} moveClick={changeView} moveName={selectedMove}></Movechooser> :
                    <Deckbuilder deckArray={currentDecks[deckType]} moveClick={changeView}></Deckbuilder>}
                    <Footer></Footer>
                </div>
            </div>
        );
  }
export default Absolver;
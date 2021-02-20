import React, { useState } from 'react';
import Deckbuilder from './Deckbuilder.js';
import Movechooser from './Movechooser.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Sidebar from './Sidebar.js';
import * as data from './Moves.js';
import { useSelector, useDispatch } from 'react-redux'
import {
  setTargetDeckType, 
  setPowers, 
  setStyle, 
  updateBarehandsDeck, 
  updateWarglovesDeck, 
  updateSwordDeck, 
  setHoveredMove,
  setActiveMove, 
  setSidebar, 
  toggleSidebar, 
  setTargetRow, 
  setTargetColumn,
  selectStyle,
  selectTargetDeckType,
  selectPowers,
  selectBarehandsDeck,
  selectWarglovesDeck,
  selectSwordDeck,
  selectStanceDiamonds,
  selectSidebarState,
  selectHoveredMove,
  selectActiveMove,
  selectBarehandMoveData,
  selectSwordMoveData,
  selectTargetRow,
  selectTargetColumn
} from './slices/loadoutSlice.js'

export function Absolver(){
        var row = useSelector(selectTargetRow);
        var column = useSelector(selectTargetColumn);
        var powers = useSelector(selectPowers);
        var style = useSelector(selectStyle);
        var barehandsDeck = useSelector(selectBarehandsDeck);
        var warglovesDeck = useSelector(selectWarglovesDeck);
        var swordDeck = useSelector(selectSwordDeck);
        var hoveredMove = useSelector(selectHoveredMove);
        var activeMove = useSelector(selectActiveMove);
        var sidebarIsOpen = useSelector(selectSidebarState);
        var targetDeckType = useSelector(selectTargetDeckType);
        var stanceDiamonds = useSelector(selectStanceDiamonds);
        var barehandsMoves = useSelector(selectBarehandMoveData);
        var swordMoves = useSelector(selectSwordMoveData);
        const dispatch = useDispatch();

        var num2Stan = {
          0: "FRONT_RIGHT",
          1: "FRONT_LEFT",
          2: "BACK_RIGHT",
          3: "BACK_LEFT"
        }
      
        var stan2Num = {
          "FRONT_RIGHT": 0,
          "FRONT_LEFT": 1,
          "BACK_RIGHT": 2,
          "BACK_LEFT": 3
        }

        if (targetDeckType === 'barehands') {
          var currentDeck = barehandsDeck;
          var currentMoveSet = barehandsMoves;
        }
        else if (targetDeckType === 'wargloves') {
          var currentDeck = warglovesDeck;
          var currentMoveSet = barehandsMoves;
        }
        else if (targetDeckType === 'sword') {
          var currentDeck = swordDeck;
          var currentMoveSet = swordMoves;
        }

        var currentTargetDeckType = (targetDeckType ==='sword' ?  "sword" : 'barehands');     

        function changeView(moveName, moveRow, moveColumn) {
          if (row === -1 && column === -1 && row !== moveRow && column !== moveColumn) {
            dispatch(setActiveMove(moveName));
            dispatch(setTargetRow(moveRow));
            dispatch(setTargetColumn(moveColumn));
          }
          else {
            dispatch(setActiveMove(moveName));
            dispatch(setTargetRow(moveRow));
            dispatch(setTargetColumn(moveColumn));
          }
        }

        function rowClick(moveName) {
          if (targetDeckType === 'barehands') {
            dispatch(updateBarehandsDeck(moveName));
          }
          else if (targetDeckType === 'wargloves') {
            dispatch(updateWarglovesDeck(moveName));
          }
          else if (targetDeckType === 'sword') {
            dispatch(updateSwordDeck(moveName));
          }
        }

        function changeDeckType(deckType) {
          dispatch(setTargetDeckType(deckType));
        }

        function goBack() {
          if (activeMove !== 'none') {
            dispatch(setActiveMove('none'));
            dispatch(setTargetRow(-1));
            dispatch(setTargetColumn(-1));
          }
        }

        function sidebarToggle() {
          dispatch(toggleSidebar());
        }
        return (
            <div className="Absolver-app">
                <Sidebar 
                  active={sidebarIsOpen} 
                  onClick={sidebarToggle} 
                  deckChange={changeDeckType}>
                </Sidebar>
                <div style={{opacity: sidebarIsOpen ? '50%' : '100%'}}>
                    <Header onClick={sidebarToggle} activeMove={activeMove} onGoBack={goBack}></Header>
                    {row > -1 && column > -1 ? 
                    <Movechooser stances={stanceDiamonds} deckArray={currentDeck} row={row} column={column} moveClick={changeView} rowClick={rowClick} moveName={activeMove} deckType={targetDeckType}></Movechooser> :
                    <Deckbuilder stances={stanceDiamonds} deckArray={currentDeck} moveClick={changeView}></Deckbuilder>}
                    <Footer></Footer>
                </div>
            </div>
        );
  }
export default Absolver;
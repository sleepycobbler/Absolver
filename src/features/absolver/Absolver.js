import React from 'react';
import Deckbuilder from './Deckbuilder';
import Movechooser from './Movechooser';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
// import * as data from './Moves';
import { useSelector, useDispatch } from 'react-redux'
import {
  setTargetDeckType, 
  // setPowers, 
  // setStyle, 
  updateBarehandsDeck, 
  updateWarglovesDeck, 
  updateSwordDeck, 
  // setHoveredMove,
  setActiveMove, 
  // setSidebar, 
  toggleSidebar, 
  setTargetRow, 
  setTargetColumn,
  // selectStyle,
  selectTargetDeckType,
  // selectPowers,
  selectBarehandsDeck,
  selectWarglovesDeck,
  selectSwordDeck,
  selectStanceDiamonds,
  selectSidebarState,
  // selectHoveredMove,
  selectActiveMove,
  // selectBarehandMoveData,
  // selectSwordMoveData,
  selectTargetRow,
  selectTargetColumn,
  moveRemove
} from './slices/loadoutSlice'

/**
 * Represents he main application function. The entirety of the app 
 * is constructed from here.
 * @name Absolver
 * @returns A sidebar component, and a div tag containing these 
 * components: Header, Deckbuilder/Movechooser, Footer
 * @author Max Schuhmahcer <sleepycobbler@gmail.com>
 */

export function Absolver(){
  var row = useSelector(selectTargetRow);
  var column = useSelector(selectTargetColumn);
  // var powers = useSelector(selectPowers);
  // var style = useSelector(selectStyle);
  var barehandsDeck = useSelector(selectBarehandsDeck);
  var warglovesDeck = useSelector(selectWarglovesDeck);
  var swordDeck = useSelector(selectSwordDeck);
  // var hoveredMove = useSelector(selectHoveredMove);
  var activeMove = useSelector(selectActiveMove);
  var sidebarIsOpen = useSelector(selectSidebarState);
  var targetDeckType = useSelector(selectTargetDeckType);
  var stanceDiamonds = useSelector(selectStanceDiamonds);
  // var barehandsMoves = useSelector(selectBarehandMoveData);
  // var swordMoves = useSelector(selectSwordMoveData);
  const dispatch = useDispatch();
  var currentDeck;
  if (targetDeckType === 'barehands') {
    currentDeck = barehandsDeck;
    //var currentMoveSet = barehandsMoves;
  }
  else if (targetDeckType === 'wargloves') {
    currentDeck = warglovesDeck;
    //var currentMoveSet = barehandsMoves;
  }
  else if (targetDeckType === 'sword') {
    currentDeck = swordDeck;
    //var currentMoveSet = swordMoves;
  }

  // var currentTargetDeckType = (targetDeckType ==='sword' ?  "sword" : 'barehands');

  function deleteMove(moveName) {
    dispatch(moveRemove(moveName));
  }

  function changeView(moveName, moveRow, moveColumn) {
    if (row === -1      && column === -1 && 
        row !== moveRow && column !== moveColumn) {
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
        <Header 
          onClick={sidebarToggle} 
          activeMove={activeMove} 
          onGoBack={goBack} 
        />
        {row > -1 && column > -1 ? 
        <Movechooser 
          stances={stanceDiamonds} 
          deckArray={currentDeck} 
          row={row} 
          column={column} 
          moveClick={changeView} 
          rowClick={rowClick} 
          moveName={activeMove} 
          deckType={targetDeckType} 
          moveDelete={deleteMove} 
        /> :
        <Deckbuilder 
          stances={stanceDiamonds} 
          deckArray={currentDeck} 
          moveClick={changeView} 
          moveDelete={deleteMove} 
        />}
        <Footer />
      </div>
    </div>
  );
  }
export default Absolver;
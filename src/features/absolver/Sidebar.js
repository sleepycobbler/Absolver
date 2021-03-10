/* eslint-disable jsx-a11y/anchor-is-valid */

/**
 * A representation of the sidebar element, that allows switching between decktypes
 * @component
 * @param {bool} active - Says whether the sidebar is displayed or not
 * @param {function} onClick - The event that closes the sidebar.
 * @param {function} deckChange - The event that changes deck type.
 * @returns A div with 4 <a> tags.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Sidebar = ({
  active,
  onClick,
  deckChange,
}) => {
  return (
  <div style={{width: active ? "200px" : "0px"}} className="Absolver-sidebar">
    <a className="closebtn" onClick={() => onClick()}>&times;</a>
    <a onClick={() => deckChange('barehands')}>Bare Hands</a>
    <a onClick={() => deckChange('wargloves')}>Wargloves</a>
    <a onClick={() => deckChange('sword')}>Sword</a>
  </div>)
}

export default Sidebar;
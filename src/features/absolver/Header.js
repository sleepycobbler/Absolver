/**
 * The header of the Web application.
 * @name Header
 * @const
 * @param {function} onClick - the event that opens the sidebar.
 * @param {function} onGoBack - the event that hides or displays the Go Back button.
 * @param {string} activeMove - The currently selected move. 'none' if no move is selected. 
 * @returns A div with either 1 or 2 span tags, and then an h1 tag.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const Header = ({
  onClick,
  onGoBack,
  activeMove,
}) => (
  <div className="Absolver-header">
    <span className="Absolver-sidebar-open" onClick={() => onClick()}>&#9776;</span>
    {
      activeMove === 'none' ? 
        "" : 
        <span className='Absolver-sidebar-open' onClick={() => onGoBack()}>Back to Deckview</span> 
    }
    <h1>Absolver Deckbuilder</h1>
  </div>
)

export default Header;
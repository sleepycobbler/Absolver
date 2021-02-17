import React from 'react';
import Movelist from './Movelist.js';
import Combo from './Combo.js';
import Alt from './Alt.js';

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

export default Movechooser;
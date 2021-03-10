import React from 'react';

const handleMult = (num) => {
  switch (num) {
    case 4:
      return (
        <React.Fragment>
          <div className={"Absolver-stance-pointer-rtl"}></div>
          <div className={"Absolver-stance-pointer-btr"}></div>
        </React.Fragment>
      );
    case 5:
      return (
        <React.Fragment>
          <div className={"Absolver-stance-pointer-btl"}></div>
          <div className={"Absolver-stance-pointer-rtr"}></div>
        </React.Fragment>
      );
    case 6:
      return (
        <React.Fragment>
          <div className={"Absolver-stance-pointer-rbl"}></div>
          <div className={"Absolver-stance-pointer-bbr"}></div>
        </React.Fragment>
      );
    case 7:
      return (
        <React.Fragment>
          <div className={"Absolver-stance-pointer-bbl"}></div>
          <div className={"Absolver-stance-pointer-rbr"}></div>
        </React.Fragment>
      );
    default:
      break;
  }

}

/**
 * @component
 * @param {string} dir 
 * @returns a Div, with divs within depicting its type
 */

const Stance = ({dir}) => {
  if (Number(dir) > -1 && Number(dir) < 4) {
    return (
      <div className="Absolver-stance">
        <div className="Absolver-stance-square-active">
          <div className={"Absolver-stance-pointer-" + String(dir)}>
          </div>
        </div>
      </div>
    );
  }
  else if (Number(dir) > 3){
    return (
      <div className="Absolver-stance">
        <div className="Absolver-stance-square-active">
          {handleMult(Number(dir))}
        </div>
      </div>
    );
  }
  else {
    return (
      <div className="Absolver-stance">
        <div className="Absolver-stance-square-inactive">
        </div>
      </div>
    );
  }
  
}

export default Stance;
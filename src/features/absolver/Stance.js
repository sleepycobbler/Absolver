import React from 'react';

/**
 * The representation of a stance diamond, taking either a solid direction or multiple.
 * @name Stance
 * @param {int} dir
 * @returns A div containing the structure and style of the pointer within.
 * @author Max Schuhmacher <sleepycobbler@gmail.com>
 */

const handleMult = (num) => {
  switch (num) {
    case 4:
      return (
        <React.Fragment>
          <div className={"Absolver-stance-pointer-rtl"} />
          <div className={"Absolver-stance-pointer-btr"} />
        </React.Fragment>
      );
    case 5:
      return (
        <React.Fragment>
          <div className={"Absolver-stance-pointer-btl"} />
          <div className={"Absolver-stance-pointer-rtr"} />
        </React.Fragment>
      );
    case 6:
      return (
        <React.Fragment>
          <div className={"Absolver-stance-pointer-rbl"} />
          <div className={"Absolver-stance-pointer-bbr"} />
        </React.Fragment>
      );
    case 7:
      return (
        <React.Fragment>
          <div className={"Absolver-stance-pointer-bbl"} />
          <div className={"Absolver-stance-pointer-rbr"} />
        </React.Fragment>
      );
    default:
      break;
  }

}

const Stance = (dir) => {
  if (Number(dir) > -1 && Number(dir < 4)) {
    return (
      <div className="Absolver-stance">
        <div className="Absolver-stance-square-active">
          <div className={"Absolver-stance-pointer-" + String(dir)} />
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
        <div className="Absolver-stance-square-inactive" />
      </div>
    );
  }
}

export default Stance;
import React from 'react';
import { PopUpsStyled } from './pop-ups.styled';

function PopUps(props) {
  const { setIIsShow } = props;

  console.log(setIIsShow);
  // setIIsShow(false);
  return (
    <PopUpsStyled>
      <div className="show-pops-container">
        pops
        <button onClick={() => setIIsShow(false)}>9</button>
      </div>
    </PopUpsStyled>
  );
}

export default PopUps;

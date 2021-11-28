import React from 'react';
import { PopUpsStyled } from './pop-ups.styled';
import IntroduceImage from '../../assets/images/introduce.png';

function PopUps(props) {
  const { setIsShow } = props;

  return (
    <PopUpsStyled>
      <div className="show-pops-container">
        <img src={IntroduceImage} alt="关于" />
        <button onClick={() => setIsShow('0')} title="关闭">
          X
        </button>
      </div>
    </PopUpsStyled>
  );
}

export default PopUps;

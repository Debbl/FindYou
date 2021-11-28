import React from 'react';
import { PopUpsStyled } from './pop-ups.styled';
import IntroduceImage from '../../assets/images/introduce.png';
import { Animated } from 'react-animated-css';

function PopUps(props) {
  const { setIsShow } = props;

  return (
    <PopUpsStyled>
      <Animated
        animationIn="animate__backInDown"
        animationOut="animate__backInDown"
        isVisible={true}
      >
        <div className="show-pops-container">
          <img src={IntroduceImage} alt="关于" />
          <button onClick={() => setIsShow('0')} title="关闭">
            X
          </button>
        </div>
      </Animated>
    </PopUpsStyled>
  );
}

export default PopUps;

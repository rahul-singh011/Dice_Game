import styled from 'styled-components'

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on the dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .dice {
    cursor: pointer;
    width: 100px;
    height: 100px;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;
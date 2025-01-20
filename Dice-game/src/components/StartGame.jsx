import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <Content>
        <DiceWrapper>
          <img src="/images/dices.png" alt="Dice" />
        </DiceWrapper>
        <h1>Dice Game</h1> {/* "Dice Game" positioned above the button */}
        <Button onClick={toggle}>Play Now</Button>
      </Content>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Warm background gradient */
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-align: center;
  animation: backgroundChange 6s ease-in-out infinite;
  overflow: hidden;
  
  @keyframes backgroundChange {
    0% {
      background: linear-gradient(135deg, #ff7e5f, #feb47b);
    }
    50% {
      background: linear-gradient(135deg, #ffe56b, #f7b731);
    }
    100% {
      background: linear-gradient(135deg, #ff7e5f, #feb47b);
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  padding: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  animation: fadeIn 2s ease-in-out;

  h1 {
    font-size: 90px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: 30px;
    color: #fff;
    opacity: 0;
    animation: textAnimation 3s ease-out forwards;
  }

  Button {
    font-size: 22px;
    padding: 20px 40px;
    border-radius: 15px;
    background-color: #f79c42;
    color: white;
    border: none;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

    &:hover {
      background-color: #f1c40f;
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }

    &:active {
      transform: translateY(2px);
    }
  }

  @keyframes textAnimation {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DiceWrapper = styled.div`
  margin-bottom: 30px;
  animation: diceBounce 2s ease-in-out infinite;

  img {
    width: 150px;
    animation: diceSpin 3s linear infinite, bounce 0.5s ease-in-out alternate infinite;
  }

  @keyframes diceSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes diceBounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

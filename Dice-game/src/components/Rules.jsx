// Rules.jsx
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to Play Dice Game</h2>
      <div className="text">
        <ul>
          <li>Select a number from 1 to 6.</li>
          <li>Click on the dice image to roll.</li>
          <li>
            If the rolled dice matches your number, you gain points equal to the dice number.
          </li>
          <li>Otherwise, 2 points are deducted.</li>
        </ul>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffe8d6;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;

  h2 {
    font-size: 28px;
    color: #4a4e69;
    animation: slideDown 0.8s ease-in-out;
  }

  .text ul {
    margin-top: 16px;
    padding-left: 20px;
    list-style: circle;
  }

  .text li {
    font-size: 18px;
    margin-bottom: 8px;
    animation: fadeIn 0.5s ease-in-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

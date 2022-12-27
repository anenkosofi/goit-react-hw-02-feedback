import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 15px 20px;

  width: 140px;

  font-size: 22px;

  color: #ffffff;
  background: linear-gradient(#fe3b5a, #fd7914);
  border: none;
  border-radius: 10px;

  cursor: pointer;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    animation: pulse 1s;
    box-shadow: 0 0 0 50px transparent;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 tomato;
    }
  }
`;

export { ButtonContainer, Button };

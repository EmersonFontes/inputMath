import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  margin: 1px;
  border-radius: 2px;
  border: none;
  min-width: 50px;
  max-width: 150px;
  height: 20px;
  background-color: antiquewhite;
  :hover{
    background-color: #c8c8c8;
  }
`;

export const Style = {
  button: Button
}
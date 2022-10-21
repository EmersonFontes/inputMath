import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  min-width: 100px;
  max-width: 3000px;
  height: 1.5rem;
  color: #fff;
  border-radius: 8px;
  background: #DA7613;

  :hover{
    background: #778899;
  }
`;

const P = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  
  height: 15px;
`;

export const Style = {
  div: Div,
  p: P
}
import styled from 'styled-components';
import { propsZone } from './Zone.types';

const Div = styled.div<propsZone>`
  
  display: flex;
  flex-direction: row;
  align-items: center;

  min-width: 50px;
  width: ${p=>`${p.height}px`};
  height:1.5rem;
  max-width: 5000px;
  border-radius: 8px;
  background-color:  #fff;
  margin-right: 5px;
  margin-left: 5px;
  :hover{
    border: solid 1px green;
  }
  &:focus{
    color: #000;
    background-color: yellow;
  }
  &:active{
    border: solid 2px #0000ff;
  }
`;

export const Style = {
  div: Div,
}
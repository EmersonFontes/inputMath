import React from 'react'
import { propsButton } from './button.types';
import { Style as sy} from './button.styles'

const Input:React.FC<propsButton> = ({onclick,expressao}) => {
  return(
    <sy.button onClick={onclick}>{expressao}</sy.button>
  );
}

export default Input;
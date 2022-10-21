import React from 'react';

export interface propsButton{
  onclick : React.MouseEventHandler<HTMLButtonElement> | undefined;
  expressao : string | undefined; 
}
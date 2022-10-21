import React from 'react'
import Zone from '../zone/Zone';
import { propsInput } from './Input.types';
import { Style as sy} from './Input.styles'

const Input:React.FC<propsInput> = ({onclick,item}) => {


    if(item.type === 1){
      return(
        <sy.div>
          <sy.p>{item.latex}</sy.p>
          <Zone id={item.id} onclick={onclick} parent={item.id} items={item.children} type={item.typeZone.left}/>
      </sy.div>
      );
    }else if(item.type === 2){
      return (<sy.div>
            <Zone id={item.id} onclick={onclick} parent={item.id} items={item.children}  type={item.typeZone.left}/>
            <sy.p>{item.latex}</sy.p>
            <Zone id={item.idr} onclick={onclick} parent={item.idr} items={item.children_r}  type={item.typeZone.right}/>
          </sy.div>);
    }

    return(<></>);
  
}

export default Input;
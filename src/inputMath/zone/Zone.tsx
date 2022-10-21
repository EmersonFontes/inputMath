import React from 'react';
import Input from '../inputMath/Input';
import { Style as sy } from './Zone.style';
import { propsZone } from './Zone.types';

const Zone:React.FC<propsZone> = ({items,id,onclick,onDuploClick,parent, height,type }) => {

  if(type === 2){
    return (<input style={{width:'60px',borderRadius:'8px',border:'none'}} placeholder='digite aqui'/>)
  }else{
    return(
      <sy.div height={height}  key={id} id={id} onClick={onclick} onDoubleClick={onDuploClick}>
        {items.map((item:any,index:any)=>(
          <Input onclick={onclick} key={index} id={item.id} parent={parent} item={item}/>
        ))}
      </sy.div>
    );
  }
}

export default Zone;
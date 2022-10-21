import React,{useState,useRef, useEffect} from 'react';
import { TextFieldProps,InputChangeEvent } from "./ZoneField.types";
import { styles as sy} from './ZoneField.styles';
import Zone from '../zone/Zone';
import { typeZone } from '../inputMath/Input.types';
import Button from '../button/button';

interface Dados {
  id : string,
  idr ?: string,
  latex : string,
  type : number,
  typeZone : typeZone,
  children: any
  children_r ?: any
}

const ZoneField: React.FC<TextFieldProps> = (({  label,children,index,items,onclick,parent,type,makup,...rest } ) => {
    
  const [id, setId] = useState('00');
    const [a, setA] = useState(0);
    const [more, setMore] = useState(false);
    const d: Array<Dados> = []
    const [itens,setItens] = useState(d);

    const randonId = () => {
        const randon = Math.floor(Date.now() * Math.random()).toString(36);
        return randon;
      }

    function findItem(id:string, items:Array<Dados>) {

        for (const node of items) {
          if (node.id === id || node.idr === id) return node;
          if (node.children && node.children.length) {
            const result:any = findItem(id, node.children);
            if (result) {
              return result;
            }
          }
          if (node.children_r && node.children_r.length) {
            const result:any = findItem(id, node.children_r);
            if (result) {
              return result;
            }
          }
        }
        return false;
      }
      const handlerIdDiv = (e:React.MouseEvent, n: number, s: string) => {
       
        if(id === '00'){
          const r = randonId();
          const id_r = randonId();
          itens.push({id:r,idr:id_r,type:n,typeZone:{left:a,right:a},latex:s,children:[],children_r:[]});
        }else{
          
            const prucora = findItem(id,itens);
            const r = randonId();
            const id_r = randonId();
            if(prucora.id === id){
              prucora.children.push({id:r,idr:id_r,type:n,typeZone:{left:a,right:a},latex:s,children:[],children_r:[]});
            }
            console.log(prucora.id)
            if(prucora.idr === id){
              prucora.children_r.push({id:r,idr:id_r,type:n,typeZone:{left:a,right:a},latex:s,children:[],children_r:[]});
            }
          
        }
    
       setItens([...itens]);

        e.preventDefault();
        e.stopPropagation();
      }
      const handlerIds = (e:React.MouseEvent) => {
        
        const ids = e.currentTarget.id;
        setId(ids);
        if(more === true && ids === '00'){
            setMore(false);

        }else if(more === false ){
            setMore(true);
        }
        if(e.detail===2){
         
          console.log(id);
          const p:Dados = findItem(id,itens)
          if(p.id === id){
            p.typeZone.left = 2;
            
          }else if(p.idr === id){
            
            p.typeZone.right = 2;
          }
          setItens([...itens]);
        }
        
        e.stopPropagation();
        e.preventDefault();
      }
    
  return (
    <>
    
    <sy.root makup={makup}>
        
        <sy.label makup={makup} htmlFor={'Zona'}>{label}</sy.label>
        
        <Zone id={'00'} parent={null} items={itens} onclick={handlerIds} height={'400'} />    
        
    {more && <sy.div>
                <Button onclick={(e)=>handlerIdDiv(e,2,'/')} expressao={'Divisao'}/>
                <Button onclick={(e)=>handlerIdDiv(e,2,'*')} expressao={'Multiplicacao'}/>
                <Button onclick={(e)=>handlerIdDiv(e,2,'+')} expressao={'Soma'}/>
                <Button onclick={(e)=>handlerIdDiv(e,2,'-')} expressao={'Subtracao'}/>
                <Button onclick={(e)=>handlerIdDiv(e,1,'Sen')} expressao={'Seno'}/>
                <Button onclick={(e)=>handlerIdDiv(e,1,'Cos')} expressao={'Cosseno'}/>
                <Button onclick={(e)=>handlerIdDiv(e,2,'^')} expressao={'Potencia'}/>
                </sy.div>}
    </sy.root>
    </>
  );
});

export {ZoneField};
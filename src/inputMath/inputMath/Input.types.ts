import React from 'react';

export type typeZone = {
  left:number;
  right:number;
}
export interface propsInput{
  id ?: string;
  onclick ?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onDuploClick ?: React.MouseEventHandler<HTMLDivElement> | undefined;
  parent?: any;
  item:{
    id:string;
    idr:string;
    latex: string;
    type: number;
    typeZone: typeZone;
    children: [] | any,
    children_r: [] | any,
  }
  items?: [] | any;
}
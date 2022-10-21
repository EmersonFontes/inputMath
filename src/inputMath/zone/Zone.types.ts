import React from 'react';


export interface propsZone {
  children?: JSX.Element | JSX.Element[] | undefined;
  id?:string;
  onclick ?: React.MouseEventHandler<HTMLDivElement> | undefined;
  onDuploClick ?: React.MouseEventHandler<HTMLDivElement> | undefined;
  parent?: any;
  type ?: number;
  height ?: string;
  color ?: string | null;
  items?: [] | any;
}
export interface tree{
  items: [] | any
  parent?: any
}

export interface styledZone{
  height ?: string;
}
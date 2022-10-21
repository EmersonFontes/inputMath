import { ChangeEventHandler } from "react"

type TMakupTextField = {
    fg: string,
    bg: string,
    focusColor : string,
    placeColor: string,
    padV : string,
    padH : string,
    fontsz : string,
    minH : string,
}

type TTextFieldRender ={
    makup?:TMakupTextField
}

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextFieldProps extends TTextFieldRender {
    label: string;
    children?: JSX.Element | JSX.Element[] | undefined;
    index?:string;
    onclick ?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDuploClick ?: React.MouseEventHandler<HTMLDivElement> | undefined;
    parent?: any;
    type ?: number;
    height ?: number;
    items?: [] | any;
    handleChange?: (text:string)=>void;
}
  

export type {TextFieldProps,InputChangeEvent,InputElement,TTextFieldRender,TMakupTextField};

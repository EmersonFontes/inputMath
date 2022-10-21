import styled from 'styled-components';
import { TTextFieldRender } from './ZoneField.types'

const fg = '#A8460E';
const padH = '0.3rem';
const fontsz = '0.8rem';
const minH = '1rem';

const TextFieldContainer = styled.div<TTextFieldRender>`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: ${ p=> p.makup ? p.makup.fg : fg };
    background-color: transparent;
    
    width: calc(100% - 4px);
    min-height: ${ p=> p.makup ? p.makup.minH : minH};

    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    
    font-size: ${ p=> p.makup ? p.makup.fontsz : fontsz};
    font-weight: lighter;
`;


const TextFieldLabel = styled.label<TTextFieldRender>`  
    color: ${ p=> p.makup ? p.makup.fg : fg};  
    padding-left: ${ p=> p.makup ? p.makup.padH : padH};
`;
const ModalZoneField = styled.div`
flex-direction: row;
position:absolute;
max-width: 50%;
z-index:10;
display:flex;
margin-top:5%;
`;

export const styles = {
    root: TextFieldContainer,
    label: TextFieldLabel,
    div: ModalZoneField,
}
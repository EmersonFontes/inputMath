import React from 'react';
import {Style as sy} from '../index.style';
import { ZoneField } from '../inputMath/zonefield';

const App:React.FC = () => {
  return (
    <sy.div>
      <ZoneField label='input'/>
    </sy.div>
  );
}

export default App;

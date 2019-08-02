import React from 'react';
import { Card } from './../card.component/card.component';

import './card-list.styles.css';

/* props are passed when the component is used in the app.js, 
it also includes props.children which is evrything enclosec between <></> */

export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

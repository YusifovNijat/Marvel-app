import React from 'react'

import Character from '../character/character';

import './charactersTable.css';

const CharactersTable = ({items, loading, getInfo, setCurrentTable}) => {

  return loading ? <span className="loader"></span> :
  <div className='characters-table'>
    <ul className="header">
        <li>NAME</li>
        <li>COMICS</li>
        <li>EVENTS</li>
        <li>SERIES</li>
        <li>STORIES</li>
    </ul>
    {
        items.map(item=>(
            <Character key={item.id} item={item} getInfo={getInfo} setCurrentTable={setCurrentTable} />
        ))
    }
  </div>
}

export default CharactersTable;
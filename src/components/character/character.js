import React from 'react'

import './character.css';
import { Link} from 'react-router-dom';

const Character = ({item, getInfo}) => {
    const {name, comics, events, series, stories} = item;

    let className = 'character';

  return (
    <>
        <Link to={`/${item.id}`}>
          <div className={className} onClick={()=>getInfo(item)}>
        <img src={item.thumbnail.path + ".jpg"} alt="" />
        <ul className="text">
             <li>{name}</li>
             <li>{comics.available}</li>
             <li>{events.available}</li>
             <li>{series.available}</li>
             <li>{stories.available}</li>
        </ul>
    </div>
    </Link>
    </>
  )
}

export default Character;
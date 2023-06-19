import React from 'react'
import {Link, Routes, Route, useLocation} from 'react-router-dom';
import './tableDisplay.css';
import MainInfo from '../mainInfo/mainInfo';
import Breadcrumb from '../breadcrumbs/breadcrumb';

const TableDisplay = ({items, currentTable, setCurrentTable, info, description, itemId, link}) => {
    
  const location = useLocation();
  return (
    <div className='table-display'>
        <Link to='/movieApp'><h1 onClick={()=>setCurrentTable(false)}>MARVEL</h1></Link>
        {currentTable && (location.pathname === `/${itemId}`) ? <> {info} </> 
        : (location.pathname === `/${itemId}/description`) ? <><Breadcrumb itemId={itemId}/>{description}</> 
        : (location.pathname === `/${itemId}/link`) ? <><Breadcrumb itemId={itemId}/> {link}</> 
        : <Routes><Route exact path='/movieApp' element={<MainInfo items={items}/>}/></Routes>}
    </div>
  )
}

export default TableDisplay;
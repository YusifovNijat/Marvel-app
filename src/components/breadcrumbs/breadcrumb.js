import React from 'react'
import './breadcrumb.css';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({itemId}) => {
    const location = useLocation();
  return (
    <div className='breadcrumb'>
        {(location.pathname === `/${itemId}`) ? <Link to={`${itemId}`}><p className='header-breadcrumb'>Hero</p></Link> : null}
        {(location.pathname === `/${itemId}/description`) ? <p className='header-breadcrumb'><Link to={`${itemId}`}>Hero / </Link> Description</p> : null}
        {(location.pathname === `/${itemId}/link`) ? <p className='header-breadcrumb'><Link to={`${itemId}`}>Hero / </Link> Link</p> : null}
    </div>
  )
}

export default Breadcrumb;
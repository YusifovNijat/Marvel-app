
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

import TableDisplay from './components/tableDisplay/tableDisplay';
import CharactersTable from './components/charactersTable/charactersTable';
import Pagination from './components/pagination/Pagination';
import Breadcrumb from './components/breadcrumbs/breadcrumb';

import './App.css';


function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTable, setCurrentTable] = useState(false);
  const [info, setInfo] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [itemId, setItemId] = useState('');
  let postPerPage = 5;


  useEffect(()=> {
    const fetch = async () => {
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`);
      setItems(result.data.data.results);
      setLoading(false);
    }
    fetch();
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = items.slice(firstPostIndex, lastPostIndex)

  const truncateString = (str, num) => {
    if(str?.length > num) {
        return str.slice(0, num) + '...';
    } else if(str === ''){
      return 'Please use other links for getting more info'
    }
     else {
        return str;
    }
  };




  const getInfo = (item) => {
    setCurrentTable(true);
    setDescription(
      <>
      {item.description !== '' ? <p className='full-text'>{item.description}</p> : <p className='full-text'>Unfortunately, we do not have any information</p>}
      </>
  )
    setLink(
      <>
      <p className='full-text'><span>Details: </span>you can check more info <a href={item.urls[0]?.url} target="_blank" rel="noreferrer">here</a></p>
      <p className='full-text'><span>Wikipedia: </span>you can check more info <a href={item.urls[1]?.url} target="_blank" rel="noreferrer">here</a></p>
      <p className='full-text'><span>Comics: </span>you can check more info <a href={item.urls[2]?.url} target="_blank" rel="noreferrer">here</a></p>
      </>
    )
    setInfo(
      <div className='display-character'>
        <Breadcrumb itemId={item.id}/>
        <h2>{item.name}</h2>
        <img src={item.thumbnail.path + ".jpg"} alt="" />
        <p><span><Link to={`${item.id}/description`}>Description:</Link> </span>{truncateString(item.description, 100)}</p>
        <p><span><Link to={`${item.id}/link`}>Links:</Link> </span>Click to see more information</p>
      </div>
    ) 
    setItemId(item.id);
}

  return (          
  <div className="App">
        <TableDisplay link={link} description={description} itemId={itemId} items={items} currentTable={currentTable} info={info} setCurrentTable={setCurrentTable}/> 
        <CharactersTable items={currentPosts} loading={loading} getInfo={getInfo} setCurrentTable={setCurrentTable}/>
        <Pagination totalPosts={items.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  );
}

export default App;

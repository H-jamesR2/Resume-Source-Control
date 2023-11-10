import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
//import {useHistory} from 'react-router-dom'

function ListPage() {
  const [dataItems, setDataItems] = useState([]);
  //const [selectedItem, setSelectedItem] = useState('')
  const navigate = useNavigate()

  const[x, setX] = useState('')
  //const history = useHistory()


  useEffect(() => {
    Axios.get('https://cawpam8pxh.execute-api.us-east-2.amazonaws.com/dev')
      .then((response) => {
        setDataItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }, []);

  const handleItemSelection = (item) =>{
    setX(item)
    console.log(item)
    //navigate(`/homepage/${encodeURIComponent(item.text)}`);
    //navigate('/homepage',{item})
  }

  return (
    <div>
      <header>
        Database retrieval
      </header>

      <div>
        <ul>
          {dataItems.body && typeof dataItems.body === 'string' ? (
            JSON.parse(dataItems.body).map((item, index) => (
            //   <li key={index}><button onChange={()=>handleItemSelection(item)} onClick={() => { navigate('/homepage', {replace:true, state:{x}})}}>{item.ID} {item.text}</button></li>
              //<li key={index}><button onClick={()=>handleItemSelection(item)}>{item.ID} {item.text}</button></li>
              <li key={index}><button onClick={()=>handleItemSelection(item.text) }>{item.text}</button></li>
            ))
          ) : (
            <li>Data is not in the expected format</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ListPage;

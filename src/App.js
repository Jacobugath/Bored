import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState('');
  const onClick = () =>{
    axios.get('https://www.boredapi.com/api/activity/').then(res =>{
      setData(res.data);
    })

  }
  return (
    <div className="App">
     <h1>Bored? </h1>
     <button onClick={onClick} className='button blue'>Fight it!</button>
  {data && <h2>{data.activity}</h2>}
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import b from './styles/app.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import BarChart from './component/chart';
import GridView from './component/grid-view';
import Switch from '@mui/material/Switch';


function App() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    fetch("https://blob-internal.goblitz.ai/quickdump/sales-data")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((err) => {
   console.log(`Error Occured: ${err}`);
    })

  },[])
    

  return <>
    <div className={b.myBg}>
      <div className={b.outerDiv}>
        <Box className={b.myBox}>
          <Card className={b.myCard} variant="outlined">
            <div className={b.header}>{checked ? `ChartJS` : `Grid View from MUI`}</div>
            <div className={b.body}>
              <div>{checked ? <BarChart data={data}/> : <GridView data={data}/>}</div>
            </div>
            <div className={b.footer}>
              <div><Switch {...label} defaultChecked onChange={handleChange} /></div>
            </div>
          </Card>
        </Box>
      </div>
    </div>
  </>
}

export default App;

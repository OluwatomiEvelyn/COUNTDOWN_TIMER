import './App.css';
import {  useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
function App() {
  const [data,setData]=useState({})

  function Countdown(){
    const endDate= new Date('May 26, 2023 00:00:00').getTime()
    const now = new Date().getTime()
    const difference = endDate- now 
    const seconds = 1000
    const minutes = seconds*60
    const hours = minutes*60  
    const days = hours*24
    setData({
    Day: Math.floor(difference/days),
    Hour:Math.floor((difference % days)/hours),
    Minute:Math.floor((difference%hours)/hours),
    Second:Math.floor((difference%minutes)/seconds)

    })
  }
  //Countdown()
  setInterval(Countdown,1000)
  return (
    <div className="App">
        <main>
          <center><h1>WE'RE LAUNCHING SOON</h1></center>
          <section>
            <div>
              <p>{data.Day}</p>
              <span>DAYS</span>
            </div>
            <div>
              <p>{data.Hours < 10 ?'0'+ data.Hour: data.Hour }</p>
              <span>HOURS</span>
            </div>
            <div>
              <p>{data.Minute < 10 ? '0' + data.Minute: data.Minute}</p>
              <span>MINUTES</span>
            </div>
            <div>
              <p>{data.Second < 10 ? '0' + data.Second :data.Second}</p>
              <span>Seconds</span>
            </div>
          </section>
        </main>
        <footer>
            <center>
              <FacebookIcon className='feet'/>
              <PinterestIcon className='feet'/>
              <InstagramIcon className='feet'/>
            
            </center>
        </footer>
    </div>
  );
}

export default App;


import './App.css';

import React, { Component,useState }   from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom"


const App=()=>{

const [progress, setprogress] = useState(0)




    return (
   
         <Router>
         
     <div>
  
        <Navbar/>  
        <LoadingBar
        color='#f11946'
        progress={progress}
     
      />
        <Routes>
        <Route path="/" exact element={ <News setprogress={setprogress}  key="home"  pageSize="10" country="us" category="general" /> }/>
    <Route path="/general" exact element={ <News setprogress={setprogress}  key="general"  pageSize="10" country="us" category="general"/>}/>
    <Route path="/science" exact element={ <News setprogress={setprogress}   key="science" pageSize="10" country="us" category="science"/>}/>
    <Route path="/business" exact element={ <News setprogress={setprogress}   key="business" pageSize="10" country="us" category="business"/>}/>    
    <Route path="/sports" exact element={ <News setprogress={setprogress}   key="sports" pageSize="10" country="us" category="sports"/>}/> 
    <Route path="/health" exact element={ <News setprogress={setprogress}   key="health" pageSize="10" country="us" category="health"/>}/>         
    <Route path="/technology" exact element={<News setprogress={setprogress}   key="technology" pageSize="10" country="us" category="technology"/>}/>
    <Route path="/entertainment" exact element={<News setprogress={setprogress}   key="entertainment" pageSize="10" country="us" category="entertainment"/>}/>
          
         
          
        </Routes>
        {/* <Foot/> */}
     </div>
       
        </Router>
    
    )
  }
export default App


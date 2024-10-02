import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
// import Sample from './zbox/sample'
// import {sampleRecords} from './zbox/sample_record'
import Movie1 from './movie/movie1'
import { movieRecords } from './movie/movie_records';
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

{/* 
  // sampleRecords.map(function(v,index){ 
  //   if (v.likes > 100)
  //     return <Sample records={v}/>
  // })

  // sampleRecords.map(function(v,index){
  //   if(v.postedOn.getFullYear()==2022)
  //   return <Sample records={v}/>
  // })

//   sampleRecords.map(function(v,index){
//     if(v.postedOn.toLocaleString()=='november')
//     return<Sample records={v}/>
//   })
// } */}
{/* {
  sampleRecords.map(function(v,index){
    return <Sample records={v}/>
  })
} */}
<h1>
React Movie app
</h1>
<div className='abc'>
{
  movieRecords.map(function(v,index){
    return<Movie1 Records={v}/>
  })
}
</div>
</React.StrictMode>
  // records after Sample means object
  // Sample means component
  // sampleRecords=array
  // reords are being passed to sample.js file
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// index file will provide the data to browser
// npm start means starting of server in localhost:3000 port and will find index.js file and start from lin1 to last line in sequential order
// line 6,7,12,13,14 code written rest is given already and cant be changed
// 1 st letter capital menas it is a component and is being called and if 1st letter is not capital it can be capital
// from import we called file in sample file to index file by import and export
// component=function component has html and in html code is being binded and further send to the browser
// jsx file me data can be binded by the use of {}


// diable zbox and enable chitkara: task 1
// multiple writting of statemnt
// code written inside return statement runs only one time
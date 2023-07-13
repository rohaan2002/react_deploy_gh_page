import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'; // here the file which is exported off from  Apps.js gets called as "App" as you have.
// ***** you can also call it by some other name and use it HERE by that name*****
// function Greeting(){
//   return(
//     <>
//   <div className='someValue'>
//     <h2>hello people</h2>
//     {/* <ul>
//       <li>
//         <a href='#'> starting again</a>
//       </li>
//     </ul> */}
//     </div>
//     <Person></Person>
//     <Message></Message>
//     </>
//   )
// }
// const Person=()=> <h2>john doe</h2>
// const Message=()=>{
//   return (
//   <p>this is my msg </p>
//   )
// }
// function Greeter(){
//   return(

//     React.createElement('h2',{},'soka soka')
//     // This is snippet for (element u create, props you pass unto it, the stuff written in it)
//   )
// }

// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* can either use opening or closing tags or just <Tag/> i.e, '/' is at endside */}
   {/* <Greeting></Greeting>
   <Greeter></Greeter> */}
   <App/>         

   </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

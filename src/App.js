
// // import './App.css';

// // function App() {
// //   let something='Hello World'
// //   let yooo='or Hello Biatches'
// //   const name='App-header'
// //   console.log('App')
// //   console.log('is Running hehehe')
// //   return (
// //     <div className="App">
// //     <div className={name}>
// //    {something} &nbsp;       
// //    {yooo}

// //        <Demo></Demo>
// //        </div>
// //     </div>
    
// //   );
// // }

// // // so the function you write in React are actually COMPONENTS, they must start with Uppercase
// // // you can then use them as tags(closing is MUST) . You can nest them into other compoents as Tags.
// // // In other js files you can import App.js and them use components as Tags

// // function Demo() {
// //   console.log('Demo is running too')
// //   return (
// //     <div className="App">
// //     <div className="App-header">
// //    ~Demoo
// //        </div>
// //     </div>
    
// //   );
// // }
// // import './App.css';
// import Header from './components/Header'
// import Content from './components/Content'
// import Footer from './components/footer'

// function App(){


//   return(


//     <div className='App'>  
   
//     <Header></Header>
//     <Content></Content>
//     <Footer></Footer>

   
//     </div>

//   );
// }

// export default App;
import Header from './components/Header';
import SearchItem from './components/SearchItem';
import Adder from './components/Adder';
import Content from './components/Content';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
// import apiRequest from './components/apiRequest';

function App() {
  // const API_URL = 'http://localhost:3500/items';
  // just the url on which JSON server is running 
  // to catch this, we run this cmnd on gitbash "$npx json-server"
  // const [items,setItems]= useState([]);
  const [items,setItems]= useState(JSON.parse(localStorage.getItem("shoppingList"))||[]);
  //  || is called 'short circuit' and is same as OR 
  //this doesnt work when the list is empty and we load the application first time 

  // The string ive stored in localStorage as 'shoppingList' is remade into object by using JSON.parse, and this object is made initial state each time the page is reloaded.. SO PREVIOUS DATA COMES AS INITIAL DATA in every reload... SO MAKES IT APPEAR LIKE DATA REMAINS EVEN ON RELOADNG
  // const [count,setCount]=useState(0);

  // const handleNameChange=()=>{
  //     const names=['Bob','Kevin','Dave']
  //     const int = Math.floor(Math.random()*3);
  //     setName(names[int]);
  //   }
  //   const handleClick=()=>{ 
  //     setCount(count+1)
  //     setCount(count+1)
  //     console.log(count)
  //   }
  //   const handleClick2=()=>{
  //     console.log(count)
  //   }
  //   const handleClick3=(e)=>{
// console.log(e.target)
    // }
const [newItem, setNewItem]= useState('')
const [search, setSearch]=useState('')
// const [fetchError, setFetchError]=useState(null);
// const [isLoading, setIsLoading]= useState(true)

console.log('before effect')
useEffect(()=>{

//   const fetchItems = async()=>{
//     try {
//       const response= await fetch(API_URL);
//       if(!response.ok){ throw Error('Didnt got expected data')}
//       // so if the URL got fetch successfully then it return any number <~200 as status
//       // 304 is returned when data is loaded successfully but from cache, and is also true for response.ok
//       // if the URL couldnt get fetched for any reason then it returns 404
//       const listItems= await response.json();
//       console.log(listItems)

//       // tum yhape db.json (ref by API_URL) se data nikalke usko jsonify krke setItem m pass krre
//       setItems(listItems);
//       setFetchError(null)
//     }
//   catch(err) {
//     console.log(err.message)
//     setFetchError(err.message)
//   }
//   finally{
//     setIsLoading(false);
//   }
// }
//   setTimeout(()=>{
//     (async ()=> await fetchItems())();
//   },1000)
//   fetchItems();
//   // you ccan just call the async func inside useState normally
// },[])
// =======
  localStorage.setItem('shoppingList', JSON.stringify(items));
},[items])
  // this will cause the app to save the item in local storage every time theres a change in the items array
  // console.log('see effect?') //every time this component re-renders, the useEffect runs
  // useEffect takes "a function" and "a dependency array" - function only executes whenever the dependency array changes
  // SO THE FUNCTION EXEC ON FIRST LOAD BCUZ THE DEPENDENCY gets rendered i.e, changes so function also executes that time
// useEffect is async so "before effect" and "after effect" runs phle and useeffect func badme
// you'll NEVER USE setItems() inside useEffect as it will trigger endless loop of updating [items] as dependency and thus re-executing useItems thus again updating and again casuing the function to re render
console.log('after effect')

// const setAndSaveItems=(newItems)=>{
//   setItems(newItems);
//   localStorage.setItem('shoppingList', JSON.stringify(newItems));
// }
const addItem=(item)=>{
  const id= items.length? items[items.length-1].id+1 : 1
  const myNewItem= {id, checked:false, item}
  const listItems=[...items,myNewItem]
  setItems(listItems);
  
  //this makes the items we add 'POST' in the "db.json" file, so whatever data we add using addItem func is getting formed as a json object in db.json, thus is retrievable
  // =======
  // const postOptions={
  //   method: 'POST',
  //   headers: {
  //     'Content-Type':'application/json'
  //   },
  //   body: JSON.stringify(myNewItem)
  // }
  // const result= await apiRequest(API_URL, postOptions);
  // if (result) setFetchError(result);

}

const handleCheck=(id)=>{
  
  console.log(`key: ${id}`)
  const listItems= items.map((item)=>
    (item.id===id)? {...item,checked: !item.checked}: item
  )
  setItems(listItems);
}

  // const myItem= listItems.filter(item=> item.id==id)
  // return IN THE FORM OF ARRAY, the element which is being clicked for checking
  // ========
  // const updateOptions= {
  //   method: 'PATCH',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({checked: myItem[0].checked})
  // };
  // const reqUrl = `${API_URL}/${id}`;
  // const result= await apiRequest(reqUrl,updateOptions)
  // if(result){
  //   setFetchError(result);
  // }



const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(newItem);
  if(!newItem) return;
  // if empty field is submitted then the function just exits
  addItem(newItem); //we made this funct just above, this helps add another item to the list by creating updated list and setting it using setXYZ variable
  setNewItem('');
  // but if theres smthng in list then since its preventDefault-ed so we can gather its value say using console.log and then set the field as empty by passing empty string in setNewItem - voila Controlled Input!
}

const handleDelete=(id)=>{
  console.log(id);
  const listItems=items.filter((item)=>item.id!==id);
  // inside items.filter() only the condition on which u wanna filter the array will be written under the function. it automatocally returns the array containing items satisfying the condition.
  setItems(listItems);
// ===========
  // const deleteOptions={ method: 'DELETE'}
  // const reqUrl= `${API_URL}/${id}`
  // const result = await apiRequest(reqUrl,deleteOptions)
  // if(result){
  //   setFetchError(result);
  // }

}

  return (
    <div className="App">
      <Header title="Grocery List" />
      <SearchItem
      search={search}
      setSearch={setSearch}
      ></SearchItem>
      <main>
        {/* { <p>Loading Items...</p>}
        {<p style={{color:'red'}}>{`Error: ${fetchError}`}</p>} */}
        {/* basic programming stuff: element after && will only execute or acknowledged if the before && element is 'true' */}

      <Content   //this makes the main content undisplayed if the error is there and only display error... it wont even show new adding items til error is there
      // items={items}
      // setItems={setItems}
      items={items.filter(element=>((element.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      </main>
      <Adder
      handleSubmit={handleSubmit}
      newItem={newItem}
      setNewItem={setNewItem}
      ></Adder>
      <Footer length={items.length}/>
    </div>
  );
      
      }
export default App;
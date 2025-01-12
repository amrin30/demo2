// import React from 'react'

// const Table = () => {
//     return React.createElement("table", { style: { boder: "2px solid black" } },
//         React.createElement("thead", { style: { color: "black", background:"red" } },
//             React.createElement("th", { style: { color: "black" } }, "Id"),
//             React.createElement("th", { style: { color: "black" } }, "Name"),
//             React.createElement("th", { style: { color: "black" } }, "Sal"),

//         React.createElement("tbody",{style:{}},
//             React.createElement("tr",{style:{}},
//                 React.createElement("td",{style:{}},"101")
//             )
//         ))
//         )
//     }


// export default Table


// ? Hooks--------------------------------------------------------------------------------------

// import React from 'react'
// import { useState } from 'react'
// const Table = () => {
//     let [count, setCount] = useState(0);
//     function increment() {
//         setCount(count + 1)
//     }
//     function decrement() {
//         setCount(count - 1)
//     }
//     function reseet() {
//         setCount(0)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>decrement</button>

//             <button onClick={reseet}>reset</button>

//         </div>
//     )
// }

// export default Table


//  ? Function based component---------------------------------------------------

// import React, { useState } from 'react'

// const Table = () => {
//     let [count,setCount]=useState(0);
//     let increment=()=>{
//         setCount(count+1)
//     }
//     let decrement=()=>{
//         setCount(count-1)
//     }
//     let reset=()=>{
//         setCount(0)
//     }
//   return (
//     <div>
//       <h1>{count}</h1>
    //   <button onClick={increment} style={{color:"white" ,backgroundColor:"green", border:"none",height:"50px",width:"100px" }}>+</button>
    //   <button onClick={decrement} style={{color:"white" ,backgroundColor:"red", border:"none",height:"50px",width:"100px"}}>-</button>
    //   <button onClick={reset} style={{color:"white" ,backgroundColor:"blue", border:"none",height:"50px",width:"100px"}}>0</button>
//     </div>
//   )
// }

// export default Table


// ?class based component--------------------------------------------------------------------------------

// import React, { Component } from 'react';


// class Table extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//           count:0
//         }
//       }
//       increment=()=>{
//         this.setState=({count:this.state.count+1})
//       }
//       decrement=()=>{
//         this.setState=({count:this.state.count-1})
//       }
//       reset=()=>{
//         this.setState=({count:0})
//       }
//     render() {
//         return (
//             <div>
//              <h1>{this.state.count}</h1>  
//              <button onClick={this.increment} style={{color:"white" ,backgroundColor:"green", border:"none",height:"50px",width:"100px" }}>+</button> 
//              <button onClick={this.decrement}>-</button> 

//              <button onClick={this.reset}>0</button> 

//             </div>
//         );
//     }
// }

// export default Table;

// ? ------------------------------------------


// import React from 'react'
// import { useState } from 'react'

// const Table = () => {
//     let [count,setCount]= useState(0)
//     let Increment=()=>{
//         setCount(count=>count+1)
//     }
//     let Decrement=()=>{
//         setCount(count=>count-1)
//     }
//     let Reset=()=>{
//         setCount(0)
//     }
//     let getColor=()=>{
//         if(count>0){
//             return "green"
//         }
//         else if(count<0){
//             return "red"
//         }
//         else{
//             return "blue"
//         }
//     }
//   return (
//     <div style={{border:"2px solid black",display:"flex",flexDirection:"column"}}>
//       <h1 style={{fontSize:"50px", color:getColor(), border:"2px solid black" ,width:"400px",textAlign:"center"}}>{count } </h1>
//       <button onClick={Increment} style={{color:"white" ,backgroundColor:"green", border:"none",height:"50px",width:"100px",cursor:"pointer" }}>Increment</button>
//       <button onClick={Decrement} style={{color:"white" ,backgroundColor:"red", border:"none",height:"50px",width:"100px",cursor:"pointer"}}>Decrement</button>
//       <button onClick={Reset} style={{color:"white" ,backgroundColor:"blue", border:"none",height:"50px",width:"100px",cursor:"pointer"}}>Reset</button>
      
//     </div>
//   )
// }

// export default Table


// ?---------------------------------------------------

// import React from 'react'
// import { useState } from 'react'

// const Table = () => {
//     let [text,setText]=useState("Hello")
//     let resetText=(e)=>{
//         setText(e.target.value)
//     }
//   return (
//     <div>
//       <input type="text" value={text} onChange={resetText} />
//       <p>You have typed: {text}</p>
//       <button onClick={()=>setText("Hello")}>Reset</button>
//     </div>
//   )
// }

// export default Table

// ?--------------------------------------------------------------


// import React from 'react'
// import { useState } from 'react'

// const Table = () => {
//     let[liked,setLiked]=useState(false)
//     let checked=(e)=>{
//         setLiked(e.target.checked)
//     }
//   return (
//     <div>
//       <input type="checkbox" checked={liked} onChange={checked} /> I like this
//       <h1>{liked? "💕" :"💔"}</h1>
//     </div>
//   )
// }

// export default Table


// ?-------------------------------------------------------------------------

// import React from 'react'
// import { useState } from 'react'

// const Table = () => {
//     let[name,setName]=useState("Hello")
//     let prev=()=>{
//         setName("Reihana")
//     }
//     let next=()=>{
//         setName("Amrin")
//     }
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <button onClick={prev}>Previous</button>
//       <button onClick={next}>Next</button>

//     </div>
//   )
// }

// ?------------------------------------------------------------------------

// import React, { Component } from 'react';

// class Table extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          sname:"Amrin"
//       }
//     }
//      prev=()=>{
//         this.setState=({sname:this.state.})
//     }
//     next=()=>{
//         this.setState=({sname:this.state.})
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Name:{this.state.sname}</h1>
//                 <button onClick={this.prev}>Prev</button>
//                 <button onClick={this.next}>Next</button>
//             </div>
//         );
//     }
// }

// export default Table;


// export default Table

// ?--------------------------------------------------------------------------

import { faker } from '@faker-js/faker'
import React from 'react'
import { useState } from 'react'
import "./Global.css"

const Table = () => {
    let [name,setName]=useState(faker.animal.cat())
    let [img,setImg]=useState(faker.image.urlPicsumPhotos())
    let changeName=()=>{
        setName(faker.animal.bird())
        setImg(faker.image.urlPicsumPhotos())
    }
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt="" />
      <button onClick={changeName}>ChaneName</button>
    </div>
  )
}

export default Table



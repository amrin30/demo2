// ?rafce
// import React from 'react' //?imr


// const Main = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Main


// ^ class based components--rcc (react class component)

// import React, { Component } from 'react'

// export default class Main extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }


// ^ functional based components--rfc(react funtional component)

// import React from 'react'

// export default function Main() {
//   return (
//     <div>

//     </div>
//   )
// }

// ^ rafce ---react Arrow Function Export Component

// import React from 'react'
// import Navbar from './Navbar'
// import Section from './Section';

// const Main = () => {
//   return (
//     <div>
//       <h1>Hiiiiiiii</h1>
//       <Navbar/>
//       <Section/>
//     </div>
//       )
// }

// export default Main

// -------------------------------------------------------------------------------------------------------------------------------------

// ^ Class based Components
// import React, { Component } from 'react';

// class Main extends Component {
//   render() {
//     return (
//       <section>
//         <h1>Hi I am class based component </h1>
//       </section>
//     );
//   }
// }

// export default Main;

// ?-------------------------------------------------------------------------------------------------------------------------------------
// import React, { Component } from 'react';
// import "./Global.css"
// class Main extends Component {
//   render() {
//     return (
//       <table>
//         <thead>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Salaray</th>
//         </thead>
//         <tbody>
//           <tr>
//             <td>101</td>
//             <td>Amrin</td>
//             <td>10000</td>
//           </tr>
//           <tr>
//           <td>101</td>
//             <td>Amrin</td>
//             <td>10000</td>
//           </tr>
//           <tr>
//           <td>101</td>
//             <td>Amrin</td>
//             <td>10000</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }
// }

// export default Main;

// ?--------------------------------------------------------------------------------------------------------------------------------

// import React, { Component } from 'react';
// import "./Global.css"


// class Main extends Component {
//   constructor(props){
//     super(props)

// this.state ={
//   emp_details: [
//     {
//       id:101,
//       Name:"Amrin",
//       Salary:1000,
//     },
//     {
//       id:101,
//       Name:"Amrin",
//       Salary:1000,
//     },
//     {
//       id:101,
//       Name:"Amrin",
//       Salary:1000,
//     },
//     {
//       id:101,
//       Name:"Amrin",
//       Salary:1000,
//     },
//     {
//       id:101,
//       Name:"Amrin",
//       Salary:1000,
//     },
//     {
//       id:101,
//       Name:"Amrin",
//       Salary:1000,
//     }
//    ]
//     }
//   }
//   render() {
//     return (
//       <div>
//         <table>
//           <thead>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Salaray</th>
//           </thead>
//           <tbody>
//           {
//             this.state.emp_details.map((m)=>{
//               return(
//                <tr>
//                 <td>{m.id}</td>
//                 <td>{m.Name}</td>
//                 <td>{m.Salary}</td>
//                </tr>

//               )
//             })
//           }
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Main;

// ?------------------------------------------------------------------------------------------------------------------------------------

// import React, { Component } from 'react';
// import "./Global.css"
// import PRODUCTS from "./Product.json"
// class Main extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        emp_products:PRODUCTS
//     }
//   }

//   render() {
//     return (
//       <div>
//         <table>
//           <thead>
//             <th>ID</th>
//             <th>Maker</th>
//             <th>Img</th>
//             <th>Url</th>
//             <th>Title</th>
//             <th>Description</th>
//             <th>Ratings</th>
//           </thead>
//            <tbody>
//             {this.state.emp_products.map((m)=>{
//               return(
//                 <tr>
//                   <td>{m.Id}</td>
//                   <td>{m.Maker}</td>
//                   <td>
//                     <img src={m.img} alt={m.img} />
//                   </td>
//                   <td>
//                     <a href={m.Url}>link</a>
//                   </td>
//                   <td>{m.Title}</td>
//                   <td>{m.Description.slice(0,20)}</td>
//                   <td>{m.Ratings}</td>
//                 </tr>
//               )
//             })}
//            </tbody>
//         </table>
//       </div>
//     );
//   }
// }


// export default Main;

//  ? function based component(React hooks)-----------------------------------------------------------------------

// import React, { useState } from 'react'
// import PRODUCTS from "./Product.json"
// import "./Global.css"
// const Main = () => {
//   let [state,setState]=useState(PRODUCTS)

//   return  ( <div>
//       <table>
//         <thead>
//           <th>ID</th>
//           <th>Maker</th>
//           <th>Image</th>
//           <th>Url</th>
//           <th>Title</th>
//           <th>Description</th>
//           <th>Ratings</th>
//         </thead>
//         <tbody>
//           {state.map((m)=>{
//             return(
//               <tr>
//                 <td>{m.Id}</td>
//                 <td>{m.Maker}</td>
//                 <td>
//                   <img src={m.img} alt={m.img} />
//                 </td>
//                 <td>
//                   <a href={m.Url}>LINK</a>
//                 </td>
//                 <td>{m.Title}</td>
//                 <td>{m.Description.slice(0,40)}</td>
//                 <td>{m.Ratings}</td>
//               </tr>
//             )
//           })}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Main

// import React, { useState } from 'react'
// import "./Global.css"
// const Main = () => {
//   let [state,setState]=useState([

//         {
//           id:101,
//           Name:"Amrin",
//           Salary:1000,
//         },
//         {
//           id:102,
//           Name:"Hari",
//           Salary:1000,
//         },
//         {
//           id:103,
//           Name:"Divya",
//           Salary:1000,
//         },
//         {
//           id:104,
//           Name:"Gokul",
//           Salary:1000,
//         },
//         {
//           id:105,
//           Name:"Rizwan",
//           Salary:1000,
//         },
//         {
//           id:101,
//           Name:"Suhaib",
//           Salary:1000,
//         }
//        ])
//   return (
//     <div>
//       <table>
//         <thead>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Salary</th>
//         </thead>
//         <tbody>
//         {state.map((m)=>{
//             return(
//               <tr>
//                 <td>{m.id}</td>
//                 <td>{m.Name}</td>

//                 <td>{m.Salary}</td>
//               </tr>
//             )
//           })}
//            </tbody>
//       </table>
//     </div>
//   )
// }

// export default Main
// import React, { useState } from 'react'
// import Pro from "./Product.json"
// import "./Global.css"
// const Main = () => {
//   let [state, setState] = useState(Pro)
//   return (
//   <section>
//    { state.map((m) => {

//       return (
        
//           <div>
//             {/* <h3>{m.Id}</h3> */}
//             <h2>{m.Title}</h2>
//             {/* <h3>{m.Maker}</h3> */}
//             <img src={m.img} alt={m.img} />
//             <h4>{m.Description}</h4>
//            <h4>
//            <a href={m.Url}>Link</a>
//            </h4>
//           </div>
//       )
//     })}
//         </section>)}
    
// export default Main




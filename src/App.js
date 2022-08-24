import logo from './logo.svg';
import './App.css';
import HideAndShowClass from './Component/HideAndShowClass';
import HideAndShowFun from './Component/HideAndShowFun';
import Form from './Component/Form';
import CounterFun from './Component/CounterFun';
import { PureComponent } from 'react';
import Purecomponent from './Component/Purecomponent';
import Pagenation from './Component/Pagenation';
import Search from './Component/Search';
import PropsPassing from './Component/PropsPassing'

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(props) {
//     console.log('Constructor')
//     super(props)
  
//     this.state = {
      
//     }
//   }
//   static getDerivedStateFromProps(){
//     console.log('getDerivedStateFromPropss')
//     return null
//   }
//   componentDidMount(){
//     console.log('componentDidMount')
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount')
//   }
//   render() {
//     console.log('Render')
//     return (
//       <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <button>Click Me</button> */}
//       </header>
//     </div>
//     )
//   }
// }


// function App() {
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }


function App() {
  // console.log(<span></span>)
  function handleClick(){
    console.log('handleClick')
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HideAndShowClass/> */}
        {/* <HideAndShowFun/> */}
        {/* <Form/> */}
        {/* <CounterFun/> */}
        {/* <Purecomponent/> */}
        {/* <Pagenation/> */}
        {/* <Search data={{name: 'Prash'}}/> */}
        {/* <PropsPassing/> */}

        {/* <div onClick={handleClick}>
          <button>Click 1</button>
          <button>Click 2</button>
          <button>Click 3</button>
        </div> */}
      </header>
    </div>
  );
}

export default App;

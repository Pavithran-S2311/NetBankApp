import React from 'react'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import FundTransfer from './Components/FundTransfer';
import Statement from './Components/Statement';
import Contact from './Components/ContactUs';
import Header from './Components/Header';
import './App.css';

class App extends React.Component {
  render() {
    return (
     <>
     <BrowserRouter>
        <div /* style={{display:"flex", flexDirection:"column"}} */>
         <Header />
          <div /* style={{display:"flex", flexDirection:"row"}} */>
            <Navigation />
            <Routes>
              <Route path="/" exact element={<Home />}/> 
              <Route path="/fundtransfer" exact element={<FundTransfer />}/> 
              <Route path="/statement" exact element={<Statement />}/> 
              <Route path="/contact" exact element={<Contact />}/>
            </Routes>
          </div>
        </div>
     </BrowserRouter>
     </>
    );
  }
}

export default App;

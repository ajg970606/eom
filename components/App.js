import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header_admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';
import Signup from './Signup';

//user_management
import ReactThrottle from './R095_reactThrottle';

const App =  ()=> {
const [name,setName] = useState('')

const updateUserName=(newUserName) =>{
  setName(newUserName);
}
const changeUserName=(newName) =>{};
const changeMode=(newMode)=>{};
  
return (
      <div className="App">
        <HeaderAdmin userName={name}/> 
        <Routes>
        <Route path='/' element={<LoginForm updateUserName={updateUserName} />} />
        <Route path='/UserApproval' element={<ReactThrottle/>} />
        <Route path='/Signup' element={<Signup changeUserName={changeUserName} changeMode={changeMode} />} />
        </Routes>
        <Footer/>
      </div>
    );
    }

export default App;
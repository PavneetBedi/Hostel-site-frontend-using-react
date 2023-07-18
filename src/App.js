import React from 'react';
import './App.css';
import Login from './Components/login';
import Login1 from './Components/Forgotpassword';
import Login2 from './Components/employeeid';
import Login3 from './Components/checkyouremail';
import Login4 from './Components/resetpassword';
import Login5 from './Components/successfulllogin';
import Login6 from './Components/dashboard';
import Login7 from './Components/booking';
import Login8 from './Components/screen10';
import Login9 from './Components/screen11';
import Login10 from './Components/screen12';
import Login11 from './Components/Request';
import Login12 from './Components/screen14';
import Login13 from './Components/screen15';
import Login14 from './Components/screen16';
import Login15 from './Components/eventcreatedsuccessfully';
import Login16 from './Components/Signin';

import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const App=()=> {
  return ( 
    <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<Login/>}/>
                  <Route path="/Forgotpassword" element={<Login1/>}/>
                  <Route path="/employeeid" element={<Login2/>}/>
                  <Route path="/checkyouremail" element={<Login3/>}/>
                  <Route path="/resetpassword" element={<Login4/>}/>
                  <Route path="/successfulllogin" element={<Login5/>}/>
                  <Route path="/dashboard" element={<Login6/>}/>
                  <Route path="/booking" element={<Login7/>}/>
                  <Route path="/screen10" element={<Login8/>}/>
                  <Route path="/screen11" element={<Login9/>}/>
                  <Route path="/screen12" element={<Login10/>}/>
                  <Route path="/request" element={<Login11/>}/>
                  <Route path="/screen14" element={<Login12/>}/>
                  <Route path="/screen15" element={<Login13/>}/>
                  <Route path="/screen16" element={<Login14/>}/>
                  <Route path="/eventcreatedsuccessfully" element={<Login15/>}/>
                  <Route path="/signin" element={<Login16/>}/>
              </Routes>
    </BrowserRouter>
     
    
   );
}

export default App;


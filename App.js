import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/navbar';
import Carousell from './components/Carousell';
import Chennai from './components/pages/Chennai';
import { Rameshwaram } from './components/pages/Rameswaram';
import Kodaikanal from './components/pages/Kodaikanal';
import Ooty from './components/pages/Ooty';
import Kanyakumari from './components/pages/Kanyakumari';
import Kumbakonam from './components/pages/Kumbakanom';
import Madurai from './components/pages/Madurai';
import Theni from './components/pages/Theni';
import Yercaud from './components/pages/yarcaud';
import Hogenakkal from './components/pages/Hoganakkel';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'



function App() {
  return (
  <Router>
      <Navbar />
      {/* <br></br> */}
      <Carousell/>
      <Chennai />
      <Kodaikanal />
      <Madurai />
      <Kumbakonam />
      <Rameshwaram />
      <Theni />
      <Ooty />
      <Kanyakumari />
      <Yercaud />
      <Hogenakkal />
      <br></br>
      <Routes>
      <Route path='/Carousell' element={<Carousell />} /> 
      <Route path='/Chennai' element={<Chennai />}/>
      {/* <Route path='/' element={<Chennai />}/> */}
      {/* <Route path='/' element={<Chennai />}/> */}
      <Route path='/Rameshwaram' element={<Rameshwaram />}/>
        <Route path='/Kodaikanal' element={<Kodaikanal />}/>
        <Route path='/Ooty' element={<Ooty />}/>
        <Route path='/Kanyakumari' element={<Kanyakumari />}/>
        <Route path='/Kumbakonam' element={<Kumbakonam />}/>
        <Route path='/Madurai' element={<Madurai />}/>
        <Route path='/Yercaud' element={<Yercaud />}/>
        <Route path='/Theni' element={<Theni />}/>
        <Route path='/Hogenakkal' element={<Hogenakkal />}/>
        </Routes>
  </Router>
)
}
    

export default App;

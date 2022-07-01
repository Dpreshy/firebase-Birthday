import Landingpage from "./Components/Landing/Landingpage";
import Create from "./Components/Create/Create"
import{ BrowserRouter, Routes,Route} from 'react-router-dom'
import Views from './Components/Views/Views'


const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Landingpage/>}/>
<Route path="/Create" element={<Create/>}/>
<Route path="/Views" element={<Views/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

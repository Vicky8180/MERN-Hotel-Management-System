import {BrowserRouter,   Route, Routes} from "react-router-dom"
import './App.css';
import FirstPage from './component/FirstPage/FirstPage';
import Navbar from './component/MainPage/Navbar/Navbar';
import FirstPageForRoute from "./FirstPageForRoute";
import ViewPage from './component/MainPage/Viewpage/ViewPage';
import Addhotel from './component/MainPage/AddHotel/Addhotel'
function App() {
  return (
    <>
       <div className="App">
       {/* <Navbar/> */}
       <BrowserRouter>
    <Routes>
   
    <Route    path="/"  element={<FirstPage/>}  />
    <Route   path="/addhotel"  element={<Addhotel/>}  />
    <Route   path="/fpfr"  element={<FirstPageForRoute/>}  />

    {/* <Navbar/>
       <ViewPage/> */}

       </Routes>
       </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;

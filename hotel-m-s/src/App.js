import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import FirstPage from './component/FirstPage/FirstPage';
import Navbar from './component/MainPage/Navbar/Navbar';
import FirstPageForRoute from "./FirstPageForRoute";
import ViewPage from './component/MainPage/Viewpage/ViewPage';
import Addhotel from './component/MainPage/AddHotel/Addhotel'
import BookingPage from "./component/BookingModel/BookingPage";
import AvailbleRoom from "./component/BookingModel/AvailbleRoom";
import BookedRoom from "./component/BookingModel/BookedRoom";
function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar/> */}
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<FirstPage />} />
            <Route path="/fpfr" element={<FirstPageForRoute />} />
            <Route path="/addhotel" element={<Addhotel />} />
          
            <Route path="/bookingpage" element={<BookingPage />} />
            <Route path="/availbleroom" element={<AvailbleRoom />} />
            <Route path="/bookedroom" element={<BookedRoom />} />

            {/* <Navbar/>
       <ViewPage/> */}

          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;

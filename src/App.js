import './App.css';
import Home from "layout/Home";
import {Route, Routes} from "react-router-dom";
import Devices from "layout/Devices";
import SolarWeb from "layout/SolarWeb";
import {BottomTray, SideMenu} from "components/Navigation";

const App = () => {

    return (
        <div className="App">
            <SideMenu/>
            <div className={'main'}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/devices' element={<Devices/>}/>
                <Route path='/solar-web' element={<SolarWeb/>}/>
            </Routes>
            </div>
            <BottomTray/>
        </div>
    );
}

export default App;

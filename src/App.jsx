
import {Route, Routes} from "react-router-dom";

import Faq from "./components/Faq.jsx";
import HomePage from './components/HomePage.jsx';
import NotFound from "./components/Notfound.jsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { MainLayout } from "./components/layout/MainLayout.jsx";
import Legend from "./components/Legend.jsx";


function App() {
  return (
    <div className="App" >
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />        
                <Route path='faq' element={<Faq />} />
                <Route path='legend' element={<Legend />} />
                <Route path="*" element={<NotFound />} />

            </Route>
        </Routes>
    </div>
  );
}

export default App;

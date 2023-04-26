import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/mynotes' element={ <MyNotes/>}/>
    </Routes>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;

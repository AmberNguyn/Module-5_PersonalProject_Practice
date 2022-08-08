import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Underconstruction from "./views/Underconstruction/Underconstruction";
import Footer from "./components/Footer/Footer";
import Homepage from "./views/Homepage/Homepage";
import Teacher from "./views/Teacher/Teacher";
import Contract from "./views/Contrakt/Contract";
import Salary from "./views/Salary/Salary";




function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route exact path={'viewTeachers'} element={<Teacher />} />
        <Route exact path={'viewTeachers/find-by-teacher-type/:input'} element={<Teacher />} />
        <Route exact path={'viewContracts/find-by-teacher-code/:teacherCode'} element={<Contract />} />
        <Route exact path={'viewContracts'} element={<Contract />} />
        <Route exact path={'viewSalary'} element={<Salary />} />
        <Route exact path={'/'} element={<Homepage />} />

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </>
    
  );
}

export default App;

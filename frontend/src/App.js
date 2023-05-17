//import { BrowserRouter as Router, Route } from "react-router-dom"
import { Routes, Route } from 'react-router-dom'
import './App.css';
import AddCourses from './pages/AddCourses/AddCourses';
import AllCourses from './pages/Allacourses/AllCourses';
import AddPayment from './pages/Payment/AddPayment'
import EditCourse from './pages/EditCourse/EditCourse';
import Home from './pages/Home_M/Home';
import WatchCourses from './pages/WatchCourses/WatchCourses';
import ViewCourse from './pages/ViewCourseDetails/ViewCourse';



function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/payment' element={<AddPayment />} />
        <Route path='/allCourse/addCourse' element={<AddCourses />} />
        <Route path='/allCourse' element={<AllCourses/>}/>
        <Route path='/allCourse/editCourse' element={<EditCourse/>}/>
        <Route path='/Student_Courses' element={<WatchCourses/>}/>
        <Route path='/Student_Courses/viewCourse' element={<ViewCourse/>}/>

        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>

  );
}

export default App;

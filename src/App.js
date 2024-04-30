import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import SchoolDetail from './SchoolDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/schools" exact element={<SchoolList />} /> */}
          <Route path="/schools" exact element={<Home />} />
          <Route path="/schools/:schoolId" element={<SchoolDetail />} />
          {/* <Route path="/schools/:schoolId" element={<Home />} /> */}
          <Route path="/login" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

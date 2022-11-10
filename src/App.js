import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Login } from "./Componets/Login";
import { Dashboard } from "./Componets/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Login />} />
          <Route exact path="page2" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

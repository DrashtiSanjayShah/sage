import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
import ReportForm from "./components/ReportForm/ReportForm";
import EmailForm from "./components/EmailForm/EmailForm";

function App() {
  
  return (
    <div className="App">
      
    <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<ReportForm />} />
          <Route path="/eform" element={<EmailForm />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        </Router>
      </div>
    
  );
}



export default App;

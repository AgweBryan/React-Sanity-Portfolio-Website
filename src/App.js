import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Posts from "./Components/Posts";
import Projects from "./Components/Projects";
import SinglePost from "./Components/SinglePost";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/React-Sanity-Portfolio-Website" element={<Home />} />
          <Route path="/React-Sanity-Portfolio-Website/about" element={<About />} />
          <Route path="/React-Sanity-Portfolio-Website/post/:slug" element={<SinglePost />} />
          <Route path="/React-Sanity-Portfolio-Website/posts" element={<Posts />} />
          <Route path="/React-Sanity-Portfolio-Website/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

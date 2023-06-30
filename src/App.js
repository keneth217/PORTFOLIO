import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import Articles from "./Pages/Articles";
import Projects from "./Pages/Projects";
import ArticleOne from "./Pages/ArticleOne";
import ArticleTwo from "./Pages/ArticleTwo";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/articles" element={<Articles />}>
          <Route path="/articlesone" element={<ArticleOne />} />
          <Route path="/articlestwo" element={<ArticleTwo/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Showtimes from "./components/Showtimes";
import './assets/css/reset.css'
import Session from "./components/Session";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/filme/:idFilme" element={<Showtimes/>} />
          <Route path="/sessao/:idSessao" element={<Session />} />
          <Route path="/sucesso" element={<Success />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

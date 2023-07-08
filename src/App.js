import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import RestorentDetail from "./component/RestorentDetail/RestorentDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/restorentDetails/:restorentId"
          element={<RestorentDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;

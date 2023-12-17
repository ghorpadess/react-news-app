import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./Comopnents/NavBar";
import News from "./Comopnents/News";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<News category={"general"} key="general" pageSize={12} />}
          />
          <Route
            path="/business"
            element={
              <News category={"business"} key="business" pageSize={12} />
            }
          />
          <Route
            path="/health"
            element={<News category={"health"} key="health" pageSize={12} />}
          />
          <Route
            path="/sports"
            element={<News category={"sports"} key="sports" pageSize={12} />}
          />
          <Route
            path="/science"
            element={<News category={"science"} key="science" pageSize={12} />}
          />
          <Route
            path="/entertainment"
            element={
              <News
                category={"entertainment"}
                key="entertainment"
                pageSize={12}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News category={"technology"} key="technology" pageSize={12} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

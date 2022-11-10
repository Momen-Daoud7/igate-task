import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DataTable from "./components/dataTable/DataTable";
import Login from "./components/login/Login";
import Create from "./components/opreations/Create";
import Edit from "./components/opreations/Edit";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<DataTable />} />
          <Route path="/create" exact element={<Create />} />
          <Route path="/edit/:id" exact element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

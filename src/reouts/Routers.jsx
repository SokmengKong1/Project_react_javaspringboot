import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListData from '../components/ListData';
import Create from "../components/Create";
import Edit from "../components/Edit";
import Update from "../components/Update";


const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListData />}></Route>
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>





    </div>
  )
}

export default Routers

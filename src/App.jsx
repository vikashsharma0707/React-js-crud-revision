import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Display from "./pages/Display";
import Insert from "./pages/Insert";
import Search from "./pages/Search";
import Delete from "./pages/Delete";
import Edit from "./pages/Edit";



const App = () => {
  return (
    <>
      <h1>This is app page</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="display" element={<Display />} />
            <Route path="insert" element={<Insert />} />
            <Route path="search" element={<Search />} />
            <Route path="delete" element={<Delete />} />
            <Route path="edit" element={<Edit />} />

          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
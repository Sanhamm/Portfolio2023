import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Holidaze from "./pages/Holidaze";
import Bid from "./pages/Bid";
import Shoppit from "./pages/Shoppit";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/aboutme' element={<Aboutpage />} />
        <Route path='/holidaze' element={<Holidaze />} />
        <Route path='/bid' element={<Bid />} />
        <Route path='/shoppit' element={<Shoppit />} />
      </Routes>
    </Layout>
  );
}

export default App;

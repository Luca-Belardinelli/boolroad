import TravelsDetailPage from "./pages/TravelsDetailPage";

// importo react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo il Layout
import DefaultLayout from "./layouts/DefaultLayout";

import HomePage from "./pages/HomePage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>

          <Route path="/" element={<HomePage />} />

          <Route path="/travel/:id" element={<TravelsDetailPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

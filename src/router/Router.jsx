import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Allies, Buy, Home, Invest, OurServices, Sell } from "../views/barrel";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eyssautier/re/buy" element={<Buy />} />
        <Route path="/eyssautier/re/sell" element={<Sell />} />
        <Route path="/eyssautier/re/invest" element={<Invest />} />
        <Route path="/eyssautier/re/allies" element={<Allies />} />
        <Route path="/eyssautier/re/our_services" element={<OurServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

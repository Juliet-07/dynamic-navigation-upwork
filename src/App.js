import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/initialOptions/Home";
import Study from "./pages/initialOptions/Study";
import LifeCoach from "./pages/initialOptions/LifeCoach";
import PersonalTrainer from "./pages/initialOptions/PersonalTrainer";
import Advanced from "./pages/initialOptions/Advanced";
import Collections from "./pages/Advanced/Collections";
import Sources from "./pages/Advanced/Sources";
import Tables from "./pages/Advanced/Tables";
import ItemOne from "./pages/Collections/ItemOne";
import ItemTwo from "./pages/Collections/ItemTwo";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/lifeCoach" element={<LifeCoach />} />
          <Route path="/personalTrainer" element={<PersonalTrainer />} />
          <Route path="/advanced" element={<Advanced />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/sources" element={<Sources />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/item1" element={<ItemOne />} />
          <Route path="/item2" element={<ItemTwo />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

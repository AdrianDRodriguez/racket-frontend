import axios from "axios";
import { Header } from "./Header";
import { RacketsPage } from "./RacketsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <RacketsPage />
      <Footer />
    </div>
  )
}

export default App;
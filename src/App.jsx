import { Header } from "./Header";
import { RacketsPage } from "./RacketsPage";
import { Footer } from "./Footer";


function App() {
  return (
    <div>
        <div className="flex min-h-screen flex-col">

        <Header />
        <div className="container mx-auto p-4 flex-auto">
        <RacketsPage />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
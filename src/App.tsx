import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.component";

function App() {

  return (
    <BrowserRouter>
    <div className="bg-background">
    <Home />
    </div>
    </BrowserRouter>
  );
}

export default App;

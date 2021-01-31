import "./assets/css/app.css"
import { ContextProvider, GlobalContext } from "./context";
import AllSurah from "./pages/AllSurah"
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <ContextProvider>
      <div className="dark:bg-gray-800 h-full bg-white transition-all duration-300">
        <Routes/>
      </div>
    </ContextProvider>
  );
}

export default App;

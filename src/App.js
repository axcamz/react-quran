import "./assets/css/app.css"
import { Container } from "./components/atoms";
import { ContextProvider, GlobalContext } from "./context";
import AllSurah from "./pages/AllSurah"
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <ContextProvider>
      <Container>
        <div className="dark:bg-gray-800 h-full bg-white transition-all duration-300">
          <Routes/>
        </div>
      </Container>
    </ContextProvider>
  );
}

export default App;

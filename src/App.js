import { BrowserRouter } from "react-router-dom";
import "./assets/css/app.css"
import { Container } from "./components/atoms";
import { ContextProvider } from "./context";
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Container>
          <div className="dark:bg-gray-900 h-full transition-all duration-300">
            <Routes/>
          </div>
        </Container>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

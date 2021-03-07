import "./assets/css/app.css"
import { Container } from "./components/atoms";
import { ContextProvider } from "./context";
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <ContextProvider>
      <Container>
        <div className="dark:bg-gray-900 h-full bg-theme-100 transition-all duration-300">
          <Routes/>
        </div>
      </Container>
    </ContextProvider>
  );
}

export default App;

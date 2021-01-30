import "./assets/css/app.css"
import AllSurah from "./pages/AllSurah"
import Routes from "./routes/AppRoutes";

function App() {
  return (
    <div className="dark:bg-gray-800 h-screen bg-white transition-all duration-300">
      <Routes/>
    </div>
  );
}

export default App;

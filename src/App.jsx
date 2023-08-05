import "./App.css";
import NavigationBar from "./components/Navbar";
import { ThemeProvider } from "./utils/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;

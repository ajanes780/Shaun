import "./App.scss";
import { NavbarComponent } from "./components/NavbarComponent";
import { LandingPage } from "./pages/landingPage";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <LandingPage />
    </div>
  );
}

export default App;

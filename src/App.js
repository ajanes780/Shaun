import "./App.scss";
import { FooterComponent } from "./components/footer/FooterComponent";
import { NavbarComponent } from "./components/NavbarComponent";
import { LandingPage } from "./pages/landingPage";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <LandingPage />
      <FooterComponent />
    </div>
  );
}

export default App;

import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Mycards from "./components/cards/mycards";

function App() {
    return (
        <div className="App">
            <h1>My Movies</h1>
            {/* <Cards /> */}
            <Mycards /> 
        </div>
    );
}

export default App;

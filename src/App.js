import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
import CountTimer from "./components/CountTimer";
import SearchUser from "./components/SearchUser";
import Navbar from "./components/Navbar"; // Import Navbar component

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    {/* Set default route to CountTimer */}
                    <Route path="/" element={<Navigate to="/count-timer" />} />
                    <Route path="/count-timer" element={<CountTimer />} />
                    <Route path="/search-user" element={<SearchUser />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

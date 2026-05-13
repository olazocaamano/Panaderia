import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import AnimatedBakeryBackground from "./components/AnimatedBakeryBackground";

import "./App.css";

import Login from "./pages/Login";

function App() {

    return (
        <>
            <AnimatedBakeryBackground />

            <BrowserRouter>
                <Routes>

                    <Route path="/login" element={<Login />} />

                </Routes>
            </BrowserRouter>
        </>

    );

}

export default App;
import { useState } from 'react'
import './App.css'
import NavigationBar from "./components/navigation-bar/navigation-bar";
import Router from "./router/Router";

function App() {
    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <Router />
        </div>
    )
}

export default App

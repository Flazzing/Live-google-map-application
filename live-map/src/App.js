import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LiveMap from "./LiveMap";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h3>This is the map of the location.</h3>
				<LiveMap />
			</header>
		</div>
	);
};

export default App;

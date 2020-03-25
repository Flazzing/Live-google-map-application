import React, { useState, useEffect } from "react";
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker,
	InfoWindow
} from "react-google-maps";
import * as data from "./data/data.json";

function Map() {
	const [selectedData, setSelectedData] = useState(null);

	useEffect(() => {
		const listener = e => {
			if (e.key === "Escape") {
				setSelectedData(null);
			}
		};
		window.addEventListener("keydown", listener);

		return () => {
			window.removeEventListener("keydown", listener);
		};
	}, []);

	return (
		<GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.4211, lng: -75.6903 }}>
			{data.features.map(eachData => (
				<Marker
					key={eachData.properties.PARK_ID}
					position={{
						lat: eachData.geometry.coordinates[1],
						lng: eachData.geometry.coordinates[0]
					}}
					onClick={() => {
						setSelectedData(eachData);
					}}
				/>
			))}

			{selectedData && (
				<InfoWindow
					onCloseClick={() => {
						setSelectedData(null);
					}}
					position={{
						lat: selectedData.geometry.coordinates[1],
						lng: selectedData.geometry.coordinates[0]
					}}
				>
					<div>
						<h2>{selectedData.properties.NAME}</h2>
						<p>{selectedData.properties.DESCRIPTIO}</p>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const renderMap = () => {
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<WrappedMap
				googleMapURL="https://maps.googleapis.com/maps/api/js?key="
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
				center={{ lat: -24.9923319, lng: 135.2252427 }}
			/>
		</div>
	);
};

export default renderMap;

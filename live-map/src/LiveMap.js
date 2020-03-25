import React, { useState } from "react";
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	Marker
} from "react-google-maps";
import * as data from "./data/data.json";

function Map() {
	const [selectedData, setSelectedData] = useState(null);

	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: 44.571651, lng: -123.277702 }}
		>
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

import React, { useState } from "react";

export function Home() {
	const [cambioColor, miCambioColor] = useState("roja");

	return (
		<div className="semaforo">
			<div
				onClick={() => miCambioColor("roja")}
				className={
					"luz roja" + (cambioColor === "roja" ? " brillo" : "")
				}></div>
			<div
				onClick={() => miCambioColor("amarilla")}
				className={
					"luz amarilla" +
					(cambioColor === "amarilla" ? " brillo" : "")
				}></div>
			<div
				onClick={() => miCambioColor("verde")}
				className={
					"luz verde" + (cambioColor === "verde" ? " brillo" : "")
				}></div>
		</div>
	);
}

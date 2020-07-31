import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import { NewHome } from "./NewHome.js";
import { Card } from "./Card";

export function Home(props) {
	//const [nombreDelEstado, setNombreDelEstado] = useState(valorinicialdelestado)
	const [people, setPeople] = useState([]);
	const [name, setName] = useState("");
	const [color, setColor] = useState("");

	// if () -> Operadores Terniarios
	// for () -> map,, filter, Find

	return (
		<div className="row">
			<label htmlFor="name">{"Nombre:"} </label>
			<input
				type="text"
				name="name"
				onChange={event => {
					console.log();
					setName(event.target.value);
				}}
				value={name}
			/>

			<label htmlFor="color">{"Color:"} </label>
			<input
				type="text"
				name="color"
				onChange={event => {
					console.log();
					setColor(event.target.value);
				}}
				value={color}
			/>

			<button
				className="btn btn-primary"
				onClick={e => {
					if (name != "" && color != "") {
						let newPerson = {
							name: name,
							color: color
						};
						//Para asignar una sola sola tarjeta
						// let person = {
						// 	name: name,
						// 	color: color
						// };
						//setPeople([person]);

						//Generar una lista para agregar mas cartas
						// let newPeople = [];
						// for (let person of people) {
						// 	newPeople.push(person);
						// }
						// newPeople.push(newPerson);
						// setPeople(newPeople);

						//Metodo mas rapido
						//spread operator ...

						setPeople([...people, newPerson]);
						setName("");
						setColor("");
					} else {
						alert(`Hola, no se pueden crear cartas sin datos`);
					}
				}}>
				{"Agregar"}
			</button>

			{people.map((person, index) => {
				// Renderizar persona para mostrar nombre y color
				return (
					<Card
						key={index}
						name={person.name}
						color={person.color}
						imagen={rigoImage}
					/>
				);
			})}

			{/* <Card name="Oscar" color="red" imagen={rigoImage} /> */}
			{/* 
			props ={
				name = "Oscar"
				color = "blue"
			}
			 */}
		</div>
	);
}

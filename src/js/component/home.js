import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card";

//create your first component
export function Home(props) {
	// const [nombreDelEstado, setNombreDelEstado] = useState(valorInicialDelEstado)
	const [people, setPeople] = useState([]);
	const [name, setName] = useState("");
	const [color, setColor] = useState("");
	return (
		<div className="row">
			<label htmlFor="name">{"Nombre:"}</label>
			<input
				type="text"
				name="name"
				onChange={event => {
					setName(event.target.value);
				}}
				value={name}
			/>
			<label htmlFor="color">{"Color:"}</label>
			<input
				type="text"
				name="color"
				onChange={event => {
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
						// copiar people
						// let newPeople = [];
						// for (let person of people) {
						// 	newPeople.push(person);
						// }
						// newPeople.push(newPerson);
						// setPeople de la copia
						// spread operator ...
						setPeople([...people, newPerson]);
						setName("");
						setColor("");
					} else {
						alert(
							"Hola, no se pueden crear elementos sin datos..."
						);
					}
				}}>
				{"Agregar"}
			</button>

			{people.map((person, index) => {
				// renderizar Card para esta persona, con su nombre y su color
				return (
					<Card
						key={index}
						name={person.name}
						color={person.color}
						imagen={rigoImage}
					/>
				);
			})}
		</div>
	);
}

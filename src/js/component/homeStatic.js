import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import { NewHome } from "./NewHome.js";
import { Card } from "./Card";
import { map } from "jquery";

export function Home(props) {
	let people = [
		{
			name: "Oscar Marino",
			color: "blue"
		},
		{
			name: "Albany",
			color: "brown"
		},
		{
			name: "Francisco",
			color: "orange"
		},

		{
			name: "Luis",
			color: "yellow"
		},
		{
			name: "Yesman",
			color: "lightblue"
		}
	];

	// if () -> Operadores Terniarios
	// for () -> map,, filter, Find

	return (
		<div className="row">
			<div className="text-center mt-5 col">
				<h1>{` Rigo!`}</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-primary">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div>

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

			<Card name="Oscar" color="red" imagen={rigoImage} />
			{/* 
			props ={
				name = "Oscar"
				color = "blue"
			}
			 */}
		</div>
	);
}

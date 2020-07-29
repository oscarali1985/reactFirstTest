import React from "react";
import PropsTypes from "prop-types";

export const Card = ({ name, color = "lightgray", imagen }) => {
	return (
		<div
			className={"card mx-auto my-4"}
			style={{
				width: "18rem",
				backgroundColor: color,
				color: "white"
			}}>
			<img src={imagen} class="card-img-top" alt="imagen de persona" />
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">
					{`Some quick example text to build on the card title`}+
					{`and make up the bulk of the card's content.`}
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.prototype = {
	name: PropsTypes.string.isRequired,
	color: PropsTypes.string
};

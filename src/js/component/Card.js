import React from "react";
import PropTypes from "prop-types";

export const Card = ({ name, color = "lightgray", imagen }) => {
	return (
		<div
			className={"c" + "a" + "r" + "d" + " mx-auto my-4"}
			style={{
				width: "18rem",
				backgroundColor: color,
				color: "white"
			}}>
			<img
				src={imagen}
				className="card-img-top"
				alt="imagen de la persona"
			/>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<p className="card-text">
					{`Soy el profesor de esta cohorte.`}
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	imagen: PropTypes.string
};

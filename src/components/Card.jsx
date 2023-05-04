import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";

const Card = ({ course }) => {
	return (
		<div className="card-wrapper">
			<div
				className="card-top"
				style={{ backgroundImage: `url('${course.image}')` }}
			></div>
			<div className="card-content">
				<h2>{course.title}</h2>
				<div className="author">
					<img src={course.instructors[0].photo} alt="" id="author-image" />
					<div className="author-info">
						<span>{course.instructors[0].name}</span>
						<span>{course.instructor_role}</span>
					</div>
				</div>
				<Link to={`/watch/${course.course_id}`} className="lanjut">
					Lanjut
				</Link>
			</div>
		</div>
	);
};

export default Card;

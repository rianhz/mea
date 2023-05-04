import React, { useEffect, useState } from "react";

import "../css/course.css";
import axios from "axios";
import Card from "../components/Card";

const Course = ({ user }) => {
	const [course, setCourse] = useState([]);
	useEffect(() => {
		getCourse();
	}, []);

	const getCourse = async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/user/${user.user_id}/courses/active`,
			{
				withCredentials: true,
			}
		);
		const a = res.data.data;

		setCourse(a);
	};
	return (
		<div className="course-wrapper">
			<h1 style={{ color: "white", marginLeft: "20px" }}>
				Kelas ({course.length})
			</h1>
			<div className="course-content">
				{course.map((el, i) => {
					return <Card key={i} course={el} />;
				})}
			</div>
		</div>
	);
};

export default Course;

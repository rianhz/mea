import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";
import "../css/learning.css";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Learning = ({ user }) => {
	const params = useParams();
	const { course_id } = params;

	const [detail, setDetail] = useState([]);
	const [chapIndex, setChapIndex] = useState(0);

	useEffect(() => {
		getDetailCourse();
	}, []);
	const getDetailCourse = async () => {
		const res = await axios.get(
			`${process.env.REACT_APP_BASE_URL}/course?course_id=${course_id}&user_id=${user.user_id}`,
			{
				withCredentials: true,
			}
		);

		const a = await res.data.data;
		const b = await a.chapters[0];
		const c = await b.lessons;
		setDetail(c);
	};

	const handlePlusIndex = () => {
		setChapIndex((prev) => prev + 1);
	};
	const handleMinusIndex = () => {
		setChapIndex((prev) => (prev === 0 ? prev : prev - 1));
	};
	return (
		<div
			style={{
				marginTop: "90px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100vw",
				height: "100vh",
			}}
		>
			<div className="video-wrapper">
				<video
					width="100%"
					height="100%"
					controls
					src={`${detail.length === 0 ? "" : detail[chapIndex].link}`}
				></video>
				<div className="next-prev">
					<button className="prev" onClick={() => handleMinusIndex()}>
						<AiOutlineLeft /> Sebelumnya
					</button>
					<button className="next" onClick={() => handlePlusIndex()}>
						<AiOutlineRight /> Selanjutnya
					</button>
				</div>
			</div>
		</div>
	);
};

export default Learning;

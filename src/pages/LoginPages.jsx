import React, { useState } from "react";
import bg from "../images/bg.jpg";
import "../css/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPages = ({ setUser }) => {
	const [ket, setKet] = useState("Silahkan masuk ke akun Komunitas MEA kami");
	const [nama, setNama] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleLogin = async () => {
		if (nama === "" || password === "") {
			setKet("Fill all fields!");
		} else {
			const res = await axios.post(
				`${process.env.REACT_APP_BASE_URL}/login`,
				{
					email: "candidate@mail.com",
					password: 123123,
				},
				{
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					withCredentials: true,
				}
			);

			const a = res.data.data;
			setUser(a);
			navigate("/course");
		}
	};

	return (
		<div className="login-container">
			<div className="login-wrapper">
				<div className="left-content">
					<img src={bg} alt="logo" />
				</div>
				<div className="right-content">
					<div className="btn-wrapper">
						<span className="active">Masuk</span>
						<span>Daftar</span>
					</div>
					<div className="ket">{ket}</div>
					<div className="form-wrapper">
						<div className="input-wrapper">
							<label>Nama Lengkap</label>
							<input type="text" onChange={(e) => setNama(e.target.value)} />
						</div>
						<div className="input-wrapper">
							<label>Kata Sandi</label>
							<input
								type="password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<span id="lupa">Lupa Kata Sandi?</span>
						<br />
						<button id="masuk" onClick={handleLogin}>
							Masuk
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginPages;

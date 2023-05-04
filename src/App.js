import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPages from "./pages/LoginPages";
import Course from "./pages/Course";
import { useState } from "react";
import Learning from "./pages/Learning";
import NavigationBar from "./components/NavigationBar";

function App() {
	const [user, setUser] = useState({});
	return (
		<div className="App">
			<NavigationBar user={user} />
			<Routes>
				<Route path="/" element={<LoginPages setUser={setUser} />}></Route>
				<Route path="/course" element={<Course user={user} />}></Route>
				<Route
					path="/watch/:course_id"
					element={<Learning user={user} />}
				></Route>
			</Routes>
		</div>
	);
}

export default App;

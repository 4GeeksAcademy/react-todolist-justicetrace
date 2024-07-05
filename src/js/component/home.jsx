import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [toDoList, setToDoList] = useState([]);

	return (
		<div className="container bg-light my-4">
			<h1 className="text-info d-flex justify-content-center p-3">To Do List</h1>
			<ul>
				<li>
					<input type="text"
					placeholder="What do we have to accomplish?"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyDown={(e) => {
						 if (e.key === "Enter") {
							{setToDoList(toDoList.concat(inputValue));
								setInputValue("");
							}}
							}}>
					</input>
				</li>
				{toDoList.map((item, index) => (
					<li>
						{item}
						<i class="fa-solid fa-x" onClick={() => setToDoList(toDoList.filter((t, currentIndex) => index != currentIndex))}></i>
					</li>
				))}
			</ul>
			<div className="mx-4">{toDoList.length} Tasks</div>
		</div>
	);
};

export default Home;

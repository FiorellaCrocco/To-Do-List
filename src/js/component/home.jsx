import { bottom } from "@popperjs/core";
import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("");
	const [tasks, setTasks] = useState([]);

	return (
		<>
			<div className="container text-center mt-5">
				<h1>To do</h1>
				<div className="input-group mb-3 text-center d-block ">
					<div className="form-group p-3 .bg-info">
						<label htmlFor="exampleFormControlTextarea1"></label>
						<textarea
							className="form-control"
							id="exampleFormControlTextarea1"
							rows="3"
							value={tarea}
							onChange={e => {
								setTarea(e.target.value);
							}}
							onKeyDown={e => {
								if (e.keyCode == "13") {
									let MostrarLista = [];
									for (let i = 0; i < tasks.length; i++) {
										MostrarLista.push(tasks[i]);
									}
									MostrarLista.push(tarea);
									setTasks(MostrarLista);
									setTarea("");
								}
							}}></textarea>
					</div>
					<ul className="list-group">
						{tasks.map((item, index) => {
							return (
								<>
									<li
										key={index}
										className="list-group-item list-group-item-info">
										{item}
										<i className="fas fa-times float-end"></i>
										removeItem(e){" "}
										{this.props.removeTodo(item)}
										{this.props.todos.map(todo => {
											return (
												<li
													onClick={() => {
														this.removeItem(todo);
													}}
													key={todo}>
													{todo}
												</li>
											);
										})}
									</li>
								</>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Home;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Personlist from "./components/Personlist";
import Addperson from "./components/Addperson";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456" },
		{ name: "Ada Lovelace", number: "39-44-5323523" },
		{ name: "Dan Abramov", number: "12-43-234345" },
		{ name: "Mary Poppendieck", number: "39-23-6423122" }
	]);
	const [keyword, setKeyword] = useState("");
	// const [newName, setNewName] = useState("");
	// const [newNumber, setNewNumber] = useState("");
	// const [newEntry, setNewEntry] = useState({ name: "", number: "" });

	// const addPerson = event => {
	// 	event.preventDefault();
	// 	const checkIfExists = persons.filter(
	// 		person => person.name === newEntry.name
	// 	);
	// 	console.log(checkIfExists.length);

	// 	if (checkIfExists.length !== 0) {
	// 		alert(`${newEntry.name} is already in the phonebook.`);
	// 	} else {
	// 		setPersons(persons.concat(newEntry));
	// 	}
	// 	setNewEntry({ name: "", number: "" });
	// };

	// const handleInputChange = event => {
	// 	// console.log(event.target.value);
	// 	setNewEntry({ ...newEntry, [event.target.name]: event.target.value });
	// };

	const inputChanged = event => {
		setKeyword(event.target.value);
	};

	const savePerson = newEntry => {
		setPersons(persons.concat(newEntry));
	};

	return (
		<div>
			<h1>Phonebook</h1>
			Filter contacts with: <input value={keyword} onChange={inputChanged} />
			<Addperson persons={persons} savePerson={savePerson} />
			<h2>Numbers</h2>
			<Personlist persons={persons} keyword={keyword} />
		</div>
	);
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

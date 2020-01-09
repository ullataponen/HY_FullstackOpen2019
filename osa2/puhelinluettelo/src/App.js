import React, { useState, useEffect } from "react";
import Personlist from "./components/Personlist";
import Addperson from "./components/Addperson";
import personService from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [keyword, setKeyword] = useState("");

	// const hook = () => {
	// 	axios.get("http://localhost:3001/persons").then(response => {
	// 		console.log("promise fulfilled");
	// 		setPersons(response.data);
	// 	});
	// };

	// useEffect(hook, []);

	useEffect(() => {
		personService.getAll().then(initialPersons => {
			setPersons(initialPersons);
		});
	}, []);

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
			<Addperson
				persons={persons}
				savePerson={savePerson}
				setPersons={setPersons}
			/>
			<h2>Numbers</h2>
			<Personlist persons={persons} keyword={keyword} setPersons={setPersons} />
		</div>
	);
};

export default App;
import React, { useState } from "react";
import personService from "./../services/persons";

export default function Addperson({ persons, savePerson, setPersons }) {
	const [newEntry, setNewEntry] = useState({ name: "", number: "" });

	const addPerson = event => {
		event.preventDefault();
		// const person = persons.find(p =>p.name === newEntry.name)
		// const checkIfExists = persons.filter(
		// 	person => person.name === newEntry.name
		// );
		const personToUpdate = persons.find(p => p.name === newEntry.name);
		console.log(personToUpdate);
		if (persons.find(p => p.name === newEntry.name)) {
			const id = personToUpdate.id;
			if (
				window.confirm(
					`${newEntry.name} is already added to phonebook, replace the old number with new one?`
				)
			) {
				personService.update(id, newEntry).then(returnedPerson => {
					setPersons(
						persons.map(person => (person.id !== id ? person : returnedPerson))
					);
				});
			}

			// if (checkIfExists.length !== 0) {
			// alert(`${newEntry.name} is already in the phonebook.`);
		} else {
			personService.create(newEntry).then(returnedPerson => {
				savePerson(returnedPerson);
			});
			// personService.create(newEntry).then(response => {
			// 	savePerson(newEntry);
		}
		// axios.post("http://localhost:3001/persons", newEntry).then(response => {
		// 	savePerson(newEntry);

		// savePerson(newEntry);

		setNewEntry({ name: "", number: "" });
	};

	const handleInputChange = event => {
		setNewEntry({ ...newEntry, [event.target.name]: event.target.value });
	};

	return (
		<div>
			<h2>Add new entry</h2>
			<form onSubmit={event => addPerson(event)}>
				<div>
					name:{" "}
					<input
						name="name"
						value={newEntry.name}
						onChange={event => handleInputChange(event)}
					/>
				</div>
				<div>
					number:{" "}
					<input
						name="number"
						value={newEntry.number}
						onChange={event => handleInputChange(event)}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</div>
	);
}

import React, { useState } from "react";

export default function Addperson({ persons, savePerson }) {
	const [newEntry, setNewEntry] = useState({ name: "", number: "" });

	const addPerson = event => {
		event.preventDefault();
		const checkIfExists = persons.filter(
			person => person.name === newEntry.name
		);
		// console.log(checkIfExists.length);

		if (checkIfExists.length !== 0) {
			alert(`${newEntry.name} is already in the phonebook.`);
		} else {
			savePerson(newEntry);
		}
		setNewEntry({ name: "", number: "" });
	};

	const handleInputChange = event => {
		// console.log(event.target.value);
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

import React from "react";
import Person from "./Person";
import personService from "./../services/persons";

const Personlist = ({ persons, keyword, setPersons }) => {
	const deletePerson = id => {
		const person = persons.find(p => p.id === id);
		if (window.confirm(`Are you sure to delete ${person.name}?`)) {
			personService
				.del(id)
				.then(response => {
					personService.getAll().then(returnedPersons => {
						setPersons(returnedPersons);
					});
				})
				.catch(
					alert(`The person ${person.name} was already deleted from server`)
				);
		}
	};

	if (keyword === "") {
		return persons.map(person => (
			<Person
				person={person}
				key={person.id}
				deletePerson={() => deletePerson(person.id)}
			/>
		));
	} else {
		let filterValue = persons.filter(person =>
			person.name.toUpperCase().includes(keyword.toUpperCase())
		);
		return filterValue.map(person => (
			<Person
				person={person}
				key={person.id}
				deletePerson={() => deletePerson(person.id)}
			/>
		));
	}
};

export default Personlist;

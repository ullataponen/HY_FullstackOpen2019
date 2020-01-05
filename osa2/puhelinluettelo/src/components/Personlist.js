import React from "react";
import Person from "./Person";

const Personlist = ({ persons, keyword }) => {
	if (keyword === "") {
		return persons.map(person => (
			<Person key={person.name} name={person.name} number={person.number} />
		));
	} else {
		let filterValue = persons.filter(person =>
			person.name.toUpperCase().includes(keyword.toUpperCase())
		);
		return filterValue.map(person => (
			<Person key={person.name} name={person.name} number={person.number} />
		));
	}
};

export default Personlist;

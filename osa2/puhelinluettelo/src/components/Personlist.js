import React from "react";
import Person from "./Person";

const Personlist = ({ persons }) => {
	return persons.map(person => (
		<Person key={person.name} name={person.name} number={person.number} />
	));
};

export default Personlist;

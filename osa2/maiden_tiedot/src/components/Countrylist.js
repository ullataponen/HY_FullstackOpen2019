import React from "react";
import Country from "./Country";

const Countrylist = ({ countries, keyword }) => {
	let filterValue = countries.filter(country =>
		country.name.toUpperCase().includes(keyword.toUpperCase())
	);
	// return filterValue.map(country => (
	// 	<Country key={country.name} country={country} filterValue={filterValue} />
	// ));
	if (keyword === "") {
		return <div></div>;
	} else {
		// return filterValue.map(country => (
		// 	<li key={country.name}>{country.name}</li>
		// ));
		if (filterValue.length > 10) {
			return <p>Too many matches, specify another filter</p>;
		} else if (filterValue.length === 1) {
			// return filterValue.map(country => (
			return filterValue.map(country => (
				<Country key={country.name} country={country} />
			));
			// filterValue.map(country => (
			// <li key={country.name}>{country.name}</li>)
		} else {
			return filterValue.map(country => (
				<li key={country.name}>{country.name}</li>
			));
		}
	}
};

export default Countrylist;

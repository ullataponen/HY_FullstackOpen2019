import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then(response => response.data);
};

const create = newEntry => {
	const request = axios.post(baseUrl, newEntry);
	return request.then(response => response.data);
	// return axios.post(baseUrl, newEntry);
};

const update = (id, newEntry) => {
	const request = axios.put(`${baseUrl}/${id}`, newEntry);
	return request.then(response => response.data);
};

const del = id => {
	const request = axios.delete(`${baseUrl}/${id}`);
	return request.then(response => response.data);
};

export default {
	getAll: getAll,
	create: create,
	update: update,
	delete: del
};

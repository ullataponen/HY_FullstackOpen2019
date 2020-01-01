import React from "react";

const Header = props => {
	return (
		<>
			<h1> {props.name} </h1>
		</>
	);
};

const Part = ({ parts }) => (
	<p>
		{parts.name} {parts.exercises}
	</p>
);

const Content = ({ courseparts }) => {
	const parts = () =>
		courseparts.map(part => <Part key={part.id} parts={part} />);
	return (
		<>
			{parts()}
			{/* <Part parts={course[0]} />
			<Part parts={course[1]} />
			<Part parts={course[2]} /> */}
		</>
	);
};

const Total = ({ courseparts }) => {
	let total = courseparts.reduce((sum, part) => sum + part.exercises, 0);

	return (
		<>
			<p>
				<strong>Total number of exercises {total}</strong>
			</p>
		</>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />
			<Content courseparts={course.parts} />
			<Total courseparts={course.parts} />
		</div>
	);
};

export default Course;

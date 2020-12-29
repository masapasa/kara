import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import LazyImage from '../LazyImage';
import './Animals.css';

const Animals: React.FC = () => {
	const [cat, setCat] = useState('');
	const [dog, setDog] = useState('');

	const handleClick = ({
		currentTarget,
	}: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (currentTarget.name === 'cat-btn') searchCat();
		else searchDog();
	};

	const searchDog = () => {
		setDog('');
		return axios
			.get('https://api.thedogapi.com/v1/images/search')
			.then(res => setDog(res.data[0].url))
			.catch(console.error);
	};

	const searchCat = () => {
		setCat('');
		return axios
			.get('https://api.thecatapi.com/v1/images/search')
			.then(res => setCat(res.data[0].url))
			.catch(console.error);
	};

	useEffect(() => {
		searchCat();
		searchDog();
	}, []);

	return (
		<div className="animals">
			<div className="cat-section">
				<LazyImage
					className="cat animal-img"
					src={cat}
					alt="cat"
					fallback={
						<h3 className="loading bg-secondary text-light">Loading cat...</h3>
					}
				/>
				<br />
				<Button
					variant="primary"
					disabled={!cat}
					name="cat-btn"
					onClick={handleClick}>
					{cat.length ? 'Search for another cat' : 'Searching...'}
				</Button>
			</div>
			<div className="dog-section">
				<LazyImage
					className="dog animal-img"
					src={dog}
					alt="dog"
					fallback={
						<h3 className="loading bg-secondary text-light">Loading dog...</h3>
					}
				/>
				<br />
				<Button
					variant="primary"
					disabled={!dog}
					name="dog-btn"
					onClick={handleClick}>
					{dog.length ? 'Search for another dog' : 'Searching...'}
				</Button>
			</div>
		</div>
	);
};

export default Animals;

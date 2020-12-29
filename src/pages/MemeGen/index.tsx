import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { adjustSize } from '../../utils';
import './MemeGen.css';

const MemeGen: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const fileRef = useRef<HTMLInputElement>(null);

	const [text, setText] = useState({ top: '', bottom: '' });
	const [image, setImage] = useState<HTMLImageElement | null>(null);

	useEffect(() => {
		if (!image) return;

		const { current } = canvasRef;
		if (!current) return;

		// Resize image dimensions to fit screen
		const { width, height } = image;
		const nextWidth = Math.min(window.innerWidth * 0.8, width);
		const nextHeight = height * (nextWidth / width);

		const finalHeight = Math.min(window.innerHeight * 0.8, nextHeight);
		const finalWidth = nextWidth * (finalHeight / nextHeight);

		current.width = finalWidth;
		current.height = finalHeight;

		const ctx = current?.getContext('2d');
		if (!ctx) return;

		ctx.drawImage(image, 0, 0, finalWidth, finalHeight);

		ctx.fillStyle = 'white';
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 1.5;

		ctx.textAlign = 'center';
		ctx.textBaseline = 'top';

		const { top, bottom } = text;
		const middle = finalWidth / 2;
		const initialSize = 60;
		const spacing = 10;

		adjustSize(ctx, top.trim(), 'Impact', initialSize, finalWidth * 0.9);

		ctx.fillText(top.trim(), middle, spacing);
		ctx.strokeText(top.trim(), middle, spacing);

		ctx.textBaseline = 'bottom';
		adjustSize(ctx, bottom.trim(), 'Impact', initialSize, finalWidth * 0.9);

		const topHeight = finalHeight - spacing;
		ctx.fillText(bottom.trim(), middle, topHeight);
		ctx.strokeText(bottom.trim(), middle, topHeight);
	}, [text, image]);

	const handleChange = ({
		target: { name, value, files },
	}: React.ChangeEvent<HTMLInputElement>) => {
		if (name !== 'image') {
			// Update either top or bottom text and thats it
			setText(prev => ({ ...prev, [name]: value }));
			return;
		}

		if (!files?.length) return;

		// Image has been selected
		files[0].arrayBuffer().then(buffer => {
			const blob = new Blob([buffer]);
			const url = URL.createObjectURL(blob);

			const newImg = new Image();
			newImg.src = url;
			newImg.onload = () => {
				setImage(newImg);
				URL.revokeObjectURL(url);
			};
		});
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (e.currentTarget.name === 'select') {
			// Open file selection
			fileRef.current?.click();
			return;
		}

		// Download meme
		const { current } = canvasRef;
		if (!current) return;

		const a = document.createElement('a');
		a.download = 'meme.png';
		a.href = current.toDataURL();
		a.click();
		a.remove();
	};

	const { top, bottom } = text;
	return (
		<div className="p-4">
			<h1>Meme Generator</h1>
			<br />
			<p>Upload an image and enter some text 👀</p>
			<hr />

			<canvas ref={canvasRef} className="border"></canvas>

			<Form>
				<Form.Group className="mt-3">
					<input
						type="file"
						accept="image/*"
						name="image"
						ref={fileRef}
						onChange={handleChange}
					/>
					<Button variant="primary" name="select" onClick={handleClick}>
						Select an{image && 'other'} image
					</Button>
				</Form.Group>

				<Form.Group>
					<Form.Label>Top text:</Form.Label>
					<Form.Control
						className="w-25 meme-input"
						name="top"
						value={top}
						onChange={handleChange}
						placeholder="Something pog"
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Bottom text:</Form.Label>
					<Form.Control
						className="w-25 meme-input"
						name="bottom"
						value={bottom}
						onChange={handleChange}
						placeholder="Something else pog"
					/>
				</Form.Group>

				<hr />

				<Button disabled={!image} variant="success" onClick={handleClick}>
					Download meme
				</Button>
			</Form>
		</div>
	);
};

export default MemeGen;

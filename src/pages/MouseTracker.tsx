import React, { useRef } from 'react';

const MouseTracker: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const handleTouch = (e: React.TouchEvent<HTMLCanvasElement>) => {
		const touch = e.touches[0];
		const { left, top } = e.currentTarget.getBoundingClientRect();
		move(touch.clientX - left, touch.clientY - top);
	};

	const handleMove = ({
		clientX,
		clientY,
		currentTarget,
	}: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		const { left, top } = currentTarget.getBoundingClientRect();
		move(clientX - left, clientY - top);
	};

	const move = (x: number, y: number) => {
		const ctx = canvasRef.current?.getContext('2d');
		if (!ctx) return;

		// Background color
		const { width, height } = ctx.canvas;
		ctx.fillStyle = 'lightgray';
		ctx.fillRect(0, 0, width, height);

		const gridSize = 50;
		ctx.strokeStyle = 'gray';
		ctx.lineWidth = 1;

		// Horizontal grid
		for (let y = 0; y < height; y += gridSize) {
			ctx.beginPath();
			ctx.moveTo(0.5, y + 0.5);
			ctx.lineTo(width + 0.5, y + 0.5);
			ctx.stroke();
		}

		// Vertical grid
		for (let x = 0; x < width; x += gridSize) {
			ctx.beginPath();
			ctx.moveTo(x + 0.5, 0.5);
			ctx.lineTo(x + 0.5, height + 0.5);
			ctx.stroke();
		}

		ctx.strokeStyle = 'gray';
		ctx.lineWidth = 4;

		// Horizontal line
		ctx.beginPath();
		ctx.moveTo(0.5, y + 0.5);
		ctx.lineTo(width + 0.5, y + 0.5);
		ctx.stroke();

		// Vertical line
		ctx.beginPath();
		ctx.moveTo(x + 0.5, 0.5);
		ctx.lineTo(x + 0.5, height + 0.5);
		ctx.stroke();

		ctx.strokeStyle = 'red';
		ctx.fillStyle = 'red';

		// Red dot
		ctx.beginPath();
		ctx.arc(x, y, 4, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.fill();

		const fontSize = 20;
		ctx.font = `${fontSize}px Arial`;
		ctx.fillStyle = 'black';
		ctx.textAlign = 'left';
		ctx.textBaseline = 'top';

		// Coordinates text
		ctx.fillText(`X: ${Math.floor(x)}`, 10, 10);
		ctx.fillText(`Y: ${Math.floor(y)}`, 10, fontSize + 20);
	};

	return (
		<canvas
			onMouseMove={handleMove}
			onTouchMove={handleTouch}
			style={{ touchAction: 'none' }}
			ref={canvasRef}
			width={document.body.clientWidth}
			height={550}></canvas>
	);
};

export default MouseTracker;

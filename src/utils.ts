export function adjustSize(
	ctx: CanvasRenderingContext2D,
	text: string,
	font: string,
	startSize: number,
	maxSize: number
) {
	let size = startSize;
	do {
		ctx.font = `${(size -= 5)}px ${font}`;
	} while (ctx.measureText(text).width > maxSize);

	return size;
}

export const shuffle = <T>(arr: T[]) => arr.sort(() => Math.random() - 0.5);

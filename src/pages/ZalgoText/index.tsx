import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { shuffle } from '../../utils';
import zalgoChars from './zalgo.json';

const texts = [
	'poggers',
	'that was very cash money of you',
	'big chungus',
	'yea boiii',
	"very interestingn't",
];

const ZalgoText: React.FC = () => {
	const [zalgo, setZalgo] = useState('');
	const [opts, setOpts] = useState({
		text: shuffle(texts)[0],
		zalgoLevel: 5,
		zalgoUp: false,
		zalgoMiddle: true,
		zalgoDown: true,
	});

	useEffect(() => {
		let newZalgo = '';
		const { text, zalgoLevel } = opts;
		for (const char of text.trim()) {
			for (const listKey of Object.keys(zalgoChars)) {
				if (!opts[listKey as keyof typeof opts]) continue;

				const chars = zalgoChars[listKey as keyof typeof zalgoChars];
				for (let i = 0; i < zalgoLevel; i++) {
					newZalgo += shuffle(chars)[0];
				}
			}
			newZalgo += char;
		}

		setZalgo(newZalgo);
	}, [opts]);

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		setOpts(prev => ({
			...prev,
			[target.name]:
				target.type === 'checkbox' ? target.checked : target.value.trimStart(),
		}));
	};

	const { text, zalgoLevel, zalgoDown, zalgoMiddle, zalgoUp } = opts;
	return (
		<div className="p-3">
			<h1>Zalgo Text Generator</h1>
			<hr />
			<p className="rounded bg-light border border-dark py-5 px-3 zalgo-text">
				{zalgo}
			</p>
			<Form>
				<Form.Group>
					<Form.Control
						value={text}
						onChange={handleChange}
						as="textarea"
						name="text"
						rows={4}
						placeholder="Some text..."
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Zalgo Level:</Form.Label>
					<Form.Control
						type="range"
						name="zalgoLevel"
						maxLength={100}
						onChange={handleChange}
						style={{ width: 200 }}
						value={zalgoLevel}
						min={1}
						max={20}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Check
						onChange={handleChange}
						label="Zalgo going up"
						checked={zalgoUp}
						name="zalgoUp"
					/>
					<Form.Check
						onChange={handleChange}
						label="Zalgo in the middle"
						checked={zalgoMiddle}
						name="zalgoMiddle"
					/>
					<Form.Check
						onChange={handleChange}
						label="Zalgo going down"
						checked={zalgoDown}
						name="zalgoDown"
					/>
				</Form.Group>
			</Form>
		</div>
	);
};

export default ZalgoText;

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Notifications: React.FC = () => {
	const [input, setInput] = useState({
		title: '',
		body: '',
		icon: '',
		silent: false,
	});

	const handleChange = ({
		target: { name, value, type, checked },
	}: React.ChangeEvent<HTMLInputElement>) =>
		setInput(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));

	const { title, body, icon, silent } = input;
	const handleClick = async () => {
		const permission = await Notification.requestPermission();
		if (permission === 'denied') {
			alert('You need to enable notifications for this page!');
			return;
		}

		new Notification(title, {
			body,
			icon,
			silent,
		});
	};

	return (
		<div className="p-3">
			<h1>Notification Sender</h1>
			<Form>
				<Form.Group>
					<Form.Label>Notification title:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={title}
						name="title"
						placeholder="Title here..."
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Notification body:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={body}
						name="body"
						placeholder="Body here..."
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Notification icon:</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={icon}
						name="icon"
						placeholder="Icon URL here..."
					/>
				</Form.Group>
				<Form.Group>
					<Form.Check
						onChange={handleChange}
						label="Silent notification"
						checked={silent}
						name="silent"
					/>
				</Form.Group>

				<hr />
				<Button onClick={handleClick} variant="primary">
					Send notification
				</Button>
			</Form>
		</div>
	);
};

export default Notifications;

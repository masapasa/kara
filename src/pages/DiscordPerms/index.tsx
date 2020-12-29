import React, { useEffect, useState } from 'react';
import Permission from './Permission';
import permissions from './permissions';
import './DiscordPerms.css';

const DiscordPerms: React.FC = () => {
	const [result, setResult] = useState(0);
	const [checks, setChecks] = useState<{ [key: string]: boolean }>(
		Object.keys(permissions).reduce(
			(acc, key) => ({ ...acc, [key]: false }),
			{}
		)
	);

	useEffect(() => {
		const nums = Object.keys(checks)
			.filter(key => checks[key])
			.map(key => permissions[key]);

		if (!nums.length) return setResult(0);
		if (nums.indexOf(8) !== -1) return setResult(8);

		setResult(nums.reduce((acc, num) => acc | num));
	}, [checks]);

	const handleChange = (label: string, checked: boolean) => {
		setChecks({ ...checks, [label]: checked });
	};

	return (
		<div className="p-3">
			<h1>Discord Permissions Calculator</h1>
			<hr />
			<div id="perms-container" className="d-flex flex-wrap flex-column">
				{Object.keys(permissions).map(key => (
					<Permission label={key} key={key} onChange={handleChange} />
				))}
			</div>
			<hr />
			<h3>Result: {result}</h3>
		</div>
	);
};

export default DiscordPerms;

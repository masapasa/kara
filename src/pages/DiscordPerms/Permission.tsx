import React from 'react';
import Form from 'react-bootstrap/Form';

interface Props {
	label: string;
	onChange(label: string, checked: boolean): void;
}

const Permission: React.FC<Props> = ({ label, onChange }) => (
	<div className="d-flex align-items-center m-1">
		<Form.Check
			inline
			onChange={e => onChange(label, e.currentTarget.checked)}
		/>
		{label}
	</div>
);

export default Permission;

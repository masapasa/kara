import React, { useState } from 'react';

interface Props {
	src: string;
	alt: string;
	fallback: any;
	className?: string;
}

const LazyImage: React.FC<Props> = ({ src, alt, fallback, className }) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<>
			<img
				className={className}
				src={src}
				alt={alt}
				style={!loaded ? { display: 'none' } : {}}
				onLoad={() => setLoaded(true)}
				onError={() => setLoaded(false)}
			/>
			{!loaded && fallback}
		</>
	);
};

export default LazyImage;

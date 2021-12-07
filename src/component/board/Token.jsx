import { memo } from 'react';

export const Box = memo(function Box({ title, yellow, preview }) {
    const backgroundColor = yellow ? 'yellow' : 'white';
    return (<div style={{ ...styles, backgroundColor }} role={preview ? 'BoxPreview' : 'Box'}>
			{title}
		</div>);
});

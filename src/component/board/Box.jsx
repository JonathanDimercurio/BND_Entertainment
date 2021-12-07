import { memo } from 'react';
import smokie from '../token/testToken.png'
import styles from './Box.module.css'
export const Box = memo(function Box({ title, yellow, preview }) {
    const backgroundColor = yellow ? 'yellow' : 'white';
    return (<div style={{ ...styles, backgroundColor }} role={preview ? 'BoxPreview' : 'Box'}>
			<img src={smokie} class="rounded-circle" alt="Cinque Terre" width="200" height="200"></img>
		</div>);
});

import { memo } from 'react';
import smokie from './testToken.png'
import styles from './user-token.module.css'

export const Token = memo(function Token({ title, yellow, preview }) {
    const backgroundColor = yellow ? 'yellow' : 'white';
    return (<div style={{ ...styles, backgroundColor }} 
                 role={preview ? 'BoxPreview' : 'Box'}>
			<img src={smokie} class="rounded-circle" 
                 alt="Cinque Terre" width="200" height="200"></img>
		</div>);
});

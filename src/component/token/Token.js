import { memo } from 'react';
import styles from './Box.module.css'
import { useDB } from '../../context/DatabaseContext';

export const Box = memo(function Box({ title, yellow, preview }) {
    const backgroundColor = yellow ? 'yellow' : 'white';


    return (
    
    <div style={{ ...styles, backgroundColor }} role={preview ? 'BoxPreview' : 'Box'}>
		<img src={} class="rounded-circle" alt="Cinque Terre" width="200" height="200"></img>
	</div>
    
    );
});

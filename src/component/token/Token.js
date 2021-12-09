import { memo } from 'react';
import smokie from './testToken.png'

const styles = {
    border: '1px dashed gray',
    borderRadius: '100%',
    padding: '0.5rem 1rem',
    cursor: 'move',

};



export const Token = memo(function Token({ title, yellow, preview }) {
    
    return (<div 
                 style={{ ...styles }}
                 role={preview ? 'tokenPreview' : 'Token'}>

			<img src={smokie} class="rounded-circle" 
                 alt="Cinque Terre" 
                objectFit='cover' 
                width='50' ></img>
		</div>);
});

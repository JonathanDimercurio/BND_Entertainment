import { useEffect, useState, memo } from 'react';
import { Token } from './Token';

const styles = {
    float: 'left',
    boardRadius: '100%',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)'
};
export const TokenDragPreview = memo(function TokenDragPreview({ title }) {
    
    return (<div style={styles} >
				<Token title={title} preview/>
			</div>);
});

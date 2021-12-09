import { useEffect, useState, memo } from 'react';
import { Token } from './Token';
const styles = {
    display: 'inline-block',
    transform: 'rotate(-7deg)',
    WebkitTransform: 'rotate(-7deg)',
};
export const TokenDragPreview = memo(function TokenDragPreview({ title }) {
    const [tickTock, setTickTock] = useState(false);
    useEffect(function subscribeToIntervalTick() {
        const interval = setInterval(() => setTickTock(!tickTock), 500);
        return () => clearInterval(interval);
    }, [tickTock]);
    return (<div style={styles}>
				<Token title={title} yellow={tickTock} preview/>
			</div>);
});

import { memo, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../token/ItemTypes';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Box } from './Box';

function getStyles(left, top, isDragging) {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '40',
        backgroundColor: 'background: rgba(0, 0, 0, 0.0)',
        border: '1px dashed gray',
        padding: '0.5rem 1rem',
        cursor: 'move',
        overflow: 'hidden'
    };
}

export const DraggableBox = memo(function DraggableBox(props) {

    const { id, title, left, top } = props;

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { id, left, top, title },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top, title]);

    useEffect(() => {
        preview(getEmptyImage(), 
        { captureDraggingState: true });
    }, []);

    return (<div ref={drag} 
                style={getStyles(left, top, isDragging)} 
                role="DraggableBox">
			<Box title={title}/>
		</div>);
});

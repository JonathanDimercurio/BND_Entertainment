import { memo, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Token } from './Token'


function getStyles(left, top, isDragging) {
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
        position: 'absolute',
        transform,
        WebkitTransform: transform,
        opacity: isDragging ? 0 : 1,
        height: isDragging ? 0 : '',
    };
}

export const DraggableToken = memo(function DraggableBox(props) {
    const { id, title, left, top } = props;

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: ItemTypes.TOKEN,
        item: { id, left, top, title },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top, title]);
    
    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, []);
    
    return (<div borderRadius='100%' 
                ref={drag} 
            style={getStyles(left, top, isDragging)} 
                role="DraggableToken">
			<Token title={title}/>
		</div>);
});

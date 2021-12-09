import { useCallback, useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../token/ItemTypes';
import { DraggableToken } from '../token/DraggableToken';
import { snapToGrid as doSnapToGrid } from './snapToGrid';
import update from 'immutability-helper';

const styles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 1,
};

export const Container = ({ snapToGrid }) => {
    const [boxes, setBoxes] = useState({
        a: { top: 20, left: 80, title: 'Drag me around', opacity: 1}
    });
    const moveBox = useCallback((id, left, top) => {
        setBoxes(update(boxes, {
            [id]: {
                $merge: { left, top },
            },
        }));
    }, [boxes]);

    const [, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let left = Math.round(item.left + delta.x);
            let top = Math.round(item.top + delta.y);
            if (snapToGrid) {
                ;
                [left, top] = doSnapToGrid(left, top);
            }
            moveBox(item.id, left, top);
            return undefined;
        },
    }), [moveBox]);
    
    return (<div ref={drop} style={styles}>
			{Object.keys(boxes).map((key) => 
            (<DraggableToken 
                key={key} id={key} 
                {...boxes[key]}
            />))}
		</div>);
};

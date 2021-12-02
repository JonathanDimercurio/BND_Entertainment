//     🪶 Author: JD       Refactored: Dec 1, 2021

import {useDndContext,
        useDraggable,
        useDroppable,
        DndContext,
        KeyboardSensor,
        MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';



import {
} from '@dnd-kit/core';

import React, { seState, forwardRef } from "react";
import { CSS } from '@dnd-kit/utilities';

//const DragNDropContext = useDndContext;
//
//
//
//export function useDragNDrop() {
//    return dndContext;
//}
//
//const dragStyle = {
//    touchAction: 'none'
//}


// PROVIDER - - - - - -

//export function DragNDropProvider({ children }) {
    
// Creator
    function Droppable(props) {
        
        const {setNodeRef} = useDroppable({
            id: 'unique-id',
        });
        return (
                <div ref={ setNodeRef } >
                </div>
    );}
    
// Creator
    export function Draggable(props) {
        const {
            attributes,
            listeners,
            setNodeRef,
            transform
        } = useDraggable({ id: props.id });
           
        const Element = props.element || 'div';
    
        const style = {
            transform: CSS.Transform.toString(transform),
            
            width: '100px',
            height: '100px',
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        };
        
        return (
                <button style={style} ref={setNodeRef} {...listeners} {...attributes}>
                    Hello!
                </button >
    );}
    
// Dynamic Draggable.ID using currentUser.uid
    function draggableMarkup(props) {
        const tempId = "draggable-" + props.uid.slice(0,5);
        return <Draggable id={tempId} draggable='true' >Drag me!</Draggable>
    }
    
// Monitor drag and drop events
//    function monitorDnDEvents() {
//        dndContext.useDndMonitor({
//            onDragStart(event) {},
//            onDragMove(event) {},
//            onDragOver(event) {},
//            onDragEnd(event) {},
//            onDragCancel(event) {},
//        });
//    }

// Allows draggables to drop into new parents
    function handleDragToNewParent(event) {
        const { over } = event;
        
        // TODO: need default parent for lost draggables !IMPORTANT
        set(over ? over.id : null)
    }
    
    function handleDragStart(event) {
        aetActiveId(event.active.id);
    }
    
    function handleDragEnd(event) {
        aetActiveId(null);
    }
//}

//}
// value is accessible by all children of dndProvider
//    const value = {
//        Droppable,
//        Draggable,
//        draggableMarkup,
//        monitorDnDEvents,
//        handleDragToNewParent,
//        handleDragStart,
//        handleDragEnd
//    }
//
//    return (<div>
//            <DragNDropContext.Provider
//                value={value} >
//                {children}
//            </DragNDropContext.Provider>
//            </div>
//            )
//}
    
    
    
//    Further POTC features ~~~~
    
//  TODO: Oppotional cell type feature can be implemented
/*  creatCellType API - Water, NoWalk, NoFly, anything...
    
    template ~~~~>
 
    function Droppable(props) {
        const { setNodeRef } = useDroppableI({
        data: {
            accepts: { [] => defineType(props) }
            }
        },
 );
 
    // Custom cells can be defined and stored remotely,
    // eventually requiring less explicite code declarations
 
    // TODO: Further API consideration for custom cells
    function defineType(props) {
        switch (props.cellType) ...
            - DeepWater
            - ShallowWater
            - Wall
            - Cliff
            - CellOnFire
            - Visible
            - Not Visible
            ect ...
            ~~~~~  case(type):
                    
    }
*/
//             Drag and Drop API reference ****!!!!!!

//              dndContext props
//             interface Props {
//               announcements?: Announcements;
//               autoScroll?: boolean;
//               cancelDrop?: CancelDrop;
//               children?: React.ReactNode;
//               collisionDetection?: CollisionDetection;
//               layoutMeasuring?: Partial<LayoutMeasuring>;
//               modifiers?: Modifiers;
//               screenReaderInstructions?: ScreenReaderInstructions;
//               sensors?: SensorDescriptor<any>[];
//               onDragStart?(event: DragStartEvent): void;
//               onDragMove?(event: DragMoveEvent): void;
//               onDragOver?(event: DragOverEvent): void;
//               onDragEnd?(event: DragEndEvent): void;
//               onDragCancel : void;
//             }

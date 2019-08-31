import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
// import Portal from './Components/Portal';
import { Stage, Layer, Rect, Group, Arrow } from 'react-konva';


function ColoredRect(props) {
    const [color] = useState('green');
    let position = props.position;

    let handleDrag = (propsValue) => {
        props.setPosition([propsValue.currentTarget.attrs.y, propsValue.currentTarget.attrs.x]);
    }

    return (<Rect
        // name="rectange-name"
        x={position[1]}
        y={position[0]}
        width={100}
        height={100}
        fill={color}
        shadowBlur={5}
        draggable
        onDragMove={handleDrag}
        name='fillShape'
    />
        // <Group>

        //     {/* інпут прибра для кращої візуалізації */}
        //     {/* <Portal>
        //         <div>
        //             <input style={{
        //                 position: 'absolute',
        //                 top: position[0] + 50,
        //                 left: position[1] + 6,
        //                 width: '100px'
        //             }}
        //                 type='text' placeholder='some text'></input>
        //         </div>
        //     </Portal> */}
        // </Group>
    );

}
function ArrowComponent(props) {
    let positionStart = props.positionStart, positionEnd = props.positionEnd;
    let handleMove = (e) => {

    }

    return (
        <Arrow
            points={[positionStart[1] + 50, positionStart[0] + 50, positionEnd[1] + 50, positionEnd[0] + 50]}
            pointerLength={10}
            pointerWidth={10}
            fill='black'
            stroke='black'
            strokeWidth={4}
            onDragMove={handleMove}
        />
    )
}
function Shape(props) {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const groupEl = useRef(null);
    const layerEl = useRef(null);
    const [positionRect1, setPositionRect1] = useState([100, 100]);
    const [positionRect2, setPositionRect2] = useState([300, 300]);
    const [positionRect3, setPositionRect3] = useState([100, 500]);
    let handDragMoveLayer = (e) => {
        let target = e.target;
        let targetRect = e.target.getClientRect();
        groupEl.current.children.forEach(function (group) {
            if (group === target) {
                return;
            }
            console.log(group);
            if (haveIntersection(group.getClientRect(), targetRect)) {
                group.fill('red');
            } else {
                group.fill('green');
            }
        });
    }
    let haveIntersection = (r1, r2) => {
        return !(
            r2.x > r1.x + r1.width ||
            r2.x + r2.width < r1.x ||
            r2.y > r1.y + r1.height ||
            r2.y + r2.height < r1.y
        );
    }
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer
                ref={layerEl}
                onDragMove={handDragMoveLayer}
            >
                <Group ref={groupEl} >
                    <ColoredRect position={positionRect1} setPosition={setPositionRect1} />
                    <ColoredRect position={positionRect2} setPosition={setPositionRect2} />
                    <ColoredRect position={positionRect3} setPosition={setPositionRect3} />
                </Group>
                <ArrowComponent positionStart={positionRect1} positionEnd={positionRect2} />
                <ArrowComponent positionStart={positionRect2} positionEnd={positionRect3} />
            </Layer>
        </Stage>
    );
}

render(<Shape />, document.getElementById('root'));
import React, { useState, useContext } from 'react';
import { render } from 'react-dom';
import Portal from './Portal';
import { Stage, Layer, Rect, Group, Arrow } from 'react-konva';


function ColoredRect(props) {
    const [color] = useState('green');
    let position = props.position;

    let handleDrag = (propsValue) => {
        props.setPosition([propsValue.currentTarget.attrs.y, propsValue.currentTarget.attrs.x]);
    }

    return (
        <Group>
            <Rect
                // name="rectange-name"
                x={position[1]}
                y={position[0]}
                width={100}
                height={100}
                fill={color}
                shadowBlur={5}
                draggable
                onDragMove={handleDrag}
            />
            <Portal>
                <div>
                    <input style={{
                        position: 'absolute',
                        top: position[0] + 50,
                        left: position[1] + 6,
                        width: '100px'
                    }}
                        type='text' placeholder='some text'></input>
                </div>
            </Portal>
        </Group>
    );

}
function ArrowComponent(props) {
    let positionStart = props.positionStart, positionEnd = props.positionEnd;
    let handleMove = (propsValue) => {
        console.log(propsValue);
    }
    return (
        <Arrow
            // x={positionStart[1]}
            // y={positionStart[0]}
            points={[positionStart[1] + 50, positionStart[0] + 50, positionEnd[1]+50, positionEnd[0] + 50]}
            pointerLength={10}
            pointerWidth={10}
            fill='black'
            stroke='black'
            strokeWidth={4}
            draggable
            onDragMove={handleMove}
        />
    )
}
function Shape(props) {

    const [positionRect1, setPositionRect1] = useState([100, 100]);
    const [positionRect2, setPositionRect2] = useState([300, 100]);
    const [positionRect3, setPositionRect3] = useState([500, 100]);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <ColoredRect position={positionRect1} setPosition = {setPositionRect1}/>
                <ColoredRect position={positionRect2} setPosition = {setPositionRect2}/>
                <ColoredRect position={positionRect3} setPosition = {setPositionRect3}/>
                <ArrowComponent positionStart={positionRect1} positionEnd={positionRect2} />
            </Layer>
        </Stage>
    );
}

render(<Shape />, document.getElementById('root'));
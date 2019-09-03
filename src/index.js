import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';
import Portal from './Components/Portal';
import { Stage, Layer, Rect, Group, Arrow, Tag, Text, Label } from 'react-konva';


function ColoredRect(props) {
    let position = props.position;
    let index = props.index;
    let handleDrag = (propsValue) => {
        props.setPosition(
            position.map((item, Zindex) => {
                if (index === Zindex) return [propsValue.currentTarget.attrs.y, propsValue.currentTarget.attrs.x];
                return item;
            })
        );
    }

    return (
        <Group>
            <Rect
                // name="rectange-name"
                x={position[index][1]}
                y={position[index][0]}
                width={100}
                height={100}
                fill='green'
                shadowBlur={5}
                draggable
                onDragMove={handleDrag}
                name='fillShape'
            />
            {/* <Label
            x={position[index][1]}
            y={position[index][0]}
            opacity={0.75}
        >
            <Tag
                fill='black'
                pointerDirection='down'
                pointerWidth={10}
                pointerHeight={10}
                lineJoin='round'
                shadowColor='black'
                shadowBlur={10}
                shadowOffset={10}
                shadowOpacity={0.5}
            >
                <Text
                    text={'x = ' + position[index][1] + ', y = ' + position[index][0]}
                    fontFamily='Calibri'
                    fontSize={18}
                    padding={5}
                    fill='white'
                />
            </Tag>
        // <Group>

            {/* інпут прибра для кращої візуалізації */}
            <Portal>
                <div>
                    <input style={{
                        position: 'absolute',
                        top: position[index][0] + 50,
                        left: position[index][1] + 6,
                        width: '100px'
                    }}
                        type='text' placeholder={'x = ' + position[index][1] + ', y = ' + position[index][0]}></input>
                </div>
            </Portal>
        </Group>
    );

}
function ArrowComponent(props) {
    let [y1, x1] = props.positionStart, [y2, x2] = props.positionEnd;
    // let handleMove = (e) => {
    let widthAndHeight = props.widthAndHeight;
    // }
    return (
        <Arrow
            points={[x1 + 50, y1 + 120, x2 - 20, y2 + 50]}
            pointerLength={10}
            pointerWidth={10}
            fill='black'
            stroke='black'
            strokeWidth={4}
        // onDragMove={handleMove}
        />
    )
}
function Shape(props) {
    const groupEl = useRef(null);
    const layerEl = useRef(null);
    const arrowGroupEl = useRef(null);
    const stageEl = useRef(null);
    const [positionShape, setPositionShape] = useState([[100, 100], [300, 300], [100, 500]]);
    let handDragMoveLayer = (e) => {
        let target = e.target;
        let targetRect = target.getClientRect();
        let pos = stageEl.current.getPointerPosition();
        let shape = layerEl.current.getIntersection(pos);
       if( shape !== null) console.log(targetRect.x, targetRect.y);
        // let arrow = arrowGroupEl.current.children[0];
        groupEl.current.children.forEach(function (group) {
            if (haveIntersection(group.children[0].getClientRect()) /*targetRect)*/) {
                group.children[0].fill('red');
            } else {
                group.children[0].fill('green');
            }
        });
    }
    let haveIntersection = (r1) => {
        let shape = layerEl.current.getIntersection({x: r1.x, y: r1.y});
        if(shape !== null) console.log(shape);
    }

    return (
        <Stage 
        width={window.innerWidth} 
        height={window.innerHeight} 
        ref={stageEl}
        >
            <Layer
                ref={layerEl}
                onDragMove={handDragMoveLayer}
            >
                <Group ref={groupEl} >
                    {positionShape.map((item, index) => {
                        return <ColoredRect key={index} position={positionShape} index={index} setPosition={setPositionShape} />
                    })}
                </Group>
                <Group ref={arrowGroupEl}>
                    <ArrowComponent positionStart={positionShape[0]} positionEnd={positionShape[1]} />
                    {/* <ArrowComponent positionStart={positionRect2} positionEnd={positionRect3} /> */}
                </Group>
            </Layer>
        </Stage>
    );
}

render(<Shape />, document.getElementById('root'));
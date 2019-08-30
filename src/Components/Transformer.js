import React from 'react'
import Transformer from 'react-konva';

export default class Handler extends React.Component {
    componentDidMount() {
        const stage = this.transformer.getStage();
        const rectangle = stage.findOne(".rectange-name");
        this.transformer.attachTo(rectangle);
        this.transformer.getLayer().batchDraw();
    }
    render() {
        return (
            <Transformer
                ref={node => {
                    this.transformer = node;
                }}
            />
        );
    }
}
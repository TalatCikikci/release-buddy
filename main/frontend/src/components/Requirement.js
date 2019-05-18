import React from 'react';
import * as joint from 'jointjs';

export class Requirement extends React.Component {
    componentDidMount() {
        const station = this.props.station;

        const rect = new joint.shapes.basic.Rect({
            position: {x: station.x, y: station.y},
            size: {width: 100, height: 30},
            attrs: {
                rect: {fill: 'blue'},
                text: {text: station.name, fill: 'white'}
            }
        });
        rect.set('id', station.id);

        rect.on('change:postion', (event) => {
            this.props.onChangedPosition(station.id,
                event.attributes.position.x,
                event.attributes.position.y);
        });
        this.props.container.push(rect);
    }

    render() {
        return null;
    }
}
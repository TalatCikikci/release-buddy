import React from 'react';
import * as joint from 'jointjs';


export class Requirement extends React.Component {
    componentDidMount() {
        const requirement = this.props.requirement;

        const rect = new joint.shapes.basic.Rect({
            position: {x: requirement.x, y: requirement.y},
            size: {width: 100, height: 30},
            attrs: {
                rect: {fill: 'blue'},
                text: {text: requirement.name, fill: 'white'}
            }
        });
        rect.set('id', requirement.id);

        rect.on('change:position', (event) => {
            this.props.onChangedPosition(requirement.id,
                event.attributes.position.x,
                event.attributes.position.y);
        });
        this.props.container.push(rect);
    }

    render() {
        return null;
    }
}
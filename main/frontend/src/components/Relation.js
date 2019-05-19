import React from 'react';
import * as joint from 'jointjs';


export class Relation extends React.Component {
    componentDidMount(){
        const relation = new joint.dia.Link({
            source: {id: this.props.from.id},
            target: {id: this.props.to.id}
        });

        this.props.container.push(relation);
    }

    render(){
        return null;
    }
}
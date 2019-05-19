import React from 'react';
import * as joint from 'jointjs';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {Requirement} from './Requirement'
import {Relation} from './Relation'

export class RelateRequirements extends React.Component {
    constructor(props) {
        super(props);
        this.graph = new joint.dia.Graph();
        this.cells=[];
    }

    componentDidMount() {
        const paper = new joint.dia.Paper({
            el: ReactDOM.findDOMNode(this.refs.placeholder),
            width: 600,
            height: 200,
            model: this.graph,
            gridSize: 1
        });

        this.graph.addCell(this.cells);
    }

    renderConnection(connectionData, connectionId){
        const connections = connectionData.map((v, i , l) => {return{current: v, next: l.get(i+1)}}).filter(relationData => relationData.next);
        const renderedRelations = connections.map((relationData) => {return <Relation container={this.cells} from={relationData.current.toJS()} to={relationData.next.toJS()}/>});
        return renderedRelations;
    }

    renderRequirement(requirementData){
        return <Requirement container={this.cells} requirement={requirementData.toJS()} onChangedPosition={this.props.onChangedPosition}/>
    }

    render() {
        const allRequirements = this.props.requirements.valueSeq().reduce((prev, cur) => {return prev.concat(cur)}).toSet();
        const renderedRequirements = allRequirements.map(this.renderRequirement.bind(this)).toList();
        const renderedRelationsByConnection = this.props.requirements.map(this.renderConnection.bind(this));
        const renderedRelations = renderedRelationsByConnection.valueSeq().reduce((prev, cur) => {return prev.concat(cur)});

        return <div ref="placeholder">{renderedRequirements.concat(renderedRelations)}</div>;
    }
}

function mapStateToProperties(state) {
	return {
		requirements: state.get('requirements')
	};
}

const actionCreators = {
	onChangedPosition: (id, x, y) => {
		return {
			type: 'REQUIREMENT_MOVED',
			id: id,
			x: x,
			y: y
		};
	}
}

export const RelateRequirementsComponent = connect(mapStateToProperties, actionCreators)(RelateRequirements);

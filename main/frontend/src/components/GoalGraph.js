import React from "react";
import * as joint from "jointjs";


class GoalGraph extends React.Component {
    constructor(props) {
        joint.setTheme('modern');
        super(props);
        this.paperDisplay = React.createRef();
        this.graph = new joint.dia.Graph;
        this.cells = [];
    }

    componentDidMount() {
        const paper = new joint.dia.Paper({
            el:this.paperDisplay,
            width:2000,
            height:2000,
            model:this.graph,
            gridSize:1,
            defaultLink: new joint.shapes.standard.Link,
        });

        this.graph.addCells(this.cells);
    }


    render() {
        const allRequirements = this.props.requirements.valueSeq().reduce((prev, cur) => {return prev.concat(cur)}).toSet();
        const renderedRequirements = allRequirements.map(this.renderRequirement.bind(this)).toList();
        const renderedRelationsByConnection = this.props.requirements.map(this.renderConnection.bind(this));
        const renderedRelations = renderedRelationsByConnection.valueSeq().reduce((prev, cur) => {return prev.concat(cur)});


        return <div ref={this.paperDisplay}>{renderedRequirements.concat(renderedRelations)}</div>;
    }
}
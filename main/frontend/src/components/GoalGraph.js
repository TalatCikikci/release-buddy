import React from "react";
import * as joint from "jointjs";
import { connect } from 'react-redux';


class GoalGraph extends React.Component {
    constructor(props) {
        super(props);
        this.paperDisplay = React.createRef();
        this.graph = new joint.dia.Graph({type: 'bpmn'});
        this.cells = [];
    }

    componentDidMount() {
        this.paper = new joint.dia.Paper({
            el:this.paperDisplay.current.value,
            width:2000,
            height:2000,
            model:this.graph,
            gridSize:1,
            defaultLink: new joint.shapes.bpmn.Flow,
        });

        this.paperScroller = new joint.ui.PaperScroller({
            autoResizePaper: true,
            padding: 50,
            paper: paper
        });
    }

    addNode = (title) => {
        let a1 = new joint.shapes.devs.Atomic({
            position: { x: 360, y: 360 },
            inPorts: [''],
            outPorts: ['']
        });

        this.cells.push([a1]);

        this.graph.addCells(this.cells);
    };


    render() {
        if (this.props.newNodes[0] !== null) {
            this.addNode(this.props.newNodes[0]);
        }

        return (<div ref={this.paperDisplay}>

        </div>)
    }
}

function mapStateToProps(state) {
    if (state.nodes.newNodes.length === undefined)
        return { newNodes : [] };
    else
        return { newNodes : state.nodes.newNodes };
}

function mapDispatchToProps(dispatch, props) {
    return {
        generateEvent : function() {
            dispatch(addComponent(props.label));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalGraph)
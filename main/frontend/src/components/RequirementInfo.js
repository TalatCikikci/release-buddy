import React from 'react'
import { connect } from 'react-redux'
import { deleteRequirement } from '../actions/requirementActions'

class RequirementInfo extends React.Component {
    // state = {
    //     post: null
    // }

    // componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //     })
    // }

    handleClick = () => {
        this.props.deleteRequirement(this.props.post.id);
        this.props.history.push('/release-buddy/');
    };

    render () {

        const requirement = this.props.requirement ? (
            <div className="requirement">
                <h4 className="center">{this.props.requirement.title}</h4>
                <p>{this.props.requirement.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Requirement
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">Loading...</div>
        );
        return (
            <div className="container">
                { requirement }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.requirement_id;
    return {
        post: state.requirements.find(requirement => requirement.id === id)
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        deleteRequirement: (id) => { dispatch(deleteRequirement(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RequirementInfo)
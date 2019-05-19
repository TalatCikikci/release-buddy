import React from 'react';
import {connect} from 'react-redux';

import {RelateRequirementsComponent} from './RelateRequirements';

export class RequirementModel extends React.PureComponent {
	render() {
		// if(this.props.activeTabId === 'model') {
			return <RelateRequirementsComponent />;
		// }
		// return <div>Not yet implemented</div>;
	}
}

function mapStateToProperties(state) {
	return {
		activeTabId: state.get('tabs').filter(tab => tab.get('active')).first().get('id')
	};
}

export const RequirementModelComponent = connect(mapStateToProperties)(RequirementModel);
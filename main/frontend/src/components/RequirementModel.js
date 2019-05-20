import React from 'react';
import {connect} from 'react-redux';

import {RelateRequirementsComponent} from './RelateRequirements';
import DataProvider from "./DataProvider";
import Table from "./Table";

export class RequirementModel extends React.PureComponent {
	render() {
		if(this.props.activeTabId === 'model') {
			return <RelateRequirementsComponent />;
		} else if(this.props.activeTabId === 'goals') {
			return <DataProvider endpoint="api/v1/release-buddy/goal" render={data => <Table data={data} />} />;
		}
	}
}

function mapStateToProperties(state) {
	return {
		activeTabId: state.get('tabs').filter(tab => tab.get('active')).first().get('id')
	};
}

export const RequirementModelComponent = connect(mapStateToProperties)(RequirementModel);
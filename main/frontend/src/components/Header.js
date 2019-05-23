import React from 'react';
import {connect} from 'react-redux';

export class Header extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const renderedTabs = this.props.tabs.map((tab) => {
			const className = tab.active ? "active" : "";
			return <li key={tab.id} ><a href="#" className={className} onClick={() => this.props.onTabClicked(tab.id)}>{tab.name}</a></li>
		});
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" href="/">Release-Buddy</a>
					</div>
					<ul className="nav navbar-nav">{renderedTabs}</ul>
			    </div>
			</nav>
		);
	}
}

function mapStateToProperties(state) {
	return {
		tabs: state.get('tabs').toJS()
	};
}
const actionCreators = {
	onTabClicked: (id) => { return { type: 'ON_TAB_CLICKED', tabId: id}; }
};

export const HeaderComponent = connect(mapStateToProperties, actionCreators)(Header);
import React from 'react';
import {connect} from 'react-redux';

export class Header extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const renderedTabs = this.props.tabs.map((tab) => {
			const className = tab.active ? "active" : "";
			return <a href="#" className={className + " navbar-item"} key={tab.id} onClick={() => this.props.onTabClicked(tab.id)}>{tab.name}</a>
		});

		populateBurger();

		return (
			<nav className="navbar is-light" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<a className="navbar-item" href="/">
						<img src="../../static/img/android-chrome-192x192.png" alt="Release Buddy Logo"/>
					</a>

					<a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						{renderedTabs}

{/*					  <div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">
						  More
						</a>

						<div className="navbar-dropdown">
						  <a className="navbar-item">
							About
						  </a>
						  <a className="navbar-item">
							Jobs
						  </a>
						  <a className="navbar-item">
							Contact
						  </a>
						  <hr className="navbar-divider" />
						  <a className="navbar-item">
							Report an issue
						  </a>
						</div>
					  </div>*/}
					</div>

{/*					<div className="navbar-end">
					  <div className="navbar-item">
						<div className="buttons">
						  <a className="button is-primary">
							<strong>Sign up</strong>
						  </a>
						  <a className="button is-light">
							Log in
						  </a>
						</div>
					  </div>
					</div>*/}
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

const populateBurger = () => {
	document.addEventListener('DOMContentLoaded', () => {

	  // Get all "navbar-burger" elements
	  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	  // Check if there are any navbar burgers
	  if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach( el => {
		  el.addEventListener('click', () => {

			// Get the target from the "data-target" attribute
			const target = el.dataset.target;
			const $target = document.getElementById(target);

			// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');
		  });
		});
	  }
	});
};

const actionCreators = {
	onTabClicked: (id) => { return { type: 'ON_TAB_CLICKED', tabId: id}; }
};

export const HeaderComponent = connect(mapStateToProperties, actionCreators)(Header);
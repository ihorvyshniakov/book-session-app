import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../UI/Button'
import UpcomingSessions from '../Sessions/UpcomingSessions'

const Header = () => {
	const [upcomingSessionsVisible, setUpcomingSessionsVisible] =
		useState(false)

	function showUpcomingSessions() {
		setUpcomingSessionsVisible(true)
	}

	function hideUpcomingSessions() {
		setUpcomingSessionsVisible(false)
	}

	return (
		<header id='main-header'>
			{upcomingSessionsVisible && (
				<UpcomingSessions onClose={hideUpcomingSessions} />
			)}
			<h1>ReactMentoring</h1>
			<nav>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
							to='/'
						>
							Our Mission
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'active' : ''
							}
							to='/sessions'
						>
							Browse Sessions
						</NavLink>
					</li>
					<li>
						<Button onClick={showUpcomingSessions}>
							Upcoming Sessions
						</Button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

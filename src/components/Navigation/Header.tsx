import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from '../UI/Button'
import UpcomingSessions from '../Sessions/UpcomingSessions'

const Header = () => {
	const { pathname } = useLocation()
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
						<Link
							className={pathname === '/' ? 'active' : ''}
							to='/'
						>
							Our Mission
						</Link>
					</li>
					<li>
						<Link
							className={pathname === '/sessions' ? 'active' : ''}
							to='/sessions'
						>
							Browse Sessions
						</Link>
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

import Button from '../UI/Button'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const { pathname } = useLocation()

	return (
		<header id='main-header'>
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
						<Button>Upcoming Sessions</Button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header

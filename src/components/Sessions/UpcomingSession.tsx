import { type Session } from '../../store/sessions-context'
import Button from '../UI/Button'

type UpcomingSessionProp = {
	session: Session
	onCancel: () => void
}

const UpcomingSession = ({ session, onCancel }: UpcomingSessionProp) => {
	const { title, summary, date } = session

	return (
		<article className='upcoming-session'>
			<div>
				<h3>{title}</h3>
				<p>{summary}</p>
				<time dateTime={new Date(date).toISOString()}>
					{new Date(session.date).toLocaleDateString('en-US', {
						day: 'numeric',
						month: 'short',
						year: 'numeric'
					})}
				</time>
			</div>
			<p className='actions'>
				<Button onClick={onCancel} textOnly>
					Cancel
				</Button>
			</p>
		</article>
	)
}

export default UpcomingSession

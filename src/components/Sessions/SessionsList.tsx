import SessionItem from './SessionItem'

type SessionsListProp = {
	sessions: Array<{
		id: string
		title: string
		summary: string
		image: string
	}>
}

const SessionsList = ({ sessions }: SessionsListProp) => {
	return (
		<ul id='sessions-list'>
			{sessions.map(session => (
				<li key={session.id}>
					<SessionItem {...session} />
				</li>
			))}
		</ul>
	)
}

export default SessionsList

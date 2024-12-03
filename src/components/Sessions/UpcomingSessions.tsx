import { useEffect, useRef } from 'react'
import Button from '../UI/Button'
import Modal, { type ModalHandle } from '../UI/Modal'
import { useSessionsContext } from '../../store/sessions-context'
import UpcomingSession from './UpcomingSession'

type UpcomingSessions = {
	onClose: () => void
}

const UpcomingSessions = ({ onClose }: UpcomingSessions) => {
	const modal = useRef<ModalHandle>(null)
	const { upcomingSessions, cancelSession } = useSessionsContext()

	const hasSessions = upcomingSessions.length > 0

	function handleCancelSession(sessionId: string) {
		cancelSession(sessionId)
	}

	useEffect(() => {
		if (modal.current) {
			modal.current.open()
		}
	}, [])

	return (
		<Modal onClose={onClose} ref={modal}>
			<h2>Upcoming Sessions</h2>
			<ul>
				{upcomingSessions.map(session => (
					<li key={session.id}>
						<UpcomingSession
							session={session}
							onCancel={() => handleCancelSession(session.id)}
						/>
					</li>
				))}
			</ul>
			{!hasSessions && <p>No upcoming sessions.</p>}
			<p className='actions'>
				<Button onClick={onClose}>Close</Button>
			</p>
		</Modal>
	)
}

export default UpcomingSessions

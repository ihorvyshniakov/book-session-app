import { useEffect, useRef } from 'react'
import Button from '../UI/Button'
import Modal, { type ModalHandle } from '../UI/Modal'
// import { useSessionsContext } from '../../store/sessions-context'

type UpcomingSessions = {
	onClose: () => void
}

const UpcomingSessions = ({ onClose }: UpcomingSessions) => {
	const modal = useRef<ModalHandle>(null)
	// const { upcomingSessions } = useSessionsContext()

	useEffect(() => {
		if (modal.current) {
			modal.current.open()
		}
	}, [])

	return (
		<Modal onClose={onClose} ref={modal}>
			<h2>Upcoming Sessions</h2>
			<Button onClick={onClose}>Close</Button>
		</Modal>
	)
}

export default UpcomingSessions

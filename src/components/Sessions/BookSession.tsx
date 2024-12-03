import { useEffect, useRef } from 'react'
import Modal, { type ModalHandle } from '../UI/Modal'
import Button from '../UI/Button'

type BookSessionProp = {
	session: {
		id: string
		title: string
		summary: string
		image: string
	}
	onDone: () => void
}

const BookSession = ({ session, onDone }: BookSessionProp) => {
	const modal = useRef<ModalHandle>(null)

	useEffect(() => {
		if (modal.current) {
			modal.current.open()
		}
	}, [])

	return (
		<Modal ref={modal} onClose={onDone}>
			<h2>Book Session</h2>
			<Button type='button' onClick={onDone} textOnly>
				Cancel
			</Button>
		</Modal>
	)
}

export default BookSession

import { type FormEvent, useEffect, useRef } from 'react'
import Modal, { type ModalHandle } from '../UI/Modal'
import Button from '../UI/Button'
import Input from '../UI/Input'

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

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const formValues = new FormData(event.currentTarget)
		const data = Object.fromEntries(formValues)
		console.log(data)
		// sessionsCtx.bookSession(session)
		onDone()
	}

	useEffect(() => {
		if (modal.current) {
			modal.current.open()
		}
	}, [])

	return (
		<Modal ref={modal} onClose={onDone}>
			<h2>Book Session</h2>
			<form onSubmit={handleSubmit}>
				<div className='control'>
					<Input
						label='Your name'
						id='name'
						name='name'
						type='text'
					/>
				</div>
				<div className='control'>
					<Input
						label='Your email'
						id='email'
						name='email'
						type='email'
					/>
				</div>
				<p className='actions'>
					<Button onClick={onDone} textOnly>
						Cancel
					</Button>
					<Button>Book Session</Button>
				</p>
			</form>
		</Modal>
	)
}

export default BookSession

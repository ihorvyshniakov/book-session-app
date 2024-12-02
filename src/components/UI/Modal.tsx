import { type ComponentPropsWithRef, ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Button from './Button'

type ModalProp = ComponentPropsWithRef<'dialog'> & {
	children: ReactNode
}

const Modal = (props: ModalProp) => {
	const { children } = props
	const dialogRef = useRef<HTMLDialogElement>(null)

	function onClose() {
		if (dialogRef.current) {
			dialogRef.current.close()
		}
	}

	useEffect(() => {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}, [])

	return createPortal(
		<dialog ref={dialogRef} className='modal' {...props}>
			{children}
			<Button onClick={onClose}>Close</Button>
		</dialog>,
		document.getElementById('modal-root')!
	)
}

export default Modal

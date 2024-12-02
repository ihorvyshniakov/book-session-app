import { type ComponentPropsWithRef, ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type ModalProp = ComponentPropsWithRef<'dialog'> & {
	children: ReactNode
}

const Modal = (props: ModalProp) => {
	const { children } = props
	const dialogRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		if (dialogRef.current) {
			dialogRef.current.showModal()
		}
	}, [])

	return createPortal(
		<dialog ref={dialogRef} className='modal' {...props}>
			{children}
		</dialog>,
		document.getElementById('modal-root')!
	)
}

export default Modal

import {
	type ComponentPropsWithRef,
	forwardRef,
	ReactNode,
	useImperativeHandle,
	useRef
} from 'react'
import { createPortal } from 'react-dom'

export type ModalHandle = {
	open: () => void
}

type ModalProp = ComponentPropsWithRef<'dialog'> & {
	children: ReactNode
}

const Modal = forwardRef((props: ModalProp, ref) => {
	const { children } = props
	const dialogRef = useRef<HTMLDialogElement>(null)

	useImperativeHandle(ref, () => {
		return {
			open: () => {
				if (dialogRef.current) {
					dialogRef.current.showModal()
				}
			}
		}
	})

	return createPortal(
		<dialog ref={dialogRef} className='modal' {...props}>
			{children}
		</dialog>,
		document.getElementById('modal-root')!
	)
})

export default Modal

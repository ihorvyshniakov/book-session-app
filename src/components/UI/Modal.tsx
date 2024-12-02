import { forwardRef, type ReactNode, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

export type ModalHandle = {
	open: () => void
	close: () => void
}

type ModalProp = {
	children: ReactNode
	onClose: () => void
}

const Modal = forwardRef<ModalHandle, ModalProp>(
	({ children, onClose }: ModalProp, ref) => {
		const dialogRef = useRef<HTMLDialogElement>(null)

		useImperativeHandle(ref, () => {
			return {
				open: () => {
					if (dialogRef.current) {
						dialogRef.current.showModal()
					}
				},
				close: () => {
					if (dialogRef.current) {
						dialogRef.current.close()
					}
				}
			}
		})

		return createPortal(
			<dialog ref={dialogRef} className='modal' onClose={onClose}>
				{children}
			</dialog>,
			document.getElementById('modal-root')!
		)
	}
)

export default Modal

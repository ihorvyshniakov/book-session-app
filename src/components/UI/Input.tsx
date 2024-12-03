import { type ComponentPropsWithoutRef } from 'react'

type InputProp = {
	id: string
	label: string
} & ComponentPropsWithoutRef<'input'>

const Input = ({ id, label, ...otherProps }: InputProp) => {
	return (
		<div className='control'>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...otherProps} />
		</div>
	)
}

export default Input

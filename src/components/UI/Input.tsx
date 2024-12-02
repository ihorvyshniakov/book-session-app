import { type ComponentPropsWithoutRef } from 'react'

type InputProp = {
	label: string
} & ComponentPropsWithoutRef<'input'>

const Input = ({ label, ...otherProps }: InputProp) => {
	return (
		<div className='control'>
			<label>
				{label}
				<input {...otherProps} />
			</label>
		</div>
	)
}

export default Input

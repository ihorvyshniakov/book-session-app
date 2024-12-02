import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonProps = {
	to?: string
	textOnly?: boolean
	children: ReactNode
} & ComponentPropsWithoutRef<'button'> &
	LinkProps

const Button = ({ to, textOnly, children, ...props }: ButtonProps) => {
	const myClasses = `button${textOnly ? ' button--text-only' : ''}`

	if (to === undefined) {
		return (
			<button className={myClasses} {...props}>
				{children}
			</button>
		)
	}

	return (
		<Link to={to} className={myClasses} {...props}>
			{children}
		</Link>
	)
}

export default Button

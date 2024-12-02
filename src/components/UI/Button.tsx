import { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type BaseProps = {
	textOnly?: boolean
	children: ReactNode
}

type ButtonProps = BaseProps &
	ComponentPropsWithoutRef<'button'> & { to?: never }
type ButtonLinkProps = BaseProps & LinkProps & { to: string }

function isRouterLink(
	props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
	return 'to' in props
}

const Button = (props: ButtonProps | ButtonLinkProps) => {
	if (isRouterLink(props)) {
		const { to, textOnly, children, ...otherProps } = props

		return (
			<Link
				to={to}
				className={`button${textOnly ? ' button--text-only' : ''}`}
				{...otherProps}
			>
				{children}
			</Link>
		)
	}

	const { textOnly, children, ...otherProps } = props
	return (
		<button
			className={`button${textOnly ? ' button--text-only' : ''}`}
			{...otherProps}
		>
			{children}
		</button>
	)
}

export default Button

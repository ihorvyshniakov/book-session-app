import { createContext, useContext, type ReactNode } from 'react'

export type Session = {
	id: string
	title: string
	summary: string
	description: string
	date: string
	image: string
	duration: number
}

type SessionState = {
	upcomingSessions: Session[]
}

type SessionContextValue = SessionState & {
	bookSession: (session: Session) => void
	cancelSession: (sessionId: string) => void
}

export const SessionsContext = createContext<SessionContextValue | null>(null)

export const useSessionsContext = () => {
	const sessionsCxt = useContext(SessionsContext)

	if (sessionsCxt === null) {
		throw new Error(
			'SessionsContext is null - that should not be the case!'
		)
	}

	return sessionsCxt
}

export default function SessionsContextProvider({
	children
}: {
	children: ReactNode
}) {
	const value: SessionContextValue = {
		upcomingSessions: [],
		bookSession() {},
		cancelSession() {}
	}

	return (
		<SessionsContext.Provider value={value}>
			{children}
		</SessionsContext.Provider>
	)
}

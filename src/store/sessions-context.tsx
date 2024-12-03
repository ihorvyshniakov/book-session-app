import { createContext, useContext, useReducer, type ReactNode } from 'react'

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
			'useSessionsContext must be used within a SessionsContextProvider'
		)
	}

	return sessionsCxt
}

type BookSessionAction = {
	type: 'BOOK_SESSION'
	session: Session
}

type CancelSessionAction = {
	type: 'CANCEL_SESSION'
	sessionId: string
}

type Actions = BookSessionAction | CancelSessionAction

function sessionsReducer(state: SessionState, action: Actions) {
	if (action.type === 'BOOK_SESSION') {
		return {
			upcomingSessions: [...state.upcomingSessions, { ...action.session }]
		}
	}
	if (action.type === 'CANCEL_SESSION') {
		return {
			upcomingSessions: state.upcomingSessions.filter(
				session => session.id !== action.sessionId
			)
		}
	}

	return state
}

export default function SessionsContextProvider({
	children
}: {
	children: ReactNode
}) {
	const [sessionsState, dispatch] = useReducer(sessionsReducer, {
		upcomingSessions: []
	})

	const value: SessionContextValue = {
		upcomingSessions: sessionsState.upcomingSessions,
		bookSession: (session: Session) => {
			dispatch({ type: 'BOOK_SESSION', session })
		},
		cancelSession: sessionId => {
			dispatch({ type: 'CANCEL_SESSION', sessionId })
		}
	}

	return (
		<SessionsContext.Provider value={value}>
			{children}
		</SessionsContext.Provider>
	)
}

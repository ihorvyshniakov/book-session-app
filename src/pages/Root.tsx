import { Outlet } from 'react-router-dom'
import Header from '../components/Navigation/Header'
import SessionsContextProvider from '../store/sessions-context'

export default function Root() {
	return (
		<SessionsContextProvider>
			<Header />
			<Outlet />
		</SessionsContextProvider>
	)
}

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import HomePage from './pages/Home.tsx'
import SessionsPage from './pages/Sessions.tsx'
import SessionPage from './pages/Session.tsx'
import Root from './pages/Root.tsx'

const Router = createBrowserRouter(
	[
		{
			path: '/',
			element: <Root />,
			children: [
				{
					index: true,
					element: <HomePage />
				},
				{ path: 'sessions', element: <SessionsPage /> },
				{ path: 'sessions/:id', element: <SessionPage /> }
			]
		}
	],
	{ basename: '/book-session-app' }
)

function App() {
	return <RouterProvider router={Router} />
}

export default App

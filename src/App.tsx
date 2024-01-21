import './App.css'
import { Content } from './components/content'
import { Header } from './components/header'
import { pizza } from './pizza'

function App() {
	return (
		<main>
			<Header />
			<Content data={pizza} />
		</main>
	)
}

export default App

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Assets from './pages/Assets'
import Apps from './pages/Apps';
import Documents from './pages/Documents'
import Overview from './pages/Overview'
import Projects from './pages/Projects';
import Progress from './pages/Progress';
import Research from './pages/Research';
import Ideation from './pages/Ideation';
import Prototyping from './pages/Prototyping';
import Testing from './pages/Testing';



const App = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path='/' element={<Overview />}></Route>
				<Route path='/projects' element={<Projects />}></Route>
				<Route path='/documents' element={<Documents />}></Route>
				<Route path='/progress' element={<Progress />}></Route>
				<Route path='/research' element={<Research />}></Route>
				<Route path='/ideation' element={<Ideation />}></Route>
				<Route path='/prototyping' element={<Prototyping />}></Route>
				<Route path='/testing' element={<Testing />}></Route>
				<Route path='/assets' element={<Assets />}></Route>
				<Route path='/apps' element={<Apps />}></Route>
			</Routes>
		</div>
	);
}

export default App

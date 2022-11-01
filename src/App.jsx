import { usePlane } from '@react-three/cannon'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Box from './components/Box'

const App = () => {
	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box postition={[3, 0, 0]} />
			<Box postition={[0, 0, 0]} />
			<Box postition={[-3, 0, 0]} />
		</Canvas>
	)
}

export default App

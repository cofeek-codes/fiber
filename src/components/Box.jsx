import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { boxTexture } from '../helpers/textures'

const Box = ({ postition = [] }) => {
	const ref = useRef()
	useFrame(() => {
		ref.current.rotation.x += 0.1
	}, [])

	return (
		<mesh ref={ref} position={postition}>
			<boxGeometry />
			<meshStandardMaterial map={boxTexture} />
		</mesh>
	)
}

export default Box

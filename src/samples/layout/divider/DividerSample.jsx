import React from 'react'
import { Divider } from 'antd'

const DividerSample = () => {
	return (
		<div
			style={{
				border: '1px solid #ccc',
				padding: '30px 20px',
				width: '40vw',
				margin: 'auto',
			}}
		>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos odio
				eligendi sint expedita error. Quasi vitae repudiandae iste eaque earum?
			</p>
			<Divider plain>Text</Divider>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium sed
				molestias iste ea eaque? Explicabo eveniet exercitationem dolorem
				tempora corporis?
			</p>
			<Divider plain orientation='left'>
				Text
			</Divider>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
				sapiente at nisi repellat dolorem nihil harum? Eaque magni saepe vel.
			</p>
			<Divider plain orientation='right'>
				Text
			</Divider>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
				sunt ipsam blanditiis asperiores libero maiores natus dolore. Sunt,
				ullam repellat.
			</p>
		</div>
	)
}

export default DividerSample

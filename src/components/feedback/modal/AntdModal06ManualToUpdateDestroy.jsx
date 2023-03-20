import { Modal, Button, Divider } from 'antd'

const AntdModal06ManualToUpdateDestroy = () => {
	const countDown = () => {
		let secondsToGo = 5
		const modal = Modal.success({
			title: 'This is a notification message',
			content: (
				<>
					<Divider />
					<p>{`This modal will be destroyed after ${secondsToGo} seconds.`}</p>
				</>
			),
			// content: `This modal will be destroyed after ${secondsToGo} seconds.`,
		})
		const timer = setInterval(() => {
			secondsToGo--
			// secondsToGo -= 1
			modal.update({
				content: (
					<>
						<Divider />
						<p>{`This modal will be destroyed after ${secondsToGo} seconds.`}</p>
					</>
				),
				// content: `This modal will be destroyed after ${secondsToGo} seconds.`,
			})
		}, 1000)
		setTimeout(() => {
			clearInterval(timer)
			modal.destroy()
		}, secondsToGo * 1000)
	}

	return <Button onClick={countDown}>Open modal</Button>
}

export default AntdModal06ManualToUpdateDestroy

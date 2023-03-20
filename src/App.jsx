import { Modal, Button, Space } from 'antd'
import { createContext } from 'react'
import AntdModal10UseHooksToGetContext from './components/feedback/modal/AntdModal10UseHooksToGetContext'

const ReachableContext = createContext(null)
const UnreachableContext = createContext(null)

const config = {
	title: 'Use Hooks',
	content: (
		<>
			<ReachableContext.Consumer>
				{(name) => `Reachable: ${name}`}
			</ReachableContext.Consumer>
			<br />
			<UnreachableContext.Consumer>
				{(name) => `Unreachable: ${name}`}
			</UnreachableContext.Consumer>
		</>
	),
}

function App() {
	const [modal, contextHolder] = Modal.useModal()

	return (
		<ReachableContext.Provider value='Light'>
			<Space>
				<Button
					onClick={() => {
						modal.confirm(config)
					}}
				>
					Confirm
				</Button>
				<Button
					onClick={() => {
						modal.warning(config)
					}}
				>
					Warning
				</Button>
				<Button
					onClick={() => {
						modal.info(config)
					}}
				>
					Info
				</Button>
				<Button
					onClick={() => {
						modal.error(config)
					}}
				>
					Error
				</Button>
			</Space>
			{/* `contextHolder` should always be placed inside the context you want to access */}
			{contextHolder}

			{/* Can not access this context since `contextHolder` is not inside it */}
			<UnreachableContext.Provider value='Bamboo' />
		</ReachableContext.Provider>
	)
}

export default App

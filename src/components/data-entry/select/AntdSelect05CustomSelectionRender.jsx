import { Select } from 'antd'
import React from 'react'

// Custom selection render:
// Specify the prop name of option which will be rendered in select box.

const AntdSelect05CustomSelectionRender = () => {
	const { Option } = Select

	const onChange = (value) => {
		console.log(value)
	}

	return (
		<>
			<Select
				style={{ width: '100%' }}
				defaultValue={['china']}
				onChange={onChange}
				mode='multiple'
				optionLabelProp='label'
			>
				<Option value='china' label='China'>
					<div className='demo-option-label-item'>
						<span role='img' aria-label='China'>
							🇨🇳
						</span>
						China (中国)
					</div>
				</Option>
				<Option value='usa' label='USA'>
					<div className='demo-option-label-item'>
						<span role='img' aria-label='USA'>
							🇺🇸
						</span>
						USA (美国)
					</div>
				</Option>
				<Option value='japan' label='Japan'>
					<div className='demo-option-label-item'>
						<span role='img' aria-label='Japan'>
							🇯🇵
						</span>
						Japan (日本)
					</div>
				</Option>
				<Option value='korea' label='Korea'>
					<div className='demo-option-label-item'>
						<span role='img' aria-label='Korea'>
							🇰🇷
						</span>
						Korea (韩国)
					</div>
				</Option>
			</Select>
		</>
	)
}

export default AntdSelect05CustomSelectionRender

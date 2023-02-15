import React from 'react'
import { Row, Col, Divider } from 'antd'
import './GridSample.css'

// GRID SORT
const GridSample = () => {
	const style = {
		padding: '20px 0',
		color: '#fff',
		textAlign: 'center',
	}

	return (
		<div className='wrapper'>
			<Row gutter={[12, 12]}>
				<Col span={18} push={6} style={{ ...style, background: '#5099FF' }}>
					col-18 col-push-6
				</Col>
				<Col span={6} pull={18} style={{ ...style, background: '#1677FF' }}>
					col-6 col-pull-18
				</Col>
			</Row>
		</div>
	)
}

export default GridSample

// ----------------------------------------------------------------------
// // COLUMN OFFSET
// const GridSample = () => {
// 	const style = {
// 		background: '#5099FF',
// 		padding: '20px 0',
// 		color: '#fff',
// 		textAlign: 'center',
// 	}

// 	return (
// 		<div className='wrapper'>
// 			<Row>
// 				<Col span={8} style={style}>
// 					col-8
// 				</Col>
// 				<Col
// 					span={8}
// 					offset={8}
// 					style={{ ...style, backgroundColor: '#1677FF' }}
// 				>
// 					col-8
// 				</Col>
// 			</Row>
// 			<Row>
// 				<Col span={6} offset={6} style={style}>
// 					col-6-offset-6
// 				</Col>
// 				<Col
// 					span={6}
// 					offset={6}
// 					style={{ ...style, backgroundColor: '#1677FF' }}
// 				>
// 					col-6-offset-6
// 				</Col>
// 			</Row>
// 			<Row>
// 				<Col span={12} offset={6} style={style}>
// 					col-12-offset-6
// 				</Col>
// 			</Row>
// 		</div>
// 	)
// }

// export default GridSample

// // ----------------------------------------------------------------------
// // GRID GUTTER
// const GridSample = () => {
// 	const contentStyle = {
// 		background: '#0092FF',
// 		padding: '8px 0',
// 		color: '#fff',
// 		textAlign: 'center',
// 	}

// 	return (
// 		<div className='wrapper'>
// 			<div>
// 				<Divider orientation='left'>Horizontal</Divider>
// 				<Row gutter={16}>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 				</Row>
// 			</div>
// 			<div>
// 				<Divider orientation='left'>Responsive</Divider>
// 				<Row
// 					gutter={{
// 						xs: 8,
// 						sm: 16,
// 						md: 24,
// 						lg: 32,
// 					}}
// 				>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 				</Row>
// 			</div>
// 			<div>
// 				<Divider orientation='left'>Vertical</Divider>
// 				<Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 				</Row>
// 			</div>
// 		</div>
// 	)
// }

// export default GridSample

import React from 'react'
import { Row, Col, Divider } from 'antd'
import './GridSample.css'

// FLEX STRETCH
const GridSample = () => {
  const wrapperStyle = {
    border: '1px solid #ccc',
    padding: '50px 30px',
    width: '75vw',
    margin: 'auto',
  }

  const rowStyle = {
    backgroundColor: '#F5F5F5',
    padding: '8px 0',
  }

  const colStyle = {
    padding: '20px 0',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#1677FF',
  }

  return (
    <div style={wrapperStyle}>
      <Divider orientation='left'>Percentage columns</Divider>
      <Row style={rowStyle}>
        <Col flex={2} style={{ ...colStyle, opacity: 0.8 }}>
          2/5
        </Col>
        <Col flex={3} style={colStyle}>
          3/5
        </Col>
      </Row>
      <Divider orientation='left'>Fill rest</Divider>
      <Row style={rowStyle}>
        <Col flex='100px' style={{ ...colStyle, opacity: 0.8 }}>
          100px
        </Col>
        <Col flex='auto' style={colStyle}>
          Fill rest
        </Col>
      </Row>
      <Divider orientation='left'>Raw flex style</Divider>
      <Row style={rowStyle}>
        <Col flex='1 1 100px' style={{ ...colStyle, opacity: 0.8 }}>
          1 1 100px
        </Col>
        <Col flex='1 1 300px' style={colStyle}>
          1 1 300px
        </Col>
      </Row>
      <Row wrap={false} style={rowStyle}>
        <Col flex='none' style={{ ...colStyle, opacity: 0.8 }}>
          <div style={{ padding: '0 10px' }}>none</div>
        </Col>
        <Col flex='auto' style={colStyle}>
          auto with no-wrap
        </Col>
      </Row>
    </div>
  )
}

export default GridSample

// ----------------------------------------------------------------------
// // ORDER
// const GridSample = () => {
//   const wrapperStyle = {
//     border: '1px solid #ccc',
//     padding: '50px 30px',
//     width: '75vw',
//     margin: 'auto',
//   }

//   const rowStyle = {
//     backgroundColor: '#F5F5F5',
//     padding: '8px 0',
//   }

//   const colStyle = {
//     padding: '20px 0',
//     color: '#fff',
//     textAlign: 'center',
//     backgroundColor: '#1677FF',
//   }

//   return (
//     <div style={wrapperStyle}>
//       <Divider orientation='left'>Normal</Divider>
//       <Row style={rowStyle}>
//         <Col span={6} order={4} style={{ ...colStyle, opacity: 0.8 }}>
//           1 col-order-4
//         </Col>
//         <Col span={6} order={3} style={colStyle}>
//           2 col-order-3
//         </Col>
//         <Col span={6} order={2} style={{ ...colStyle, opacity: 0.8 }}>
//           3 col-order-2
//         </Col>
//         <Col span={6} order={1} style={colStyle}>
//           4 col-order-1
//         </Col>
//       </Row>
//       <Divider orientation='left'>Reponsive</Divider>
//       <Row style={rowStyle}>
//         <Col
//           span={6}
//           xs={{ order: 1 }}
//           sm={{ order: 2 }}
//           md={{ order: 3 }}
//           lg={{ order: 4 }}
//           style={{ ...colStyle, opacity: 0.8 }}
//         >
//           1 col-order-responsive
//         </Col>
//         <Col
//           span={6}
//           xs={{ order: 2 }}
//           sm={{ order: 1 }}
//           md={{ order: 4 }}
//           lg={{ order: 3 }}
//           style={colStyle}
//         >
//           2 col-order-responsive
//         </Col>
//         <Col
//           span={6}
//           xs={{ order: 3 }}
//           sm={{ order: 4 }}
//           md={{ order: 2 }}
//           lg={{ order: 1 }}
//           style={{ ...colStyle, opacity: 0.8 }}
//         >
//           3 col-order-responsive
//         </Col>
//         <Col
//           span={6}
//           xs={{ order: 4 }}
//           sm={{ order: 3 }}
//           md={{ order: 1 }}
//           lg={{ order: 2 }}
//           style={colStyle}
//         >
//           4 col-order-responsive
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default GridSample

// // ----------------------------------------------------------------------

// // ALIGNMENT (VERTICAL ARRANGEMENT)
// const DemoBox = ({ value, children }) => {
//   return (
//     <p
//       style={{
//         height: `${value}px`,
//         lineHeight: `${value}px`,
//       }}
//     >
//       {children}
//     </p>
//   )
// }
//
// const GridSample = () => {
//   const wrapperStyle = {
//     border: '1px solid #ccc',
//     padding: '50px 30px',
//     width: '75vw',
//     margin: 'auto',
//   }

//   const rowStyle = {
//     backgroundColor: '#F5F5F5',
//     padding: '8px 0',
//   }

//   const colStyle = {
//     padding: '20px 0',
//     color: '#fff',
//     textAlign: 'center',
//     backgroundColor: '#1677FF',
//   }

//   return (
//     <div style={wrapperStyle}>
//       <Divider orientation='left'>Align Top</Divider>
//       <Row justify='center' align='top' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           <DemoBox value={100}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={colStyle}>
//           <DemoBox value={50}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           <DemoBox value={120}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={colStyle}>
//           <DemoBox value={80}>col-4</DemoBox>
//         </Col>
//       </Row>
//       <Divider orientation='left'>Align Middle</Divider>
//       <Row justify='space-around' align='middle' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           <DemoBox value={100}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={colStyle}>
//           <DemoBox value={50}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           <DemoBox value={120}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={colStyle}>
//           <DemoBox value={80}>col-4</DemoBox>
//         </Col>
//       </Row>
//       <Divider orientation='left'>Align Bottom</Divider>
//       <Row justify='space-between' align='bottom' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           <DemoBox value={100}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={colStyle}>
//           <DemoBox value={50}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           <DemoBox value={120}>col-4</DemoBox>
//         </Col>
//         <Col span={4} style={colStyle}>
//           <DemoBox value={80}>col-4</DemoBox>
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default GridSample

// // ----------------------------------------------------------------------
// // TYPESETTING (HORIZONTAL ARRANGEMENT)
// const GridSample = () => {
//   const wrapperStyle = {
//     border: '1px solid #ccc',
//     padding: '50px 30px',
//     width: '75vw',
//     margin: 'auto',
//   }

//   const colStyle = {
//     padding: '20px 0',
//     color: '#fff',
//     textAlign: 'center',
//     backgroundColor: '#1677FF',
//   }

//   const rowStyle = {
//     backgroundColor: '#F5F5F5',
//     padding: '8px 0',
//   }

//   return (
//     <div style={wrapperStyle}>
//       <Divider orientation='left'>sub-element align left</Divider>
//       <Row justify='start' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//       </Row>
//       <Divider orientation='left'>sub-element align center</Divider>
//       <Row justify='center' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//       </Row>
//       <Divider orientation='left'>sub-element align right</Divider>
//       <Row justify='end' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//       </Row>
//       <Divider orientation='left'>sub-element monospaced arrangement</Divider>
//       <Row justify='space-between' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//       </Row>
//       <Divider orientation='left'>sub-element align full</Divider>
//       <Row justify='space-around' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//       </Row>
//       <Divider orientation='left'>sub-element align evenly</Divider>
//       <Row justify='space-evenly' style={rowStyle}>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle, opacity: 0.8 }}>
//           col-4
//         </Col>
//         <Col span={4} style={{ ...colStyle }}>
//           col-4
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default GridSample

// // ----------------------------------------------------------------------
// // GRID SORT
// const GridSample = () => {
//   const style = {
//     padding: '20px 0',
//     color: '#fff',
//     textAlign: 'center',
//   }

//   return (
//     <div className='wrapper'>
//       <Row>
//         <Col span={18} push={6} style={{ ...style, background: '#5099FF' }}>
//           col-18 col-push-6
//         </Col>
//         <Col span={6} order={} pull={18} style={{ ...style, background: '#1677FF' }}>
//           col-6 col-pull-18
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default GridSample

// // ----------------------------------------------------------------------
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
// 				<Col span={6} order={} offset={6} style={style}>
// 					col-6-offset-6
// 				</Col>
// 				<Col
// 					span={6} order={}
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
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
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
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 				</Row>
// 			</div>
// 			<div>
// 				<Divider orientation='left'>Vertical</Divider>
// 				<Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 					<Col span={6} order={}>
// 						<div style={contentStyle}>col-6</div>
// 					</Col>
// 				</Row>
// 			</div>
// 		</div>
// 	)
// }

// export default GridSample

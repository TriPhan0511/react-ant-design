import { message, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'

const sachsoServerUrl = 'https://server.sachso.edu.vn' 
const ApplicationName = 'QUIZCITY_DEV'
const moduleId = '0CDD3C5D-0BCE-49F2-91EF-DDE9AD0CEF34'

const AntdUpload02Avatar = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [imageUrl, setImageUrl] = useState()

	return <div>AntdUpload02Avatar</div>
}

export default AntdUpload02Avatar

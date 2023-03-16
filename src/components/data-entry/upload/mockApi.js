// Mock API
const sachsoServerUrl = 'https://server.sachso.edu.vn'
const ApplicationName = 'QUIZCITY_DEV'
const moduleId = '0CDD3C5D-0BCE-49F2-91EF-DDE9AD0CEF34'

const action = `${sachsoServerUrl}/api/v1.0/dynamic/upload-files`
const headers = {
	Authorization: 'Basic 12C1F7EF9AC8E288FBC2177B7F54D',
	ApplicationName,
}
const data = {
	entityId: '46d30c13-3555-4395-8b83-4b9b2f7402ae',
	subModuleName: 'RESOURCES',
	entityName: 'Questions',
	moduleName: 'SACHSO',
	moduleId,
}

export default {
	action,
	headers,
	data,
}

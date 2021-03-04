
let configUrl = 'https://water.cuihp.top/'
const baseUrl = configUrl


export default {
	config: {
		baseUrl: baseUrl,
		header: {
			// 'Content-Type': 'application/json;charset=UTF-8',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: {},
		method: "GET",
		dataType: "json",
		/* 如设为json，会对返回的数据做一次 JSON.parse */
		responseType: "text",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	request(options) {
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		return new Promise((resolve, reject) => {
			let _config = null

			options.complete = (response) => {
				let statusCode = response.statusCode
				response.config = _config
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				// 统一的响应日志记录
				// _reslog(response)

				if (statusCode === 200) { //成功
					resolve(response);
				} else if (statusCode == 401) {
					//TODO token 失效 处理
					return
				} else {
					reject(response)
				}
			}

			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()
			
			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}

			// 统一的请求日志记录
			// _reqlog(_config)

			wx.request(_config);
		});
	},
	upload(options) {
		if (!options) {
			options = {}
		}
		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.filePath=options.filePath
		options.formData = options.formData || {}
		options.name = options.name || 'file'
		return new Promise((resolve, reject) => {
			let _config = null
			options.complete = (response) => {
				let statusCode = response.statusCode
				response.config = _config
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				// 统一的响应日志记录
				// _reslog(response)
				if (statusCode === 200) { //成功
					resolve(response);
				} else if (statusCode == 401) {
					//TODO token 失效 处理
					return
				} else {
					reject(response)
				}
			}
			_config = Object.assign({}, this.config, options)
			_config.requestId = new Date().getTime()
			
			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			// 统一的请求日志记录
			// _reqlog(_config)
			wx.uploadFile(_config);
		});
	},
	get(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data.params
		options.method = 'GET'
		return this.request(options)
	},
	post(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'POST'
		return this.request(options)
	},
	put(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'PUT'
		return this.request(options)
	},
	delete(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	},
	options(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'OPTIONS'
		return this.request(options)
	},
	head(url, data, options) {
		if (!options) {
			options = {}
		}
		options.url = url
		options.data = data
		options.method = 'HEAD'
		return this.request(options)
	},
	upload(url,data,options){
		if (!options) {
			options = {}
		}
		options.url = url
		options.formData = data.formData
		options.name=data.name
		options.filePath = data.filePath
		return this.upload(options)
	}
}

//获取请求参数
function getQueryVariable(variable) {
	let url = window.location.href
	url = url.substring(url.indexOf('?') + 1)
	var reg = new RegExp("(^|&)" + variable + "=([^&]*)(&|$)");
	var r = url.match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return "";
}

/**
 * 请求接口日志记录
 */
function _reqlog(req) {
	if (process.env.NODE_ENV === 'development') {
		console.log("【" + req.requestId + "】 Addr：" + req.url)
		if (req.data) {
			console.log("【" + req.requestId + "】 options：" + JSON.stringify(req.data))
		}
	}
	//TODO 调接口异步写入日志数据库
}

/**
 * 响应接口日志记录
 */
function _reslog(res) {
	if (process.env.NODE_ENV === 'development') {
		console.log("【" + res.config.requestId + "】 Addr：" + res.config.url)
		if (res.config.data) {
			console.log("【" + res.config.requestId + "】 option：" + JSON.stringify(res.config.data))
		}
		console.log("【" + res.config.requestId + "】 Result：" + JSON.stringify(res))
	}


}

import axios from "axios";
const request = axios.create({
	baseURL: "http://127.0.0.1:5173/api",
	method: "post"
})
function dataFormatting(data: { [key: string]: any }) {
	// 将null改为undefined
	for (const key in data) {
		const val = data[key]
		data[key] = (val === null ? undefined : val)
		if(val instanceof Object){
			dataFormatting(val)
		}
	}
}
request.interceptors.response.use(function (response) {
	dataFormatting(response.data)
	return response;
}, function (error) {
	console.log("请求错误");
	return Promise.reject(error);
});
export default request
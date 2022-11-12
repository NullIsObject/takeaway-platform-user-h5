type AnyObject = {
	[key: string | number]: any
}
export const clonObject = <Obj>(obj: Obj & AnyObject): Obj => {
	// 接收一个对象，反回克隆的对象
	return JSON.parse(JSON.stringify(obj))
}
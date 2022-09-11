//接收一个可滚动的dom节点，返回一个可以根据内部某个节点位置进行锚点跳转的方法
function localLink(scrollBox: HTMLElement) {
	let linkTo: (target: HTMLElement) => void
	return linkTo = (target) => {
		let scrollBoxPageY = scrollBox.getBoundingClientRect().y
		let childPageY = target.getBoundingClientRect().y
		scrollBox.scrollTop -= scrollBoxPageY - childPageY
	}
}
export default localLink
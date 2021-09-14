import './header.scss';

const headerStructure = () => {
	class Header {
		constructor(element) {
			this.element = element;
			this.init()
		}
	
		init() {
			console.log("class Header - is loaded", this.element);
		}
	}


}

export default headerStructure;
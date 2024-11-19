export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async getdataApi () {
		try {
				const response = await Api1.run();
			return response;
		}
		catch(error) {
			showAlert(error)
			return [];
		}
	}
}
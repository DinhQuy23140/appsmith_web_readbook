export default {
	async getdataApi () {
		try {
				const response = await Api1.run();
			return response;
		}
		catch(error) {
			showAlert(error)
			return [];
		}
	},
	
	Input1onTextChanged () {
		if(inputSearch.text.length == 0){
				this.getdataApi();
		}
		else{
			try {
				const response = Api2.run();
				return response;
			}
			catch(error){
				showAlert(error);
			}
		}
	},
	async getdata () {
	if(inputSearch.text.length > 0){
		return await Api2.run();
	}
}
}
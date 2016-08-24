'use strict';


mydataMod.factory('localStorageFct', function () {
	var STORAGE_ID = 'myDataJson';

	return {
		getItem: function () {
			if(localStorage.getItem(STORAGE_ID)==null){
				localStorage.setItem(STORAGE_ID, JSON.stringify(myDataJson));
			} 
				
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		setItem: function (mydata) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(mydata));
		},

		clearlocalStorage: function(){
			localStorage.clear();
		}
	};
});
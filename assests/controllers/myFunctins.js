'use strict';

mydataMod.controller('myDataController', function myDataController($scope, $location, localStorageFct) {
	var mydata = $scope.list = localStorageFct.getItem();

	$scope.$watch('mydata', function () { 
			localStorageFct.setItem(mydata);
	}, true);

	$scope.fncClkCss = function (item,val) {
		var jN;
		var iN = item.i;

		for(var key in item) { 
		    if (item[key]===val) { jN = key.replace('cell',''); }
		} 
		var objNew1 = document.getElementById("txt"+iN+"_0");
		var objNew2 = document.getElementById("txt0_"+(eval(jN)-1));
		if(document.getElementById("numJn").value.length!=0 || document.getElementById("numIn").value.length!=0){
			var jNOld = document.getElementById("numJn").value;
			var iNOld = document.getElementById("numIn").value;
			var objOld1 = document.getElementById("txt"+iNOld+"_0");
			var objOld2 = document.getElementById("txt0_"+(eval(jNOld)-1));

			objOld1.style.color="#898787";
			objOld2.style.color="#898787";
			objOld1.style.fontSize ="12px";
			objOld2.style.fontSize ="12px";
			document.getElementById("genInp").value = "";
		}
		objNew1.style.color="#217346";
		objNew2.style.color="#217346";
		objNew1.style.fontSize ="1rem";
		objNew2.style.fontSize ="1rem";
		document.getElementById("numJn").value = jN;
		document.getElementById("numIn").value = iN;
		document.getElementById("genInp").value = document.getElementById("txt"+iN+"_"+jN).value;
	};

	$scope.buildLocalStorage = function (){
		localStorageFct.setItem(mydata);
	};

	$scope.sendData = function (item,val){
		document.getElementById("genInp").value = val;
	};

	$scope.sendDataFeedback = function (item,val){
		var jN = document.getElementById("numJn").value;
		var iN = document.getElementById("numIn").value;
		if(jN != "" || iN != ""){ document.getElementById("txt"+iN+"_"+jN).value = val; }
	};

	$scope.buildLocalStorageFeedback = function (list){
		var jN = document.getElementById("numJn").value;
		var iN = document.getElementById("numIn").value;
		if(jN != "" || iN != ""){
			var dopTxt = "cell"+jN;
			for(var key in list.lines[iN-1]) { 
		    	if (key===dopTxt) {
		    		list.lines[iN-1][key] = document.getElementById("genInp").value;
		    	}
		    }
			localStorageFct.setItem(list);
		}
	};

	$scope.clearAll = function () {
		localStorageFct.clearlocalStorage();
		mydata = $scope.list = localStorageFct.getItem();
	};
});

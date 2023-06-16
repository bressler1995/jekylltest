function newsletterLoad() {
	elementToObserve = document.getElementById('tops_ccform');

	// create a new instance of 'MutationObserver' named 'observer', 
	// passing it a callback function
	observer = new MutationObserver(function(mutationsList, observer) {
		console.log(mutationsList);
		let tops_emailList_label = document.getElementById("list_memberships_label_0");
		let tops_emailList_listsLabel = document.getElementsByClassName("ctct-form-checkbox-label");
		
		if(tops_emailList_label != null) {
			tops_emailList_label_inner = tops_emailList_label.innerHTML;
			tops_emailList_label.innerHTML = "Sign Up!";
		}
		
		if(tops_emailList_listsLabel != null) {
			if(tops_emailList_listsLabel.length > 0) {
				for(i = 0; i < tops_emailList_listsLabel.length) {
					let currentlistlabel = tops_emailList_listsLabel[i];
					console.log(currentlistlabel.innerHTML);
				}
			}
		}
		
	});

	// call 'observe' on that MutationObserver instance, 
	// passing it the element to observe, and the options object
	observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});
}

newsletterLoad();
function newsletterLoad() {
	elementToObserve = document.getElementById('tops_ccform');

	// create a new instance of 'MutationObserver' named 'observer', 
	// passing it a callback function
	observer = new MutationObserver(function(mutationsList, observer) {
		console.log(mutationsList);
		let tops_emailList_label = document.getElementById("list_memberships_label_0");
		
		if(tops_emailList_label != null) {
			tops_emailList_label_inner = tops_emailList_label.innerHTML;
			tops_emailList_label.innerHTML = "Sign Up!";
		}
	});

	// call 'observe' on that MutationObserver instance, 
	// passing it the element to observe, and the options object
	observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});
}

newsletterLoad();
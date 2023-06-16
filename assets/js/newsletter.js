function newsletterLoad() {
	elementToObserve = document.getElementById('tops_ccform');

	// create a new instance of 'MutationObserver' named 'observer', 
	// passing it a callback function
	observer = new MutationObserver(function(mutationsList, observer) {
		console.log(mutationsList);
	});

	// call 'observe' on that MutationObserver instance, 
	// passing it the element to observe, and the options object
	observer.observe(elementToObserve, {characterData: false, childList: true, attributes: false});
}

newsletterLoad();
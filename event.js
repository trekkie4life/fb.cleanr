function clearIt() {
	var elements = ['rightCol', 'groupsNav', 'appsNav', 'interestsNav', 'pagesNav'];

	for(i = 0; i < elements.length; i++) {
	   document.getElementById(elements[i]).style.display = "none";
	}
}

window.onload = clearIt();


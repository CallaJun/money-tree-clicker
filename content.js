if(window.location.href.includes("www.neopets.com/donations.phtml")){
    var donated = document.getElementsByClassName("donated");
    for(i=donated.length-1; i>1; i--) {
    	if(donated[i].getElementsByClassName("name")[0].innerHTML.includes("Old") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Rotting") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Omelette") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Petrified") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Kelp") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Jelly") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Baggus") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Broken") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Sand") ||
    		donated[i].getElementsByClassName("name")[0].innerHTML.includes("Reject")) {
    		//console.log(donated[i].getElementsByClassName("name")[0].innerHTML);
    	} else {
    		console.log("Attempted: " + donated[i].getElementsByClassName("name")[0].innerHTML);
    		window.open(donated[i].getElementsByTagName("a")[0].href,'_blank');
    	}
        //window.open(donated[i].getElementsByTagName("a")[0].href,'_blank');
    }
}
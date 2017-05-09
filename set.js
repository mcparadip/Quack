var termids = document.querySelectorAll(".TermText")
var terms = {}

for (var i=0; i<termids.length/2; i++) {
    terms[termids[i].innerText] = termids[i+1].innerText
    terms[termids[i+1].innerText] = termids[i].innerText
}

chrome.storage.sync.set({"set": terms}, function() {
    alert("This set has been loaded! You are now ready to play.")
});

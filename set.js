var termids = document.querySelectorAll(".TermText")

console.log(termids.length)
var terms = {}

for (var i=0; i<termids.length; i+=2) {
    terms[termids[i].innerText] = termids[i+1].innerText
    terms[termids[i+1].innerText] = termids[i].innerText
}

console.log(Object.keys(terms).length)

chrome.storage.sync.set({"set": terms}, function() {
    alert("This set has been loaded! You are now ready to play.")
});

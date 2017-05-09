var termids = document.querySelectorAll(".TermText")
var terms = {}

for (var i=0; i<termids.length/2; i++) {
    terms[termids[i].innerHTML.replace(/<!--[\s\S]*?-->/g, "")] = termids[i+1].innerHTML.replace(/<!--[\s\S]*?-->/g, "")
    terms[termids[i+1].innerHTML.replace(/<!--[\s\S]*?-->/g, "")] = termids[i].innerHTML.replace(/<!--[\s\S]*?-->/g, "")
}

chrome.storage.sync.set({"set": terms}, function() {});

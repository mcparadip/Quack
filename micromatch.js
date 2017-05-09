chrome.storage.sync.get("set", function(items) {
  if (items.set != undefined && items.set != "") {
    var cardids = document.querySelectorAll(".text")
    for (var i=0; i<cardids.length; i++) {
      cards[cardids[i].innerText] = cardids[i]
    }
    document.querySelectorAll(".UIButton")[1].click()
    while (cardids.length > 0) {
      cardids[0].click()
      var target = cards[itemes.set[cardids[0].innerText]]
      target.click()
      cardids.splice(0, 1)
      var index = cardids.indexOf(target)
      cardids.splice(index, 1)
    }
  }
});

chrome.storage.sync.get("set", function(items) {
  if (items.set != undefined && items.set != "") {
    try {
      document.querySelectorAll(".UIButton")[1].click()
    } catch(err) {}

    var cardids = Array.from(document.querySelectorAll(".text"))

    var cards = {}

    for (var i=0; i<cardids.length; i++) {
      cards[cardids[i].innerText] = cardids[i]
    }

    while (cardids.length > 0) {
      cardids[0].click()
      console.log(items.set)
      console.log(cardids[0].innerText)
      console.log(items.set[cardids[0].innerText])
      console.log(cards)
      var target = cards[items.set[cardids[0].innerText]]
      target.click()
      cardids.splice(0, 1)
      var index = cardids.indexOf(target)
      cardids.splice(index, 1)
    }
  }
});

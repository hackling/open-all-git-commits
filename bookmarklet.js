nodeList = document.querySelectorAll("div.text-right code a.Link--secondary")
nodeList.forEach(function(node, _currentIndex, _listObject ) {
  window.open(node.href, '_blank');
})

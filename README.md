Opens all commits in PR in new tabs.

How to use:

1. Drag this link to your bookmark bar: [Open Commits](javascript:(function(\)%7BnodeList%20%3D%20document.querySelectorAll(%22div.text-right%20code%20a.Link--secondary%22\)%3BnodeList.forEach(function(node%2C%20_currentIndex%2C%20_listObject\)%20%7Bwindow.open(node.href%2C%20'_blank'\)%3B%7D\)%7D\)(\))
2. Open a PR and click the link


Built with help from the following:
- https://www.w3schools.com/jsref/met_document_queryselectorall.asp
- https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
- https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window
- https://mrcoles.com/bookmarklet/#


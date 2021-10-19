Opens all commits in PR in new tabs.

How to use:


1. Drag the following link into your bookmark bar: [Open Commits](javascript:(function()%7BnodeList%20%3D%20document.querySelectorAll(%22div.text-right%20code%20a.Link--secondary%22)%3BnodeList.forEach(function(node%2C%20_currentIndex%2C%20_listObject)%20%7Bwindow.open(node.href%2C%20'_blank')%3B%7D)%7D)())
![Dragging to Bookmark bar](/images/drag-to-bookmark-bar.gif)
2. Open a PR and click the link
![Dragging to Bookmark bar](/images/opening-all-the-commits.gif)

Note: If you only see one tab open, you might need to disable your popup blocker.

Built with help from the following:
- https://mrcoles.com/bookmarklet/# (Great tool for creating your own bookmarklets)
- https://www.w3schools.com/jsref/met_document_queryselectorall.asp
- https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
- https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window
- https://github.com/retrography/VUTt (Figuring out how to get bookmarket links to work on gh-pages)

// btadd.addEventListener('findBestComment')
// alert('trigg')

// chrome.browserAction.onClicked.addListener(function(document) {
//     alert('working?');
// });

var thumb_list = [];
var elements = document.getElementsByClassName("emoji mr-1");
// alert('foobar')

for(var i = 0; i< elements.length; i++){

    if (elements[i].getAttribute('alias') === "+1") {
        thumb_list.push(parseInt(elements[i].nextSibling.nodeValue.trim()))

    }
}

var largest_thumb_value = Math.max.apply(null, thumb_list);

for(var i = 0; i< elements.length; i++){
    if (parseInt(elements[i].nextSibling.nodeValue.trim()) == largest_thumb_value && elements[i].getAttribute('alias') === "+1") {
        elements[i].style.visibility = 'visible';
        elements[i].style.display = 'block';
        elements[i].tabIndex = "-1";
        elements[i].focus();
        break;
    }
}

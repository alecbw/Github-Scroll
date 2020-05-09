var thumb_list = [];
var elements = document.getElementsByClassName("emoji mr-1");

for(var i = 0; i< elements.length; i++){
    if (elements[i].getAttribute('alias') === "+1") {
        thumb_list.push(parseInt(elements[i].nextSibling.nodeValue.trim()))
    }
}

var largest_thumb_value = Math.max.apply(null, thumb_list);

for(var i = 0; i< elements.length; i++){
    if (parseInt(elements[i].nextSibling.nodeValue.trim()) == largest_thumb_value && elements[i].getAttribute('alias') === "+1") {
        elements[i].focus();
    }
}

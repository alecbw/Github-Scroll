var thumb_list = []
var elements = document.getElementsByClassName("emoji mr-1");
for(var i = 0; i< elements.length; i++){
    // console.log(elements[i].nextSibling.nodeValue)
    thumb_list.push(parseInt(elements[i].nextSibling.nodeValue.trim()))
}

var largest_thumb_value = Math.max.apply(null, thumb_list);

for(var i = 0; i< elements.length; i++){
    if (parseInt(elements[i].nextSibling.nodeValue.trim()) == largest_thumb_value) {
        console.log(elements[i].nextSibling);
        // elements[i].scrollIntoView();
        elements[i].style.visibility = 'visible';
        elements[i].style.display = 'block';
        elements[i].tabIndex = "-1";
        elements[i].focus();
        // window.scroll(0,findPos(elements[i]);
    }
}

console.log(thumb_list)
console.log(largest_thumb_value)




    // thumb_list.push(elements[i].nextSibling.nodeValue.trim())



const y = element.getBoundingClientRect().top + window.scrollY;
window.scroll({
  top: y,
  behavior: 'smooth'
});

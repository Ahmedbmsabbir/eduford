// ----------------scrollbtn------------------
var mybuton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5)
    {
        myBtn.style.display = "block";
    }
    else
    {
        myBtn.style.display = "none";
    }
}

function scrollUp(){
    document.body.scrollTop = "0";
    document.documentElement.scrollTop = "0";
    
}

// ----------------scrollbtn------------------




// -----------------navbar------------------

var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right="0";
        }
        function hideMenu(){
            navLinks.style.right="-200px";
        }

// -----------------navbar------------------
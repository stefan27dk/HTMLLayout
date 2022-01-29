
// Functions

// TOGGLE-LEFT-BAR
toggleVerticalBar = (e) =>
{ 
    let current = e.currentTarget;
    let leftBar = document.getElementById(current.value);
    if(leftBar.style.display === 'none')
    {
        leftBar.style.display = 'block';
        current.style.transform = "rotate(360deg)";
    }
    else    
    {
        leftBar.style.display = 'none';
        current.style.transform = "rotate(-180deg)";
    }
}

 

// Event Listeners
// LEFTBAR
document.getElementById('toggleLeftBarButton').addEventListener("click", toggleVerticalBar);

//RIGHTBAR
document.getElementById('toggleRightBarButton').addEventListener("click", toggleVerticalBar);





 


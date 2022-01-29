
// Functions

// TOGGLE-LEFT-BAR
toggleVerticalBar = (e) =>
{ 
    let current = e.currentTarget;
    let currentBar = document.getElementById(current.value);
    if(currentBar.style.display === 'none')
    {
        currentBar.style.display = 'block';
        current.style.transform += "rotate(360deg)";
        current.style.transform = "translateY(-50%)"; // Keep at the center after show bar
    }
    else    
    {
        currentBar.style.display = 'none';
        current.style.transform = "translateY(-50%)"; // Keep at the center after show bar
        current.style.transform += "rotate(-180deg)";
    }
}

 

// Event Listeners
// LEFTBAR
document.getElementById('toggleLeftBarButton').addEventListener("click", toggleVerticalBar);

//RIGHTBAR
document.getElementById('toggleRightBarButton').addEventListener("click", toggleVerticalBar);





 


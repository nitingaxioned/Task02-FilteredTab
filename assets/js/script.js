// variables declerations

// for node lists
var imgNodeList = document.querySelectorAll(".img-list li");
var btnNodeList = document.querySelectorAll(".filter-btn");
// for btn
var all_btn = document.querySelector(".all");
var lawn_btn = document.querySelector(".lawn-care");
var garden_btn = document.querySelector(".garden-care");
var plant_btn = document.querySelector(".planting");

// Event Listners

all_btn.addEventListener("click", function(){
    imgNodeList.forEach(function(val){
        val.classList.remove("hide-me");
    });
    btnNodeList.forEach(function(val){
        val.classList.remove("selected");
    });
    all_btn.classList.add("selected");
});

lawn_btn.addEventListener("click", function(){
    imgNodeList.forEach(function(val){
        if(val.classList.contains("lawn"))
            val.classList.remove("hide-me");
        else
            val.classList.add("hide-me");
    });
    btnNodeList.forEach(function(val){
        val.classList.remove("selected");
    });
    lawn_btn.classList.add("selected");
});

garden_btn.addEventListener("click", function(){
    imgNodeList.forEach(function(val){
        if(val.classList.contains("garden"))
            val.classList.remove("hide-me");
        else
            val.classList.add("hide-me");
    });
    btnNodeList.forEach(function(val){
        val.classList.remove("selected");
    });
    garden_btn.classList.add("selected");
});

plant_btn.addEventListener("click", function(){
    imgNodeList.forEach(function(val){
        if(val.classList.contains("plant"))
            val.classList.remove("hide-me");
        else
            val.classList.add("hide-me");
    });
    btnNodeList.forEach(function(val){
        val.classList.remove("selected");
    });
    plant_btn.classList.add("selected");
});














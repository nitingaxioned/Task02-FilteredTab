// variables declerations
var imgNodeList = document.querySelectorAll(".img-list li");
var btnNodeList = document.querySelectorAll(".filter-btn");

// Event Listners
btnNodeList.forEach(function(val, index){
    val.addEventListener("click", function(){
        btnNodeList.forEach(function(value){ value.classList.remove("selected"); });
        val.classList.add("selected");
        imgNodeList.forEach(function(value){
            value.classList.remove("hide-me");
            if(index==1)
                value.classList.contains("lawn") || value.classList.add("hide-me");
            if(index==2)
                value.classList.contains("garden") || value.classList.add("hide-me");
            if(index==3)
                value.classList.contains("plant") || value.classList.add("hide-me");
        });
    });
});
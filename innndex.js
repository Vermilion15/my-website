function toggleDetail(e){
    const target = $(e.target);

    if($(target).hasClass("active")){
        $(target).removeClass("active").html("More Info");
    }else{
        $(target).addClass("active").html("Less Info");
    }


    const item = $(target).parents(".about-item");
    const detail = $(item).children(".about-item-detail")

    $(detail).slideToggle()
}

function submitForm(e){
    e.preventDefault();
    const name = document.getElementById("inpt-name");
    const email = document.getElementById("inpt-email");
    const message = document.getElementById("inpt-message");

    if(!name.value){
        alert("name is required")
    }else if(!email.value){
        alert("email is required")
    }else if(!message.value){
        alert("message must be fulfilled")
    }else{
        alert("form submitted")
        name.value = "";
        email.value ="";
        message.value = "";
    }
}
/*
* Application Name: 10-Dollar
* Author: Jossy Jones
* Note: This page controls the frontend logic for the above named application
*/

const App = (function app() {
    function stickyHeader(){
        let premier = document.querySelector("section.premier");
        let header = document.querySelector("#app>header")
        window.addEventListener("scroll", function(e){
            if(window.scrollY > premier.scrollHeight){
                header.classList.add("fixed");
                document.querySelector(".logo img").setAttribute("src","../assets/img/logo.png");
            } else {
                header.classList.remove("fixed");
                document.querySelector(".logo img").setAttribute("src","../assets/img/logo-alt.png")
            };
        })
    };

    function alertMessages(type,message){
        type = typeof(type) == "string" && ["success","danger","neutral"].indexOf(type) > -1 ? type : "neutral";
        message = typeof(message) == "string" && message.trim().length > 0 ? message.trim() : 'No message';

        // Alert Template
        let alertTemplate = document.createElement("div");
        alertTemplate.classList.add(`${type}-alert`);
        alertTemplate.innerHTML = `<p>${message}</p>`;

        if(type && message){
            // Check alert type
            document.querySelector("body").append(alertTemplate);
        }
        setTimeout(() => {
            document.querySelector("body").removeChild(alertTemplate);
        }, 10000);
    };

    //@Todo Remove this code and create your custom form validation
    function formValidation(){
        let forms = document.querySelectorAll("form");
        forms.forEach(form=>{
            form.addEventListener("submit",e=>{
                e.preventDefault();
                let valid = form.checkValidity();
                console.log(valid);
                if(valid){
                    alertMessages("success","submitted successfully!");
                } else {
                    alertMessages("danger", "failed!");
                }
            })
        })
    }

    init = function init() {
        stickyHeader();
        formValidation();
    }

    let public = {
        alertMessages: alertMessages,
        init: init,
    }

    return public
})();

App.init();
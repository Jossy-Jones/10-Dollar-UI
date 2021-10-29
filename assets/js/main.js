/*
* Application Name: 10-Dollar
* Author: Jossy Jones
* Note: This page controls the frontend logic for the above named application
*/

"use strict"

const App = (function app() {
    // Sticky header
    function stickyHeader() {
        let premier = document.querySelector("section.premier");
        let header = document.querySelector("#app>header");
        if (premier) {
            window.addEventListener("scroll", function (e) {
                if (window.scrollY > premier.scrollHeight) {
                    header.classList.add("fixed");
                    document.querySelector(".logo img").setAttribute("src", "../assets/img/logo.png");
                } else {
                    header.classList.remove("fixed");
                    document.querySelector(".logo img").setAttribute("src", "../assets/img/logo-alt.png")
                };
            })
        }
    };

    function alertMessages(type, message) {
        type = typeof (type) == "string" && ["success", "danger", "neutral"].indexOf(type) > -1 ? type : "neutral";
        message = typeof (message) == "string" && message.trim().length > 0 ? message.trim() : 'No message';

        // Alert Template
        let alertTemplate = document.createElement("div");
        alertTemplate.classList.add(`${type}-alert`);
        alertTemplate.innerHTML = `<p>${message}</p>`;

        if (type && message) {
            // Check alert type
            document.querySelector("body").append(alertTemplate);
        }
        setTimeout(() => {
            document.querySelector("body").removeChild(alertTemplate);
        }, 10000);
    };

    function upgamesDropdown() {
        let gameCats = document.querySelectorAll(".category[data-category]>._title");
        gameCats.forEach(gameCat => {
            gameCat.addEventListener("click", (e) => {
                let toggle = gameCat.parentElement.getAttribute("data-toggle");
                if (toggle == "open") {
                    gameCat.parentElement.setAttribute("data-toggle", "close");
                }
                if (toggle == "close") {
                    gameCat.parentElement.setAttribute("data-toggle", "open");
                }
            })
        })
    }

    //@Todo Remove this code and create your custom form validation
    function formValidation(form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            let valid = form.checkValidity();
            if (valid) {
                alertMessages("success", "submitted successfully!");
            } else {
                alertMessages("danger", "failed!");
            }
        })
    }

    function init() {
        stickyHeader();
        formValidation();
        upgamesDropdown();
    }

    let publicKeys = {
        alertMessages: alertMessages,
        init: init,
    }

    return publicKeys
})();

App.init();
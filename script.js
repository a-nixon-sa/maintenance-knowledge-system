/* =====================================================
   MAINTLINK
   DIGITAL MAINTENANCE KNOWLEDGE SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".nav-button");
    const menuButton = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const sections = document.querySelectorAll(".content-section");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            const target = this.dataset.section;

            buttons.forEach(btn => {

                btn.classList.remove("active");

            });

            this.classList.add("active");

            sections.forEach(section => {

                section.classList.remove("active-section");

            });

            document
                .getElementById(target)
                .classList.add("active-section");

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    });
     /* =====================================
       Save PM Demo
    ===================================== */

    const saveButton = document.querySelector(".save-button");

    if (saveButton) {

        saveButton.addEventListener("click", function () {

            this.innerHTML =
                '<i class="fa-solid fa-circle-check"></i> PM Record Saved';

            this.style.background = "#22C55E";

            setTimeout(() => {

                this.innerHTML =
                    '<i class="fa-solid fa-floppy-disk"></i> Save PM Record';

                this.style.background = "";

            }, 2500);

        });

    }   
        /* =====================================
       Prevent form submission (Demo)
    ===================================== */

    const pmForm = document.querySelector(".pm-form");

    if (pmForm) {

        pmForm.addEventListener("submit", function (e) {

            e.preventDefault();

        });

    }

       /* =====================================
       Mobile Menu
    ===================================== */

    if (menuButton) {

        menuButton.addEventListener("click", function () {

            sidebar.classList.toggle("open");

        });

    }

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            if (window.innerWidth <= 768) {

                sidebar.classList.remove("open");

            }

        });

     });

});

/* =====================================================
   MAINTLINK
   DIGITAL MAINTENANCE KNOWLEDGE SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".nav-button");
    const menuButton = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

   const technicianInput = document.getElementById("technician");

const dateInput = document.getElementById("pmDate");

const shiftInput = document.getElementById("shift");

const notesInput = document.getElementById("notes");

const historyTimeline = document.getElementById("historyTimeline");
   
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
   Save PM Record
===================================== */

const saveButton = document.getElementById("savePM");

if (saveButton) {

    saveButton.addEventListener("click", function () {

        const record = {

            technician: technicianInput.value,

            date: dateInput.value,

            shift: shiftInput.value,

            notes: notesInput.value

        };

        let history =
            JSON.parse(localStorage.getItem("pmHistory")) || [];

        history.unshift(record);

        localStorage.setItem(
            "pmHistory",
            JSON.stringify(history)
        );

        alert("PM Record Saved!");

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

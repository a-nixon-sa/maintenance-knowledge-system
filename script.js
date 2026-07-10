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

   /* =====================================
   Render Maintenance History
===================================== */

function renderHistory() {

    if (!historyTimeline) return;

    const history =
        JSON.parse(localStorage.getItem("pmHistory")) || [];

    historyTimeline.innerHTML = "";

    history.forEach(record => {

        const checks = record.checks.length
            ? record.checks.map(item => `<li>✔ ${item}</li>`).join("")
            : "<li>No checklist items completed.</li>";

        const timelineItem = document.createElement("div");

        timelineItem.className = "timeline-item";

        timelineItem.innerHTML = `

            <div class="timeline-date">

                ${record.date}

            </div>

            <div class="timeline-content">

                <h3>Preventive Maintenance Completed</h3>

                <p><strong>Technician:</strong> ${record.technician}</p>

                <p><strong>Team:</strong> ${record.team}</p>

                <p><strong>Notes:</strong> ${record.notes || "None"}</p>

                <br>

                <strong>Completed Checklist</strong>

                <ul>

                    ${checks}

                </ul>

            </div>

        `;

        historyTimeline.appendChild(timelineItem);

    });

}
   
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

        // Get every checked PM item
        const completedChecks = [];

        document.querySelectorAll(".pm-check").forEach(check => {

            if (check.checked) {

                completedChecks.push(
                    check.parentElement.textContent.trim()
                );

            }

        });

        const record = {

            technician: technicianInput.value,

            date: dateInput.value,

            team: shiftInput.value,

            notes: notesInput.value,

            checks: completedChecks

        };

        let history =
            JSON.parse(localStorage.getItem("pmHistory")) || [];

        history.unshift(record);

        localStorage.setItem(
            "pmHistory",
            JSON.stringify(history)
        );

        renderHistory();

        technicianInput.value = "";

        dateInput.value = "";

        shiftInput.value = "";

        notesInput.value = "";

        document.querySelectorAll(".pm-check").forEach(check => {

            check.checked = false;

        });

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

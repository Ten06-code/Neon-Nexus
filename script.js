function selectSubject(subject) {
    localStorage.setItem("selectedSubject", subject);
    window.location.href = "year.html";
}
// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    // Save mode to local storage
    let mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", mode);
}

// Load Dark Mode from Local Storage
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

// Subject Selection
function selectSubject(subject) {
    localStorage.setItem("selectedSubject", subject);
    window.location.href = "year.html";
}

function selectYear(year) {
    localStorage.setItem("selectedYear", year);
    window.location.href = "qna.html";
}
/*
function showPDF(type) {
    let selectedSubject = localStorage.getItem("selectedSubject");
    let selectedYear = localStorage.getItem("selectedYear");

    if (!selectedSubject || !selectedYear) {
        alert("Please select a subject and year first.");
        return;
    }

    let pdfPath = `pdfs/${selectedSubject}/${selectedYear}_${type}.pdf`;
    let pdfViewer = document.getElementById("pdf-viewer");

    pdfViewer.src = pdfPath;
    currentPDF = pdfPath;

    // Show PDF container & download button
    document.querySelector(".pdf-container").style.display = "flex";
    document.querySelector(".download-container").style.display = "flex";
}

function downloadPDF() {
    if (currentPDF) {
        window.open(currentPDF, "_blank");
    }
}
*/

/*function showPDF(type) {
    let selectedYear = localStorage.getItem("selectedYear");
    let selectedSubject = localStorage.getItem("selectedSubject");

    if (!selectedYear || !selectedSubject) {
        alert("Please select a subject and a year first.");
        return;
    }

    let pdfPath = `pdfs/${selectedSubject}/${selectedYear}_${type}.pdf`; // Example: pdfs/Computer Science/2023_Question.pdf

    let pdfViewer = document.getElementById("pdf-viewer");
    pdfViewer.src = pdfPath;

    // Show PDF container & download button
    document.querySelector(".pdf-container").style.display = "flex";
    document.querySelector(".download-container").style.display = "flex";
}
*/

function showPDF(type) {
    let selectedYear = localStorage.getItem("selectedYear");
    let selectedSubject = localStorage.getItem("selectedSubject");

    if (!selectedYear || !selectedSubject) {
        alert("Please select a subject and a year first.");
        return;
    }

    let pdfPath = `pdfs/${selectedSubject}/${selectedYear}_${type}.pdf`;

    // Detect if the user is on a mobile device
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        // Open PDF in a new tab (better compatibility for mobile users)
        window.open(pdfPath, "_blank");
    } else {
        // Display PDF in iframe for desktop users
        let pdfViewer = document.getElementById("pdf-viewer");
        pdfViewer.src = pdfPath;

        // Show PDF container & download button
        document.querySelector(".pdf-container").style.display = "flex";
        document.querySelector(".download-container").style.display = "flex";
    }
}




/*
function selectYear(year) {
    localStorage.setItem("selectedYear", year);
    window.location.href = "qna.html";
}
// Get the selected subject from local storage
let selectedSubject = localStorage.getItem("selectedSubject");

// Set the title dynamically
document.getElementById("subject-title").innerText = selectedSubject + " - Select a Year";

// Function to load PDFs
function showPDF(year) {
    let pdfPath = `pdfs/${selectedSubject}/${year}.pdf`; // Adjust this path to your actual PDF storage location
    let pdfViewer = document.getElementById("pdf-viewer");
    pdfViewer.src = pdfPath;
    
    // Show PDF container
    document.querySelector(".pdf-container").style.display = "flex";
}
let currentPDF = "";

// Function to load PDFs
function showPDF(year) {
    let pdfPath = `pdfs/${selectedSubject}/${year}.pdf`;
    let pdfViewer = document.getElementById("pdf-viewer");
    
    pdfViewer.src = pdfPath;
    currentPDF = pdfPath;

    // Show PDF container & download button
    document.querySelector(".pdf-container").style.display = "flex";
    document.querySelector(".download-container").style.display = "flex";
}

// Function to download PDFs
function downloadPDF() {
    if (currentPDF) {
        window.open(currentPDF, '_blank');
    }
}
*/

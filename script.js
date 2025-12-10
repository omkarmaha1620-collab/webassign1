// script.js

// Run when DOM is ready
$(document).ready(function () {
    // Set current year in footer
    const year = new Date().getFullYear();
    $("#year").text(year);

    // Button on home page to go to resume
    $("#viewResumeBtn").on("click", function () {
        window.location.href = "resume.html";
    });

    // Add a small fade-in effect to main content
    $("main").css("display", "none").fadeIn(500);

    // Highlight active nav item (extra safety if class missing)
    const path = window.location.pathname;
    $(".nav-links a").each(function () {
        const href = $(this).attr("href");
        if (path.endsWith(href)) {
            $(".nav-links a").removeClass("active");
            $(this).addClass("active");
        }
    });

    // Add shadow to header on scroll for professional feel
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 8) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });
});

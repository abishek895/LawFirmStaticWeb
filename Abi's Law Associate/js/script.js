document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       AOS INITIALIZATION
       ========================================================= */

    if (typeof AOS !== "undefined") {

        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 80
        });

    }


    /* =========================================================
       NAVBAR SCROLL EFFECT
       ========================================================= */

    const navbar =
        document.getElementById("mainNavbar");


    function handleNavbarScroll() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    handleNavbarScroll();


    window.addEventListener(
        "scroll",
        handleNavbarScroll,
        {
            passive: true
        }
    );


    /* =========================================================
       MOBILE NAVBAR CLOSE
       ========================================================= */

    const mainMenu =
        document.getElementById("mainMenu");


    if (mainMenu) {

        const navLinks =
            mainMenu.querySelectorAll(
                ".nav-link, .nav-cta"
            );


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth < 992 &&
                        mainMenu.classList.contains("show")
                    ) {

                        const navbarToggle =
                            document.querySelector(
                                ".navbar-toggler"
                            );


                        if (navbarToggle) {

                            navbarToggle.click();

                        }

                    }

                }
            );

        });

    }


    /* =========================================================
       ACTIVE NAVIGATION
       ========================================================= */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            "#mainMenu .nav-link"
        );


    function updateActiveNavigation() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 140;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(function (link) {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (
                href === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    updateActiveNavigation();


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        {
            passive: true
        }
    );


    /* =========================================================
       SMOOTH MOUSE WHEEL SCROLL
       ========================================================= */

    let targetScroll =
        window.scrollY;


    let currentScroll =
        window.scrollY;


    let isAnimating =
        false;


    const scrollSpeed =
        0.08;


    function smoothScrollAnimation() {

        currentScroll +=
            (
                targetScroll -
                currentScroll
            ) * scrollSpeed;


        if (
            Math.abs(
                targetScroll -
                currentScroll
            ) < 0.5
        ) {

            currentScroll =
                targetScroll;


            isAnimating =
                false;

        } else {

            isAnimating =
                true;


            requestAnimationFrame(
                smoothScrollAnimation
            );

        }


        window.scrollTo(
            0,
            currentScroll
        );

    }


    window.addEventListener(
        "wheel",
        function (event) {

            /*
             * Don't interfere with mobile/tablet.
             */

            if (window.innerWidth < 768) {
                return;
            }


            /*
             * Don't interfere with browser zoom
             * or horizontal scrolling.
             */

            if (event.ctrlKey) {
                return;
            }


            event.preventDefault();


            /*
             * Add wheel movement to target position.
             */

            targetScroll +=
                event.deltaY;


            /*
             * Keep target inside document boundaries.
             */

            const maxScroll =
                document.documentElement.scrollHeight -
                window.innerHeight;


            targetScroll =
                Math.max(
                    0,
                    Math.min(
                        targetScroll,
                        maxScroll
                    )
                );


            /*
             * Start animation.
             */

            if (!isAnimating) {

                currentScroll =
                    window.scrollY;


                requestAnimationFrame(
                    smoothScrollAnimation
                );

            }

        },
        {
            passive: false
        }
    );


    /* =========================================================
       KEEP TARGET SCROLL IN SYNC
       ========================================================= */

    window.addEventListener(
        "scroll",
        function () {

            if (!isAnimating) {

                currentScroll =
                    window.scrollY;


                targetScroll =
                    window.scrollY;

            }

        },
        {
            passive: true
        }
    );


    /* =========================================================
       CONTACT FORM - WHATSAPP
       ========================================================= */

    const contactForm =
        document.querySelector(
            ".contact-form form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                /*
                 * Prevent normal form submission.
                 */

                event.preventDefault();


                /* -----------------------------------------
                   GET FORM VALUES
                   ----------------------------------------- */

                const name =
                    document
                        .getElementById("name")
                        .value
                        .trim();


                const phone =
                    document
                        .getElementById("phone")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();


                const matter =
                    document
                        .getElementById("matter")
                        .value;


                const message =
                    document
                        .getElementById("message")
                        .value
                        .trim();


               
const whatsappNumber =
    "919025566588";

const whatsappMessage =
    "*NEW CONSULTATION ENQUIRY*\n\n" +
    "────────────────────\n" +

    "*CLIENT DETAILS*\n\n" +

    "*Name:* " +
    name +
    "\n" +

    "*Phone:* " +
    phone +
    "\n" +

    "*Email:* " +
    (email || "Not provided") +
    "\n\n" +

    "────────────────────\n" +

    "*LEGAL MATTER*\n\n" +

    "*Type:* " +
    (matter || "Not specified") +
    "\n\n" +

    "────────────────────\n" +

    "*CLIENT MESSAGE*\n\n" +

    message +
    "\n\n" +

    "────────────────────\n" +

    "*ACTION REQUIRED*\n" +

    "Please check your details before submitting.\n\n" +

    "_Submitted through the Abi's Law Associate website_";




                /* -----------------------------------------
                   ENCODE WHATSAPP MESSAGE
                   ----------------------------------------- */

                const encodedMessage =
                    encodeURIComponent(
                        whatsappMessage
                    );


                /* -----------------------------------------
                   CREATE WHATSAPP URL
                   ----------------------------------------- */

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodedMessage;


                /* -----------------------------------------
                   OPEN WHATSAPP
                   ----------------------------------------- */

                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }


    /* =========================================================
       CURRENT YEAR
       ========================================================= */

    const yearElement =
        document.querySelector(
            ".footer-bottom p"
        );


    if (yearElement) {

        const currentYear =
            new Date().getFullYear();


        yearElement.innerHTML =
            "© " +
            currentYear +
            " Abi's Law Firm. All rights reserved.";

    }


    /* =========================================================
       LANGUAGE TOGGLE
       ========================================================= */

    const languageToggle =
        document.getElementById(
            "languageToggle"
        );


    if (languageToggle) {

        const currentPage =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        /*
         * Check which page we are currently on.
         */

        const isTamilPage =
            currentPage === "tamil.html";


        /*
         * Show the correct toggle position.
         */

        if (isTamilPage) {

            languageToggle.classList.add(
                "tamil"
            );

        }


        /*
         * Toggle between English and Tamil pages.
         */

        languageToggle.addEventListener(
            "click",
            function () {

                if (isTamilPage) {

                    window.location.href =
                        "index.html";

                } else {

                    window.location.href =
                        "tamil.html";

                }

            }
        );

    }

});


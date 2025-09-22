// inlcude html widgets ( NOT NEEDED ON CMS DYMANIC WEBSITE OFCOURSE)
includeHTML();



//toggle mobile menu
function showMenu() {
    document.getElementById("navigation").classList.toggle("show");
    document.getElementById("make-dialog").setAttribute('role', 'dialog');
    setTimeout(function () {
        document.getElementById("navigation").classList.toggle("anima");
    }, 200);
}


//circle inside the mobile mebu with TAB navigation (ACCESSIBILITY THING)
// Add event listener to the 'keydown' event on the document
document.addEventListener("keydown", function (e) {
    const target = e.target;
    const shiftPressed = e.shiftKey;

    // If TAB key pressed
    if (e.keyCode === 9) {
        // If inside a fullscreen menu (determined by attribute role="dialog")
        if (target.closest('[role="dialog"]')) {
            // Find the first or the last input element in the dialog parent (depending on whether Shift was pressed).
            // Get the focusable elements (links and buttons)
            let focusElements = target
                .closest('[role="dialog"]')
                .querySelectorAll("a[href], button");
            let borderElem = shiftPressed
                ? focusElements[0]
                : focusElements[focusElements.length - 1];

            if (borderElem) {
                // If the current target element is the first or last focusable element in the dialog, prevent the default behaviour.
                if (target === borderElem) {
                    e.preventDefault();

                    // move focus to the first element when the last one is reached and vice versa
                    borderElem === focusElements[0]
                        ? focusElements[focusElements.length - 1].focus()
                        : focusElements[0].focus();
                }
            }
        }
    }
});
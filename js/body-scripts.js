// inlcude html widgets ( NOT NEEDED ON CMS DYMANIC WEBSITE OFCOURSE)
includeHTML();


//toggle mobile menu
function showMenu() {
    const naviga = document.getElementById("navigation")
    const menMenu = document.getElementById("make-dialog");
    const role = menMenu.getAttribute('role');

    if (role === '') {

        naviga.classList.add("show");
        menMenu.setAttribute('role', 'dialog');
        setTimeout(function () {
            naviga.classList.toggle("anima");
        }, 200);
    } else if (role === 'dialog') {
        menMenu.setAttribute('role', '');
        naviga.classList.toggle("anima");
        setTimeout(function () {
            naviga.classList.add("show");
        }, 200);
    }
}

//toggle DOCUMENTS filters

function showFilters() {
    const wrap = document.getElementById('filters-wrap');
    const filo = document.getElementById('filters');
    const state = filo.getAttribute('state');
    const wrapState = wrap.getAttribute('state');


    console.log(state);
    console.log(wrapState);

    if (state === 'closed') {
        filo.setAttribute('state', 'opened');
    } else if (state === 'opened') {

        filo.setAttribute('state', 'closed');

    }

    if (wrapState === 'hidden') {
        wrap.setAttribute('state', 'visible');
    } else if (state === 'opened') {
        setTimeout(function () {
            wrap.setAttribute('state', 'hidden');
        }, 200);
    }

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
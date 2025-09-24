// adding the aria-current to active pages. NOT NEEDED ON DYMANIC WEBSITES MANAGED VIA CMS

window.onload = function () {
    const currentPath = window.location.pathname; // Get the current path
    const links = document.querySelectorAll('.menu-item'); // Select all menu links

    links.forEach(function (link) {

        // get menu item href link
        const starting = link.getAttribute('href');
        // Check if the link's href matches the current page's path
        if (('/' + starting === currentPath) || ('/DACS/' + starting === currentPath)) {
            // Add aria-current page
            link.setAttribute('aria-current', 'page');

            // Check if the index.html is not specified on the homepage url
        } else if (('/' === currentPath) || ('/DACS/' === currentPath)) {
            // Add aria-current to home menu-item
            links[0].setAttribute('aria-current', 'page');
        }

    });

};


// Include html parts, also not needed on dymanic website managed differently

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

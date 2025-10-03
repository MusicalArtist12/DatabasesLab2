let headerContent = `
    <nav>
        <a href="/index.html">Home</a>
        <a href="/About.html">About</a>
        <a href="/Contact.html">Contact</a>
        <a href="/Portfolio.html">Portfolio</a>
    </nav>
`
let footerContent = `
    <nav>
        <a href="/policies/TermsConditions.html">Terms and Conditions</a>
        <a href="/policies/Privacy.html">Privacy Policy</a>
        <a href="/policies/Cookies.html">Cookie Policy</a>
    </nav>
`

let headContent = `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/styles.css">
`
document.querySelector("header").insertAdjacentHTML("beforeend", headerContent)
document.querySelector("footer").insertAdjacentHTML("beforeend", footerContent)
document.querySelector('head').insertAdjacentHTML("beforeend", headContent)
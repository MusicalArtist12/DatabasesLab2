import oneko from "./oneko/oneko.js"

let headerContent = `
    <a href="/"><img src="/media/favicon.png"></a>
    <nav>
        <a href="/About.html">About</a>
        <a href="/Contact.html">Contact</a>
        <a href="/Portfolio.html">Portfolio</a>
        <a href="/AuthorInfo.html">About the Author</a>
        <a href="/Sign_In.html">"Sign In"</a>
    </nav>

`
let footerContent = `
    <p>Made by <a href="https://juliaviolet.dev/">Julia Abdel-Monem</a> | 2025</p>
    <p>Copyrighted material from the 2006 anime Death Note and is used as under fair use (parody)</p>
    <nav>
        <a href="/policies/TermsConditions.html">Terms and Conditions</a>
        <a href="/policies/Privacy.html">Privacy Policy</a>
        <a href="/policies/Cookies.html">Cookie Policy</a>
    </nav>
    <div class="tags">
        <a href="https://juliaviolet.dev/"><img src="/media/julia.png"></a>
        <a href="https://transequality.org/"><img src="/media/transnow2.gif"></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="/media/learn_html.gif"></a>
        <a href=""><img src="https://cyber.dabamos.de/88x31/bestvw.gif"></a>
    </div>

`
let headContent = `
    <link rel="shortcut icon" type="image/png" href="media/favicon.png">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/styles.css">
`

document.querySelector("header").insertAdjacentHTML("beforeend", headerContent)
document.querySelector("footer").insertAdjacentHTML("beforeend", footerContent)
document.querySelector('head').insertAdjacentHTML("beforeend", headContent)

oneko()
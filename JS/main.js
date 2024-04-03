let images = ["3239444.webp", "1947484.webp", "1338376.webp", "160-1606283_web-developer-wallpaper.jpg", "OIP.jpeg"]
let number = 0
let changeBackground;
function backgroundfunc() {
    changeBackground = setInterval(() => {
        if (number === 5) {
            number = 0;
        }

        document.querySelector("header").style.backgroundImage = 'url(Images/' + images[number] + ')'

        number++
    }, 5000)
}
backgroundfunc()

document.querySelector(".tool-box .icon i").addEventListener("click", () => {
    // spin key to Boxes
    document.querySelector(".tool-box .icon i").classList.toggle("fa-spin")

    // open Tool Box
    document.querySelector(".tool-box").classList.toggle("active")
})


/* Change Background Color Map in contact */
let contactMap = document.querySelector(".contact .map")
contactMap.className = `map c${localStorage.getItem("--main-color")}`

document.querySelectorAll(".tool-box .colors li").forEach(e => {
    if (localStorage.getItem("--main-color") !== null) {
        e.classList.remove("active")
    }

    if (e.classList.contains(localStorage.getItem("--main-color"))) {
        e.classList.add("active")
        document.documentElement.style.setProperty("--main-color", `#${localStorage.getItem("--main-color")}`)
        document.querySelector(".about .image img").src = `Images/About Us/Website designer-amico (${localStorage.getItem("--main-color")}).svg`
    }


    e.addEventListener("click", (el) => {
        document.querySelectorAll(".tool-box .colors li").forEach(e => {
            e.classList.remove("active")
        })
        e.classList.add("active")

        document.documentElement.style.setProperty("--main-color", `#${el.target.dataset.color}`)

        localStorage.setItem("--main-color", el.target.dataset.color)

        document.querySelector(".about .image img").src = `Images/About Us/Website designer-amico (${el.target.dataset.color}).svg`


        /* Change Background Color Map in contact */
        contactMap.className = `map c${el.target.dataset.color}`
    })
})


document.querySelectorAll(".tool-box .backgrounds span").forEach(e => {
    if (localStorage.getItem("background") !== null) {
        e.classList.remove("active")
    }

    if (e.classList.contains(localStorage.getItem("background"))) {
        e.classList.add("active")
        if (localStorage.getItem("background") !== "yes") {
            clearInterval(changeBackground)
        }
    }


    e.addEventListener("click", (el) => {
        document.querySelectorAll(".tool-box .backgrounds span").forEach(e => {
            e.classList.remove("active")
        })
        e.classList.add("active")

        if (e.classList.contains("yes")) {
            backgroundfunc()
        } else {
            clearInterval(changeBackground)
        }

        localStorage.setItem("background", el.target.dataset.answer)
    })
})

let bulletsSection = document.querySelector(".bullets-section")
let bulletsShow = document.querySelectorAll(".bullets span")

if (localStorage.getItem("bullet") === "yes") {
    bulletsSection.style.display = "block"
    document.querySelector(".bullets .yes").classList.add("active")
} else {
    document.querySelector(".bullets .yes").classList.remove("active")
    bulletsSection.style.display = "none"
    document.querySelector(".bullets .no").classList.add("active")
}
bulletsShow.forEach(b => {
    b.addEventListener("click", (e) => {
        bulletsShow.forEach(e => {
            e.classList.remove("active")
        })
        b.classList.add("active")
        localStorage.setItem("bullet", e.target.dataset.answer)
        if (b.classList.contains("yes")) {
            bulletsSection.style.display = "block"
        } else {
            bulletsSection.style.display = "none"
        }
    })
})


document.querySelector(".tool-box .reset-button").onclick = function () {
    localStorage.clear()
    window.location.reload()
}


/* Start Scrol links */
let links = document.querySelectorAll("header .links li");
let bullets = document.querySelectorAll(".bullets-section li");
scrolLinks(links)
scrolLinks(bullets)
function scrolLinks(links) {
    links.forEach(link => {
        link.addEventListener("click", (l) => {
            document.querySelector(l.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        })
    })
}
/* End Scrol links */


// Skills
let skills = document.querySelector(".skills")

let skillsProg = document.querySelectorAll(".skills .skill-box .skill-progress span")





window.onscroll = function () {
    let skillsOffsetTop = skills.offsetTop;

    let skillsOuterHeight = skills.offsetHeight;

    let windowHeight = this.innerHeight

    let windowPageOffset = this.scrollY

    if (windowPageOffset > (skillsOffsetTop + skillsOuterHeight - windowHeight) - 2) {
        skillsProg.forEach(e => {
            e.style.width = e.dataset.width
        })
    }
}

let pictures = document.querySelectorAll(".gallery .pictures img")
pictures.forEach(p => {
    p.addEventListener("click", () => {
        let popup = document.createElement("div")
        popup.className = "popup-picture"

        let backgroundForPicture = document.createElement("div")
        backgroundForPicture.className = "background-picture"

        let pictureForBackground = document.createElement("img")
        pictureForBackground.src = p.src

        let closePicture = document.createElement("span");
        let closeText = document.createTextNode("X");
        closePicture.appendChild(closeText);

        popup.appendChild(backgroundForPicture)
        if (p.alt) {
            let pictureTitle = document.createElement("h3");
            let titleText = document.createTextNode(p.alt);
            pictureTitle.appendChild(titleText);
            backgroundForPicture.appendChild(pictureTitle);
        }
        backgroundForPicture.appendChild(closePicture);
        backgroundForPicture.appendChild(pictureForBackground)
        document.body.appendChild(popup)

        document.querySelector(".popup-picture .background-picture span").addEventListener("click", () => {
            document.querySelector(".popup-picture").remove()
        })
    })
})




// Show links in bar
document.querySelector("nav button").onclick = function () {
    this.classList.toggle("open");
    //this.parentElement.classList
    document.querySelector("nav .links").classList.toggle("open");
}


document.onclick = function (e) {
    if (!e.target.parentElement.classList.contains("bar") && !e.target.parentElement.classList.contains("links") && !e.target.parentElement.classList.contains("changer-links")) {
        document.querySelector("nav button").classList.remove("open")
        document.querySelector("nav .links").classList.remove("open")
    }
}

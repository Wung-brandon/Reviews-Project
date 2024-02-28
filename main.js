const reviews = [
    {
        id: 1,
        name: "Obi Emmanuel",
        job: "Web Developer",
        img: "images/15485435298_7848e85e0a_s.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "Lucas",
        job: "Forex Trader",
        img: "images/icon3.png",
        text: "I'm a forex trader. Have passion in trading and making money online"
    },
    {
        id: 3,
        name: "Praise",
        job: "Graphics Designer",
        img: "images/15668909741_eaf3db4054_s.jpg",
        text: "I'm a Graphics Designer. Have passion in making beautiful and appealing designs in order to make designs"
    },
    {
        id: 4,
        name: "Brandon",
        job: "Graphics Designer",
        img: "images/15670834825_5f55bb7e4e_s.jpg",
        text: "I'm a Graphics Designer. Have passion in making beautiful and appealing designs in order to make designs"
    },
    {
        id: 5,
        name: "Boris",
        job: "Commentator",
        img: "images/icon5.png",
        text: "I'm a commentator. Have passion in commentary for big matches like peter drury."
    },

]
console.log(reviews.length)
// reviews.forEach(name => console.log(name.name))

// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0

// load initial item
window.addEventListener("DOMContentLoaded", () => {
    showPerson()

})

// show person based on id
function showPerson(){
    const id = reviews[currentItem]
    img.src = id.img
    author.textContent = id.name
    job.textContent = id.job
    info.textContent = id.text
}

nextBtn.addEventListener("click", () => { 
    currentItem++
    if (currentItem > reviews.length - 1){
        currentItem = 0
        // nextBtn.disabled = true
    }
    showPerson()   
})

prevBtn.addEventListener("click", () => { 
    currentItem--
    if (currentItem < 0){
        currentItem = reviews.length - 1
        // nextBtn.disabled = true
    }
    showPerson()   
})

// randomBtn.addEventListener("click", () =>{
//     let random = Math.floor(Math.random() * reviews.length)
//     // console.log(randomPerson)
//     // console.log(reviews[random])
//     let randomPerson = reviews[random]
//     img.src = randomPerson.img
//     author.textContent = randomPerson.name
//     job.textContent = randomPerson.job
//     info.textContent = randomPerson.text 
// })

randomBtn.addEventListener("click", () => {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})


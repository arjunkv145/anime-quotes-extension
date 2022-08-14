const container = document.querySelector('.container')
const timeContainer = document.querySelector('.time-container')
const quoteContainer = document.querySelector('.quote-container')

const getCurrentTime = () => {
    const date = new Date()
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
}

setInterval(() => {
    timeContainer.innerHTML = `
        <p class='current-time'>${getCurrentTime()}</p>
    `
}, 1000)

fetch('https://api.waifu.im/random/?orientation=LANDSCAPE')
    .then(res => res.json())
    .then(data => {
        container.style.backgroundImage = `url('${data.images[0].url}')`
    })
    .catch(err => {
        console.log(err)
        alert('api not working, background image currently not available')
    })

fetch('https://animechan.vercel.app/api/random')
    .then(res => res.json())
    .then(data => {
        quoteContainer.innerHTML = `
            <p class='quote'>
                ${data.quote}
            </p>
            <span class='quote-info'>
                - ${data.character} ( ${data.anime} )
            </span>
        `
    })
    .catch(err => {
        console.log(err)
        alert('api not working, anime quotes currently not available')
    })

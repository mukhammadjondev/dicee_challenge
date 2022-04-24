const image1 = document.querySelector('.img1')
const image2 = document.querySelector('.img2')

const random1 = Math.floor(Math.random() * 6 + 1)
const random2 = Math.floor(Math.random() * 6 + 1)

image1.src = `images/dice${random1}.png`
image2.src = `images/dice${random2}.png`

if (random1 > random2) {
    document.querySelector('h2').textContent = 'Player 1 win !'
} else if (random1 < random2) {
    document.querySelector('h2').textContent = 'Player 2 win !'
} else {
    document.querySelector('h2').textContent = 'Drow !'
}
import './index.css'
import imgWomen from '../assets/images/b14f175076d37972828e2efa1b51656.jpg'
console.log('imgWomen', imgWomen)
const img = document.createElement('img')
img.src = imgWomen
const BoxDiv = document.getElementById('app')
BoxDiv.appendChild(img)

console.log('hello webpack')

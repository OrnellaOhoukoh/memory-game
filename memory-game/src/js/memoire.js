const Memoire = (function () {
    const buttonNewPartie = document.getElementById('nouvelle_partie')
    const buttonQuitter = document.getElementById('quitter')
    const pairesTrouvees = document.getElementById('paires_trouvees')
    const tempsEcoules = document.getElementById('Temps')
    const score = document.getElementById('pointage')
    const main = document.querySelector('main')
    const buttonsHome = document.getElementsByClassName('buttons')
    const buttonCommencerPartie = document.getElementById('commencer_partie')
    buttonCommencerPartie.addEventListener('click', debuterPartie)

    let pareilles = 0
    let seconds = 1
    let minutes = 0
    let highScore = 0
    const body = document.getElementsByTagName('body')
    timer()
    body[0].addEventListener('load', debutJeu)

    function debutJeu () {
        main.style.display = 'none'
        for (let i = 0; i < buttonsHome.length; i++) {
            buttonsHome[i].style.display = 'block'
        }
    }
    function arreterPartie () {
        const reponse = confirm('Voulez-vous vraiment arrêter le jeu ?')
        if (reponse === true) {
            debutJeu()
        }
    }
    const buttonArreter = document.getElementById('arreter')
    buttonArreter.addEventListener('click', arreterPartie)

    /**
 * debute une partie
 * initialise le score et les paires trouvées à 0
 * demarre le timer
 */
    function debuterPartie () {
        seconds = 0
        minutes = 0
        pareilles = 0
        tempsEcoules.setAttribute('value', minutes + ':' + seconds)
        pairesTrouvees.value = 0
        score.setAttribute('value', '0')
        creationImagesElements()
        main.style.display = 'grid'
        for (let i = 0; i < buttonsHome.length; i++) {
            buttonsHome[i].style.display = 'none'
        }
    }
    /**
 * demande une confirmation avnat de quitter la partie
 */
    function quitterPartie () {
        const reponse = confirm('Voulez-vous vraiment quitter le jeu ?')
        if (reponse === true) {
            setTimeout(() => {
                alert('Merci !!')
            }, 3000)
        } else {
            debuterPartie()
        }
    }
    buttonNewPartie.addEventListener('click', debuterPartie)

    buttonQuitter.addEventListener('click', quitterPartie)

    /**
 * generation du tableau aleatoire d'images
 */
    function getRandomArray (max) {
        const tableauIndices = []
        const tableauresultat = []
        for (let i = 0; i <= max; i++) {
            tableauIndices[i] = i
        }
        for (let i = 0; i < max + 1; i++) {
            const x = Math.floor(Math.random() * (tableauIndices.length - 0)) + 0
            tableauresultat[i] = tableauIndices[x]
            tableauIndices.splice(x, 1)
        }
        return tableauresultat
    }
    /**
 * fusion des tableau d'images
 */
    function mergeArray (table1, table2, max) {
        const tableResult = []
        let j = 0
        for (let i = 0; i < (max + 1) * 2; i = i + 2) {
            tableResult[i] = table1[j]
            tableResult[i + 1] = table2[j]
            j++
        }
        return tableResult
    }

    /**
 * creer les balises html et ajouter les images dans les div container
 */

    function creationImagesElements () {
        const table1 = getRandomArray(7)
        const table2 = getRandomArray(7)
        const imageArray = mergeArray(table1, table2, 7)
        const divContainer = document.getElementById('container2')
        divContainer.innerHTML = ''
        for (let i = 0; i < imageArray.length; i++) {
            const image = document.createElement('img')
            image.src = '../images/image_' + imageArray[i] + '.jpg'
            image.className = 'hidden_image'

            const divImage = document.createElement('div')
            divImage.appendChild(image)
            const imageX = document.createElement('img')
            imageX.src = '../images/imageX.jpg'
            imageX.className = 'imageX'
            divImage.appendChild(imageX)
            divImage.className = 'div_image'
            divContainer.appendChild(divImage)
        }
        verifierImages()
    }
    /**
 * verifier si les images clickées sonr les memes
 * si oui les images restent visibles
 * si non les images sont à nouveau cachees
 */
    function verifierImages () {
        let click1 = ''
        let click2 = ''

        let test = false
        const tabSelectedImages = []
        const divs = document.getElementById('container2').children
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', function (event) {
                if (tabSelectedImages.includes(divs[i].firstChild.src) === false) {
                    test = !test
                    divs[i].firstChild.style.display = 'block'
                    divs[i].firstChild.style.position = 'absolute'
                    divs[i].firstChild.style.width = '170px'
                    divs[i].firstChild.style.height = '100px'

                    divs[i].lastChild.style.display = 'relative'
                    divs[i].lastChild.style.zIndex = '-1'

                    if (test) {
                        click1 = divs[i].firstChild
                    } else {
                        click2 = divs[i].firstChild
                        if ((click1 !== click2) && (click1.src === click2.src)) {
                            tabSelectedImages.push(click1.src)
                            pareilles++
                            pairesTrouvees.value = pareilles
                            let points = parseInt(score.value)
                            points += 300 - (minutes * 60) - seconds
                            score.setAttribute('value', points)
                        } else if (click1 === click2) {
                            event.preventDefault()
                        } else {
                            setTimeout(() => {
                                click1.style.display = 'none'
                                click2.style.display = 'none'
                            }, 1000)
                        }
                    }
                }
                if (pairesTrouvees.value == 8) {
                    if (highScore < score.value) {
                        highScore = score.value
                    }
                    alert('felicitaion votre score est : ' + score.value + '\n' + 'meilleur score est : ' + highScore)
                }
            })
        }
    }

    /**
 *initialisation du score et du temps de jeu
 *affichage des images en un laps de temps
 */

    function timer () {
        setInterval(function () {
            if (seconds === 60) {
                minutes++
                seconds = 0
            }
            tempsEcoules.setAttribute('value', minutes + ':' + seconds)
            seconds++
        }, 1000)
    }
    return {
        init: function (params) {
            debutJeu()
        }
    }
})()

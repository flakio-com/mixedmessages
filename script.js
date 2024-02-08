const categories = {
    breeds: ['Keeshond', 'Golden Retreiver', 'Husky', 'Poodle', 'Blood Hound'],
    acquires: ['buy', 'adopt', 'rescue'],
    emotions: ['love', 'adore', 'worship'],
    names: ['Pogo', 'Kiwi', 'Leo', 'Potatoe']
}
// set the variants of adjectives and nouns

const generateDog = () => {
    const randNum = num => {
        let rand = Math.floor(Math.random() * num)
        return rand
    }
    // random function to be used in nested array
    let newArr = []
    for (let i = 0; i < Object.keys(categories).length; i++) {
        catValue = Object.values(categories)[i]
        randCatVal = randNum(catValue.length);
        newArr.push(catValue[randCatVal])
    }
    return `You should ${newArr[1]} a ${newArr[0]} dog and name it ${newArr[3]}. I'm sure you will ${newArr[2]} it!`
}

console.log(generateDog())

const { words } = require('../data/words');

// write your handlers here...
const getWordWithID = (req, res) =>{


    const word = words.find( w => w.id === (req.params.id))


    if(!word){
        res.status(404).json({
            status: 404,
            message: "word with given ID not found"
        })
    }else{

        res.status(200).json({
            status: 200,
            data: word
        })
    }
}

const getRandomWord = (req, res) =>{

    const randomID = Math.floor(Math.random() * words.length);
    console.log(randomID)

    const randomWord = words[randomID];

    if(!randomWord){

        res.status(404).json({
            status: 404,
            message: "error can't select random word"
        })
    }else{

        res.status(200).json({
            status: 200,
            data: {
                id: randomWord.id,
                letterCount: randomWord.letterCount
            }
        })
    }
}

const guessLetter = (req, res) =>{

    const word = words.find( w => w.id === (req.params.id))

    const letter = req.params.letter;

    let arr= word.word.split('');

    const found = arr.find(l => l == letter)

    let arrGuessLetter = [];
    
    arr.map(l =>{
        if(l === letter){
            arrGuessLetter.push(true)
        }else{
            arrGuessLetter.push(false)
        }
        return arrGuessLetter
    })

    if(!found){

        res.status(404).json({
            status: 404,
            message: "error can't find this letter"
        })
    }else{

        res.status(200).json({
            status: 200,
            data: arrGuessLetter
        })
    }
}


module.exports= { getWordWithID, getRandomWord , guessLetter}
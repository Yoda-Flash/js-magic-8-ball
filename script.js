const answer = document.getElementById("answer");
const button = document.getElementById("button");
const ball = document.getElementById("8ball");

let listOfAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];

const click = () => {
    let randomAnswer = Math.random(0, 18) * 19;
    randomAnswer = Math.floor(randomAnswer);
    console.log(listOfAnswers[randomAnswer]);

    ball.setAttribute("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

    answer.innerHTML = listOfAnswers[randomAnswer];
    answer.style.display = "block";
};

button.addEventListener("click", click);
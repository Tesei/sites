var lampa = "лампа" || "лампочка";
var ogurec = "огурец" || "огурчик" || "тыква" || "кабачёк";
var veter = "вьюга" || "метель" || "ветер" || "ветер";
function checkAnswer (id, trueAnswer) {
    var userAnswer = document.getElementById(id).value;
    userAnswer = userAnswer.toLowerCase()
    return userAnswer == trueAnswer;
}

function checkAnswers () {
    var correctAnswers = 0;
            
    if (checkAnswer ('puzzle1', lampa)) 
        correctAnswers++;                                  
        
    if (checkAnswer ('puzzle2', ogurec))
        correctAnswers++;

    if (checkAnswer ('puzzle3', veter))
        correctAnswers++;
    
    document.getElementById('result').innerHTML = '<b>Количество правильных ответов: ' + correctAnswers + '</b>';
}

function game_multiplayer () {
    var answer = parseInt(Math.random() * 100);
    var user = 1;          

    while (userAnswer != answer) {
        var userAnswer = prompt ("Угадай число от 0 до 100. Игроки ходят по очереди. Ходит игрок №"  + user);
        userAnswer = parseInt(userAnswer);
        if (userAnswer == 500){
            break;
        } else if (userAnswer > answer) {
            alert ("Ваш ответ слишком большой.\nдля выхода введите 500");
        } else if (userAnswer < answer) {
            alert ("Ваш ответ слишком маленький.\nдля выхода введите 500");
        } else if (userAnswer == answer) {
            alert ("Вы угадали! Победил игрок №"  + user);
            break;
        } else {
            alert ("Необходимо ввести число! \nдля выхода введите 500")
        }

        if (user = 1) {
            user = 2;
        } else { 
            user = 1;
        }    
    }
}

function game () {
    var answer = parseInt(Math.random() * 100);
            var attempt = 1;
            var attemptsCount =7;

            while (attempt <= attemptsCount) {
                var userAnswer = prompt ("Угадай число от 0 до 100, у Вас 7 попыток. Попытка №"  + attempt);
                userAnswer = parseInt(userAnswer);

                if (userAnswer > answer) {
                    alert ("Ваш ответ слишком большой.");
                } else if (userAnswer < answer) {
                    alert ("Ваш ответ слишком маленький.");
                } else if (userAnswer == answer) {
                    alert ("Вы угадали!");
                    break;
                } else {
                    alert ("Необходимо ввести число!")
                }
                attempt++;
            }

            if (attempt > attemptsCount) {
                alert ("К сожалению Вы не угадали. Было загадано число:"  + answer);
            }
}

/*<script>
            
            
            function checkAnswer() {
                var answer = parseInt(Math.random() * 100);
                var attempt = 1;
                var attemptsCount =7;
                
                while (attempt <= attemptsCount) {
                    var userAnswer = document.getElementById("chislo").value;
                    userAnswer = parseInt(userAnswer);

                    if (userAnswer > answer) {
                        alert ("Ваш ответ слишком большой.");
                    } else if (userAnswer < answer) {
                        alert ("Ваш ответ слишком маленький.");
                    } else if (userAnswer == answer) {
                        alert ("Вы угадали!");
                        break;
                    } else {
                        alert ("Необходимо ввести число!")
                    }
                    attempt++;
                    document.getElementById("chislo").value = '';

                }
               if (attempt > attemptsCount) {
                alert ("К сожалению Вы не угадали. Было загадано число:  + answer);
            }
            }
                
        </script>*/
                    /*<script src="scripts/app.js"></script>*/
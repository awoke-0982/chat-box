function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "how are you") {
        return "i'm fine!";
    } else if (input == "can you help me") {
        return "yha what i help you!";
    } 
    
   else if (input == "what is your name") {
    return "my name is cloud awoke ,what can i help you!";
    }else {
        return "Try asking something else!";
    }
}
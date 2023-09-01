function getBotResponse(input) {
    //rock paper scissors
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "how are you?") {
        return "I'm doing good.";
    } else if (input == "how much you charge for an event photography?") {
        return "So basically its depend upon the place, hours and no of pictures.";
    }

    // Simple responses
    if (input == "ok") {
        return "Yes, Is there anything you wanna ask me?";
    } else if (input == "no thanks") {
        return "Good to talk to you.";
    }else if (input == "goodbye") {
        return "GoodByee..";
    }
     else {
        return "Try asking something else!";
    }
}

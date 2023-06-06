function getBotResponse(input) {
    // Rock, paper, scissors
    if (input === "rock") {
        return "paper";
    } else if (input === "paper") {
        return "scissors";
    } else if (input === "scissors") {
        return "rock";
    }

    // Simple responses
    if (input === "hello") {
        return "Hello there!";
    } else if (input === "goodbye") {
        return "Talk to you later!";
    } else if (input === "time") {
        // Get current time
        const currentTime = new Date().toLocaleTimeString();
        return "The current time is: " + currentTime;
    } else if (input === "date") {
        // Get current date
        const currentDate = new Date().toLocaleDateString();
        return "Today's date is: " + currentDate;
    } else if (input === "weather") {
        // Get weather information (example)
        return "The weather is sunny.";
    } else if (input === "joke") {
        // Tell a joke (example)
        return "Why don't scientists trust atoms? Because they make up everything!";
    } else if (input === "quote") {
        // Provide an inspirational quote (example)
        return "The only way to do great work is to love what you do. - Steve Jobs";
    } else if (input === "news") {
        // Get latest news (example)
        return "Here are the latest headlines: ...";
    } else if (input === "music") {
        // Recommend a song or artist (example)
        return "You should check out the song 'Shape of You' by Ed Sheeran.";
    } else if (input === "fact") {
        // Share an interesting fact (example)
        return "Did you know that the world's oldest known living tree is over 4,800 years old?";
    } else {
        return "Try asking something else!";
    }
} 


  

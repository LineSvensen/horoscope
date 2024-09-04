let cachedSentences = {};  // Object to store cached sentences for each month

function findHoroscope() {

    // Get the user's input from the text field
    let birthMonth = document.getElementById("birthMonthInput").value;
    birthMonth = birthMonth.trim().toLowerCase();

    console.log("Horoscope for your sign");

    let signJanuary = "✨🐐 Capricorn 🐐✨";
    let signFebruary = "✨🌊 Aquarius 🌊✨";
    let signMarch = "✨🐠 Pisces 🐠✨";
    let signApril = "✨🐏 Aries 🐏✨";
    let signMay = "✨🐃 Taurus 🐃✨";
    let signJune = "✨👯 Gemini 👯✨";
    let signJuly = "✨🦀 Cancer 🦀✨";
    let signAugust = "✨🦁 Leo 🦁✨";
    let signSeptember = "✨👸 Virgo 👸✨";
    let signOctober = "✨⚖️ Libra ⚖️✨";
    let signNovember = "✨🦂 Scorpio 🦂✨";
    let signDecember = "✨🏹 Sagittarius 🏹✨";

    // An array of future teller sentences
    let futureTellerSentences = [
        "In the coming month, you will experience loss.",
        "A person close to you will make you very happy.",
        "Money will come to you.",
        "For the next weeks, you will experience sadness.",
        "You will feel extra inner strength this month.",
        "Look for small signs and you'll find the answer.",
        "Love is on the way.",
        "A person is missing what you two had.",
        "Someone near you will make you realize what matters.",
        "Money will be tight the coming weeks.",
        "Someone is watching you."
    ];

    //defines it before being used
    let horoscopeMessage;

    // Check if the sentence for the entered month is already cached
    if (cachedSentences[birthMonth]) {
        horoscopeMessage = cachedSentences[birthMonth];
    } else {
        let randomNumber = Math.floor(Math.random() * futureTellerSentences.length);
        cachedSentences[birthMonth] = futureTellerSentences[randomNumber];
        horoscopeMessage = cachedSentences[birthMonth];
    }

    // Assign the correct sign and display the horoscope message
    if (birthMonth === "january") {
        horoscopeMessage = signJanuary + ": " + horoscopeMessage;
    } else if (birthMonth === "february") {
        horoscopeMessage = signFebruary + ": " + horoscopeMessage;
    } else if (birthMonth === "march") {
        horoscopeMessage = signMarch + ": " + horoscopeMessage;
    } else if (birthMonth === "april") {
        horoscopeMessage = signApril + ": " + horoscopeMessage;
    } else if (birthMonth === "may") {
        horoscopeMessage = signMay + ": " + horoscopeMessage;
    } else if (birthMonth === "june") {
        horoscopeMessage = signJune + ": " + horoscopeMessage;
    } else if (birthMonth === "july") {
        horoscopeMessage = signJuly + ": " + horoscopeMessage;
    } else if (birthMonth === "august") {
        horoscopeMessage = signAugust + ": " + horoscopeMessage;
    } else if (birthMonth === "september") {
        horoscopeMessage = signSeptember + ": " + horoscopeMessage;
    } else if (birthMonth === "october") {
        horoscopeMessage = signOctober + ": " + horoscopeMessage;
    } else if (birthMonth === "november") {
        horoscopeMessage = signNovember + ": " + horoscopeMessage;
    } else if (birthMonth === "december") {
        horoscopeMessage = signDecember + ": " + horoscopeMessage;
    } else {
        horoscopeMessage = "Error: Please enter a valid month. Check for type errors :)";
    }

    // Display horoscope result in HTML
    document.getElementById("horoscopeResult").innerText = horoscopeMessage;
}









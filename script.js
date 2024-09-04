function findHoroscope() {

    //get the users input from text field
    let birthMonth = document.getElementById("birthMonthInput").value;
    birthMonth = birthMonth.trim().toLowerCase();

    console.log("Horoscope for your sign");

    let signJanuary = "Capricorn";
    let signFebruary = "Aquarius";
    let signMarch = "Pisces";
    let signApril = "Aries";
    let signMay = "Taurus";
    let signJune = "Gemini";
    let signJuly = "Cancer";
    let signAugust = "Leo";
    let signSeptember = "Virgo";
    let signOctober = "Libra";
    let signNovember = "Scorpio";
    let signDecember = "Sagittarius";

    //an array
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

    // math floor rounds up. math random chooses a nimber between 0 and 1. * futuretellersentene.lengt. lengt= how many in the array. so it * with that number.
    let randomNumber = Math.floor(Math.random() * futureTellerSentences.length);
    // bracket notation ([]) to access an element in the array futureTellerSentences.
    let randomSentence = futureTellerSentences[randomNumber];

    let horoscopeMessage;
    if (birthMonth === "january") {
        horoscopeMessage = signJanuary + ": " + randomSentence;
    } else if (birthMonth === "february") {
        horoscopeMessage = signFebruary + ": " + randomSentence;
    } else if (birthMonth === "march") {
        horoscopeMessage = signMarch + ": " + randomSentence;
    } else if (birthMonth === "april") {
        horoscopeMessage = signApril + ": " + randomSentence;
    } else if (birthMonth === "may") {
        horoscopeMessage = signMay + ": " + randomSentence;
    } else if (birthMonth === "june") {
        horoscopeMessage = signJune + ": " + randomSentence;
    } else if (birthMonth === "july") {
        horoscopeMessage = signJuly + ": " + randomSentence;
    } else if (birthMonth === "august") {
        horoscopeMessage = signAugust + ": " + randomSentence;
    } else if (birthMonth === "september") {
        horoscopeMessage = signSeptember + ": " + randomSentence;
    } else if (birthMonth === "october") {
        horoscopeMessage = signOctober + ": " + randomSentence;
    } else if (birthMonth === "november") {
        horoscopeMessage = signNovember + ": " + randomSentence;
    } else if (birthMonth === "december") {
        horoscopeMessage = signDecember + ": " + randomSentence;
    } else {
        horoscopeMessage = "Error: Please enter a valid month. Check for type errors :)"
    }

    //display horoscope result in html
    document.getElementById("horoscopeResult").innerText = horoscopeMessage;

}











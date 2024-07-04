const questions = [
    {
        question: "Szyb kablowy jest to zgodnie z treścią definicji zawartej w zaktualizowanej w 2014 r. Normie Stowarzyszenia Elektryków Polskich N SEP-E 004 pt. „Elektroenergetyczne i sygnalizacyjne linie kablowe. Projektowanie i budowa” obudowane przejście przeznaczone do ułożenia w nim kabli łączące więcej niż:",
        options: ["dwie kondygnacje budynku", "trzy kondygnacje budynku", "pięć kondygnacji budynku"],
        correct: 0,
        explanation: "1.3.14 Szyb kablowy - Wydzielony obudowany pionowy przepust łączący więcej niż dwie kondygnacje budynku przeznaczony do ułożenia w nim kabli."
    },
    {
        question: "Przepisy przeciwpożarowe wymagają, aby stałe samoczynne urządzenia gaśnicze wodne było stosowane w:",
        options: ["budynkach służących celom gastronomicznym o liczbie miejsc powyżej 600", "budynkach, w których występuje strefa pożarowa służąca celom gastronomicznym o liczbie miejsc powyższej 600", "budynkach służących celom gastronomicznym o liczbie miejsc powyżej 300"],
        correct: 0,
        explanation: `§ 27. [Obiekty, w których wymagane jest stosowanie stałych urządzeń gaśniczych]
        1. Stosowanie stałych urządzeń gaśniczych związanych na stałe z obiektem, zawierających zapas środka gaśniczego i uruchamianych samoczynnie we wczesnej fazie rozwoju pożaru, jest wymagane w:
        1) archiwach wyznaczonych przez Naczelnego Dyrektora Archiwów Państwowych;
        2) muzeach oraz zabytkach budowlanych, wyznaczonych przez Generalnego Konserwatora Zabytków w uzgodnieniu z Komendantem Głównym Państwowej Straży Pożarnej;
        3) ośrodkach elektronicznego przetwarzania danych o znaczeniu krajowym.
        2. Stosowanie stałych samoczynnych urządzeń gaśniczych wodnych jest wymagane w:
        1) budynkach handlowych lub wystawowych:
        a) jednokondygnacyjnych, w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 8 000 m2,
        b) wielokondygnacyjnych, w strefie pożarowej zakwalifikowanej do kategorii zagrożenia ludzi ZL I o powierzchni powyżej 5 000 m2;
        2) w budynkach o liczbie miejsc służących celom gastronomicznym powyżej 600;
        3) budynkach użyteczności publicznej wysokościowych;
        4) budynkach zamieszkania zbiorowego wysokościowych.`
    },
    {
        question: "Zgodnie z Polską Normą PN-EN 12845 „Stałe urządzenia gaśnicze. Urządzenia tryskaczowe. Projektowanie, instalowanie i konserwacja”, oddzielenie między przestrzenią chronioną urządzeniem tryskaczowym i przestrzenią niechronioną powinno mieć odporność ogniową wymaganą dla ścian i stropów oddzieleń przeciwpożarowych, przy czym nie mniejszą niż:",
        options: ["30 min", "60 min", "120 min"],
        correct: 1,
        explanation: `5.3 Oddzielenie przeciwpożarowe
        Oddzielenie między przestrzenią chronioną urządzeniem tryskaczowym i przestrzenią nie chronioną powinno mieć odporność ogniową określoną przez upoważnioną jednostkę, lecz w żadnym przypadku nie mniejszą niż 60 min. Drzwi powinny być samozamykające lub powinny zamykać się automatycznie w przypadku pożaru.
        UWAGA Żadna część budynku (lub jego segmentu), nie chroniona urządzeniem tryskaczowym, nie powinna być usytuowana bezpośrednio poniżej części (lub segmentu) budynku chronionej urządzeniem tryskaczowym, z wyjątkami wg 5.1.1 i 5.1.2.`
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-number").textContent = `Pytanie ${currentQuestionIndex + 1}`;
    document.getElementById("question").textContent = question.question;
    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.textContent = question.options[index];
        option.style.backgroundColor = ''; // Reset button color
    });
    adjustContainerWidth();
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("explanation-container").classList.add("hidden");
}

function selectOption(index) {
    const question = questions[currentQuestionIndex];
    const selectedOption = document.querySelectorAll(".option")[index];
    if (index === question.correct) {
        document.getElementById("explanation").textContent = question.explanation;
        document.getElementById("question-container").classList.add("hidden");
        document.getElementById("explanation-container").classList.remove("hidden");
    } else {
        selectedOption.style.backgroundColor = 'red';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Nie ma więcej pytań!");
        restartQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    loadQuestion();
}

function adjustContainerWidth() {
    const questionText = document.getElementById("question");
    const length = questionText.textContent.length;
    const newWidth = Math.min(600, Math.max(300, length * 8)); // Adjust based on length
    questionText.style.width = `${newWidth}px`;
}

document.addEventListener("DOMContentLoaded", loadQuestion);
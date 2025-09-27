document.addEventListener('DOMContentLoaded', () => {

    const combinations = [
        ['F6', 'F6', 'F5', 'F6'],
        ['F6', 'F6', 'G5', 'C5'],
        ['F6', 'F6', 'G5', 'D5'],
        ['F6', 'F6', 'G5', 'E5'],
        ['F6', 'F6', 'G5', 'F5'],
        ['F6', 'F6', 'G5', 'G5'],
        ['F6', 'F6', 'G5', 'A5'],
        ['F6', 'F6', 'G5', 'B5'],
        ['F6', 'F6', 'G5', 'C6'],
        ['F6', 'F6', 'G5', 'D6'],
        ['F6', 'F6', 'G5', 'E6'],
        ['F6', 'F6', 'G5', 'F6'],
        ['F6', 'F6', 'A5', 'C5'],
        ['F6', 'F6', 'A5', 'D5'],
        ['F6', 'F6', 'A5', 'E5'],
        ['F6', 'F6', 'A5', 'F5'],
        ['F6', 'F6', 'A5', 'G5'],
        ['F6', 'F6', 'A5', 'A5'],
        ['F6', 'F6', 'A5', 'B5'],
        ['F6', 'F6', 'A5', 'C6'],
        ['F6', 'F6', 'A5', 'D6'],
        ['F6', 'F6', 'A5', 'E6'],
        ['F6', 'F6', 'A5', 'F6'],
        ['F6', 'F6', 'B5', 'C5'],
        ['F6', 'F6', 'B5', 'D5'],
        ['F6', 'F6', 'B5', 'E5'],
        ['F6', 'F6', 'B5', 'F5'],
        ['F6', 'F6', 'B5', 'G5'],
        ['F6', 'F6', 'B5', 'A5'],
        ['F6', 'F6', 'B5', 'B5'],
        ['F6', 'F6', 'B5', 'C6'],
        ['F6', 'F6', 'B5', 'D6'],
        ['F6', 'F6', 'B5', 'E6'],
        ['F6', 'F6', 'B5', 'F6'],
        ['F6', 'F6', 'C6', 'C5'],
        ['F6', 'F6', 'C6', 'D5'],
        ['F6', 'F6', 'C6', 'E5'],
        ['F6', 'F6', 'C6', 'F5'],
        ['F6', 'F6', 'C6', 'G5'],
        ['F6', 'F6', 'C6', 'A5'],
        ['F6', 'F6', 'C6', 'B5'],
        ['F6', 'F6', 'C6', 'C6'],
        ['F6', 'F6', 'C6', 'D6'],
        ['F6', 'F6', 'C6', 'E6'],
        ['F6', 'F6', 'C6', 'F6'],
        ['F6', 'F6', 'D6', 'C5'],
        ['F6', 'F6', 'D6', 'D5'],
        ['F6', 'F6', 'D6', 'E5'],
        ['F6', 'F6', 'D6', 'F5'],
        ['F6', 'F6', 'D6', 'G5'],
        ['F6', 'F6', 'D6', 'A5'],
        ['F6', 'F6', 'D6', 'B5'],
        ['F6', 'F6', 'D6', 'C6'],
        ['F6', 'F6', 'D6', 'D6'],
        ['F6', 'F6', 'D6', 'E6'],
        ['F6', 'F6', 'D6', 'F6'],
        ['F6', 'F6', 'E6', 'C5'],
        ['F6', 'F6', 'E6', 'D5'],
        ['F6', 'F6', 'E6', 'E5'],
        ['F6', 'F6', 'E6', 'F5'],
        ['F6', 'F6', 'E6', 'G5'],
        ['F6', 'F6', 'E6', 'A5'],
        ['F6', 'F6', 'E6', 'B5'],
        ['F6', 'F6', 'E6', 'C6'],
        ['F6', 'F6', 'E6', 'D6'],
        ['F6', 'F6', 'E6', 'E6'],
        ['F6', 'F6', 'E6', 'F6'],
        ['F6', 'F6', 'F6', 'C5'],
        ['F6', 'F6', 'F6', 'D5'],
        ['F6', 'F6', 'F6', 'E5'],
        ['F6', 'F6', 'F6', 'F5'],
        ['F6', 'F6', 'F6', 'G5'],
        ['F6', 'F6', 'F6', 'A5'],
        ['F6', 'F6', 'F6', 'B5'],
        ['F6', 'F6', 'F6', 'C6'],
        ['F6', 'F6', 'F6', 'D6'],
        ['F6', 'F6', 'F6', 'E6'],
        ['F6', 'F6', 'F6', 'F6'],
    ];

    const noteNames = {
        'C5': 'Ντο', 'D5': 'Ρε', 'E5': 'Μι',
        'F5': 'Φα', 'G5': 'Σολ', 'A5': 'Λα',
        'B5': 'Σι', 'C6': 'Ντο', 'D6': 'Ρε',
        'E6': 'Μι', 'F6': 'Φα'
    };
    
    const allNotes = Object.keys(noteNames);

    let currentCombinationIndex = 0;
    let correctNotesString;
    let gameActive = false;
    let totalTime;
    let timerInterval;
    let totalAttempts = 0;
    let correctAnswers = 0;
    let wrongAnswers = 0;

    const photosContainer = document.querySelector('.photos-container');
    const answerButtonsContainer = document.getElementById('answer-buttons-container');
    const startButton = document.getElementById('start-button');
    const timeSelect = document.getElementById('time-select');
    const timerDisplay = document.getElementById('timer');
    const resultsModal = document.getElementById('results-modal');
    const resultsBody = document.getElementById('results-body');
    const closeModalButton = document.querySelector('.close-button');

    function loadPhotos(combo) {
        photosContainer.innerHTML = '';
        const solKeyImg = document.createElement('img');
        solKeyImg.src = 'photos/solkey.png';
        solKeyImg.alt = 'Κλειδί του Σολ';
        photosContainer.appendChild(solKeyImg);

        combo.forEach(photoName => {
            const img = document.createElement('img');
            img.src = `photos/${photoName}.png`;
            img.alt = photoName;
            photosContainer.appendChild(img);
        });
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createAnswers() {
        const currentCombo = combinations[currentCombinationIndex];
        const comboNotesString = currentCombo.map(note => noteNames[note]).join(', ');
        correctNotesString = comboNotesString;

        const answers = [correctNotesString];
        const incorrectAnswers = [];

        while (incorrectAnswers.length < 3) {
            let newIncorrectAnswer;
            
            // Δημιουργία της πρώτης λάθος απάντησης με μια μόνο αλλαγή
            if (incorrectAnswers.length === 0) {
                const tempCombo = [...currentCombo];
                const noteToChangeIndex = Math.floor(Math.random() * tempCombo.length);
                let newNote;
                do {
                    newNote = allNotes[Math.floor(Math.random() * allNotes.length)];
                } while (newNote === tempCombo[noteToChangeIndex]);
                tempCombo[noteToChangeIndex] = newNote;
                newIncorrectAnswer = tempCombo.map(note => noteNames[note]).join(', ');
            } else {
                // Δημιουργία των υπόλοιπων λάθος απαντήσεων με τυχαίες νότες
                const tempCombo = [];
                for (let i = 0; i < currentCombo.length; i++) {
                    const randomNote = allNotes[Math.floor(Math.random() * allNotes.length)];
                    tempCombo.push(randomNote);
                }
                newIncorrectAnswer = tempCombo.map(note => noteNames[note]).join(', ');
            }

            if (answers.indexOf(newIncorrectAnswer) === -1 && incorrectAnswers.indexOf(newIncorrectAnswer) === -1) {
                incorrectAnswers.push(newIncorrectAnswer);
            }
        }
        
        const allAnswers = [...answers, ...incorrectAnswers];
        shuffleArray(allAnswers);

        answerButtonsContainer.innerHTML = '';
        allAnswers.forEach((answerText) => {
            const button = document.createElement('button');
            button.classList.add('answer-button');
            button.textContent = answerText;
            button.dataset.correct = (answerText === correctNotesString);
            
            button.addEventListener('click', () => handleAnswer(button));
            answerButtonsContainer.appendChild(button);
        });
        
    }
    
    function handleAnswer(button) {
        if (!gameActive) return;

        totalAttempts++;
        if (button.dataset.correct === 'true') {
            correctAnswers++;
            button.classList.add('correct');
        } else {
            wrongAnswers++;
            button.classList.add('wrong');
        }
        // Απενεργοποίηση όλων των κουμπιών
        const allButtons = document.querySelectorAll('.answer-button');
        allButtons.forEach(btn => btn.disabled = true);

        // Αυτόματη αλλαγή άσκησης μετά από 1 δευτερόλεπτο
        setTimeout(() => {
            loadCombination();
        }, 1000);
    }

    function loadCombination() {
        if (!gameActive) return;

        const randomIndex = Math.floor(Math.random() * combinations.length);
        currentCombinationIndex = randomIndex;
        
        loadPhotos(combinations[currentCombinationIndex]);
        createAnswers();
    }
    
    function updateTimer() {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (totalTime <= 0) {
            endGame();
        } else {
            totalTime--;
        }
    }

    function startGame() {
        gameActive = true;
        totalAttempts = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
        
        const selectedMinutes = parseInt(timeSelect.value);
        totalTime = selectedMinutes * 60;
        
        startButton.disabled = true;
        timeSelect.disabled = true;
        
        loadCombination();
        
        timerInterval = setInterval(updateTimer, 1000);
    }
    
    function endGame() {
        gameActive = false;
        clearInterval(timerInterval);
        
        const allButtons = document.querySelectorAll('.answer-button');
        allButtons.forEach(btn => btn.disabled = true);
        
        startButton.disabled = false;
        timeSelect.disabled = false;
        
        showResults();
    }
    
    function showResults() {
        resultsBody.innerHTML = `
            <tr>
                <td>Συνολικές Προσπάθειες</td>
                <td>${totalAttempts}</td>
            </tr>
            <tr>
                <td>Σωστές Απαντήσεις</td>
                <td>${correctAnswers}</td>
            </tr>
            <tr>
                <td>Λάθος Απαντήσεις</td>
                <td>${wrongAnswers}</td>
            </tr>
            <tr>
                <td>Συνολικός Χρόνος</td>
                <td>${parseInt(timeSelect.value)} λεπτά</td>
            </tr>
        `;
        resultsModal.style.display = 'block';
    }

    // Event Listeners
    startButton.addEventListener('click', startGame);
    closeModalButton.addEventListener('click', () => {
        resultsModal.style.display = 'none';
        // Επαναφορά στην αρχική κατάσταση μετά το κλείσιμο του modal
        timerDisplay.textContent = `${String(parseInt(timeSelect.value)).padStart(2, '0')}:00`;
    });
    
    timeSelect.addEventListener('change', () => {
        timerDisplay.textContent = `${String(parseInt(timeSelect.value)).padStart(2, '0')}:00`;
    });
    
    // Αρχική εμφάνιση του χρονομέτρου
    timerDisplay.textContent = `${String(parseInt(timeSelect.value)).padStart(2, '0')}:00`;
});

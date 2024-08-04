function submitQuiz() {
    const answers = {
        q1: '2',
        q2: '3x + 7',
        q3: '4',
        q4: '9',
        q5: '2x + 2',
        q6: '2',
        q7: '7x - 6',
        q8: '5',
        q9: '4',
        q10: '-1x + 14',
        q11: '3',
        q12: '8y - 12 + y = 9y - 12'
    };

    let score = 0;
    const totalQuestions = 12;

    for (let i = 1; i <= totalQuestions; i++) {
        const userAnswer = document.getElementById(`q${i}`).value.trim().toLowerCase();
        const correctAnswer = answers[`q${i}`].toLowerCase();
        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `You got ${score} out of ${totalQuestions} correct!`;

    // Grade calculation
    const percentage = (score / totalQuestions) * 100;
    let grade;
    if (percentage >= 90) {
        grade = 'SS (Super Star)';
    } else if (percentage >= 80) {
        grade = 'S (Satisfactory)';
    } else if (percentage >= 70) {
        grade = 'A';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else if (percentage >= 40) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    resultDiv.innerHTML += `<br>Your grade: ${grade}`;
}

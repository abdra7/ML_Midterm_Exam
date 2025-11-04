// Exam data
const examData = {
  title: "Machine Learning Midterm Exam",
  totalMarks: 20,
  questions: [
    {
      id: 1,
      type: "multiple_choice",
      marks: 1,
      question: "Which of the following is NOT a type of machine learning?",
      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Prescriptive Learning"
      ],
      correctAnswer: 3,
      explanation: "Prescriptive Learning is not a recognized type of ML. The three main types are supervised, unsupervised, and reinforcement."
    },
    {
      id: 2,
      type: "multiple_choice",
      marks: 1,
      question: "In supervised learning, what are the input/output pairs called?",
      options: [
        "Features and Targets",
        "Predictors and Responses",
        "Input and Target vectors",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "All these terms are synonymous in machine learning for input and output data pairs."
    },
    {
      id: 3,
      type: "true_false",
      marks: 1,
      question: "True or False: Clustering is a supervised learning task.",
      correctAnswer: false,
      explanation: "Clustering is an unsupervised learning task because there are no labeled targets in the training data."
    },
    {
      id: 4,
      type: "multiple_choice",
      marks: 1,
      question: "What does the term 'generalization' mean in machine learning?",
      options: [
        "The ability of a model to perform well on new, unseen data",
        "Making the model as complex as possible",
        "Training a model on a large dataset",
        "Using multiple algorithms together"
      ],
      correctAnswer: 0,
      explanation: "Generalization refers to how well a trained model performs on new data it hasn't seen before."
    },
    {
      id: 5,
      type: "multiple_choice",
      marks: 1,
      question: "In linear regression y = mX + B, what does 'm' represent?",
      options: [
        "The intercept",
        "The slope",
        "The variance",
        "The bias term"
      ],
      correctAnswer: 1,
      explanation: "The slope (m) indicates how much Y changes for a one-unit change in X."
    },
    {
      id: 6,
      type: "multiple_choice",
      marks: 1,
      question: "What is the main goal of regularization in linear regression?",
      options: [
        "To increase the slope",
        "To prevent overfitting by penalizing large weights",
        "To speed up computation",
        "To increase training error"
      ],
      correctAnswer: 1,
      explanation: "Regularization adds a penalty term to prevent the model from fitting too closely to training data."
    },
    {
      id: 7,
      type: "true_false",
      marks: 1,
      question: "True or False: The bias-variance tradeoff suggests that simpler models always perform better.",
      correctAnswer: false,
      explanation: "The tradeoff shows that both very simple (high bias) and very complex (high variance) models perform poorly."
    },
    {
      id: 8,
      type: "multiple_choice",
      marks: 1,
      question: "In logistic regression, what function maps scores to probabilities between 0 and 1?",
      options: [
        "Linear function",
        "Sigmoid (logistic) function",
        "Exponential function",
        "Polynomial function"
      ],
      correctAnswer: 1,
      explanation: "The sigmoid function σ(z) = 1/(1+e^-z) maps any real number to a value between 0 and 1."
    },
    {
      id: 9,
      type: "multiple_choice",
      marks: 1,
      question: "What is the decision threshold in logistic regression?",
      options: [
        "0.25",
        "0.50",
        "0.75",
        "1.00"
      ],
      correctAnswer: 1,
      explanation: "The standard decision threshold is 0.5, where P(y=1|x) >= 0.5 predicts class 1."
    },
    {
      id: 10,
      type: "multiple_choice",
      marks: 1,
      question: "Which of the following is a discriminative classifier?",
      options: [
        "Naive Bayes",
        "Logistic Regression",
        "Gaussian Mixture Model",
        "Hidden Markov Model"
      ],
      correctAnswer: 1,
      explanation: "Logistic Regression directly models P(y|x), making it discriminative, unlike generative models."
    },
    {
      id: 11,
      type: "true_false",
      marks: 1,
      question: "True or False: Support vectors are all points in the dataset closest to the decision boundary.",
      correctAnswer: true,
      explanation: "Support vectors are the data points closest to the hyperplane that define the margin."
    },
    {
      id: 12,
      type: "multiple_choice",
      marks: 1,
      question: "In SVM, what does the 'margin' represent?",
      options: [
        "The distance between the hyperplane and support vectors",
        "The area where no data points exist",
        "The error in classification",
        "Both A and B"
      ],
      correctAnswer: 3,
      explanation: "The margin is the distance between the hyperplane and the closest data points of each class."
    },
    {
      id: 13,
      type: "multiple_choice",
      marks: 1,
      question: "What is the primary goal of Statistical Learning Theory?",
      options: [
        "To find complex models that fit any data",
        "To understand how algorithms generalize from data",
        "To maximize training error",
        "To eliminate the need for test data"
      ],
      correctAnswer: 1,
      explanation: "SLT provides theoretical framework for understanding generalization and overfitting."
    },
    {
      id: 14,
      type: "true_false",
      marks: 1,
      question: "True or False: The Kernel Trick allows SVM to work with non-linearly separable data by implicitly mapping to higher dimensions.",
      correctAnswer: true,
      explanation: "The kernel trick enables SVM to handle complex, non-linear relationships efficiently."
    },
    {
      id: 15,
      type: "multiple_choice",
      marks: 1,
      question: "Which of the following best describes overfitting?",
      options: [
        "When a model is too simple and misses important patterns",
        "When a model fits training data too well and performs poorly on test data",
        "When training error is lower than test error",
        "B and C"
      ],
      correctAnswer: 3,
      explanation: "Overfitting occurs when a model memorizes training data rather than learning generalizable patterns."
    },
    {
      id: 16,
      type: "true_false",
      marks: 1,
      question: "True or False: In least squares regression, we minimize the sum of squared errors.",
      correctAnswer: true,
      explanation: "Least squares minimizes the sum of squared differences between observed and predicted values."
    },
    {
      id: 17,
      type: "multiple_choice",
      marks: 1,
      question: "What is the loss function commonly used in logistic regression?",
      options: [
        "Mean Squared Error",
        "Cross-Entropy Loss",
        "Absolute Error Loss",
        "Hinge Loss"
      ],
      correctAnswer: 1,
      explanation: "Cross-entropy loss is the standard loss function for logistic regression."
    },
    {
      id: 18,
      type: "true_false",
      marks: 1,
      question: "True or False: Linear regression can handle both classification and regression tasks equally well.",
      correctAnswer: false,
      explanation: "Linear regression is designed for regression tasks; logistic regression is better for classification."
    },
    {
      id: 19,
      type: "multiple_choice",
      marks: 2,
      question: "Which statement best describes the difference between approximation error and estimation error?",
      options: [
        "Approximation error comes from using a hypothesis class that cannot represent the true function; estimation error comes from having limited training data",
        "They are the same thing",
        "Estimation error only exists in unsupervised learning",
        "Approximation error is always larger than estimation error"
      ],
      correctAnswer: 0,
      explanation: "Approximation error reflects model class limitations; estimation error reflects finite sample effects."
    },
    {
      id: 20,
      type: "multiple_choice",
      marks: 1,
      question: "In the context of machine learning, what does 'i.i.d.' mean?",
      options: [
        "Independent and identical distribution",
        "Iterative identification device",
        "Intensive input dataset",
        "Intermediate inference dimension"
      ],
      correctAnswer: 0,
      explanation: "i.i.d. means data points are independently and identically distributed from the same probability distribution."
    }
  ]
};

// State management
let currentSlide = 0;
let userAnswers = {};
let totalScore = 0;
const totalSlides = examData.questions.length + 2; // +2 for title and results

// DOM elements
const examContent = document.getElementById('examContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const slideCounter = document.getElementById('slideCounter');
const scoreDisplay = document.getElementById('scoreDisplay');

// Initialize the exam
function initExam() {
  createTitleSlide();
  examData.questions.forEach((question, index) => {
    createQuestionSlide(question, index);
  });
  createResultsSlide();
  showSlide(0);
  updateNavigation();
  updateProgress();
}

// Create title slide
function createTitleSlide() {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.innerHTML = `
    <div class="slide-title">
      <h2>${examData.title}</h2>
      <p style="margin-top: var(--space-16); font-size: var(--font-size-xl);">Total Marks: ${examData.totalMarks}</p>
      <div style="margin-top: var(--space-32); padding: var(--space-24); background-color: var(--color-bg-1); border-radius: var(--radius-base);">
        <h3 style="font-size: var(--font-size-lg); margin-bottom: var(--space-16); color: var(--color-text);">Instructions:</h3>
        <ul style="text-align: left; list-style-position: inside; color: var(--color-text-secondary); line-height: 1.8;">
          <li>This exam contains 20 questions</li>
          <li>Read each question carefully</li>
          <li>Select your answer and click Submit</li>
          <li>You'll receive immediate feedback</li>
          <li>Use Next/Previous buttons to navigate</li>
          <li>Review your answers at the end</li>
        </ul>
      </div>
      <p style="margin-top: var(--space-24); color: var(--color-text-secondary);">Click Next to begin</p>
    </div>
  `;
  examContent.appendChild(slide);
}

// Create question slide
function createQuestionSlide(question, index) {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.dataset.questionId = question.id;
  
  let optionsHTML = '';
  
  if (question.type === 'multiple_choice') {
    optionsHTML = `
      <ul class="options-list">
        ${question.options.map((option, i) => `
          <li class="option-item" data-option="${i}">
            <input type="radio" name="question-${question.id}" id="q${question.id}-opt${i}" value="${i}">
            <label for="q${question.id}-opt${i}">${option}</label>
          </li>
        `).join('')}
      </ul>
    `;
  } else if (question.type === 'true_false') {
    optionsHTML = `
      <div class="true-false-container">
        <div class="option-item true-false-option" data-option="true">
          <input type="radio" name="question-${question.id}" id="q${question.id}-true" value="true">
          <label for="q${question.id}-true">True</label>
        </div>
        <div class="option-item true-false-option" data-option="false">
          <input type="radio" name="question-${question.id}" id="q${question.id}-false" value="false">
          <label for="q${question.id}-false">False</label>
        </div>
      </div>
    `;
  }
  
  slide.innerHTML = `
    <div class="question-container">
      <div class="question-header">
        <span class="question-number">Question ${question.id}</span>
        <span class="question-marks">${question.marks} mark${question.marks > 1 ? 's' : ''}</span>
      </div>
      <p class="question-text">${question.question}</p>
      ${optionsHTML}
      <button class="btn btn--primary submit-btn" onclick="submitAnswer(${question.id})">Submit Answer</button>
      <div class="feedback" id="feedback-${question.id}">
        <div class="feedback-title"></div>
        <div class="feedback-text"></div>
      </div>
    </div>
  `;
  
  examContent.appendChild(slide);
  
  // Add click handlers for option items
  const optionItems = slide.querySelectorAll('.option-item');
  optionItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.tagName !== 'INPUT') {
        const input = item.querySelector('input');
        input.checked = true;
      }
      optionItems.forEach(opt => opt.classList.remove('selected'));
      item.classList.add('selected');
    });
  });
}

// Create results slide
function createResultsSlide() {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.id = 'results-slide';
  slide.innerHTML = `
    <div class="results-container">
      <h2 style="font-size: var(--font-size-3xl); margin-bottom: var(--space-24);">Exam Complete!</h2>
      <div class="results-score">
        <div class="score-circle">
          <div class="score-value" id="finalScore">0/20</div>
          <div class="score-label">Total Score</div>
        </div>
        <p class="performance-message" id="performanceMessage"></p>
      </div>
      <div class="review-section">
        <h3 class="review-title">Answer Review</h3>
        <div id="reviewList"></div>
      </div>
    </div>
  `;
  examContent.appendChild(slide);
}

// Submit answer function
function submitAnswer(questionId) {
  const question = examData.questions.find(q => q.id === questionId);
  const slide = document.querySelector(`[data-question-id="${questionId}"]`);
  const feedback = document.getElementById(`feedback-${questionId}`);
  const submitBtn = slide.querySelector('.submit-btn');
  
  let selectedAnswer;
  
  if (question.type === 'multiple_choice') {
    const selected = slide.querySelector(`input[name="question-${questionId}"]:checked`);
    if (!selected) {
      alert('Please select an answer');
      return;
    }
    selectedAnswer = parseInt(selected.value);
  } else if (question.type === 'true_false') {
    const selected = slide.querySelector(`input[name="question-${questionId}"]:checked`);
    if (!selected) {
      alert('Please select True or False');
      return;
    }
    selectedAnswer = selected.value === 'true';
  }
  
  // Check if already answered
  if (userAnswers[questionId]) {
    return;
  }
  
  const isCorrect = selectedAnswer === question.correctAnswer;
  
  // Store answer
  userAnswers[questionId] = {
    answer: selectedAnswer,
    correct: isCorrect,
    marks: isCorrect ? question.marks : 0
  };
  
  // Update score
  if (isCorrect) {
    totalScore += question.marks;
  }
  
  // Show feedback
  feedback.classList.add('show');
  feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
  feedback.querySelector('.feedback-title').textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
  feedback.querySelector('.feedback-text').textContent = question.explanation;
  
  // Highlight options
  const optionItems = slide.querySelectorAll('.option-item');
  optionItems.forEach((item, index) => {
    const input = item.querySelector('input');
    if (question.type === 'multiple_choice') {
      if (index === question.correctAnswer) {
        item.classList.add('correct');
      } else if (input.checked && index !== question.correctAnswer) {
        item.classList.add('incorrect');
      }
    } else if (question.type === 'true_false') {
      const value = input.value === 'true';
      if (value === question.correctAnswer) {
        item.classList.add('correct');
      } else if (input.checked && value !== question.correctAnswer) {
        item.classList.add('incorrect');
      }
    }
    input.disabled = true;
  });
  
  // Disable submit button
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.5';
  
  // Update score display
  updateScoreDisplay();
}

// Show specific slide
function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  
  currentSlide = index;
  updateNavigation();
  updateProgress();
  
  // If showing results slide, populate results
  if (index === totalSlides - 1) {
    showResults();
  }
}

// Update navigation buttons
function updateNavigation() {
  prevBtn.disabled = currentSlide === 0;
  
  if (currentSlide === totalSlides - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = currentSlide === 0 ? 'Start Exam' : 'Next';
  }
}

// Update progress bar and counter
function updateProgress() {
  const progress = (currentSlide / (totalSlides - 1)) * 100;
  progressBar.style.width = `${progress}%`;
  slideCounter.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`;
}

// Update score display
function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${totalScore}/${examData.totalMarks}`;
}

// Show results
function showResults() {
  const finalScoreEl = document.getElementById('finalScore');
  const performanceMessageEl = document.getElementById('performanceMessage');
  const reviewListEl = document.getElementById('reviewList');
  
  finalScoreEl.textContent = `${totalScore}/${examData.totalMarks}`;
  
  const percentage = (totalScore / examData.totalMarks) * 100;
  let message = '';
  
  if (percentage >= 90) {
    message = 'Excellent work! You have a strong understanding of machine learning concepts.';
  } else if (percentage >= 80) {
    message = 'Great job! You have a good grasp of the material.';
  } else if (percentage >= 70) {
    message = 'Good effort! Review the areas where you struggled.';
  } else if (percentage >= 60) {
    message = 'Fair performance. Consider reviewing the lecture materials.';
  } else {
    message = 'Keep studying! Review all the lecture topics carefully.';
  }
  
  performanceMessageEl.textContent = message;
  
  // Populate review list
  reviewListEl.innerHTML = '';
  examData.questions.forEach(question => {
    const userAnswer = userAnswers[question.id];
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';
    
    let answerText = '';
    if (question.type === 'multiple_choice') {
      answerText = `Your answer: ${question.options[userAnswer.answer]}`;
      if (!userAnswer.correct) {
        answerText += ` | Correct answer: ${question.options[question.correctAnswer]}`;
      }
    } else if (question.type === 'true_false') {
      answerText = `Your answer: ${userAnswer.answer ? 'True' : 'False'}`;
      if (!userAnswer.correct) {
        answerText += ` | Correct answer: ${question.correctAnswer ? 'True' : 'False'}`;
      }
    }
    
    reviewItem.innerHTML = `
      <div class="review-item-header">
        <span class="review-question"><strong>Q${question.id}:</strong> ${question.question}</span>
        <span class="review-status ${userAnswer.correct ? 'correct' : 'incorrect'}">
          ${userAnswer.correct ? '✓ Correct' : '✗ Incorrect'} (${userAnswer.marks}/${question.marks})
        </span>
      </div>
      <div class="review-answer">${answerText}</div>
    `;
    
    reviewListEl.appendChild(reviewItem);
  });
}

// Navigation event listeners
prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    showSlide(currentSlide + 1);
  }
});

// Initialize on page load
initExam();
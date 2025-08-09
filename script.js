  const lessons = [
            {
                id: 1,
                title: "Advanced Calculus - Integration Techniques",
                subject: "math",
                instructor: "Dr. Sarah Johnson",
                date: "2024-01-15",
                time: "14:00",
                duration: "90 min",
                price: 25,
                rating: 4.8,
                enrolled: 124,
                description: "Master advanced integration techniques including substitution, integration by parts, and partial fractions.",
                thumbnail: "https://placehold.co/400x200/4361ee/ffffff?text=Calculus"
            },
            {
                id: 2,
                title: "Quantum Mechanics Fundamentals",
                subject: "physics",
                instructor: "Prof. Michael Chen",
                date: "2024-01-16",
                time: "16:30",
                duration: "120 min",
                price: 35,
                rating: 4.9,
                enrolled: 89,
                description: "Introduction to quantum mechanics principles, wave functions, and Schrödinger equation.",
                thumbnail: "https://placehold.co/400x200/7b3fc9/ffffff?text=Quantum"
            },
            {
                id: 3,
                title: "Organic Chemistry Reactions",
                subject: "chemistry",
                instructor: "Dr. Emily Rodriguez",
                date: "2024-01-17",
                time: "10:00",
                duration: "100 min",
                price: 30,
                rating: 4.7,
                enrolled: 156,
                description: "Comprehensive guide to organic chemistry reactions and mechanisms.",
                thumbnail: "https://placehold.co/400x200/10b981/ffffff?text=Chemistry"
            },
            {
                id: 4,
                title: "Cell Biology and Genetics",
                subject: "biology",
                instructor: "Prof. David Wilson",
                date: "2024-01-18",
                time: "13:00",
                duration: "110 min",
                price: 28,
                rating: 4.6,
                enrolled: 203,
                description: "Deep dive into cell structure, function, and genetic principles.",
                thumbnail: "https://placehold.co/400x200/ef4444/ffffff?text=Biology"
            }
        ];

        const notes = [
            {
                id: 1,
                title: "Calculus Integration Formulas",
                subject: "math",
                pages: 12,
                downloads: 2341,
                rating: 4.8,
                file: "calculus-notes.pdf"
            },
            {
                id: 2,
                title: "Physics Equations Sheet",
                subject: "physics",
                pages: 8,
                downloads: 1892,
                rating: 4.7,
                file: "physics-equations.pdf"
            },
            {
                id: 3,
                title: "Chemistry Reaction Mechanisms",
                subject: "chemistry",
                pages: 15,
                downloads: 1654,
                rating: 4.9,
                file: "chemistry-mechanisms.pdf"
            },
            {
                id: 4,
                title: "Biology Cell Structure Notes",
                subject: "biology",
                pages: 10,
                downloads: 1423,
                rating: 4.6,
                file: "biology-cells.pdf"
            }
        ];

        const videos = [
            {
                id: 1,
                title: "Understanding Derivatives",
                subject: "math",
                duration: "15:32",
                views: 12500,
                thumbnail: "https://placehold.co/400x200/4361ee/ffffff?text=Derivatives"
            },
            {
                id: 2,
                title: "Newton's Laws Explained",
                subject: "physics",
                duration: "18:45",
                views: 9800,
                thumbnail: "https://placehold.co/400x200/7b3fc9/ffffff?text=Newton"
            },
            {
                id: 3,
                title: "Chemical Bonding Basics",
                subject: "chemistry",
                duration: "12:20",
                views: 15200,
                thumbnail: "https://placehold.co/400x200/10b981/ffffff?text=Bonding"
            },
            {
                id: 4,
                title: "DNA Structure and Replication",
                subject: "biology",
                duration: "22:15",
                views: 11300,
                thumbnail: "https://placehold.co/400x200/ef4444/ffffff?text=DNA"
            }
        ];

        const aiQuestions = [
            {
                id: 1,
                subject: "math",
                question: "A particle moves along a curve defined by the equation y = x³ - 3x² + 2. Find the points where the tangent is horizontal.",
                difficulty: "Hard",
                topic: "Calculus"
            },
            {
                id: 2,
                subject: "physics",
                question: "A 2kg object is moving at 5m/s when it collides elastically with a 3kg object at rest. Calculate the final velocities of both objects.",
                difficulty: "Medium",
                topic: "Momentum"
            },
            {
                id: 3,
                subject: "chemistry",
                question: "Explain the mechanism of electrophilic aromatic substitution using benzene as an example.",
                difficulty: "Hard",
                topic: "Organic Chemistry"
            },
            {
                id: 4,
                subject: "biology",
                question: "Describe the process of photosynthesis and explain how it contributes to the carbon cycle.",
                difficulty: "Medium",
                topic: "Cell Biology"
            }
        ];

        // DOM Elements
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        const paymentModal = document.getElementById('payment-modal');
        const closeModal = document.querySelector('.close-modal');
        const btnCancel = document.querySelector('.btn-cancel');
        const paymentForm = document.getElementById('payment-form');

        // Current state
        let currentLesson = null;
        let enrolledLessons = [];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            renderLessons();
            renderNotes();
            renderVideos();
            renderAIQuestions();
            setupEventListeners();
        });

        // Set up event listeners
        function setupEventListeners() {
            // Tab switching
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const tabId = button.getAttribute('data-tab');
                    switchTab(tabId);
                });
            });

            // Modal closing
            closeModal.addEventListener('click', () => {
                paymentModal.classList.remove('show');
            });

            btnCancel.addEventListener('click', () => {
                paymentModal.classList.remove('show');
            });

            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === paymentModal) {
                    paymentModal.classList.remove('show');
                }
            });

            // Payment form submission
            paymentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                handlePayment();
            });

            // Search functionality
            document.getElementById('lesson-search').addEventListener('input', filterLessons);
            document.getElementById('subject-filter').addEventListener('change', filterLessons);
            document.getElementById('note-search').addEventListener('input', filterNotes);
            document.getElementById('video-search').addEventListener('input', filterVideos);
            document.getElementById('ai-search').addEventListener('input', filterAIQuestions);
        }

        // Switch between tabs
        function switchTab(tabId) {
            // Update active tab button
            tabButtons.forEach(button => {
                if (button.getAttribute('data-tab') === tabId) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });

            // Show active tab content
            tabContents.forEach(content => {
                if (content.id === `${tabId}-content`) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        }

        // Render lessons
        function renderLessons() {
            const grid = document.getElementById('lessons-grid');
            grid.innerHTML = '';
            
            lessons.forEach(lesson => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${lesson.thumbnail}" alt="${lesson.title}" class="card-img">
                    <div class="card-body">
                        <span class="card-tag tag-${lesson.subject}">${getSubjectName(lesson.subject)}</span>
                        <h3 class="card-title">${lesson.title}</h3>
                        <p class="card-text">${lesson.description}</p>
                        <div class="card-meta">
                            <span><i class="fas fa-user"></i> ${lesson.instructor}</span>
                            <span><i class="fas fa-clock"></i> ${lesson.duration}</span>
                        </div>
                        <div class="card-footer">
                            <span class="card-price">$${lesson.price}</span>
                            ${isEnrolled(lesson.id) ? 
                                '<button class="btn-enrolled"><i class="fas fa-check"></i> Enrolled</button>' : 
                                `<button class="btn-enroll" data-id="${lesson.id}">Enroll Now</button>`
                            }
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            // Add event listeners to enroll buttons
            document.querySelectorAll('.btn-enroll').forEach(button => {
                button.addEventListener('click', (e) => {
                    const lessonId = parseInt(e.target.getAttribute('data-id'));
                    const lesson = lessons.find(l => l.id === lessonId);
                    openPaymentModal(lesson);
                });
            });
        }

        // Render notes
        function renderNotes() {
            const grid = document.getElementById('notes-grid');
            grid.innerHTML = '';
            
            notes.forEach(note => {
                const card = document.createElement('div');
                card.className = 'note-card';
                card.innerHTML = `
                    <div class="note-icon">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="note-content">
                        <h3 class="note-title">${note.title}</h3>
                        <div class="note-meta">
                            <span>${getSubjectName(note.subject)} • ${note.pages} pages</span>
                            <span><i class="fas fa-download"></i> ${note.downloads.toLocaleString()} downloads</span>
                        </div>
                    </div>
                    <button class="btn-download" data-file="${note.file}">
                        <i class="fas fa-download"></i> Download
                    </button>
                `;
                grid.appendChild(card);
            });

            // Add event listeners to download buttons
            document.querySelectorAll('.btn-download').forEach(button => {
                button.addEventListener('click', (e) => {
                    const file = e.target.closest('.btn-download').getAttribute('data-file');
                    alert(`Downloading ${file}...`);
                });
            });
        }

        // Render videos
        function renderVideos() {
            const grid = document.getElementById('videos-grid');
            grid.innerHTML = '';
            
            videos.forEach(video => {
                const card = document.createElement('div');
                card.className = 'video-card';
                card.innerHTML = `
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <div class="play-btn">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="video-duration">${video.duration}</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <div class="video-meta">
                            <span>${getSubjectName(video.subject)}</span>
                            <span>${video.views.toLocaleString()} views</span>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            // Add event listeners to play buttons
            document.querySelectorAll('.play-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const title = e.target.closest('.video-card').querySelector('.video-title').textContent;
                    alert(`Playing video: ${title}`);
                });
            });
        }

        // Render AI questions
        function renderAIQuestions() {
            const grid = document.getElementById('ai-grid');
            grid.innerHTML = '';
            
            aiQuestions.forEach(question => {
                const card = document.createElement('div');
                card.className = 'ai-question';
                card.innerHTML = `
                    <div class="question-header">
                        <span class="difficulty diff-${question.difficulty.toLowerCase()}">${question.difficulty}</span>
                        <span>${question.topic}</span>
                    </div>
                    <p class="question-text">${question.question}</p>
                    <div class="question-footer">
                        <span class="question-subject">${getSubjectName(question.subject)}</span>
                        <div class="question-actions">
                            <button class="btn-solution">Show Solution</button>
                            <button class="btn-save">Save</button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            // Add event listeners to solution buttons
            document.querySelectorAll('.btn-solution').forEach(button => {
                button.addEventListener('click', (e) => {
                    const question = e.target.closest('.ai-question').querySelector('.question-text').textContent;
                    alert(`Solution for: ${question.substring(0, 50)}...\n\nThis would show the detailed solution in a real application.`);
                });
            });
        }

        // Filter functions
        function filterLessons() {
            const searchTerm = document.getElementById('lesson-search').value.toLowerCase();
            const subjectFilter = document.getElementById('subject-filter').value;
            
            const filteredLessons = lessons.filter(lesson => {
                const matchesSearch = lesson.title.toLowerCase().includes(searchTerm) || 
                                    lesson.instructor.toLowerCase().includes(searchTerm);
                const matchesSubject = subjectFilter === 'all' || lesson.subject === subjectFilter;
                return matchesSearch && matchesSubject;
            });
            
            updateLessonsGrid(filteredLessons);
        }

        function filterNotes() {
            const searchTerm = document.getElementById('note-search').value.toLowerCase();
            const filteredNotes = notes.filter(note => 
                note.title.toLowerCase().includes(searchTerm) || 
                note.subject.toLowerCase().includes(searchTerm)
            );
            updateNotesGrid(filteredNotes);
        }

        function filterVideos() {
            const searchTerm = document.getElementById('video-search').value.toLowerCase();
            const filteredVideos = videos.filter(video => 
                video.title.toLowerCase().includes(searchTerm) || 
                video.subject.toLowerCase().includes(searchTerm)
            );
            updateVideosGrid(filteredVideos);
        }

        function filterAIQuestions() {
            const searchTerm = document.getElementById('ai-search').value.toLowerCase();
            const filteredQuestions = aiQuestions.filter(question => 
                question.question.toLowerCase().includes(searchTerm) || 
                question.subject.toLowerCase().includes(searchTerm) ||
                question.topic.toLowerCase().includes(searchTerm)
            );
            updateAIQuestionsGrid(filteredQuestions);
        }

        // Update grid functions
        function updateLessonsGrid(filteredLessons) {
            const grid = document.getElementById('lessons-grid');
            grid.innerHTML = '';
            
            filteredLessons.forEach(lesson => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${lesson.thumbnail}" alt="${lesson.title}" class="card-img">
                    <div class="card-body">
                        <span class="card-tag tag-${lesson.subject}">${getSubjectName(lesson.subject)}</span>
                        <h3 class="card-title">${lesson.title}</h3>
                        <p class="card-text">${lesson.description}</p>
                        <div class="card-meta">
                            <span><i class="fas fa-user"></i> ${lesson.instructor}</span>
                            <span><i class="fas fa-clock"></i> ${lesson.duration}</span>
                        </div>
                        <div class="card-footer">
                            <span class="card-price">$${lesson.price}</span>
                            ${isEnrolled(lesson.id) ? 
                                '<button class="btn-enrolled"><i class="fas fa-check"></i> Enrolled</button>' : 
                                `<button class="btn-enroll" data-id="${lesson.id}">Enroll Now</button>`
                            }
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            // Add event listeners to new enroll buttons
            document.querySelectorAll('.btn-enroll').forEach(button => {
                button.addEventListener('click', (e) => {
                    const lessonId = parseInt(e.target.getAttribute('data-id'));
                    const lesson = lessons.find(l => l.id === lessonId);
                    openPaymentModal(lesson);
                });
            });
        }

        function updateNotesGrid(filteredNotes) {
            const grid = document.getElementById('notes-grid');
            grid.innerHTML = '';
            
            filteredNotes.forEach(note => {
                const card = document.createElement('div');
                card.className = 'note-card';
                card.innerHTML = `
                    <div class="note-icon">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div class="note-content">
                        <h3 class="note-title">${note.title}</h3>
                        <div class="note-meta">
                            <span>${getSubjectName(note.subject)} • ${note.pages} pages</span>
                            <span><i class="fas fa-download"></i> ${note.downloads.toLocaleString()} downloads</span>
                        </div>
                    </div>
                    <button class="btn-download" data-file="${note.file}">
                        <i class="fas fa-download"></i> Download
                    </button>
                `;
                grid.appendChild(card);
            });

            // Add event listeners to new download buttons
            document.querySelectorAll('.btn-download').forEach(button => {
                button.addEventListener('click', (e) => {
                    const file = e.target.closest('.btn-download').getAttribute('data-file');
                    alert(`Downloading ${file}...`);
                });
            });
        }

        function updateVideosGrid(filteredVideos) {
            const grid = document.getElementById('videos-grid');
            grid.innerHTML = '';
            
            filteredVideos.forEach(video => {
                const card = document.createElement('div');
                card.className = 'video-card';
                card.innerHTML = `
                    <div class="video-thumbnail">
                        <img src="${video.thumbnail}" alt="${video.title}">
                        <div class="play-btn">
                            <i class="fas fa-play"></i>
                        </div>
                        <div class="video-duration">${video.duration}</div>
                    </div>
                    <div class="video-info">
                        <h3 class="video-title">${video.title}</h3>
                        <div class="video-meta">
                            <span>${getSubjectName(video.subject)}</span>
                            <span>${video.views.toLocaleString()} views</span>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            // Add event listeners to new play buttons
            document.querySelectorAll('.play-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const title = e.target.closest('.video-card').querySelector('.video-title').textContent;
                    alert(`Playing video: ${title}`);
                });
            });
        }

        function updateAIQuestionsGrid(filteredQuestions) {
            const grid = document.getElementById('ai-grid');
            grid.innerHTML = '';
            
            filteredQuestions.forEach(question => {
                const card = document.createElement('div');
                card.className = 'ai-question';
                card.innerHTML = `
                    <div class="question-header">
                        <span class="difficulty diff-${question.difficulty.toLowerCase()}">${question.difficulty}</span>
                        <span>${question.topic}</span>
                    </div>
                    <p class="question-text">${question.question}</p>
                    <div class="question-footer">
                        <span class="question-subject">${getSubjectName(question.subject)}</span>
                        <div class="question-actions">
                            <button class="btn-solution">Show Solution</button>
                            <button class="btn-save">Save</button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            // Add event listeners to new solution buttons
            document.querySelectorAll('.btn-solution').forEach(button => {
                button.addEventListener('click', (e) => {
                    const question = e.target.closest('.ai-question').querySelector('.question-text').textContent;
                    alert(`Solution for: ${question.substring(0, 50)}...\n\nThis would show the detailed solution in a real application.`);
                });
            });
        }

        // Helper functions
        function getSubjectName(subject) {
            const subjects = {
                'math': 'Mathematics',
                'physics': 'Physics',
                'chemistry': 'Chemistry',
                'biology': 'Biology'
            };
            return subjects[subject] || subject;
        }

        function isEnrolled(lessonId) {
            return enrolledLessons.includes(lessonId);
        }

        // Payment modal functions
        function openPaymentModal(lesson) {
            currentLesson = lesson;
            document.getElementById('modal-lesson-title').textContent = lesson.title;
            document.getElementById('modal-lesson-instructor').textContent = lesson.instructor;
            document.getElementById('modal-lesson-date').textContent = `${new Date(lesson.date).toLocaleDateString()} at ${lesson.time}`;
            document.getElementById('modal-lesson-price').textContent = `$${lesson.price}`;
            paymentModal.classList.add('show');
        }

        function handlePayment() {
            if (currentLesson) {
                enrolledLessons.push(currentLesson.id);
                alert(`Payment successful! You will receive the lesson link for "${currentLesson.title}" shortly.`);
                paymentModal.classList.remove('show');
                renderLessons(); // Re-render to update enrollment status
            }
        }
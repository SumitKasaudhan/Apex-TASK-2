// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Form Validation
const validateForm = () => {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    
    // Validation functions
    const validateName = () => {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            return false;
        } else if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            return false;
        } else {
            nameError.textContent = '';
            return true;
        }
    };
    
    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    };
    
    const validatePhone = () => {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
        if (phoneInput.value.trim() !== '' && !phoneRegex.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Please enter a valid phone number';
            return false;
        } else {
            phoneError.textContent = '';
            return true;
        }
    };
    
    const validateSubject = () => {
        if (subjectInput.value === '') {
            subjectError.textContent = 'Please select a subject';
            return false;
        } else {
            subjectError.textContent = '';
            return true;
        }
    };
    
    const validateMessage = () => {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            return false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            return false;
        } else {
            messageError.textContent = '';
            return true;
        }
    };
    
    // Add event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    subjectInput.addEventListener('change', validateSubject);
    messageInput.addEventListener('input', validateMessage);
    
    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isPhoneValid && isSubjectValid && isMessageValid) {
            // Form is valid, you can submit it or process the data
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });
};

// To-Do List Functionality
const initTodoList = () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    
    // Add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            // Create new task item
            const li = document.createElement('li');
            
            // Create task text
            const taskTextSpan = document.createElement('span');
            taskTextSpan.textContent = taskText;
            
            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });
            
            // Append elements to list item
            li.appendChild(taskTextSpan);
            li.appendChild(deleteBtn);
            
            // Add list item to task list
            taskList.appendChild(li);
            
            // Clear input
            taskInput.value = '';
            taskInput.focus();
        }
    };
    
    // Add task when button is clicked
    addTaskBtn.addEventListener('click', addTask);
    
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
};

// Image Gallery Functionality
const initGallery = () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const addImageBtn = document.getElementById('add-image');
    const removeImageBtn = document.getElementById('remove-image');
    
    // Add a new image
    addImageBtn.addEventListener('click', () => {
        const newIndex = galleryContainer.children.length + 1;
        const newItem = document.createElement('div');
        newItem.className = 'gallery-item';
        
        const placeholderImg = document.createElement('div');
        placeholderImg.className = 'placeholder-img';
        placeholderImg.textContent = `Image ${newIndex}`;
        
        newItem.appendChild(placeholderImg);
        galleryContainer.appendChild(newItem);
    });
    
    // Remove the last image
    removeImageBtn.addEventListener('click', () => {
        const items = galleryContainer.querySelectorAll('.gallery-item');
        if (items.length > 0) {
            items[items.length - 1].remove();
        }
    });
};

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    validateForm();
    initTodoList();
    initGallery();
});
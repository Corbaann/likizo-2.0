// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCDPYPZnYNnQKCARt91wLcqkR2tyB8-juE",
    authDomain: "likizo-849f0.firebaseapp.com",
    projectId: "likizo-849f0",
    storageBucket: "likizo-849f0.firebasestorage.app",
    messagingSenderId: "79679956225",
    appId: "1:79679956225:web:1d15a1347598d62b9d6700",
    measurementId: "G-BQN3H3W8S9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Toggle password visibility
function togglePassword() {
  const passwordInput = document.getElementById('password');
  const toggleBtn = document.querySelector('.toggle-password');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    toggleBtn.textContent = '🙈';
  } else {
    passwordInput.type = 'password';
    toggleBtn.textContent = '👁️';
  }
}

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    alert("Logged in successfully!");
    window.location.href = "level.html"; // Redirect to dashboard
  } catch (error) {
    alert("Error: " + error.message);
  }
  

// Forgot Password
document.getElementById('forgotPassword').addEventListener('click', (e) => {
  e.preventDefault();
  const email = prompt("Enter your email to reset password:");
  if (email) {
    auth.sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  }
});

// Google Sign-In
async function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
    alert("Signed in with Google!");
    window.location.href = "level.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
}
});

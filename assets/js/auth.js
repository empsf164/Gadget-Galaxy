/**
 * GADGET GALAXY — Authentication Logic (assets/js/auth.js)
 * Handles client-side validation, password visibility toggles,
 * demo credentials quick-fill, and simulated feedback for Login and Sign Up.
 */

const AuthEngine = {
  init() {
    this.bindPasswordToggles();
    this.bindLoginForm();
    this.bindSignupForm();
    this.bindDemoQuickFill();
  },

  bindPasswordToggles() {
    document.querySelectorAll('.btn-toggle-password').forEach(btn => {
      btn.addEventListener('click', () => {
        const inputId = btn.getAttribute('data-target-input');
        const input = document.getElementById(inputId);
        if (!input) return;

        if (input.type === 'password') {
          input.type = 'text';
          btn.innerHTML = '<i class="bi bi-eye-slash"></i>';
        } else {
          input.type = 'password';
          btn.innerHTML = '<i class="bi bi-eye"></i>';
        }
      });
    });
  },

  bindDemoQuickFill() {
    const quickFillBtn = document.getElementById('demoQuickFillBtn');
    if (quickFillBtn) {
      quickFillBtn.addEventListener('click', () => {
        const emailInput = document.getElementById('loginEmail');
        const passwordInput = document.getElementById('loginPassword');
        if (emailInput) emailInput.value = 'alexander.wright@techdemo.com';
        if (passwordInput) passwordInput.value = 'Galaxy2026!Secure';
        GadgetGalaxy.showToast('Demo credentials populated!', 'info', 'bi-key-fill');
      });
    }
  },

  bindLoginForm() {
    const form = document.getElementById('galaxyLoginForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        GadgetGalaxy.showToast('Please check your login credentials.', 'danger', 'bi-exclamation-triangle');
        return;
      }

      const email = document.getElementById('loginEmail').value;
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Authenticating...';
      }

      setTimeout(() => {
        GadgetGalaxy.showToast(`Welcome back, <strong>${email}</strong>! Demo authentication successful.`, 'success', 'bi-person-check-fill');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      }, 1000);
    });
  },

  bindSignupForm() {
    const form = document.getElementById('galaxySignupForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const pwd = document.getElementById('signupPassword')?.value;
      const confirmPwd = document.getElementById('signupConfirmPassword')?.value;

      if (pwd !== confirmPwd) {
        GadgetGalaxy.showToast('Passwords do not match. Please verify.', 'danger', 'bi-exclamation-circle');
        return;
      }

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        GadgetGalaxy.showToast('Please fill out all required registration fields.', 'danger', 'bi-exclamation-triangle');
        return;
      }

      const name = document.getElementById('signupFullName').value;
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Generating Account...';
      }

      setTimeout(() => {
        GadgetGalaxy.showToast(`Account created for <strong>${name}</strong>! Redirecting to sign in...`, 'success', 'bi-check-circle-fill');
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1500);
      }, 1000);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  AuthEngine.init();
});

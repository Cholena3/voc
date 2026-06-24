/* ===================================================
   Editkaro.in - Form Handling
   Sends subscribe & contact form data to a Google
   Apps Script Web App which stores it in a Google Sheet.

   SETUP:
   1. Follow the steps in google-apps-script.gs to deploy
      your Apps Script as a Web App.
   2. Paste the deployed Web App URL below as GOOGLE_SCRIPT_URL.
   3. Until then, submissions fall back to localStorage so
      the forms remain functional for testing/demo.
   =================================================== */

const GOOGLE_SCRIPT_URL = ''; // <-- Paste your Google Apps Script Web App URL here

// Helper: show a message under a form
function showMessage(el, text, type) {
    if (!el) return;
    el.textContent = text;
    el.className = 'form-message ' + type;
}

// Helper: send data to Google Sheet (or fallback to localStorage)
async function sendToSheet(payload) {
    if (!GOOGLE_SCRIPT_URL) {
        // Fallback: store locally so the demo works without setup
        const key = 'editkaro_' + payload.formType;
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.push({ ...payload, timestamp: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
        return { result: 'success', fallback: true };
    }

    // 'no-cors' lets the request reach Apps Script without CORS errors.
    // The response is opaque, so we assume success if no network error.
    await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    return { result: 'success' };
}

// ===== Email Subscribe Form =====
const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('subscribeEmail');
        const messageEl = document.getElementById('subscribeMessage');
        const submitBtn = subscribeForm.querySelector('button');

        const email = emailInput.value.trim();
        if (!email) {
            showMessage(messageEl, 'Please enter a valid email.', 'error');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Subscribing...';

        try {
            await sendToSheet({ formType: 'subscribers', email });
            showMessage(messageEl, '🎉 Thanks for subscribing! Check your inbox soon.', 'success');
            subscribeForm.reset();
        } catch (err) {
            showMessage(messageEl, 'Something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Subscribe';
        }
    });
}

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const messageEl = document.getElementById('contactMessage');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        const payload = {
            formType: 'contacts',
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        if (!payload.name || !payload.email || !payload.message) {
            showMessage(messageEl, 'Please fill in all required fields.', 'error');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            await sendToSheet(payload);
            showMessage(messageEl, '✅ Message sent! We\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();
        } catch (err) {
            showMessage(messageEl, 'Something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
}

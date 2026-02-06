let history = [];

// 1. Navigation Logic
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// 2. Converter Logic 
function convert() {
    const usd = document.getElementById('usdAmount').value;
    const feedback = document.getElementById('feedback');
    const result = document.getElementById('result');
    const list = document.getElementById('historyList');
    const rate = 26000;

    // Validation
    if (usd === "" || usd <= 0) {
        feedback.innerHTML = "Fadlan geli tiro sax ah!";
        feedback.style.color = "red";
        return; 
    }

    const total = usd * rate;
    feedback.innerHTML = "Si guul leh ayaa loo beddelay!";
    feedback.style.color = "green";
    result.innerHTML = `${usd} USD = ${total.toLocaleString()} SOS`;

    history.push(`${usd} USD -> ${total.toLocaleString()} SOS`);

    list.innerHTML = "";
    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}

// 3. Signup Validation (Events & DOM)
function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Waad ku mahadsantahay saxiixashada, ${email}!`);
}
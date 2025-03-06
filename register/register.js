document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
    const addParticipantBtn = document.getElementById('addParticipantBtn');
    const participantsDiv = document.getElementById('participants');
    const registrationForm = document.getElementById('registrationForm');
    const summary = document.getElementById('summary');

    addParticipantBtn.addEventListener('click', () => {
        participantCount++;
        const newParticipant = participantTemplate(participantCount);
        addParticipantBtn.insertAdjacentHTML('beforebegin', newParticipant);
    });

    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const total = totalFees();
        const adultName = registrationForm.querySelector('[name="name1"]').value;
        const successMessage = successTemplate(adultName, participantCount, total);
        registrationForm.style.display = 'none';
        summary.classList.remove('hide');
        summary.innerHTML = successMessage;
    });

    function participantTemplate(count) {
        return `
        <section class="participant" id="participant${count}">
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" name="name${count}" required>
            <label for="age${count}">Age:</label>
            <input type="number" id="age${count}" name="age${count}" required>
            <label for="fee${count}">Fee:</label>
            <input type="number" id="fee${count}" name="fee${count}" required>
        </section>`;
    }

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        const total = feeElements.reduce((acc, feeEl) => acc + parseFloat(feeEl.value || 0), 0);
        return total;
    }

    function successTemplate(name, count, total) {
        return `Thank you ${name} for registering. You have registered ${count} participants and owe $${total.toFixed(2)} in fees.`;
    }
});

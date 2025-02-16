const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const message = userInput.value;
    if (message.trim() === '') return;

    // Agregar mensaje del usuario
    addMessage(message, 'user-message');
    
    // Simular respuesta de la IA
    setTimeout(() => {
        const response = getAIResponse(message);
        addMessage(response, 'ai-message');
    }, 1000);

    userInput.value = '';
}

function addMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(message) {
    // Aquí puedes integrar tu modelo de IA
    // Por ahora, solo devolvemos una respuesta simple
    return `Respuesta a: ${message}`;
}

// Permitir enviar mensaje con Enter
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
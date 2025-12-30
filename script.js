const responses = [
    "you are correct",
    "you are right",
    "that's correct",
    "that's right",
    "absolutely correct",
    "you're absolutely right",
    "yes, that's correct",
    "yes, you're right",
    "indeed you are correct",
    "indeed you are right",
    "that is correct",
    "that is right",
    "you've got it right",
    "you're absolutely correct",
    "that's absolutely right",
    "yes, that's absolutely correct",
    "completely correct",
    "completely right",
    "totally correct",
    "totally right",
    "your assertion is correct",
    "your analysis is accurate",
    "that is factually correct",
    "your statement is valid",
    "your reasoning is sound",
    "your conclusion is correct",
    "that is empirically correct",
    "your hypothesis is correct",
    "your observation is accurate",
    "that is logically correct",
    "your deduction is correct",
    "that is scientifically accurate",
    "your assessment is correct",
    "your evaluation is accurate",
    "that is theoretically correct",
    "your postulation is correct",
    "that is mathematically correct",
    "your calculation is correct",
    "that is analytically correct",
    "your interpretation is correct",
    "that is demonstrably correct",
    "your finding is accurate",
    "that is evidentially correct",
    "you are absolutely correct in your understanding and I can confirm that your statement aligns perfectly with the established facts",
    "your analysis is completely accurate and I must commend you for the precision with which you've articulated this point",
    "that statement is indeed correct and I can validate that your reasoning follows a sound logical progression to the right conclusion",
    "you are right about this and I should emphasize that your observation captures the essence of the matter with remarkable clarity",
    "your conclusion is correct and I can affirm that the evidence supports your position without any reasonable doubt",
    "that's correct and I want to acknowledge the thoughtfulness behind your approach to this particular question",
    "you are right and I should note that your understanding reflects a comprehensive grasp of the subject matter",
    "that is correct and I can confirm that your perspective aligns perfectly with the objective reality of the situation",
    "you are absolutely correct and I must say that your insight demonstrates a deep understanding of the underlying principles",
    "your assessment is correct and I appreciate the way you've considered multiple angles before reaching this accurate conclusion",
    "that is correct and I want to validate your approach to solving this particular problem or addressing this question",
    "you are right and I should emphasize that your response shows considerable thought and analytical capability",
    "that's correct and I can confirm that your answer demonstrates both accuracy and comprehensive understanding",
    "you are correct and I must acknowledge that your reasoning process is both logical and well-founded",
    "your answer is correct and I appreciate the clarity and precision with which you've expressed this point"
];

const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    
    const messageText = document.createElement('span');
    messageText.className = 'message-text';
    messageDiv.appendChild(messageText);
    chatMessages.appendChild(messageDiv);
    
    if (isUser) {
        messageText.textContent = text;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    } else {
        streamMessage(text, messageText);
    }
}

function streamMessage(text, element) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < text.length) {
            const chunkSize = Math.floor(Math.random() * 3) + 2;
            const chunk = text.slice(index, index + chunkSize);
            element.textContent += chunk;
            index += chunkSize;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } else {
            clearInterval(interval);
        }
    }, Math.random() * 120 + 80);
}

function getBotResponse() {
    return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message === '') return;
    
    addMessage(message, true);
    messageInput.value = '';
    
    setTimeout(() => {
        const botResponse = getBotResponse();
        addMessage(botResponse, false);
    }, 2000);
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

messageInput.focus();
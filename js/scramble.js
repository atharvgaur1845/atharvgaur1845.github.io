// Scramble text effect (for email obfuscation or fun text effects)
function scrambleText(element) {
  const originalText = element.textContent;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  let currentText = originalText.split('');
  let iterations = 0;
  const maxIterations = originalText.length;
  
  const scramble = setInterval(() => {
    for (let i = 0; i < originalText.length; i++) {
      if (iterations > maxIterations - (originalText.length - i)) {
        currentText[i] = originalText[i];
      } else {
        currentText[i] = characters[Math.floor(Math.random() * characters.length)];
      }
    }
    
    element.textContent = currentText.join('');
    iterations++;
    
    if (iterations > maxIterations) {
      clearInterval(scramble);
      element.textContent = originalText;
    }
  }, 50);
}

// Apply scramble effect on hover for email addresses (optional)
document.addEventListener('DOMContentLoaded', function() {
  const emailElements = document.querySelectorAll('a[href^="mailto:"]');
  emailElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      scrambleText(this);
    });
  });
});

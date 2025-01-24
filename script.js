document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        alert(`${event.target.innerText}: I told you not to touch me`);
    }
});

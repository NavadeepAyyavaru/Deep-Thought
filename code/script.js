const moreButtons = document.querySelectorAll('.moreBtn');

moreButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        const block = button.parentElement;

        const content = block.querySelector('.sub-BLOCK1') || block.querySelector('.sub-BLOCK2');

        if (content) { 
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'See Less'; 
            } else {
                content.style.display = 'none';
                button.textContent = 'See More'; 
            }
        }
    });
});


const addSubThreadButton = document.querySelector('.block1Button');
addSubThreadButton.addEventListener('click', function() {
    const block1 = document.querySelector('.block1');
    const newSubThread = document.createElement('div');
    newSubThread.classList.add('sub-block');

    
    const newThread = document.createElement('div');
    newThread.classList.add('sub-thread');
    newThread.textContent = 'New Sub thread'; 

    const newInterpretation = document.createElement('div');
    newInterpretation.classList.add('sub-interpretation');
    newInterpretation.textContent = 'New Interpretation'; 
    
    newSubThread.appendChild(newThread);
    newSubThread.appendChild(newInterpretation);

    
    block1.appendChild(newSubThread);
});


const submitButton = document.querySelector('.button');
submitButton.addEventListener('click', function() {
    alert('Task submitted successfully!');
});


const boxElements = document.querySelectorAll('.nav-home div');
boxElements.forEach(box => {
    box.addEventListener('click', function() {
        box.classList.toggle('active');
    });
});

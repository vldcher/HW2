let button = document.getElementById('addSkill');
let skillList = document.getElementById('skill-list');
const skillNameInput = document.getElementById('skill-name');
const skillRangeInput = document.getElementById('skill-range');
const form = document.getElementById('form');

button.addEventListener('click', (e) => {

    let skillNameValue = document.getElementById('skill-name').value;
        if (skillNameValue.length > 100 || skillNameValue.length === 0) {
            skillNameInput.classList.add('invalidInput');
                const errorParagraph = document.createElement('p');
                    errorParagraph.innerText = `Invalid input, skill name should be less than 100 characters`;
                        skillRangeInput.appendChild(errorParagraph);
           return;
        }

        else {
            skillNameInput.className = skillNameInput.className.replace(/\binvalidInput\b/g, "");
            }

    let width = document.getElementById('skill-range').value;
        if (width < 1 || width > 100) {
            skillRangeInput.classList.add('invalidInput')
            // alert(`Invalid input, skill range shouldn't be more than 100 or negative`);
            return;
    }


    const skill = document.createElement('p');
          skill.innerHTML = `${skillNameValue}`;
          skill.style.width = width + '%';
          skillList.appendChild(skill);
          skillNameInput.className = skillNameInput.className.replace(/\binvalidInput\b/g, "");
          skillRangeInput.className = skillRangeInput.className.replace(/\binvalidInput\b/g, "");
          form.reset();
          e.preventDefault();
});
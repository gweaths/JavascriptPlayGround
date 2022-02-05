const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const e of empties) {
    e.addEventListener('dragover', dragOver);
    e.addEventListener('dragenter', dragEnter);
    e.addEventListener('dragleave', dragLeave);
    e.addEventListener('drop', dragDrop);

}


function dragStart() {
    this.className += ' hold';
    setTimeout(() => {
        this.className = '';
    });
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();

}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop(e) {
    this.className = 'empty';
    this.append(fill);
}
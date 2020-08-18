class Form {
    constructor() {
        this.fields = [];

    }

    addField(type, text) {
        let fields = this.fields;
        let field;

        switch (type) {
            case 'text':
                field = new InputText(text);
                break;
            case 'email':
                field = new InputMail(text);
                break;
            case 'button':
                field = new Button(text);
                break;
            default: throw new Error('unrecognized variable type ', type);
        }
        fields.push(field);
    }

    obtainForm() {
        let form = document.createElement('form'),
            fields = this.fields.length,
            field;
        for (let i = 0; i < fields; i++) {
            field = this.fields[i];
            form.appendChild(field.elementCreate());
            let br = document.createElement('br');
            form.appendChild(br);
        }
        return form;
    }
}


class Inputs {
    constructor(text) {
        this.text = text;
    }
}

class InputText extends Inputs {
    constructor(text) {
        super(text);
    }
    elementCreate() {
        const inputText = document.createElement('input');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', this.text);
        return inputText;
    }
}

class InputMail extends Inputs {
    constructor(text) {
        super(text);
    }
    elementCreate() {
        const inputMail = document.createElement('input');
        inputMail.setAttribute('type', 'email');
        inputMail.setAttribute('placeholder', this.text);
        return inputMail;
    }
}

class Button extends Inputs {
    constructor(text) {
        super(text);
    }
    elementCreate() {
        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.textContent = this.text;
        return button;
    }
}

// Instance Form

const form = new Form();
form.addField('text', 'Add your name!');
form.addField('text', 'Add your surname!');
form.addField('email', 'Add your email');
form.addField('button', 'Send Form');

// Render in the HTML

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#app').appendChild(form.obtainForm());

});
console.log(form);


const eatButtons = document.querySelectorAll('button.eat-button');
eatButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
        console.log("click");
        let burgerName = evt.target.getAttribute('data-name');

        var request = new Request('/burgers', {
            method: 'PUT',
            body: JSON.stringify({ name: burgerName }),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            redirect: 'manual'
        });

        fetch(request)
            .then((response) => {
                window.location = response.url;
            })
            .catch((err) => {
                console.log(err);
            });

    });

})

const submit = document.querySelector('button#burgerSubmit');
const textArea = document.querySelector('textarea');
submit.addEventListener('click', (evt) => {
    let burgerName = textArea.value;
    console.log(burgerName);
    var request = new Request('/burgers', {
        method: 'POST',
        body: JSON.stringify({ name: burgerName }),
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        redirect: 'manual'
    });

    fetch(request)
        .then((response) => {
            window.location = response.url;
        })
        .catch((err) => {
            console.log(err);
        });
});
document.getElementById('Uni').addEventListener('click', function() {
    if (this.style.color === 'red') {
        this.style.color = 'white';
    } else {
        this.style.color = 'red';
    }
});

document.getElementById('Post').addEventListener('click', function() {
    if (this.style.color === 'red') {
        this.style.color = 'white';
    } else {
        this.style.color = 'red';
    }
});

document.getElementById('postExplanation').addEventListener('click', function() {
    if (this.style.color === 'red') {
        this.style.color = 'white';
    } else {
        this.style.color = 'red';
    }
});

document.getElementById('Salary').addEventListener('click', function() {
    if (this.style.color === 'red') {
        this.style.color = 'white';
    } else {
        this.style.color = 'red';
    }
});

document.getElementById('Hobby').addEventListener('click', function() {
    if (this.style.color === 'red') {
        this.style.color = 'white';
    } else {
        this.style.color = 'red';
    }
});

document.getElementById('typeHobby').addEventListener('click', function() {
    if (this.style.color === 'red') {
        this.style.color = 'white';
    } else {
        this.style.color = 'red';
    }
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'your-server-endpoint'); 

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('result').innerHTML = '送信成功: ' + xhr.responseText;
        } else {
            document.getElementById('result').innerHTML = '送信失敗: ' + xhr.statusText;
        }
    };

    xhr.send(formData); 
});
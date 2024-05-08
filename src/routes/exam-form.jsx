const btnSend = document.getElementById('enviar');
btnSend.addEventListener('click', mostrarExame);

function mostrarExame (){
    let name = document.getElementById('nome').value;
    let exam = document.getElementById('exames').value;
    let date = document.getElementById('data').value;

    document.getElementById('exsangue-video').classList.add('display-none');
    document.getElementById('exsangue-video').classList.remove('display-center');
    document.getElementById('exsangue').classList.add('display-none');
    document.getElementById('reson-video').classList.add('display-none');
    document.getElementById('reson-video').classList.remove('display-center');
    document.getElementById('reson').classList.add('display-none');

    document.querySelector('#text').innerHTML = `<h1>Bem vindo(a) ${name} ao portal HC! Abaixo tem tudo que prescisa saber.<h1>`;
    if (exam === 'Exame de Sangue') {
        document.getElementById('form-test').classList.remove('active')
        document.getElementById('exsangue-video').classList.remove('display-none');
        document.getElementById('exsangue-video').classList.add('display-center');
        document.getElementById('exsangue').classList.remove('display-none');
    }
    else if (exam === 'Resonâcia Magnética'){
        document.getElementById('form-test').classList.remove('active')
        document.getElementById('reson-video').classList.remove('display-none');
        document.getElementById('reson-video').classList.add('display-center');
        document.getElementById('reson').classList.remove('display-none');
    }
}


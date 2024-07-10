// document.getElementById('soumissionForm').addEventListener('submit', function(event){
//     event.preventDefault();
//     let valid = true;

const button = document.querySelector('button');

button.addEventListener('click', function(event){

    //Initialisation des messages d'erreurs
    document.getElementById('nameError').innerHTML ="";
    document.getElementById('adressError').innerHTML ="";
    document.getElementById('emailError').innerHTML ="";
    document.getElementById('passwordError').innerHTML ="";

    //Valisation du name (nom complet)
    let name = document.getElementById('name').value;
    if (name.length < 3 || name.length > 15){
        document.getElementById('nameError').innerHTML ="Le nom que vous avez saisi n'est pas valide, veuillez sair un nom entre 3 et 15 caractères";
        valid =false;
    }

    let adress = document.getElementById('adress').value;
    if (adress.length < 3 || adress.length > 25){
        document.getElementById('adressError').innerHTML ="Le nom que vous avez saisi n'est pas valide, veuillez sair un nom entre 3 et 15 caractères";
        valid =false;
    }

    let email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML ="L'adresse email que vous avez saisie n'est pas valide";
        valid = false;
    }

    let password = document.getElementById('password').value;
    if (password.length < 8){
        document.getElementById('passwordError').innerHTML = "Veuillez saisir un mot de passe d'au moins 8 caractères";
        valid = false;
    }


    //Afficher les messages de succès
    // if (valid){
    //     document.getElementById(form-container).style.display = "none";
    //     doxument.getElementById('succesMessage').style.display = "block";
    // }

});

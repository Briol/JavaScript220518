function testStorage(){

    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let mail = document.getElementById('mail').value;
    let mdp = document.getElementById('mdp').value;

    const req = new XMLHttpRequest();

    req.open("POST", 'index.php', true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function () {
        if (req.readyState === 200 || req.readyState === 4) {
            document.location.href = "index.php";

            let form = new FormData(document.forms[0]);
            req.send(form);
        }
        else {
            sessionStorage.setItem("Nom", nom);
            sessionStorage.setItem("Prenom", prenom);
            sessionStorage.setItem("Mail", mail);
            sessionStorage.setItem("MDP", mdp);
        }
    };

}

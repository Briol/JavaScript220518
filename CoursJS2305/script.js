function validezForm(){
    let prenom = document.getElementById("prenom");
    let nom = document.getElementById("nom");
    let mail = document.getElementById("mail");
    let mdp = document.getElementById("mdp");

    if (nom.value.length > 0 && prenom.value.length > 0 && mail.value.length > 0 && mdp.value.length > 0){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "index.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert("aux gogols !!!");
            }
        };

        let form = new FormData(document.forms[0]);

        xhr.send(form);
    }

    else{
        alert("à Malibu");
        return false;
    }
}
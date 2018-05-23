function getXMLHttpRequest() {
    let totoalaplage = null;

    if (window.XMLHttpRequest || window.ActiveXObject){
        if (window.ActiveXObject) {
            try {
                totoalaplage = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch(e) {
                totoalaplage = new ActiveXObject("Microsoft.XMLHTTP");
            }
        }

        else {
            totoalaplage = new XMLHttpRequest();
        }

        return totoalaplage;
    }

    else {
        alert("Môrche pô");
        return false;
    }
}
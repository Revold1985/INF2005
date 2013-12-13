function ajoutSection() {
    var type = document.getElementById("type");
    var titre = document.getElementById("titre");
    var description = document.getElementById("description");
    var dbsection = [];
    dbsection = JSON.parse(localStorage.db);
    if (dbsection.section == null || typeof (dbsection.section) == undefined) {
        dbsection = {"section": []};
        
    }
        var DB = [];
        DB = dbsection.section;
        var jsonObject =[];
        jsonObject = {
            "type": type.value,
            "titre": titre.value,
            "description": description.value
        };
        DB.push(jsonObject);
        dbsection.section = DB;
        localStorage.db = ('bd', JSON.stringify(dbsection));
        location.reload();
        return false;
}
function gotosection(i) {
    var dbsection = [];
    dbsection = JSON.parse(localStorage.db);
    var DB = dbsection.section[i];
    var type = DB.type;
    var titre = DB.titre;
    var description = DB.description;
    var newHTML = '<table width="600"><tr><td><h3>Information sur ' + type + '</h3></td></tr><tr><td><h4>Titre: ' + titre + '</h4></td></tr><tr><td><h4>Description: ' + description + '</h4></td></td></tr></table><form id="login"  method="POST" action="" name ="formulaire"  onsubmit="return effacerSection(' + i + ');"><input type="submit" value="Effacer la section" /></tr></form>';
    document.getElementById("section").innerHTML = newHTML;

}
function effacerSection(index) {
    alert(index);
    var db = [];
    db = JSON.parse(localStorage.db);
    var dbsection = [];
    dbsection = db.section;
    var temp = [];
    for (var i = 0, l = dbsection.length; i < l; i++) {
        if (i != index) {
            temp.push(dbsection.section[i]);
        }
    }
    dbsection.section = temp;
    localStorage.db = ('bd', JSON.stringify(dbsection));
    location.reload();
    return false;

}
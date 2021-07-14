function error(id, error){
    document.getElementsByClassName(id).innerHTML = error;
}
function submitform(){
    var name=document.forms['form']['name'].value;
    if (name.length <5){
        document.getElementsByClassName('name').innerHTML = "Name should not be too short";
        return false
    }
}
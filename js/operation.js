
const URL_l ='http://localhost:8888/api/users';
 URL_ID ='http://localhost:8888/api/users' ;
document.getElementById("add").onclick = function(){

    document.getElementById("for_add").innerHTML = (`<br> <div className="input-group mb-3">
        <span className="input-group-text" >surname</span>
        <input type="text" className="form-floating" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" aria-required="true" id = "surname">
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text">name</span>
        <input type="text" className="form-floating" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" aria-required="true"  id = "name">
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">mail</span>
        <input type="text" className="form-floating" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" aria-required="true" id = "mail" placeholder="name@example.com"> 
    </div>

    <button type="submit" className="btn btn-info" id="add_add">add</button>
`)

    let add_add =   document.getElementById("add_add")
    add_add.onclick = add;
    async function add(){
        let mail = document.getElementById("mail").value;
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        const user =  {surname, name, mail};
        console.log(user);
        await fetch(URL_l, {
            method: "POST",
            mode:"cors",
            headers:{
                'Content-Type': 'application/json; charset=utf-8',
                'mode': 'cors',
                'Access-Control-Allow-Origin': '*',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5'
            },
            body: JSON.stringify(user)
        }).then(function(resp){
            //  response = resp.status;
            console.log("DDDDDD");
        })
    };

};

document.getElementById("delete").onclick = async function() {
    document.getElementById("for_add").innerHTML = " ";
    document.getElementById("for_add").innerHTML = `<input type="text" aria-label="id" class="form-control" id ="to_del"  >  
        <button type="submit" className="btn btn-info" id="del_del">delete</button> `

    let del_del = document.getElementById("del_del")
    del_del.onclick = del;

    async function del() {

        URL_ID += '/' +document.getElementById("to_del").value;
        await fetch(URL_ID, {
            method: "DELETE",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'mode': 'cors',
                'Access-Control-Allow-Origin': '*',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5'
            },
        }).then(function (resp) {

        })
    }
}

document.getElementById("edit").onclick = async function() {
    document.getElementById("for_add").innerHTML = " ";
    document.getElementById("for_add").innerHTML = `<br> <div className="input-group mb-3">
        <span className="input-group-text" >surname</span>
        <input type="text" className="form-floating" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" aria-required="false" id = "surname">
    </div>
    <div className="input-group mb-3">
        <span className="input-group-text">name</span>
        <input type="text" className="form-floating" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" aria-required="false"  id = "name">
    </div>

    <div className="input-group mb-3">
        <span className="input-group-text">mail</span>
        <input type="text" className="form-floating" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" aria-required="false" id = "mail"> 
    </div>
     <div className="input-group mb-3">
        <span className="input-group-text">id</span>
        <input type="text" className="form-floating" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-default" aria-required="true" id = "to_update"> 
    </div>
    <button type="submit" className="btn btn-info" id="edit_edit">edit</button>
`

    let edit_edit = document.getElementById("edit_edit")
    edit_edit.onclick = edit;

    async function edit() {
        let mail = document.getElementById("mail").value;
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let _id = document.getElementById("to_update").value;
        const user =  {_id,surname, name, mail};
        console.log(user);

        await fetch(URL_ID, {
            method: "PUT",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'mode': 'cors',
                'Access-Control-Allow-Origin': '*',
                'Connection': 'keep-alive',
                'Keep-Alive': 'timeout=5'
            },
            body: JSON.stringify(user)
        }).then(function (resp) {

        })
    }
}
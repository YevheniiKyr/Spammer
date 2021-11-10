
document.getElementById("send").onclick = async function() {

    // document.getElementById("for_add").innerHTML = " ";
    document.getElementById("for_add").innerHTML = `<label >Email</label><input type="text" area-label="email" class="form-control" id ="email" required >  
        <button type="button" className="btn btn-info" id="stand">standart</button> 
       <button type="button" className="btn btn-info" id="custom">custom</button> `

    document.getElementById("stand").onclick = async function () {
        console.log("dddd");
        let why = (document.getElementById("email").value)
        document.getElementById("for_add").innerHTML += `
        <select name="text" class="form-select" ariaclassNamel="Default select example" id="text" required>
            <option selected>Choose message</option>
            <option value="How">How are you, bro?</option>
            <option value="beer">Lets drink some beer </option>
            <option value="KMC">Would you like to go on KMC?</option>
        </select>
       
       <button type="submit" className="btn btn-info" id="send_send">send</button>`

        document.getElementById("email").value = why;

        document.getElementById("send_send").onclick = async function (event) {
            event.preventDefault();
            let text = document.getElementById("text").value;
            let email = document.getElementById("email").value;
            const URL_send = 'http://localhost:8888/api/message/send';
            await fetch(URL_send, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'mode': 'cors',
                    'Access-Control-Allow-Origin': '*',
                    'Connection': 'keep-alive',
                    'Keep-Alive': 'timeout=5'
                },
                body: JSON.stringify({email, text})
            }).then(function (resp) {
                //  response = resp.status;
                console.log("DDDDDD");
            })
            console.log(email);
            console.log(text);

        };
        //send(email,text);

        //   }

        // document.getElementById("for_add").innerHTML += `<button type="submit" className="btn btn-info" id="send_send">send</button>`

        // <button type="submit" className="btn btn-info" id="del_del">delete</button>

        //async function del()
    }

    document.getElementById("custom").onclick = async function () {
        let why = (document.getElementById("email").value)
        document.getElementById("for_add").innerHTML += `<br><div class="form-floating">
        <input type="text" class="form-control" id="text" placeholder="name@example.com"  required>
         <button type="submit" className="btn btn-info" id="send_send">send</button>`
        document.getElementById("email").value = why;

        document.getElementById("send_send").onclick = async function () {

            let text = document.getElementById("text").value;
            let email = document.getElementById("email").value;
            const URL_send = 'http://localhost:8888/api/message/send';
            await fetch(URL_send, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'mode': 'cors',
                    'Access-Control-Allow-Origin': '*',
                    'Connection': 'keep-alive',
                    'Keep-Alive': 'timeout=5'
                },
                body: JSON.stringify({email, text})
            }).then(function (resp) {
                //  response = resp.status;
                console.log("DDDDDD");
            })
            console.log(email);
            console.log(text);

        };
    }

}

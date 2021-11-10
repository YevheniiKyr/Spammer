
const URL = "http://localhost:8888/api/users";
async function getmails() {
    let data = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': '*/*',
            'Access-Control-Allow-Origin': '*',
            'Connection': 'keep-alive'
        }
    }).then(r => r.json());
    console.log(data);

    new gridjs.Grid({
        width: "100%",
        sorting: true,
        paging: true,
        editing: false,
        data: data,

    }).render(document.getElementById("table"));
}
getmails();

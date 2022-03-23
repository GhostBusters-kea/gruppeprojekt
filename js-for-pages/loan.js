export function getLoanOnClick(){
    document.getElementById("btn-get-loan").onclick = getAllMembers
}



//Get members on loan
function getAllMembers(){
    const username = document.getElementById("input-loan-id").value
    fetch("http://localhost:8080/api/loan/" + username)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const rows = data.map(u=>
                `
            <tr>
                <td>${u.memberResponse.username}</td>
                <td>${u.checkoutdate}</td>
                <td>${u.duedate}</td>
                <td>${u.returneddate}</td>
                
            </tr>`).join("\n")
            document.getElementById("tbl-loan-id").innerHTML=rows;
        })
        .catch(err => console.log("OOOPPs: " + err))
        .finally(err => console.log("Done"))
}

//Create new loan

export function createNewLoan(){
    const addPostForm = document.querySelector(".add-post-form")
    const usernameValue = document.getElementById("username")
    const dueDateValue = document.getElementById("due-date")
    const returnedDateValue = document.getElementById("returned-date")
    const url = "http://localhost:8080/api/loan/"
    addPostForm.addEventListener("submit", (e) =>{
        e.preventDefault();

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: usernameValue.value,
                duedate: dueDateValue.value,
                returneddate: returnedDateValue.value
            })
        })
            .then(res => res.json())
            .then(data=> {
                const dataArr = [];
                dataArr.push(data);
            })
    })
}
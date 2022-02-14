const URL = 'http://localhost:7000';

let post = async () => {
    let amount = document.getElementById('amount').value;
    let description = document.getElementById('description').value;
    let reimbType = document.getElementById('reimbType').value;


    let createObj = {
        amount,
        description,
        reimbType
    };


    let req = await fetch(`${URL}/user/submit`, {
        method: 'POST',
        body: JSON.stringify(createObj)
    });
    
    
    let res = await req.json();
    console.log(req.status);

    // console.log(req.headers.get('id'));
    // console.log(req.headers.get("loggedIn"));
    // console.log(req.headers.get("userRole"));
    
    
    
}

let loginSubmit = document.getElementById('submit').addEventListener('click', post);
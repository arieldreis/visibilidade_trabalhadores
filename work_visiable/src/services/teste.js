async function reqAPI( endpoint ){
    const req = await fetch( endpoint );
    const json = await req.json()

    const listAllItems = json.forEach((element) => {
        console.log(element.title_service);
    });
}


const endpoint = "http://localhost:3000/listarDados";
reqAPI( endpoint );
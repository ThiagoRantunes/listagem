// VARIAVEIS

const buttonPost = document.getElementById("btnpost");

buttonPost.addEventListener("click", async function() {

    const files = {
        text: "",
        content: "",
    }

    const response = await fetch("",{
        method: "POST",
        body: JSON.stringify(files),
        headers: {
            "Content-Type":"application/json"
        }
    });

    const data = await response.json();

    console.log(data);

});
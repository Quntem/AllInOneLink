var updatecolors = function() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    $("#previewbg").css("background-color", $("#bgcolourinput").val())
    $("#previewcard").css("background-color", $("#cardcolourinput").val())
    $("#previewcard").css("color", $("#textcolourinput").val())

    const raw = JSON.stringify({
        "bgcolor": $("#bgcolourinput").val(),
        "cardcolor": $("#cardcolourinput").val(),
        "textcolor": $("#textcolourinput").val()
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("/api/page/" + currentpage + "/colors/update", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

var pagefunction = function() {
    fetch("/api/page/" + currentpage + "/colors/get")
        .then(res => res.json())
        .then(res => {
            $("#bgcolourinput").val(res.bgcolor)
            $("#cardcolourinput").val(res.cardcolor)
            $("#textcolourinput").val(res.textcolor)
            $("#previewbg").css("background-color", $("#bgcolourinput").val())
            $("#previewcard").css("background-color", $("#cardcolourinput").val())
            $("#previewcard").css("color", $("#textcolourinput").val())
        })
}
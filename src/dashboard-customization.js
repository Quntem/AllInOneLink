fetch("api/page/" + currentpage + "/colors/get")
.then(res => res.json())
.then(res => {
    $("#bgcolourinput").val(res.bgcolor)
    $("#cardcolourinput").val(res.cardcolor)
    $("#textcolourinput").val(res.textcolor)
})
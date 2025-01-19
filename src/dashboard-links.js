var pagefunction = function() {
    fetch("api/page/" + currentpage + "/links/list")
        .then(res => res.json())
        .then(res => {
            $("#linkListArea").html("")
            res.forEach(link => {
                $("#linkListArea").append(`
                    <div class="Link">
                        <div>URL: ` + link.url + `</div>
                        <div>Name: ` + link.name + `</div>
                    </div>
                `)
            });
        })
}

var addLink = function() {
    const requestOptions = {
        method: "POST",
        redirect: "follow"
    };
    
    fetch("http://localhost:5500/api/page/links/add?pagename=" + currentpage + "&name=" + prompt("Enter Link Name") + "&url=" + prompt("Enter Link URL"), requestOptions)
        .then((response) => response.text())
        .then((result) => window.location.reload())
        .catch((error) => console.error(error));
}
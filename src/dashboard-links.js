var pagefunction = function() {
    fetch("api/page/" + currentpage + "/links/list")
        .then(res => res.json())
        .then(res => {
            $("#linkListArea").html("")
            res.forEach(link => {
                $("#linkListArea").append(`
                    <div class="Link">
                        <label for="LinkInput">Url</label>
                        <input type="url" name="LinkInput" placeholder="Link URL" value="` + link.url + `">
                        <label for="LinkNameInput">Name</label>
                        <input type="url" name="LinkNameInput" placeholder="Link Name" value="` + link.name + `">
                    </div>
                `)
            });
        })
}
var createpage = function(name) {
    requestOptions = {
        method: "POST",
        redirect: "follow"
    };
      
    fetch("http://localhost:5500/api/page/create/?pagename=" + $("#pagenameinput").value() + "&userid=" + Clerk.user.id, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
        })
}
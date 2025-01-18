var createpage = function(name) {
    requestOptions = {
        method: "POST",
        redirect: "follow"
    };
      
    fetch("http://localhost:5500/api/page/create/?pagename=" + name + "&userid=" + Clerk.user.id, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
            window.location.assign("/dashboard.html")
        })
}
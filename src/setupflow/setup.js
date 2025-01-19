var createpage = function(name) {
    if (length.name = 0) {
        console.log("Nothing was inputted")
        return
    } 

    requestOptions = {
        method: "POST",
        redirect: "follow"
    };
      
    fetch("/api/page/create/?pagename=" + name + "&userid=" + Clerk.user.id, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result)
            window.location.assign("/dashboard.html")
        })
}
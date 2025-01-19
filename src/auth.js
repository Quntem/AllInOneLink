window.addEventListener('load', async function () {
    await Clerk.load()

    if (Clerk.user) {
      const userButtonDiv = document.getElementById('user-button')

      Clerk.mountUserButton(userButtonDiv)

        if (Clerk.user.publicMetadata.mainpage == undefined) {
            window.location.assign("/setupflow/")
        } else {
            currentpage = Clerk.user.publicMetadata.mainpage
            pagefunction()
        }
    } else {
      Clerk.redirectToSignIn()
    }
  })

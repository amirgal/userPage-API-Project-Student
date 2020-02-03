const apiManager = new APIManager()
const renderer = new Renderer()
let data = apiManager.data

$('#loadData').on('click', function() {
    apiManager.loadData()
})

$('#displayData').on('click', function () {
    renderer.renderPage(data)
})

$('#saveUserPage').on('click', function () {
    const users = JSON.parse(localStorage.users || '{}')
    users[data.mainUser.id] = data
    localStorage.users = JSON.stringify(users)
})

$('#loadUserPage').on('click', function () {
    // renderer.renderPage(JSON.parse(localStorage.users.id))
})
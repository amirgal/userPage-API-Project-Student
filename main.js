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
    renderer.renderDropDownMenu(data.mainUser)
})

$('#loadUserPage').on('click', function () {
    const userID = $('#drop-down').children("option:selected").data().id
    renderer.renderPage(JSON.parse(localStorage.users)[userID])
})
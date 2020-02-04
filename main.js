const apiManager = new APIManager()
const renderer = new Renderer()
renderer.renderDropDownMenu(JSON.parse(localStorage.users || "{}"))
const data = apiManager.data   //should i do without this and just do apiManager.data?

$('#loadData').on('click', function() {
    apiManager.loadData()
})

$('#displayData').on('click', function () {
    renderer.renderPage(data)
})

$('#saveUserPage').on('click', function () {
    const users = JSON.parse(localStorage.users || '{}')
    if($.isEmptyObject(data) || Object.keys(users).includes(data.userId.toString())) {return}
    users[data.userId] = data
    localStorage.users = JSON.stringify(users)
    renderer.renderDropDownMenu({data})
})

$('#loadUserPage').on('click', function () {       //disable if no users saved? error
    const userID = $('#drop-down').children("option:selected").data().id    
    renderer.renderPage(JSON.parse(localStorage.users)[userID])
})
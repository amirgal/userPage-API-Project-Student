const apiManager = new APIManager()
const renderer = new Renderer()

$('#loadData').on('click', function() {
    apiManager.loadData()
})

$('#displayUser').on('click', function () {
    renderer.renderPage(apiManager.data)
})
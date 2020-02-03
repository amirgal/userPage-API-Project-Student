const apiManager = new APIManager()
const renderer = new Renderer()
let data
// setTimeout(function(){ renderer.renderPage(data) }, 3000);

$('#loadData').on('click', function() {
    data = apiManager.getData()
})

$('#displayUser').on('click', function () {
    renderer.renderPage(data)
})
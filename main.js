const apiManager = new APIManager()
const renderer = new Renderer()

// setTimeout(function(){ renderer.renderPage(data) }, 3000);

$('#loadData').on('click', function() {
    apiManager.loadData()
    
})

$('#displayUser').on('click', function () {
    renderer.renderPage(apiManager.data)
})
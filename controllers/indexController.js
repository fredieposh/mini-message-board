const messages = [
    {
        text: "Hi there!",
        user: "Elizabeth",
        added: new Date(),
    },
]

function renderIndexPage(req, res) {
    res.render('index', { messages });
};

module.exports = renderIndexPage;
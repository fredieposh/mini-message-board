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

function getMessages() {
    return messages;
};

function addMessage({ name, comment }) {

    messages.push({
        text: comment,
        user: name,
        added: new Date(),
    });

};

module.exports = {
    renderIndexPage,
    getMessages,
    addMessage,
}
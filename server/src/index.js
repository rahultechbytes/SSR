const express = require('express');
const app = express();
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
const renderer = require('./helpers/renderer');

app.get('/', (req, res) => {
    // const content = renderToString(<Home />);
    // const html = `
    // <!DOCTYPE html>
    //     <html lang="en">
    //     <head></head>
    //     <body>
    //         <div id="root">${content}</div>
    //         <script src="bundle.js"></script>
    //     </body>
    // </html>
    // `;
    res.send(renderer());
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("app running on port: 3000");
})

module.exports = app;
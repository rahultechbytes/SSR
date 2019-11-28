const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('../client/components/Home').default;

const renderer = () => {
    const content = renderToString(<Home />)
    return `
    <html lang="en">
        <head></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `
}

module.exports = renderer;
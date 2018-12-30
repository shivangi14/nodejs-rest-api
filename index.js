'use strict';
// call the packages we need
const {WebhookClient} = require('dialogflow-fulfillment');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//app's config
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
const server = app.listen(process.env.PORT || 5000, () => {
	console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

//Simple get call
app.get('/', (req, res) => {
	res.send('Hello, This is simple Get API call')
});

// Triggered by a POST to /webhook
app.post('/webhook', (req, res) => {
	var data = req.body;
	res.json({
	    displayText: 'Hi from post'
	    });
});
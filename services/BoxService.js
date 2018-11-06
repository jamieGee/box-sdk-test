'use strict';
const fs = require('fs');
const BoxSDK = require('box-node-sdk');
const settings = require('../settings');

class BoxService {

	constructor() {
		const sdk = new BoxSDK({
			clientID: settings.client_id,
			clientSecret: settings.client_secret
		});

		this.client = sdk.getBasicClient(settings.developer_token);
	}

	uploadFile(done) {
		const filePath = './files/my_text_file.txt';
		const fileName = 'my_text_file.txt';
		const folderId = '0';

		const stream = fs.createReadStream(filePath);
		this.client.files.uploadFile(folderId, fileName, stream, done);
	}

}

module.exports = BoxService;
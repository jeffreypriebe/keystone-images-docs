//Setup for storage.js

//in keystone.js require("./storage.js").init();

var Storage = require('storage');

module.exports = {
	init: function () {
		Storage.init({
			localProvider: {
				provider: Storage.Providers.LocalSystem,
				container: 'M:\webs_ignore\keystone-media\storage-root'
			},
			s3Provider: {
				provider: Storage.Providers.AmazonS3,
				container: 'jp-test-one/',
				key: process.env.AMAZON_S3,
				keyId: process.env.AMAZON_KeyId
			}
		});
		Storage.settings('default instance', 's3Provider');
	}
};
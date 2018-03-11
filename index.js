var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
	console.log('Files in directory:'.blue);
	console.log(files);
	var fileContent = files.toString().split(",").join("\n");
	fs.writeFile('./file_list.txt', fileContent, function(err) {
		if (err) throw err;
		console.log('files listed in '.blue + 'file_list.txt'.green);
		fs.readFile('./file_list.txt', 'utf-8', function(err, data) {
			console.log('Files in directory:'.blue);
			console.log(data);
		});

	});
});
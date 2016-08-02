var program = require('commander');
var fs = require('fs');
program
    .version('0.0.1')
    .option('-p, --path <string>', 'Add a parameter of path')
    .parse(process.argv);
if(program.path) {
    fs.readdir(program.path, (err, files) => {
        if (err) console.log(err);
        for (var i=0; i<files.length; i++){
            var fileName = files[i];
            if (fileName.indexOf("(1)") !== -1) {
                var  filePath = program.path + "/" + fileName;
                console.log(filePath);
                fs.unlinkSync(filePath);
                console.log('successfully deleted ' + filePath);
            }
        }
    });
} else {
    console.log('Please pass in a path string as parameter');
}

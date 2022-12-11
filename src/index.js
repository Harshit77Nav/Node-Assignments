const fs = require('fs');
// const fs = require('fs/promises');



const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await new Promise((resolve, reject) => {
		resolve(fs.writeFile(fileName, fileContent),
		console.log("File Created")),
		reject();
	}) 
}
// const myFileWriter = async (fileName, fileContent) => {
// 	// write code here
// 	// dont chnage function name
// 	await fs.writeFile(fileName, fileContent),
// 	console.log("File Created")
	
// }


const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await new Promise((resolve, reject) => {
		resolve(fs.readFile(fileName,'utf-8', (err,data) => {
			console.log(data);
		} )),
		reject();
	}) 
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await new Promise((resolve, reject) => {
		resolve(fs.appendFile(fileName, fileContent),
		console.log("done"));
		reject();
	}) 
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await new Promise((resolve, reject) => {
		resolve(fs.unlink(fileName),
		console.log("done")),
		reject();
	}) 
}

myFileReader('File.txt')

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }

/* eslint-disable */
const request = require('request');
const apiController = {};

// let apiLink = 'http://pokeapi.co/api/v2/pokemon/55/';
// let apiLink = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
// let apiLink = 'https://swapi.co/api/films/1/';

const supportedApiLinks = {
	'0': 'http://pokeapi.co/api/v2/pokemon/55/',
	'1': 'https://swapi.co/api/films/1/',
	'2': 'https://api.sunrise-sunset.org/json?lat=40.727504&lng=-73.980065'
}

apiController.makeSingleReq = (req, expRes, next) => {
	request(apiLink, { json: true }, (err, apiRes, body) => {
	  if (err) { return console.log(err); }
	  // console.log(apiRes);
	  console.log(body);
	  expRes.send({name: body.name});
	});
};

apiController.makeInterestRequests = (req, expRes, next) => {
	// Going to add onto the res.userInfo object that will eventually be sent to the user
	// Interests to loop through should be in expRes.locals.userInfo.interests
	console.log('In api make many req');
	// let dataToSend = Object.assign({}, expRes.locals.userInfo);
	console.log('Prev middleware data', expRes.locals.userInfo);
	// console.log('Prev middleware data', expRes.locals);
	// let apiArr = expRes.locals.userInfo.interests;
	let apiArr = [1];
	let apiResults = [];

	for (let i = 0; i < apiArr.length; i += 1) {

		let newReqPromise = new Promise((resolve, reject) => {
			request(supportedApiLinks[apiArr[i]], { json: true }, (err, apiRes, body) => {
			  if (err) { 
			  	console.log(err);
			  	reject('err');
			  }
			  console.log('Got body');
			  resolve(body);
			  // expRes.send({name: body.name});
			});
		})

		apiResults.push(newReqPromise);
	}

	Promise.all(apiResults).then((results) => {
	    console.log('Got all updates back');
	    // dataToSend['apiResults'] = results;
	    // dataToSend.test = 'newfieldADasdlbas';
	    // expRes.locals.userInfo.apple = 'sauce';
	    // Brute force copy object
	    let dataToSend = {};
	    dataToSend.interests = expRes.locals.userInfo.interests.slice(0);
	    dataToSend._id = expRes.locals.userInfo._id;
	    dataToSend.username = expRes.locals.userInfo.username;
	    dataToSend.password = expRes.locals.userInfo.password;
	    dataToSend.apiData = results;
	    console.log('New data to send', dataToSend);
	    expRes.json(dataToSend);
	});

};

module.exports = apiController;
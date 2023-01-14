const alert = require("./index.js");

alert();

alert({
	type: `error`,
	msg: `This is an error`,
});

alert({
	type: `success`,
	msg: `This is a success`,
});

alert({
	type: `info`,
	msg: `FYI`,
});

alert({
	type: `warning`,
	msg: `This is a warning`,
});

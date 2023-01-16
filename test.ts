const cliAlert = require("./index.js");

cliAlert();

cliAlert({
	type: `error`,
	msg: `This is an error`,
});

cliAlert({
	type: `success`,
	msg: `This is a success`,
});

cliAlert({
	type: `info`,
	msg: `FYI`,
});

cliAlert({
	type: `warning`,
	msg: `This is a warning`,
});

cliAlert({
	type: `warning`,
	msg: `This is a warning`,
	banner: `Watch out!`,
});

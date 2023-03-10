const chalk = require("chalk");
const sym = require("log-symbols");

const colors = {
	success: chalk.green,
	error: chalk.red,
	info: chalk.blue,
	warning: chalk.yellow,
};

const sendMessage = (options) => {
	const { type, msg } = options;
	const [color, banner] = [colors[type], ` ${type.toUpperCase()} `];
	console.log(
		`\n${sym[type]}  ${color.inverse.bold(banner)} ${color.bold(msg)}\n`
	);
};

module.exports = (options) => {
	const defaultOptions = {
		type: `error`,
		msg: `Please provide a message`,
	};

	sendMessage({ ...defaultOptions, ...options });
};

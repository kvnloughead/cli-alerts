// const chalk = require("chalk");
import chalk from "chalk";
const sym = require("log-symbols");

interface Options {
	type: "error" | "warning" | "success" | "info";
	msg?: string;
	banner?: string;
}

interface Colors {
	success: chalk.Chalk;
	error: chalk.Chalk;
	info: chalk.Chalk;
	warning: chalk.Chalk;
}

const colors: Colors = {
	success: chalk.green,
	error: chalk.red,
	info: chalk.blue,
	warning: chalk.yellow,
};

const sendMessage = (options: Options) => {
	const { type, msg } = options;
	const color = colors[type];
	const banner = ` ${options.banner || type!.toUpperCase()} `;
	console.log(
		`\n${sym[type]}  ${color.inverse.bold(banner)} ${color.bold(msg)}\n`
	);
};

module.exports = (options: Options) => {
	const defaults: Options = {
		type: `error`,
		msg: `Something has gone wrong`,
		banner: ``,
	};

	sendMessage({ ...defaults, ...options });
};

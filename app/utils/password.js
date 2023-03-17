const generator = require("generate-password");

const generatePassword = () => {
	// Between 8 and 12 included
	const length = Math.floor(8 + Math.random() * 5);
	return generator.generate({
		length,
		numbers: true,
		symbols: true,
	});
};

module.exports = generatePassword;

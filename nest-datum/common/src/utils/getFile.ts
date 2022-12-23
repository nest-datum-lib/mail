
const getFile = (target: string | object) => {
	let processedTarget;

	if (typeof target === 'string') {
		try {
			processedTarget = JSON.parse(target);
		}
		catch (err) {
			processedTarget = target;
		}
	}
	return `/home/mail-app/mail/tmp/test.ejs`;
};

export default getFile;

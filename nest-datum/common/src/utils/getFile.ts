
const getFile = (target: string | object) => {
	let processedTarget = target;

	if (typeof target === 'string') {
		try {
			processedTarget = JSON.parse(target);
		}
		catch (err) {
			processedTarget = target;
		}
	}
	if (!processedTarget) {
		throw new Error('Target file is undefined.');
	}
	if (typeof processedTarget === 'object') {
		const accessToken = generateAccessToken({
			id: 'sso-user-admin',
			roleId: 'sso-role-admin',
			email: process.env.USER_ROOT_EMAIL,
		}, Date.now());
		const url = payloadData['file'] + (isInnerUrl
			? (accessTokenExists
				? ''
				: (payloadData['file'].includes(`${appFileUrls[urlIndex]}?`)
					? `&accessToken=${accessToken}`
					: `?accessToken=${accessToken}`))
			: undefined);
	}
	else {

	}

	return `/home/mail-app/mail/tmp/test.ejs`;
};

export default getFile;

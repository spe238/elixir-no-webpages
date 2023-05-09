export const getLastUrlSegment = (url: string) => {
	const segments = url?.split('/');
	return segments?.length > 0 ? segments[segments.length - 1] : '';
};

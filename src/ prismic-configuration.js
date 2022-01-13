import Prismic from '@prismicio/client';

export const apiEndpoint = 'https://headless-omni.cdn.prismic.io/api/v2';
const accessToken = '';

// export const linkResolver = (doc) => {
//     if (doc.type === 'page') return `/page/${doc.uid}`;
//     return '/';
// };

export const client = Prismic.client(apiEndpoint, { accessToken });

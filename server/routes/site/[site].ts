
const sitesMap: { [key: string]: string } = {
  'kongiok': 'https://kongiok.tw',
  '': '/',
  'google': 'https://google.com',
}

export default defineEventHandler(async (event) => {
  const site: string | undefined = getRouterParam(event, 'site');
  console.log('site', site);
  if (site && sitesMap[site]) {
    return await sendRedirect(event, sitesMap[site], 302);
  };
  return createError({ statusCode: 404, message: 'Not Found' });
});
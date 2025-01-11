export default function middleware(request) {
  const url = new URL(request.url);

  if (url.hostname.endsWith('vercel.app')) {
    return Response.redirect('https://www.antiguedadesadrian.com' + url.pathname, 301);
  }

  return fetch(request);
}
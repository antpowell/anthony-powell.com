import { type Serve, file } from 'bun';

export default {
  port: 8080,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === '/') {
      return new Response(file('./index.html'), {
        headers: {
          'Content-Type': 'text/html'
        }
      });
    } else {
      throw new Error('Under Construction, try a different route.');
    }
  },
  error(error) {
    return new Response(file('./404.html'), {
      headers: {
        'Content-Type': 'text/html'
      }
    });
    ``;
  }
} satisfies Serve;

const server = Deno.listen({ port: 5001 });
console.log("http://localhost:5001/");

for await (const conn of server) {
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    requestEvent.respondWith(new Response("ok", { status: 200 }));
  }
}
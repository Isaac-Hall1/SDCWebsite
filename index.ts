Bun.serve({
    port: 5000, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    //hostname: "mydomain.com", // defaults to "0.0.0.0"
    async fetch(req) {
      return new Response(await Bun.file("index.html").text(), {
        headers: {
        "Content-Type": "text/html",
      },});
    },
  });
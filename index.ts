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

  Bun.serve({
    port: 5500, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
    //hostname: "mydomain.com", // defaults to "0.0.0.0"
    async fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") 
        return new Response(
            await Bun.file("index.html").text(), {
                headers: {
                "Content-Type": "text/html",
              },}
        );
        if (url.pathname === "/goals") 
        return new Response(
            await Bun.file("goals.html").text(), {
            });
        if (url.pathname === "/officers") 
        return new Response(
            await Bun.file("officers.html").text(), {
            });
        if (url.pathname === "/contact") 
        return new Response(
            await Bun.file("contact.html").text(), {
            });
        return new Response("404");
    }
  });

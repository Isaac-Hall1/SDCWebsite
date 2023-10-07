const port: int = 5500;

console.log(`Starting server on port ${port} (http://localhost:${port}/)`);

Bun.serve({
    port,
    async fetch(req) {
        const url: URL = new URL(req.url);
        let text: string | null = null;

        switch (url.pathname) {
            case "/":
            case "/index.html":
                text = await Bun.file("content/index.html").text();
                break;

            case "/home":
            case "/goals":
            case "/officers":
            case "/contact":
                text = await Bun.file(`content${url.pathname}.html`).text();
                break;

            default:
                text = "<p><b>404 Error</b></p>";
                break;
        }

        if (!text) {
            text = "<p><b>500 Server Error</b></p>";
        }

        return new Response(text, {
            headers: { "Content-Type": "text/html" }
        });
    }
});

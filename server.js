import { create, router as _router, defaults, rewriter } from "json-server";
const server = create();
const router = _router("db.json");
// const path = require("path");
// const express = require("express");
const middlewares = defaults({
  static: "./build",
});

const port = process.env.PORT || 3001;
server.use(middlewares);
server.use(
  rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);

// app.use("/db", middlewares, router);
// app.use(express.static(path.join(__dirname, "build")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

server.listen(port, () => {
  console.log("server is running");
});

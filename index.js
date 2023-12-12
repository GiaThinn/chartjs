const express = require("express");
const app = express();
const port = 5000;
const expressHbs = require("express-handlebars");
const controller = require("./controllers/chartController");

app.use(express.static(__dirname + "/html"));
app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: "layout",
    extname: "hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
    },
    helpers: {
      formatDate: (date) => {
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
      showIndex: (index) => index + 1,
    },
  })
);
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", controller.show);
app.get("/line", controller.line);
app.get("/bar", controller.bar);
app.get("/pie", controller.pie);
app.get("/bubble", controller.bubble);
app.get("/area", controller.area);
app.get("/radar", controller.radar);
app.get("/scatter", controller.scatter);
app.get("/mixed", controller.mixed);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

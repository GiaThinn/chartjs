const show = (req, res) => {
  res.render("index");
};

const line = (req, res) => {
  res.render("line");
}

const bar = (req, res) => {
  res.render("bar");
}

const bubble = (req, res) => {
  res.render("bubble");
}

const scatter = (req, res) => {
  res.render("scatter");
}

const area = (req, res) => {
  res.render("area");
}

const pie = (req, res) => {
  res.render("pie");
}

const radar = (req, res) => {
  res.render("radar");
}

const mixed = (req, res) => {
  res.render("mixed");
}

module.exports = { show, line, bar, pie, bubble, radar, scatter, area, mixed };

function tpl(str) {
  return str;
}

const unused = tpl`one`;

// Uncomment the line below to work around the bug:
// const anotherUnused = tpl`two`;

document.querySelector("h1").innerText =
  "Success: the bundle executed correctly";

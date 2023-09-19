const a = true;
if (a) {
  const m1 = await import("../CommonJS모듈/func.js");
  console.log(m1);
  const m2 = await import("../CommonJS모듈/var.js");
  console.log(m2);
}

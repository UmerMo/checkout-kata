const checkoutObject = require(".");

it("should return 50 when 🍏 is scanned", () => {
  const checkout = checkoutObject();
  expect(checkout.scan("🍏")).toEqual(50);
});

it("should return 20 when 🍊 is scanned", () => {
  const checkout = checkoutObject();
  expect(checkout.scan("🍊")).toEqual(20);
});

it("should return 30 when 🍇 is scanned", () => {
  const checkout = checkoutObject();
  expect(checkout.scan("🍇")).toEqual(30);
});

it("should return 60 when scanning 2 🍇", () => {
  const checkout = checkoutObject();
  checkout.scan("🍇");
  checkout.scan("🍇");
  expect(checkout.total()).toEqual(60);
});

const prices = {
  "🍊": 20,
  "🍏": 50,
  "🍇": 30
};

const discount = [
  {
    product: "🍇",
    quantity: 3,
    discount: 20
  }
];

module.exports = () => {
  let ongoingTotal = 0;

  const total = () => ongoingTotal;

  const scan = product => {
    ongoingTotal += prices[product];
    return total();
  };

  return {
    scan,
    total
  };
};

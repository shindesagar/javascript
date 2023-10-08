const customers = [
  {
    customerID: 1,
    customerName: "Mr A",
    totalBillingAmount: 2500,
  },
  {
    customerID: 2,
    customerName: "Mrs B",
    totalBillingAmount: 3500,
  },
  {
    customerID: 3,
    customerName: "Mr C",
    totalBillingAmount: 2800,
  },
  {
    customerID: 4,
    customerName: "Mrs D",
    totalBillingAmount: 4000,
  },
];

const newArr = customers.filter((i) => i.totalBillingAmount > 3000);

if (newArr.length > 0) {
  newArr.forEach((i) => {
    console.log(`Customer Name: ${i.customerName}`);
    console.log(`Bill Amount: ${i.totalBillingAmount}`);
  });
} else {
  console.log(" No such customer !!");
}

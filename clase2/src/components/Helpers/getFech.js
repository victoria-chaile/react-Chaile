const products = [
  {
    id: "1",
    name: "BILLETERA TARJETERA",
    description: "",
    price: "1500",
    src: "Billetera.jpeg",
    category: "billeteras",
  },
  {
    id: "2",
    name: "MOCHILA ISADORA",
    description: "",
    price: "3500",
    src: "Mochila.jpeg",
    category: "mochilas",
  },
  {
    id: "3",
    name: "BILLETERA GOOD",
    description: "",
    price: "2100",
    src: "Billetera2.jpeg",
    category: "billeteras",
  },
  {
    id: "4",
    name: "MOCHILA PRUNE",
    description: "",
    price: "3000",
    src: "Mochila2.jpeg",
    category: "mochilas",
  },
  {
    id: "5",
    name: "BILLETERA CON CORDON",
    description: "",
    price: "1500",
    src: "Billetera3.jpeg",
    category: "billeteras",
  },
  {
    id: "6",
    name: "MOCHILA OVAL",
    description: "",
    price: "4200",
    src: "Mochila3.jpeg",
    category: "mochilas",
  },
  {
    id: "7",
    name: "BILLETERA ISADORA",
    description: "",
    price: "1700",
    src: "Billetera4.jpeg",
    category: "billeteras",
  },
  {
    id: "8",
    name: "MOCHILA CON CORDON",
    description: "",
    price: "3800",
    src: "Mochila4.jpeg",
    category: "mochilas",
  },
];

export const getFech = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  } else {
    reject("404 error");
  }
});

export function getItem(id) {
  return new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(products.find((e) => e.id === id));
      }, 2000);
    } else {
      reject("404 error");
    }
  });
}

const productos = [
  {
    id: "1",
    name: "BILLETERA TARJETERA",
    descripcion: "",
    precio: "1500",
    src: "Billetera.jpeg",
    categoria: "billeteras",
  },
  {
    id: "2",
    name: "MOCHILA ISADORA",
    descripcion: "",
    precio: "3500",
    src: "Mochila.jpeg",
    categoria: "mochilas",
  },
  {
    id: "3",
    name: "BILLETERA GOOD",
    descripcion: "",
    precio: "2100",
    src: "Billetera2.jpeg",
    categoria: "billeteras",
  },
  {
    id: "4",
    name: "MOCHILA PRUNE",
    descripcion: "",
    precio: "3000",
    src: "Mochila2.jpeg",
    categoria: "mochilas",
  },
  {
    id: "5",
    name: "BILLETERA CON CORDON",
    descripcion: "",
    precio: "1500",
    src: "Billetera3.jpeg",
    categoria: "billeteras",
  },
  {
    id: "6",
    name: "MOCHILA OVAL",
    descripcion: "",
    precio: "4200",
    src: "Mochila3.jpeg",
    categoria: "mochilas",
  },
  {
    id: "7",
    name: "BILLETERA ISADORA",
    descripcion: "",
    precio: "1700",
    src: "Billetera4.jpeg",
    categoria: "billeteras",
  },
  {
    id: "8",
    name: "MOCHILA CON CORDON",
    descripcion: "",
    precio: "3800",
    src: "Mochila4.jpeg",
    categoria: "mochilas",
  },
];

export const getFech = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
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
        resolve(productos.find((e) => e.id == id));
      }, 2000);
    } else {
      reject("404 error");
    }
  });
}

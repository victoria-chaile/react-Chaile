const productos = [
  {
    id: "1",
    name: "sweater",
    descripcion: "verde agua",
    precio: "3000",
    src: "sweater.jpeg",
  },
  {
    id: "2",
    name: "babucha",
    descripcion: "engomada",
    precio: "3500",
    src: "babucha.jpeg",
  },
  {
    id: "3",
    name: "remera",
    descripcion: "basica-estampa",
    precio: "1000",
    src: "remera.jpeg",
  },
  {
    id: "4",
    name: "campera",
    descripcion: "jeans celeste",
    precio: "4000",
    src: "campera.jpeg",
  },
  {
    id: "5",
    name: "cinto",
    descripcion: "lisos-tachas",
    precio: "800",
    src: "cinto.jpeg",
  },
  {
    id: "6",
    name: "pañuelo",
    descripcion: "lisos-estampa",
    precio: "2000",
    src: "pañuelo.jpeg",
  },
  {
    id: "7",
    name: "campera",
    descripcion: "cuero",
    precio: "9000",
    src: "camperaCuero.jpeg",
  },
  {
    id: "8",
    name: "camisa",
    descripcion: "blanca-oversize",
    precio: "4000",
    src: "camisa.jpeg",
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

export function getItem (id) {
  return new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
      setTimeout(() => {
        resolve(productos.find((e)=>e.id==id));
      }, 2000);
    } else {
      reject("404 error");
    }
  });
};

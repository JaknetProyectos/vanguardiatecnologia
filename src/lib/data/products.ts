export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    screen?: string;
    os?: string;
    graphics?: string;
    no_cotizacion?: string;
    client?: string;
  };
  category: string;
  brand: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "asus-vivobook-15-6",
    name: "ASUS Vivobook 15.6",
    price: 8300.00,
    image: "https://ext.same-assets.com/3412788416/4072069953.webp",
    description: "Laptop ASUS Vivobook con pantalla de 15.6 pulgadas, ideal para trabajo y entretenimiento.",
    specs: {
      screen: "15.6 pulgadas Full HD",
      os: "Windows 11 Home",
    },
    category: "laptop",
    brand: "ASUS",
    inStock: true,
  },
  {
    id: "hp-omen-15-6",
    name: "HP OMEN 15.6\" con procesador AMD Ryzen 7 5800H, 8GB de RAM, 512GB de SSD y Windows 11 Home",
    price: 21000.00,
    image: "https://ext.same-assets.com/3412788416/4265314609.webp",
    description: "Laptop gaming HP OMEN con potente procesador AMD Ryzen 7, perfecta para juegos y creacion de contenido.",
    specs: {
      processor: "AMD Ryzen 7 5800H",
      ram: "8GB",
      storage: "512GB SSD",
      screen: "15.6 pulgadas",
      os: "Windows 11 Home",
    },
    category: "laptop",
    brand: "HP",
    inStock: true,
  },
  {
    id: "dell-latitude-5420",
    name: "Dell Latitude 5420",
    price: 8500.00,
    image: "https://ext.same-assets.com/3412788416/2353561026.webp",
    description: "Laptop empresarial Dell Latitude, disenada para productividad y seguridad en el trabajo.",
    specs: {
      os: "Windows 10 Pro",
    },
    category: "laptop",
    brand: "Dell",
    inStock: true,
  },
  {
    id: "dell-inspiron-3535",
    name: "Laptop DELL Inspiron 3535 con procesador AMD Ryzen 5, 8GB de RAM, 512GB de SSD, pantalla de 15.6\"",
    price: 9800.00,
    image: "https://ext.same-assets.com/3412788416/567606597.webp",
    description: "Laptop Dell Inspiron con excelente rendimiento para tareas diarias y trabajo.",
    specs: {
      processor: "AMD Ryzen 5",
      ram: "8GB",
      storage: "512GB SSD",
      screen: "15.6 pulgadas",
    },
    category: "laptop",
    brand: "Dell",
    inStock: true,
  },
  {
    id: "vorago-alpha-plus-v2",
    name: "Laptop Vorago Alpha Plus V2",
    price: 7500.00,
    image: "https://ext.same-assets.com/3412788416/3694863683.webp",
    description: "Laptop Vorago economica y funcional para tareas basicas y estudio.",
    specs: {},
    category: "laptop",
    brand: "Vorago",
    inStock: true,
  },
  {
    id: "lenovo-thinkpad-x1-carbon",
    name: "Lenovo ThinkPad X1 Carbon (8.a generacion)",
    price: 10110.00,
    image: "https://ext.same-assets.com/3412788416/250508553.webp",
    description: "Laptop ultraligera Lenovo ThinkPad X1 Carbon, ideal para profesionales en movimiento.",
    specs: {
      os: "Windows 10 Pro",
    },
    category: "laptop",
    brand: "Lenovo",
    inStock: true,
  },
  {
    id: "asus-vivobook-flip-14",
    name: "ASUS VivoBook Flip 14 TP412FA-XB56T",
    price: 17200.00,
    image: "https://ext.same-assets.com/3412788416/99054575.webp",
    description: "Laptop 2 en 1 ASUS con pantalla tactil y bisagra de 360 grados.",
    specs: {
      screen: "14 pulgadas tactil",
    },
    category: "laptop",
    brand: "ASUS",
    inStock: true,
  },
  {
    id: "hp-victus-gaming-15",
    name: "HP Victus Gaming 15-fa0021la",
    price: 20190.00,
    image: "https://ext.same-assets.com/3412788416/528118425.webp",
    description: "Laptop gaming HP Victus con alto rendimiento para juegos exigentes.",
    specs: {
      screen: "15.6 pulgadas",
    },
    category: "laptop",
    brand: "HP",
    inStock: true,
  },
  {
    id: "dell-optiplex-7050",
    name: "Dell OptiPlex 7050 con procesador Intel Core i7 de 7.a generacion, 16GB de RAM, 240GB de SSD, monitor de 22\", Wi-Fi y sistema operativo Windows 10 Pro",
    price: 6850.00,
    image: "https://ext.same-assets.com/3412788416/333116518.webp",
    description: "Desktop Dell OptiPlex completo con monitor, ideal para oficinas.",
    specs: {
      processor: "Intel Core i7 7ma Gen",
      ram: "16GB",
      storage: "240GB SSD",
      screen: "Monitor 22 pulgadas",
      os: "Windows 10 Pro",
    },
    category: "desktop",
    brand: "Dell",
    inStock: true,
  },
  {
    id: "hp-240-g10",
    name: "HP 240 G10 con procesador Intel Core i5-1335U, 8GB de RAM DDR4 y 512GB de SSD",
    price: 9100.00,
    image: "https://ext.same-assets.com/3412788416/3177170930.webp",
    description: "Laptop HP 240 G10 para uso empresarial y profesional.",
    specs: {
      processor: "Intel Core i5-1335U",
      ram: "8GB DDR4",
      storage: "512GB SSD",
    },
    category: "laptop",
    brand: "HP",
    inStock: true,
  },
  {
    id: "dell-g15-5520",
    name: "Dell G15 5520 con procesador Intel Core i7-12700H, tarjeta grafica NVIDIA GeForce RTX 3060, 16 GB de RAM DDR5, 512 GB de SSD y pantalla de 15.6\" con Windows 11",
    price: 35400.00,
    image: "https://ext.same-assets.com/3412788416/3015162956.webp",
    description: "Laptop gaming Dell G15 con especificaciones de alta gama para gamers exigentes.",
    specs: {
      processor: "Intel Core i7-12700H",
      ram: "16GB DDR5",
      storage: "512GB SSD",
      screen: "15.6 pulgadas",
      graphics: "NVIDIA GeForce RTX 3060",
      os: "Windows 11",
    },
    category: "laptop",
    brand: "Dell",
    inStock: true,
  },
  {
    id: "lenovo-chromebook-100e",
    name: "Lenovo Chromebook 100e con procesador AMD A4-9120C, 4 GB de RAM y 32 GB de almacenamiento eMMC",
    price: 6200.00,
    image: "https://ext.same-assets.com/3412788416/601455616.webp",
    description: "Chromebook Lenovo economica para educacion y tareas basicas.",
    specs: {
      processor: "AMD A4-9120C",
      ram: "4GB",
      storage: "32GB eMMC",
      os: "Chrome OS",
    },
    category: "laptop",
    brand: "Lenovo",
    inStock: true,
  },
  {
    id: "imac-apple-mgpj3e",
    name: "iMac Apple MGPJ3E/A",
    price: 47800.00,
    image: "https://ext.same-assets.com/3412788416/3582158140.webp",
    description: "iMac Apple con diseno elegante y potente rendimiento para creativos.",
    specs: {
      os: "macOS",
    },
    category: "all-in-one",
    brand: "Apple",
    inStock: true,
  },
  {
    id: "hp-all-in-one-27",
    name: "HP All-in-One 27-cr0011la",
    price: 18900.00,
    image: "https://ext.same-assets.com/3412788416/2265878116.webp",
    description: "Computadora todo en uno HP con pantalla de 27 pulgadas.",
    specs: {
      screen: "27 pulgadas",
    },
    category: "all-in-one",
    brand: "HP",
    inStock: true,
  },
  {
    id: "dell-vostro-5410",
    name: "Dell Vostro 5410",
    price: 24600.00,
    image: "https://ext.same-assets.com/3412788416/2699336508.webp",
    description: "Laptop empresarial Dell Vostro con excelente relacion calidad-precio.",
    specs: {},
    category: "laptop",
    brand: "Dell",
    inStock: true,
  },
  {
    id: "hp-14-dq2089wm",
    name: "Laptop HP 14-DQ2089WM con Intel Core i3-1115G4, 8 GB de RAM DDR4, SSD de 256 GB, pantalla de 14\" HD",
    price: 10950.00,
    image: "https://ext.same-assets.com/3412788416/58047865.webp",
    description: "Laptop HP compacta y portatil con buen rendimiento para uso diario.",
    specs: {
      processor: "Intel Core i3-1115G4",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      screen: "14 pulgadas HD",
    },
    category: "laptop",
    brand: "HP",
    inStock: true,
  },
  {
    id: "lenovo-thinkpad-t460s",
    name: "Lenovo ThinkPad T460s con Intel Core i5 de 6.a generacion, 8 GB de RAM, 256 GB SSD, pantalla de 14\" Full HD, camara web, HDMI",
    price: 5200.00,
    image: "https://ext.same-assets.com/3412788416/1189064791.webp",
    description: "Laptop empresarial Lenovo ThinkPad reacondicionada con excelente rendimiento.",
    specs: {
      processor: "Intel Core i5 6ta Gen",
      ram: "8GB",
      storage: "256GB SSD",
      screen: "14 pulgadas Full HD",
    },
    category: "laptop",
    brand: "Lenovo",
    inStock: true,
  },
  {
    id: "hp-laptop-255-g9",
    name: "HP Laptop 255 G9 con AMD Ryzen 5 5625U, 16 GB de RAM, 512 GB SSD PCIe NVMe M.2, pantalla de 15.6\", Windows 11 Home y teclado en espanol",
    price: 8500.00,
    image: "https://ext.same-assets.com/3412788416/4262846964.webp",
    description: "Laptop HP con potente procesador AMD Ryzen 5 y amplia memoria RAM.",
    specs: {
      processor: "AMD Ryzen 5 5625U",
      ram: "16GB",
      storage: "512GB SSD NVMe",
      screen: "15.6 pulgadas",
      os: "Windows 11 Home",
    },
    category: "laptop",
    brand: "HP",
    inStock: true,
  },
  {
    id: "hp-15-fd0058la",
    name: "Laptop HP 15-fd0058la",
    price: 9500.00,
    image: "https://ext.same-assets.com/3412788416/1408146553.webp",
    description: "Laptop HP de 15 pulgadas para uso general y trabajo.",
    specs: {
      screen: "15 pulgadas",
    },
    category: "laptop",
    brand: "HP",
    inStock: true,
  },
  {
    id: "hp-stream-14-cf2733",
    name: "Laptop HP Stream 14-CF2733 con Intel Celeron N4120, 4 GB de RAM, 64 GB de almacenamiento eMMC y Windows 11 Home en modo S",
    price: 11780.00,
    image: "https://ext.same-assets.com/3412788416/3556788009.webp",
    description: "Laptop HP Stream ligera y portatil, ideal para tareas basicas.",
    specs: {
      processor: "Intel Celeron N4120",
      ram: "4GB",
      storage: "64GB eMMC",
      screen: "14 pulgadas",
      os: "Windows 11 Home S",
    },
    category: "laptop",
    brand: "HP",
    inStock: false,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: Product["category"]): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter((product) => product.brand.toLowerCase() === brand.toLowerCase());
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.brand.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  );
};

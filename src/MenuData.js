export const menuData = [
  {
    category: "COFFEE",
    hasHotIce: true,
    items: [
      { name: "ESPRESSO", priceHot: "15", priceIce: null, isBestSeller: false },
      { name: "CAPPUCINO", priceHot: "23", priceIce: "23", isBestSeller: false },
      { name: "MOCHACHINO", priceHot: null, priceIce: "28", isBestSeller: true },
      { name: "KOPI SUSU", priceHot: "18", priceIce: "20", isBestSeller: false },
      { name: "KOPI AREN", priceHot: "25", priceIce: "25", isBestSeller: true },
      { name: "BUTTERSCOTCH", priceHot: null, priceIce: "30", isBestSeller: true },
      { name: "SALTED CARAMEL", priceHot: null, priceIce: "28", isBestSeller: false },
      { name: "CARAMEL MACCHIATO", priceHot: null, priceIce: "30", isBestSeller: false },
      { name: "KOPI PANDAN", priceHot: null, priceIce: "28", isBestSeller: false },
      { name: "KOPI PISANG", priceHot: null, priceIce: "28", isBestSeller: true },
      { name: "KOPI VANILLA", priceHot: null, priceIce: "28", isBestSeller: false }
    ]
  },
  {
    category: "NON COFFEE",
    hasHotIce: true,
    items: [
      { name: "MATCHA LATTE", priceHot: "28", priceIce: "28", isBestSeller: true },
      { name: "STRAWBERRY MATCHA", priceHot: null, priceIce: "30", isBestSeller: false },
      { name: "STRAWBERRY CREAMY MATCHA", priceHot: null, priceIce: "33", isBestSeller: true },
      { name: "MATCHA BERRY", priceHot: null, priceIce: "30", isBestSeller: false },
      { name: "CHOCOLATE", priceHot: "23", priceIce: "23", isBestSeller: false },
      { name: "CHOCOLATE VANILLA", priceHot: null, priceIce: "25", isBestSeller: false },
      { name: "CHOCOLATE BANANA", priceHot: null, priceIce: "25", isBestSeller: true },
      { name: "CHOCOLATE CARAMEL", priceHot: null, priceIce: "25", isBestSeller: false },
      { name: "MARKISA", priceHot: "18", priceIce: "20", isBestSeller: true },
      { name: "MINERAL WATER", priceHot: null, priceIce: "5", isBestSeller: false }
    ]
  },
  {
    category: "AMERICANO SERIES",
    hasHotIce: true,
    items: [
      { name: "AMERICANO", priceHot: "15", priceIce: "18", isBestSeller: false },
      { name: "AMERICANO PEACH", priceHot: null, priceIce: "25", isBestSeller: true },
      { name: "AMERICANO LYCHEE", priceHot: null, priceIce: "25", isBestSeller: false },
      { name: "AMERICANO BERRY", priceHot: null, priceIce: "28", isBestSeller: true },
      { name: "AMERICANO MARKISA", priceHot: null, priceIce: "28", isBestSeller: false }
    ]
  },
  {
    category: "TEA",
    hasHotIce: true,
    items: [
      { name: "LEMON TEA", priceHot: "20", priceIce: "20", isBestSeller: false },
      { name: "BLACK TEA", priceHot: "18", priceIce: "18", isBestSeller: false },
      { name: "LYCHEE TEA", priceHot: "20", priceIce: "20", isBestSeller: true }
    ]
  },
  {
    category: "FRESH DRINK",
    hasHotIce: true,
    items: [
      { name: "MOONLIGHT", priceHot: null, priceIce: "25", isBestSeller: true },
      { name: "PINK LADY", priceHot: null, priceIce: "25", isBestSeller: false },
      { name: "LEMONADE YAKULT", priceHot: null, priceIce: "25", isBestSeller: true },
      { name: "LEMONADE LYCHEE", priceHot: null, priceIce: "25", isBestSeller: false },
      { name: "LEMONADE PEACH", priceHot: null, priceIce: "25", isBestSeller: false },
      { name: "SKY BERRY", priceHot: null, priceIce: "25", isBestSeller: false },
      { name: "APPLE BERRY", priceHot: null, priceIce: "28", isBestSeller: true },
      { name: "MARKISA", priceHot: null, priceIce: "25", isBestSeller: false },
      { name: "MARKISA PISANG", priceHot: null, priceIce: "28", isBestSeller: false },
      { name: "MARKISA STRAWBERRY", priceHot: null, priceIce: "28", isBestSeller: true },
      { name: "MARKISA TEA", priceHot: null, priceIce: "28", isBestSeller: false }
    ]
  },
  {
    category: "MAIN COURSE",
    hasHotIce: false,
    items: [
      { name: "NASI AYAM GORENG", price: "30", isBestSeller: true },
      { name: "CHICKEN TERIYAKI", price: "28", isBestSeller: false },
      { name: "CHICKEN KATSU", price: "30", isBestSeller: true },
      { name: "CHICKEN WINGS", price: "28", isBestSeller: false },
      { name: "NASI GORENG TELUR", price: "28", isBestSeller: false },
      { name: "NASI GORENG AYAM", price: "30", isBestSeller: true },
      { name: "INDOMIE GORENG/SOTO", price: "15", isBestSeller: false },
      { name: "INDOMIE GORENG / SOTO TELUR", price: "18", isBestSeller: false },
      { name: "INDOMIE GORENG / SOTO DOUBLE", price: "20", isBestSeller: false },
      { name: "INDOMIE GORENG / SOTO DOUBLE TELUR", price: "23", isBestSeller: false },
      { name: "UDANG / CUMI GORENG TEPUNG", price: "35", isBestSeller: false },
      { name: "UDANG / CUMI GORENG ASAM MANIS", price: "35", isBestSeller: false }
    ]
  },
  {
    category: "SNACKS",
    hasHotIce: false,
    items: [
      { name: "FRENCH FRIES", price: "20", isBestSeller: false },
      { name: "MIX PLATTER", price: "28", isBestSeller: true },
      { name: "ROTI BAKAR COKLAT KEJU", price: "20", isBestSeller: true },
      { name: "ROTI BAKAR COKLAT / KEJU", price: "18", isBestSeller: false },
      { name: "PISANG GORENG KLASIK", price: "15", isBestSeller: false },
      { name: "PISANG GORENG COKLAT KEJU", price: "23", isBestSeller: false },
      { name: "PISANG GORENG COKLAT / KEJU", price: "20", isBestSeller: true },
      { name: "ROTI MARYAM ORIGINAL", price: "18", isBestSeller: true },
      { name: "ROTI MARYAM COKLAT / KEJU", price: "20", isBestSeller: false },
      { name: "ROTI MARYAM COKLAT KEJU", price: "23", isBestSeller: true },
      { name: "PANGSIT GORENG", price: "15", isBestSeller: false },
      { name: "MINI WONTON", price: "18", isBestSeller: false },
      { name: "TEMPE MENDOAN", price: "15", isBestSeller: false }
    ]
  }
];

// products.js
// نفس بيانات العطور اللي في index.html، بس مجمّعة هنا عشان نقدر نستخدمها
// في صفحة التفاصيل product.html من غير ما نكررها

const products = [
  {
    id: 1,
    name: "Velvet Oud",
    type: "EAU DE PARFUM",
    price: 850,
    image: "images/post1.png",
    description:
      "A rich and sophisticated fragrance that combines the deep sensuality of oud with warm woods, soft spices, and a smooth amber sweetness. Elegant, mysterious, and long-lasting.",
    notes: {
      top: "Saffron, raspberry, pink pepper",
      heart: "Bulgarian rose, patchouli, oud",
      base: "Amber, vanilla, leather, benzoin",
    },
  },
  {
    id: 2,
    name: "Citrus Noir",
    type: "EAU DE PARFUM",
    price: 620,
    image: "images/post2.png",
    description:
      "A fresh and vibrant fragrance opening with sparkling citrus and aromatic spices, balanced by elegant florals and a warm woody base. Fresh, sophisticated, and effortlessly modern.",
    notes: {
      top: "Bergamot, lemon, pink pepper",
      heart: "Lavender, geranium, nutmeg",
      base: "Vetiver, cedarwood, musk, ambergris",
    },
  },
  {
    id: 3,
    name: "Rose Elixir",
    type: "EAU DE PARFUM",
    price: 780,
    image: "images/post3.png",
    description:
      "A romantic and elegant floral fragrance centered around velvety rose petals, complemented by juicy fruits and a soft, sensual musk. Feminine, graceful, and captivating.",
    notes: {
      top: "Lychee, pear, pink pepper",
      heart: "Turkish rose, peony, magnolia",
      base: "White musk, amber, vanilla",
    },
  },
  {
    id: 4,
    name: "Tobacco Vanille",
    type: "EAU DE PARFUM",
    price: 990,
    image: "images/post4.png",
    description:
      "A warm and addictive fragrance blending rich tobacco leaves with creamy vanilla, dried fruits, and subtle spices. Deep, luxurious, and comforting with a seductive character.",
    notes: {
      top: "Tobacco leaf, spices",
      heart: "Tonka bean, tobacco blossom, cacao",
      base: "Vanilla, dried fruits, woody notes",
    },
  },
];
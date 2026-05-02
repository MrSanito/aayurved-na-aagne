export type Product = {
  name: string;
  slug: string;
  mrp: number;
  discountedPrice: number;
  discountPercent: number;
  whatsappLink: string;
  category: string;
  emoji: string;
};

export const products: Product[] = [
  // Personal Care
  { name: "7in1 Hair Oil", slug: "7in1-hair-oil", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+7in1+Hair+Oil+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "💆" },
  { name: "Age Revival Facewash", slug: "age-revival-facewash", mrp: 350, discountedPrice: 329, discountPercent: 6, whatsappLink: "https://wa.me/919687105624?text=હું+Age+Revival+Facewash+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "✨" },
  { name: "Anti Hairfall Shampoo", slug: "anti-hairfall-shampoo", mrp: 280, discountedPrice: 249, discountPercent: 11, whatsappLink: "https://wa.me/919687105624?text=હું+Anti+Hairfall+Shampoo+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🧴" },
  { name: "Argan Biotin Shampoo", slug: "argan-biotin-shampoo", mrp: 380, discountedPrice: 349, discountPercent: 8, whatsappLink: "https://wa.me/919687105624?text=હું+Argan+Biotin+Shampoo+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🧴" },
  { name: "BB Cream", slug: "bb-cream", mrp: 399, discountedPrice: 349, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+BB+Cream+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "💄" },
  { name: "Black Henna Hair Color", slug: "black-henna-hair-color", mrp: 80, discountedPrice: 70, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Black+Heena+Hair+Color+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🖤" },
  { name: "Brown Henna Hair Color", slug: "brown-henna-hair-color", mrp: 75, discountedPrice: 65, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Brown+Heena+Hair+Color+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🟤" },
  { name: "Choco Lip Butter", slug: "choco-lip-butter", mrp: 175, discountedPrice: 160, discountPercent: 8, whatsappLink: "https://wa.me/919687105624?text=હું+Choco+Lip+Butter+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🍫" },
  { name: "Cocoa Butter Lotion", slug: "cocoa-butter-lotion", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Coco+Butter+Lotion+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🧈" },
  { name: "De Tan Pack", slug: "de-tan-pack", mrp: 299, discountedPrice: 290, discountPercent: 3, whatsappLink: "https://wa.me/919687105624?text=હું+De+Tan+pack+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "☀️" },
  { name: "Deo Body Powder", slug: "deo-body-powder", mrp: 180, discountedPrice: 165, discountPercent: 8, whatsappLink: "https://wa.me/919687105624?text=હું+Deo+Body+powder+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌸" },
  { name: "Eraze Acne Gel", slug: "eraze-acne-gel", mrp: 650, discountedPrice: 585, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Eraze+Acne+gel+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "💊" },
  { name: "Facial Drop", slug: "facial-drop", mrp: 399, discountedPrice: 359, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Facial+Drop+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "💧" },
  { name: "Foot Care Cream", slug: "foot-care-cream", mrp: 249, discountedPrice: 224, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Foot+Care+Cream+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🦶" },
  { name: "Hair Conditioner", slug: "hair-conditioner", mrp: 265, discountedPrice: 245, discountPercent: 7, whatsappLink: "https://wa.me/919687105624?text=હું+Hair+Conditioner+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "💆" },
  { name: "Hair Growth Serum", slug: "hair-growth-serum", mrp: 999, discountedPrice: 899, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Hair+Growth+Serum+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌱" },
  { name: "Hair Tonic", slug: "hair-tonic", mrp: 599, discountedPrice: 539, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Hair+Tonic+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "💆" },
  { name: "Instant Glow Cream", slug: "instant-glow-cream", mrp: 299, discountedPrice: 284, discountPercent: 5, whatsappLink: "https://wa.me/919687105624?text=હું+Instant+Glow+Cream+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "✨" },
  { name: "Kapoor Handmade Soap", slug: "kapoor-handmade-soap", mrp: 100, discountedPrice: 90, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+kapoor+Soap+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🧼" },
  { name: "Keratin Shampoo", slug: "keratin-shampoo", mrp: 250, discountedPrice: 225, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+keratin+shampoo+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🧴" },
  { name: "Lavender Soap", slug: "lavender-soap", mrp: 75, discountedPrice: 69, discountPercent: 7, whatsappLink: "https://wa.me/919687105624?text=હું+Lavender+Soap+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "💜" },
  { name: "Neem & Basil Handmade Soap", slug: "neem-basil-handmade-soap", mrp: 100, discountedPrice: 90, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Neem&Basil+Soap+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌿" },
  { name: "Platinum Facial Kit", slug: "platinum-facial-kit", mrp: 599, discountedPrice: 539, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+platinum+facial+kit+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "💎" },
  { name: "Rescue Hairfall Oil", slug: "rescue-hairfall-oil", mrp: 230, discountedPrice: 207, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Rescue+Hairfall+oil+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌿" },
  { name: "Rose Face Mist", slug: "rose-face-mist", mrp: 160, discountedPrice: 147, discountPercent: 8, whatsappLink: "https://wa.me/919687105624?text=હું+Rose+face+Mist+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌹" },
  { name: "Rose Petal Handmade Soap", slug: "rose-petal-handmade-soap", mrp: 100, discountedPrice: 90, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Rose+Petal+Soap+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌹" },
  { name: "Sea Buckthorn Soap", slug: "sea-buckthorn-soap", mrp: 55, discountedPrice: 49, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Sea+Buckthorn+Soap+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🧼" },
  { name: "Skin Enhance Cream", slug: "skin-enhance-cream", mrp: 325, discountedPrice: 299, discountPercent: 8, whatsappLink: "https://wa.me/919687105624?text=હું+Skin+Enhance+Cream+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌟" },
  { name: "Sunscreen Gel", slug: "sunscreen-gel", mrp: 450, discountedPrice: 399, discountPercent: 11, whatsappLink: "https://wa.me/919687105624?text=હું+Sunscreen+gel+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "☀️" },
  { name: "Ubtan Facewash", slug: "ubtan-facewash", mrp: 399, discountedPrice: 359, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Ubtan+Facewash+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌾" },
  { name: "Vitamin C Facewash", slug: "vitamin-c-facewash", mrp: 225, discountedPrice: 200, discountPercent: 11, whatsappLink: "https://wa.me/919687105624?text=હું+Vitamin+C+Facewash+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🍊" },
  { name: "Vitamin C Serum", slug: "vitamin-c-serum", mrp: 345, discountedPrice: 310, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Vitamin+C+Serum+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🍋" },
  { name: "Whitening Facial Soap", slug: "whitening-facial-soap", mrp: 99, discountedPrice: 89, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+whitening+Facial+Drop+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "✨" },
  { name: "Hand Wash", slug: "hand-wash", mrp: 199, discountedPrice: 179, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Hand+Wash+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🤲" },
  { name: "Intimate Wash", slug: "intimate-wash", mrp: 299, discountedPrice: 278, discountPercent: 7, whatsappLink: "https://wa.me/919687105624?text=હું+Intimate+Wash+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌸" },
  { name: "Mix Fruits Lip Balm", slug: "mix-fruits-lip-balm", mrp: 149, discountedPrice: 141, discountPercent: 5, whatsappLink: "https://wa.me/919687105624?text=હું+Mix+Fruit+Lip+Balm+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🍓" },
  { name: "Noni Toothpaste (75 gm)", slug: "noni-toothpaste-75gm", mrp: 99, discountedPrice: 89, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Noni+Toothpaste+(75gm)+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🦷" },
  { name: "Noni Toothpaste (150 gm)", slug: "noni-toothpaste-150gm", mrp: 170, discountedPrice: 149, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Noni+toothpaste+(150gm)+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🦷" },
  { name: "Sanitary Pad (XL)", slug: "sanitary-pad-xl", mrp: 199, discountedPrice: 179, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Sanitary+Pad+(XL)+ઓર્ડર+કરવા+માગું+છું", category: "Personal Care", emoji: "🌺" },
  { name: "Sanitary Pad (XXL)", slug: "sanitary-pad-xxl", mrp: 199, discountedPrice: 179, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Sanitary+Pad+(XXL)+ઓર્ડર+કરવા+માંગુ+છું", category: "Personal Care", emoji: "🌺" },
  { name: "Deep Black Kajal", slug: "deep-black-kajal", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Deep+Black+kajal+ઓર્ડર+કરવા+માંગુ+છું", category: "Personal Care", emoji: "🖤" },
  { name: "Red Wine Facial Kit", slug: "red-wine-facial-kit", mrp: 1499, discountedPrice: 1349, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Red+Wine+Facial+Kit+ઓર્ડર+કરવા+માંગુ+છું", category: "Personal Care", emoji: "🍷" },
  { name: "Rice Facial Kit", slug: "rice-facial-kit", mrp: 1499, discountedPrice: 1349, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Rice+Facial+Kit+ઓર્ડર+કરવા+માંગુ+છું", category: "Personal Care", emoji: "🍚" },

  // Fragrances
  { name: "3 Fragrances", slug: "3-fragrances", mrp: 999, discountedPrice: 899, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+3+Fragrances+ઓર્ડર+કરવા+માંગુ+છું", category: "Fragrances", emoji: "🌸" },
  { name: "Arabia Oud Fragrance", slug: "arabia-oud-fragrance", mrp: 1399, discountedPrice: 1224, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Arabia+oud+Fragrance+ઓર્ડર+કરવા+માંગુ+છું", category: "Fragrances", emoji: "🕌" },
  { name: "Emperor Fragrance", slug: "emperor-fragrance", mrp: 1399, discountedPrice: 1224, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Emperor+Fragrance+ઓર્ડર+કરવા+માંગુ+છું", category: "Fragrances", emoji: "👑" },
  { name: "Victoria Fragrance", slug: "victoria-fragrance", mrp: 1399, discountedPrice: 1224, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Victoria+Fragrance+ઓર્ડર+કરવા+માંગુ+છું", category: "Fragrances", emoji: "🌹" },

  // Baby Care
  { name: "Daily Massage Oil", slug: "daily-massage-oil", mrp: 399, discountedPrice: 359, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Daily+Massage+oil+ઓર્ડર+કરવા+માંગુ+છું", category: "Baby Care", emoji: "👶" },
  { name: "Daily Moisturising Lotion", slug: "daily-moisturising-lotion", mrp: 399, discountedPrice: 349, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Daily+Moisturising+Lotion+ઓર્ડર+કરવા+માંગુ+છું", category: "Baby Care", emoji: "🍼" },
  { name: "Daily Tear Free Shampoo", slug: "daily-tear-free-shampoo", mrp: 399, discountedPrice: 353, discountPercent: 11, whatsappLink: "https://wa.me/919687105624?text=હું+Daily+Tear+Free+Shampoo+ઓર્ડર+કરવા+માંગુ+છું", category: "Baby Care", emoji: "🛁" },
  { name: "Diaper Rash Cream", slug: "diaper-rash-cream", mrp: 345, discountedPrice: 310, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Diaper+Rash+Cream+ઓર્ડર+કરવા+માંગુ+છું", category: "Baby Care", emoji: "👶" },
  { name: "Tip To Toe Milky Wash", slug: "tip-to-toe-milky-wash", mrp: 399, discountedPrice: 359, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Tip+To+Toe+Milky+Wash+ઓર્ડર+કરવા+માંગુ+છું", category: "Baby Care", emoji: "🌼" },

  // Ayurvedic Tablets
  { name: "Amla Tablet", slug: "amla-tablet", mrp: 280, discountedPrice: 252, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Amla+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌿" },
  { name: "Arjun Ghan Tablet", slug: "arjun-ghan-tablet", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Arjun+Ghan+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌱" },
  { name: "Arshoghni Vati Tablet", slug: "arshoghni-vati-tablet", mrp: 550, discountedPrice: 499, discountPercent: 9, whatsappLink: "https://wa.me/919687105624?text=હું+Arshoghni+Vati+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌿" },
  { name: "Ashwagandha Tablet", slug: "ashwagandha-tablet", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Ashwagandh+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "💪" },
  { name: "Chandraprabha Vati Tablet", slug: "chandraprabha-vati-tablet", mrp: 599, discountedPrice: 539, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Chandraprabha+vati+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌙" },
  { name: "Guduchi Ghan Tablet", slug: "guduchi-ghan-tablet", mrp: 250, discountedPrice: 225, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Guduchi+Ghan+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌿" },
  { name: "Kaishor Guggulu Tablet", slug: "kaishor-guggulu-tablet", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Kaishor+Gugglu+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🍃" },
  { name: "Kamdudha Ras Tablet", slug: "kamdudha-ras-tablet", mrp: 350, discountedPrice: 315, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Kamdudha+Ras+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌿" },
  { name: "Kanchnar Guggulu Tablet", slug: "kanchnar-guggulu-tablet", mrp: 550, discountedPrice: 495, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+kanchnar+Guggulu+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌺" },
  { name: "Livepat Tablet", slug: "livepat-tablet", mrp: 599, discountedPrice: 539, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+livepet+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "💚" },
  { name: "Neempanchang Ghan Tablet", slug: "neempanchang-ghan-tablet", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Neempanchag+Ghan+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌿" },
  { name: "Pathyadi Kwath Ghan Tablet", slug: "pathyadi-kwath-ghan-tablet", mrp: 320, discountedPrice: 249, discountPercent: 11, whatsappLink: "https://wa.me/919687105624?text=હું+Pathyadi+Kwat+Ghan+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌱" },
  { name: "Punarnavadi Guggulu Tablet", slug: "punarnavadi-guggulu-tablet", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Punarnavadi+Guggulu+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🍃" },
  { name: "Saptamrut Loh Tablet", slug: "saptamrut-loh-tablet", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Saptamrut+Loh+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌿" },
  { name: "She Well Tablet", slug: "she-well-tablet", mrp: 499, discountedPrice: 449, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+She+well+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌸" },
  { name: "Shivakshar Pachan Tablet", slug: "shivakshar-pachan-tablet", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Sivakshar+Pachan+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🔥" },
  { name: "Trifala Tablet", slug: "trifala-tablet", mrp: 270, discountedPrice: 243, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Trifla+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Ayurvedic", emoji: "🌿" },

  // Wellness & Supplements
  { name: "Ajwain Drops", slug: "ajwain-drops", mrp: 300, discountedPrice: 270, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Ajwain+Drop+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💧" },
  { name: "Alkomax Capsule", slug: "alkomax-capsule", mrp: 1999, discountedPrice: 1799, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Alkomax+Capsule+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💊" },
  { name: "Beautilook", slug: "beautilook", mrp: 3999, discountedPrice: 3599, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Beautilook+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "✨" },
  { name: "Berry Wellness Drink", slug: "berry-wellness-drink", mrp: 1500, discountedPrice: 1350, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Berry+Wellness+Drink+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🫐" },
  { name: "Biotin Gummy", slug: "biotin-gummy", mrp: 599, discountedPrice: 539, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Biotin+Gummy+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🍬" },
  { name: "Boswellia Capsule", slug: "boswellia-capsule", mrp: 999, discountedPrice: 899, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Boswellia+Capsule+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💊" },
  { name: "Calcium Tablet", slug: "calcium-tablet", mrp: 399, discountedPrice: 359, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Calcium+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🦴" },
  { name: "CMD Water Drop", slug: "cmd-water-drop", mrp: 699, discountedPrice: 629, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+CMD+Water+Drop+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💧" },
  { name: "Deep Sleep Gummy", slug: "deep-sleep-gummy", mrp: 599, discountedPrice: 539, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Deep++Sleep+Gummy+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "😴" },
  { name: "Detox Tablet", slug: "detox-tablet", mrp: 599, discountedPrice: 539, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Detox+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🌿" },
  { name: "Do Long Oil & Tablet", slug: "do-long-oil-tablet", mrp: 2000, discountedPrice: 1800, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Do++Long+Oil&Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💪" },
  { name: "Do Long Tablet", slug: "do-long-tablet", mrp: 1000, discountedPrice: 900, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Do+Long+tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💊" },
  { name: "Livo-Fit Wellness Drink", slug: "livo-fit-wellness-drink", mrp: 2299, discountedPrice: 2069, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Livo+Fit+Wellness+Drink+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🥤" },
  { name: "Multivitamin Gummy", slug: "multivitamin-gummy", mrp: 599, discountedPrice: 539, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Multivitamin+Gummy+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🍬" },
  { name: "Nano Curcumin Capsule", slug: "nano-curcumin-capsule", mrp: 799, discountedPrice: 719, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Nano+Curcumin+Capsule+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💛" },
  { name: "Noni Wellness Drink", slug: "noni-wellness-drink", mrp: 1200, discountedPrice: 996, discountPercent: 17, whatsappLink: "https://wa.me/919687105624?text=હું+Noni+Wellnss+drink+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🥤" },
  { name: "Ortho Oil", slug: "ortho-oil", mrp: 299, discountedPrice: 269, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Ortho+Oil+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🦴" },
  { name: "Ortho Tablet", slug: "ortho-tablet", mrp: 999, discountedPrice: 899, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Ortho+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💊" },
  { name: "Pilocare Wellness Drink", slug: "pilocare-wellness-drink", mrp: 2299, discountedPrice: 1999, discountPercent: 13, whatsappLink: "https://wa.me/919687105624?text=હું+Pilocare+Wellnes+Drink+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🥤" },
  { name: "Protein Powder (200 gm)", slug: "protein-powder-200gm", mrp: 550, discountedPrice: 495, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Protin+Powder+(200gm)+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💪" },
  { name: "Protein Powder (500 gm)", slug: "protein-powder-500gm", mrp: 999, discountedPrice: 899, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Protin+Powder(500gm)+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💪" },
  { name: "Red Aloevera Wellness Drink", slug: "red-aloevera-wellness-drink", mrp: 999, discountedPrice: 949, discountPercent: 5, whatsappLink: "https://wa.me/919687105624?text=હું+Red+Alovera+Wellness+Drinkઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🌵" },
  { name: "Rocket Energy Wellness Drink", slug: "rocket-energy-wellness-drink", mrp: 2299, discountedPrice: 1999, discountPercent: 13, whatsappLink: "https://wa.me/919687105624?text=હું+Rocket+Energy+Wellness+Drink+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🚀" },
  { name: "Sea Buckthorn Wellness Drink", slug: "sea-buckthorn-wellness-drink", mrp: 1999, discountedPrice: 1699, discountPercent: 15, whatsappLink: "https://wa.me/919687105624?text=હું+Sea+Buckthorn+wellness+Drink+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🌊" },
  { name: "Shewell Wellness Supplement", slug: "shewell-wellness-supplement", mrp: 2399, discountedPrice: 2099, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Shewell+wellness+Suppiment+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🌸" },
  { name: "Shilajit Gummy", slug: "shilajit-gummy", mrp: 699, discountedPrice: 629, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Shilajit+Gummy+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🍫" },
  { name: "Slim Tea", slug: "slim-tea", mrp: 750, discountedPrice: 675, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Slim+Tea+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🍵" },
  { name: "Spirulina Tablet", slug: "spirulina-tablet", mrp: 485, discountedPrice: 451, discountPercent: 7, whatsappLink: "https://wa.me/919687105624?text=હું+Spirulina+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🌊" },
  { name: "Stop Up-D", slug: "stop-up-d", mrp: 650, discountedPrice: 569, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Stop+Up-D+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🛑" },
  { name: "Thyrocare Wellness Drink", slug: "thyrocare-wellness-drink", mrp: 2350, discountedPrice: 1997, discountPercent: 15, whatsappLink: "https://wa.me/919687105624?text=હું+Thyrocare+Wellness+Drink+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🦋" },
  { name: "Tulsi Drop", slug: "tulsi-drop", mrp: 300, discountedPrice: 270, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Tulsi+Drop+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🌿" },
  { name: "Vitamin B12 Spray", slug: "vitamin-b12-spray", mrp: 750, discountedPrice: 599, discountPercent: 20, whatsappLink: "https://wa.me/919687105624?text=હું+Vitamin+B12+Spray+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "💊" },
  { name: "Vitamin D3 Spray", slug: "vitamin-d3-spray", mrp: 750, discountedPrice: 599, discountPercent: 20, whatsappLink: "https://wa.me/919687105624?text=હું+VitaminD3+Spray+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "☀️" },
  { name: "Garlic Tablet", slug: "garlic-tablet", mrp: 650, discountedPrice: 569, discountPercent: 12, whatsappLink: "https://wa.me/919687105624?text=હું+Garlic+Tablet+ઓર્ડર+કરવા+માંગુ+છું", category: "Wellness", emoji: "🧄" },

  // Health Devices
  { name: "Neodymium Knee Belt", slug: "neodymium-knee-belt", mrp: 1350, discountedPrice: 1215, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Neodymium+knee+Belt+ઓર્ડર+કરવા+માંગુ+છું", category: "Health Devices", emoji: "🦿" },
  { name: "Neodymium Waist Belt", slug: "neodymium-waist-belt", mrp: 2100, discountedPrice: 1785, discountPercent: 15, whatsappLink: "https://wa.me/919687105624?text=હું+Neodymium+Waist+Belt+ઓર્ડર+કરવા+માંગુ+છું", category: "Health Devices", emoji: "🦺" },
  { name: "No Problem ION Balance (Red)", slug: "no-problem-ion-balance-red", mrp: 7500, discountedPrice: 5999, discountPercent: 15, whatsappLink: "https://wa.me/919687105624?text=હું+No+Problem+ION+Bracelet+(RED)+ઓર્ડર+કરવા+માંગુ+છું", category: "Health Devices", emoji: "🔴" },
  { name: "No Problem ION Balance (White)", slug: "no-problem-ion-balance-white", mrp: 7500, discountedPrice: 5999, discountPercent: 15, whatsappLink: "https://wa.me/919687105624?text=હું+No+Problem+ION+Bracelet+(WHITE)+ઓર્ડર+કરવા+માંગુ+છું", category: "Health Devices", emoji: "⚪" },

  // Home Care
  { name: "Color Fixer", slug: "color-fixer", mrp: 250, discountedPrice: 225, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+Color+Fixer+ઓર્ડર+કરવા+માંગુ+છું", category: "Home Care", emoji: "🎨" },
  { name: "Dishwashing Liquid", slug: "dishwashing-liquid", mrp: 165, discountedPrice: 150, discountPercent: 9, whatsappLink: "https://wa.me/919687105624?text=હું+Dishwashing+Liquid+ઓર્ડર+કરવા+માંગુ+છું", category: "Home Care", emoji: "🍽️" },
  { name: "Floor Cleaner", slug: "floor-cleaner", mrp: 180, discountedPrice: 149, discountPercent: 17, whatsappLink: "https://wa.me/919687105624?text=હું+Floor+Cleaner+ઓર્ડર+કરવા+માંગુ+છું", category: "Home Care", emoji: "🧹" },
  { name: "Liquid Detergent", slug: "liquid-detergent", mrp: 499, discountedPrice: 449, discountPercent: 10, whatsappLink: "https://wa.me/919687105624?text=હું+LiquidDetergent+ઓર્ડર+કરવા+માંગુ+છું", category: "Home Care", emoji: "🧺" },
  { name: "Toilet Cleaner", slug: "toilet-cleaner", mrp: 165, discountedPrice: 152, discountPercent: 7, whatsappLink: "https://wa.me/919687105624?text=હું+Toilet+Cleaner+ઓર્ડર+કરવા+માંગુ+છું", category: "Home Care", emoji: "🚽" },

  // Food & Beverages
  { name: "Premium Tea", slug: "premium-tea", mrp: 180, discountedPrice: 169, discountPercent: 6, whatsappLink: "https://wa.me/919687105624?text=હું+Premium+Tea+ઓર્ડર+કરવા+માંગુ+છું", category: "Food & Beverages", emoji: "🍵" },
];

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  name: string;
  slug: string;
  mrp: number;
  discountedPrice: number;
  discountPercent: number;
  whatsappLink: string;
  category: string;
  emoji: string;
};

const products: Product[] = [
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

const categories = ["All", "Personal Care", "Fragrances", "Baby Care", "Ayurvedic", "Wellness", "Health Devices", "Home Care", "Food & Beverages"];

const categoryGradients: Record<string, string> = {
  "Personal Care": "from-rose-100 to-pink-200",
  "Fragrances": "from-violet-100 to-purple-200",
  "Baby Care": "from-sky-100 to-blue-200",
  "Ayurvedic": "from-emerald-100 to-green-200",
  "Wellness": "from-amber-100 to-orange-200",
  "Health Devices": "from-slate-100 to-gray-200",
  "Home Care": "from-cyan-100 to-teal-200",
  "Food & Beverages": "from-yellow-100 to-amber-200",
};

const categoryTextColors: Record<string, string> = {
  "Personal Care": "text-rose-600",
  "Fragrances": "text-violet-600",
  "Baby Care": "text-sky-600",
  "Ayurvedic": "text-emerald-600",
  "Wellness": "text-amber-600",
  "Health Devices": "text-slate-600",
  "Home Care": "text-cyan-600",
  "Food & Beverages": "text-yellow-600",
};

export default function ProductsPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                Premium <span className="text-orange-500">Ayurvedic</span> Collection
              </h1>
              <p className="text-sm text-gray-500 font-medium">Find the perfect natural remedy for your wellness</p>
            </div>
            
            <div className="relative group w-full md:w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-gray-50 transition-all pl-11"
              />
              <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {search && (
                <button 
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full text-gray-400"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-bold border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200 scale-105"
                    : "bg-white text-gray-500 border-gray-100 hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Count */}
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-1">
        <p className="text-sm text-gray-400">
          Showing <span className="font-semibold text-gray-600">{filtered.length}</span> products
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 text-lg">No products found.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((product) => (
              <div
                key={product.slug}
                onClick={() => window.open(product.whatsappLink, "_blank")}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Placeholder Image */}
                <div
                  className={`w-full aspect-square bg-gradient-to-br ${categoryGradients[product.category] ?? "from-gray-100 to-gray-200"} flex flex-col items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-5xl mb-1 group-hover:scale-110 transition-transform duration-300">{product.emoji}</span>
                  <span className={`text-[10px] uppercase tracking-wider font-bold ${categoryTextColors[product.category] ?? "text-gray-500"} opacity-60`}>
                    {product.category}
                  </span>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Card Body */}
                <div className="p-3 flex flex-col flex-grow">
                  {/* Discount Badge */}
                  <div>
                    <span className="inline-block bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2">
                      {product.discountPercent}% OFF
                    </span>

                    <h3 className="text-sm font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-orange-600 transition-colors mb-2">
                      {product.name}
                    </h3>
                  </div>

                  <div className="mt-auto pt-2">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-lg font-black text-gray-900">₹{product.discountedPrice}</span>
                      <span className="text-xs text-gray-400 line-through font-medium">₹{product.mrp}</span>
                    </div>

                    <button
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-extrabold py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.116 1.523 5.845L.057 23.998l6.305-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.011-1.372l-.36-.213-3.724.977.996-3.628-.235-.374A9.793 9.793 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                      </svg>
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
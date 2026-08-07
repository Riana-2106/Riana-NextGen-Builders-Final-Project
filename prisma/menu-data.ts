export type MealType = "SARAPAN" | "MAKAN_SIANG" | "MAKAN_MALAM" | "SNACK";

export type Dish = {
  name: string;
  description: string;
  category: string;
  calories: number;
};

// Dish pools per meal type. Kept large enough (20-25 each) so a 90-day
// rotation can guarantee no immediate repeats and long gaps between repeats.
export const SARAPAN: Dish[] = [
  { name: "Oatmeal Pisang & Chia Seed", description: "Oatmeal gandum utuh dimasak susu almond, topping pisang, chia seed, dan madu.", category: "Tinggi Serat", calories: 320 },
  { name: "Telur Orak-Arik Bayam & Roti Gandum", description: "Telur orak-arik dengan bayam segar, disajikan dengan 2 lembar roti gandum panggang.", category: "Tinggi Protein", calories: 350 },
  { name: "Smoothie Bowl Mangga & Granola", description: "Smoothie mangga-yogurt tanpa gula tambahan, ditabur granola panggang dan kelapa parut.", category: "Vegetarian", calories: 310 },
  { name: "Bubur Kacang Hijau Rendah Gula", description: "Bubur kacang hijau dimasak santan rendah lemak, pemanis alami dari kurma.", category: "Rendah Lemak", calories: 300 },
  { name: "Overnight Oats Stroberi", description: "Oat rendam susu rendah lemak semalaman, dicampur stroberi segar dan kacang almond cincang.", category: "Tinggi Serat", calories: 330 },
  { name: "Omelet Sayur 3 Warna", description: "Omelet putih telur dengan paprika, wortel, dan brokoli cincang.", category: "Tinggi Protein", calories: 280 },
  { name: "Nasi Merah Lauk Tempe Orek", description: "Nasi merah porsi kecil dengan tempe orek rendah minyak dan lalapan timun.", category: "Rendah Kalori", calories: 340 },
  { name: "Roti Gandum Alpukat & Telur Rebus", description: "Roti gandum panggang dengan olesan alpukat, telur rebus, dan taburan biji wijen.", category: "Lemak Sehat", calories: 360 },
  { name: "Pancake Oat Pisang Tanpa Gula", description: "Pancake dari oat dan pisang, tanpa tepung terigu dan tanpa gula tambahan.", category: "Rendah Gula", calories: 310 },
  { name: "Salad Buah Yogurt Yunani", description: "Potongan buah musiman dengan yogurt Yunani plain dan taburan kacang almond.", category: "Vegetarian", calories: 260 },
  { name: "Bubur Ayam Sehat Kuah Bening", description: "Bubur beras merah dengan suwiran ayam tanpa kulit dan kuah kaldu bening rendah garam.", category: "Tinggi Protein", calories: 340 },
  { name: "Chia Pudding Cokelat Pisang", description: "Puding chia seed dengan susu almond, kakao murni, dan potongan pisang.", category: "Tinggi Serat", calories: 290 },
  { name: "Sandwich Telur Gandum", description: "Roti gandum isi telur rebus tumbuk, selada, dan tomat.", category: "Tinggi Protein", calories: 320 },
  { name: "Ubi Kukus & Telur Rebus", description: "Ubi jalar kukus dengan dua butir telur rebus dan sedikit garam himalaya.", category: "Rendah Kalori", calories: 300 },
  { name: "Smoothie Hijau Bayam Nanas", description: "Smoothie bayam, nanas, dan yogurt plain tanpa gula tambahan.", category: "Detoks", calories: 250 },
  { name: "Tahu Kukus Saus Kecap Rendah Sodium", description: "Tahu kukus dengan saus kecap rendah sodium dan taburan daun bawang.", category: "Vegetarian", calories: 270 },
  { name: "Granola Homemade & Susu Rendah Lemak", description: "Granola panggang oat dan kacang-kacangan disajikan dengan susu rendah lemak.", category: "Tinggi Serat", calories: 330 },
  { name: "Onigiri Nasi Merah Isi Tuna", description: "Onigiri nasi merah isi tuna suwir rendah minyak dan nori.", category: "Tinggi Protein", calories: 350 },
  { name: "Puding Roti Gandum Rendah Gula", description: "Puding roti gandum dipanggang dengan susu rendah lemak dan kayu manis.", category: "Rendah Gula", calories: 300 },
  { name: "Salad Telur Alpukat", description: "Telur rebus cincang dicampur alpukat lumat dan perasan lemon.", category: "Lemak Sehat", calories: 310 },
];

export const MAKAN_SIANG: Dish[] = [
  { name: "Ayam Panggang Madu & Nasi Merah", description: "Dada ayam panggang bumbu madu rendah gula, nasi merah, dan tumis buncis.", category: "Tinggi Protein", calories: 480 },
  { name: "Ikan Kakap Bakar & Sayur Kukus", description: "Ikan kakap bakar bumbu kunyit, disajikan dengan sayur kukus campur.", category: "Rendah Lemak", calories: 460 },
  { name: "Tumis Tahu Tempe Sayuran", description: "Tahu dan tempe tumis dengan brokoli, wortel, dan jagung muda, nasi merah.", category: "Vegetarian", calories: 470 },
  { name: "Salad Ayam Panggang Quinoa", description: "Quinoa, ayam panggang suwir, selada, tomat ceri, dan dressing lemon zaitun.", category: "Tinggi Protein", calories: 500 },
  { name: "Gado-Gado Saus Kacang Rendah Minyak", description: "Sayuran rebus dengan saus kacang rendah minyak dan lontong nasi merah.", category: "Vegetarian", calories: 490 },
  { name: "Sup Ikan Salmon Sayuran", description: "Sup bening salmon dengan wortel, kentang, dan seledri.", category: "Omega-3", calories: 450 },
  { name: "Nasi Merah Rendang Ayam Rendah Santan", description: "Ayam bumbu rendang dengan santan diperas ringan, nasi merah, dan lalapan.", category: "Tinggi Protein", calories: 520 },
  { name: "Capcay Seafood Kuah Bening", description: "Tumis campur sayuran dan seafood dengan kuah bening rendah garam.", category: "Rendah Kalori", calories: 430 },
  { name: "Pecel Sayur Lengkap", description: "Sayuran rebus dengan sambal pecel rendah gula, tempe bacem panggang.", category: "Vegetarian", calories: 460 },
  { name: "Ayam Bakar Bumbu Bali & Nasi Merah", description: "Ayam bakar bumbu bali rendah minyak, nasi merah, dan tumis kangkung.", category: "Tinggi Protein", calories: 500 },
  { name: "Salmon Panggang Saus Lemon", description: "Salmon panggang saus lemon-herbs dengan kentang rebus dan asparagus.", category: "Omega-3", calories: 510 },
  { name: "Soto Ayam Bening Rendah Lemak", description: "Soto ayam kuah bening tanpa santan dengan tauge dan soun.", category: "Rendah Lemak", calories: 420 },
  { name: "Tumis Udang Brokoli", description: "Udang tumis bawang putih dengan brokoli dan paprika, nasi merah.", category: "Tinggi Protein", calories: 460 },
  { name: "Nasi Merah Ikan Tuna Sambal Matah", description: "Ikan tuna panggang dengan sambal matah rendah minyak dan nasi merah.", category: "Rendah Kalori", calories: 470 },
  { name: "Sayur Asem Tempe Bakar", description: "Sayur asem segar dengan tempe bakar dan sedikit nasi merah.", category: "Vegetarian", calories: 440 },
  { name: "Ayam Kukus Jahe & Nasi Merah", description: "Ayam kukus bumbu jahe dan bawang putih, nasi merah, dan tumis sawi.", category: "Rendah Lemak", calories: 450 },
  { name: "Salad Tuna Kacang Merah", description: "Tuna kalengan air, kacang merah, selada, dan dressing yogurt.", category: "Tinggi Protein", calories: 480 },
  { name: "Ikan Nila Bakar Kemangi", description: "Ikan nila bakar dengan daun kemangi dan sambal tomat segar.", category: "Rendah Lemak", calories: 440 },
  { name: "Tempe Tahu Bacem & Sayur Bening", description: "Tempe tahu bacem gula aren minimal, sayur bening bayam jagung.", category: "Vegetarian", calories: 430 },
  { name: "Nasi Merah Cumi Saus Padang Ringan", description: "Cumi saus padang rendah minyak, nasi merah, dan lalapan kol.", category: "Tinggi Protein", calories: 490 },
  { name: "Ayam Teriyaki Homemade & Brokoli", description: "Ayam teriyaki saus rendah gula, brokoli kukus, dan nasi merah.", category: "Tinggi Protein", calories: 500 },
  { name: "Sup Jagung Ayam Suwir", description: "Sup jagung manis dengan suwiran ayam dan seledri.", category: "Rendah Kalori", calories: 410 },
  { name: "Bakwan Jagung Panggang & Salad", description: "Bakwan jagung dipanggang (bukan digoreng) dengan salad sayur segar.", category: "Vegetarian", calories: 420 },
  { name: "Ikan Dori Panggang Saus Mangga", description: "Ikan dori panggang dengan saus mangga segar dan nasi merah.", category: "Rendah Lemak", calories: 460 },
  { name: "Nasi Merah Ayam Suwir Bumbu Bacem", description: "Ayam suwir bumbu bacem rendah gula, nasi merah, dan tumis toge.", category: "Tinggi Protein", calories: 480 },
];

export const MAKAN_MALAM: Dish[] = [
  { name: "Sup Sayur Bening Ayam Suwir", description: "Sup bening dengan wortel, kentang kecil, dan ayam suwir tanpa kulit.", category: "Rendah Kalori", calories: 380 },
  { name: "Tumis Tahu Brokoli Wijen", description: "Tahu dan brokoli tumis minyak zaitun dengan taburan wijen.", category: "Vegetarian", calories: 360 },
  { name: "Ikan Kembung Bakar & Lalapan", description: "Ikan kembung bakar bumbu kunyit dengan lalapan dan sambal segar.", category: "Rendah Lemak", calories: 400 },
  { name: "Salad Sayur Panggang Feta Rendah Lemak", description: "Sayuran panggang (zucchini, paprika, terong) dengan feta rendah lemak.", category: "Vegetarian", calories: 350 },
  { name: "Dada Ayam Panggang Herbs & Sayur Kukus", description: "Dada ayam panggang bumbu herbs Italia dengan sayur kukus campur.", category: "Tinggi Protein", calories: 410 },
  { name: "Sup Tofu Jamur", description: "Sup tofu lembut dengan jamur kancing dan sawi hijau.", category: "Rendah Kalori", calories: 320 },
  { name: "Telur Dadar Sayur & Sup Bayam", description: "Telur dadar sayur tipis disajikan dengan sup bayam jagung.", category: "Tinggi Protein", calories: 370 },
  { name: "Tumis Udang Kacang Panjang", description: "Udang tumis bawang putih dengan kacang panjang dan tomat.", category: "Tinggi Protein", calories: 390 },
  { name: "Sayur Lodeh Rendah Santan Tempe", description: "Sayur lodeh dengan santan diperas ringan dan tempe rebus.", category: "Vegetarian", calories: 400 },
  { name: "Ikan Bandeng Presto Bumbu Kuning", description: "Ikan bandeng presto rendah duri, bumbu kuning, dengan sayur kukus.", category: "Rendah Lemak", calories: 410 },
  { name: "Capcay Kuah Rendah Garam", description: "Sayuran campur kuah bening rendah garam dengan sedikit ayam suwir.", category: "Rendah Kalori", calories: 340 },
  { name: "Terong Panggang Saus Tomat Basil", description: "Terong panggang dengan saus tomat basil dan sedikit keju rendah lemak.", category: "Vegetarian", calories: 330 },
  { name: "Sup Ikan Kakap Tomat", description: "Sup ikan kakap dengan tomat, daun bawang, dan jahe.", category: "Rendah Lemak", calories: 380 },
  { name: "Ayam Kukus Serai & Sayur Rebus", description: "Ayam kukus bumbu serai dan jahe dengan sayur rebus campur.", category: "Tinggi Protein", calories: 390 },
  { name: "Salad Kacang-Kacangan Hangat", description: "Kacang merah, buncis, dan edamame hangat dengan dressing lemon.", category: "Tinggi Serat", calories: 360 },
  { name: "Pepes Tahu Jamur", description: "Pepes tahu dan jamur bumbu rempah dikukus daun pisang.", category: "Vegetarian", calories: 340 },
  { name: "Sup Miso Tofu & Sayuran", description: "Sup miso rendah sodium dengan tofu, rumput laut, dan daun bawang.", category: "Rendah Kalori", calories: 300 },
  { name: "Ikan Tuna Panggang Saus Salsa", description: "Tuna panggang dengan saus salsa tomat segar dan sayur kukus.", category: "Tinggi Protein", calories: 400 },
  { name: "Tumis Kangkung Tempe Rendah Minyak", description: "Kangkung dan tempe tumis minyak zaitun sedikit dengan bawang putih.", category: "Vegetarian", calories: 330 },
  { name: "Sup Ayam Jagung Muda", description: "Sup ayam bening dengan jagung muda dan wortel.", category: "Rendah Kalori", calories: 350 },
  { name: "Ikan Dori Kukus Saus Jeruk Nipis", description: "Ikan dori kukus dengan saus jeruk nipis dan daun ketumbar.", category: "Rendah Lemak", calories: 370 },
  { name: "Sayur Bening Bayam Tahu", description: "Sayur bening bayam dan tahu dengan sedikit jagung manis.", category: "Vegetarian", calories: 310 },
  { name: "Telur Kukus Saus Tomat", description: "Telur kukus lembut dengan saus tomat rempah ringan.", category: "Tinggi Protein", calories: 350 },
  { name: "Sup Kembang Kol Kari Ringan", description: "Sup kembang kol dengan bumbu kari ringan rendah santan.", category: "Vegetarian", calories: 320 },
  { name: "Ayam Panggang Saus Lemon Herbs", description: "Ayam panggang saus lemon dan herbs dengan sayur panggang.", category: "Tinggi Protein", calories: 400 },
];

export const SNACK: Dish[] = [
  { name: "Buah Potong Segar (Musiman)", description: "Campuran buah segar musiman potong dadu.", category: "Rendah Kalori", calories: 120 },
  { name: "Segenggam Kacang Almond Panggang", description: "Kacang almond panggang tanpa garam berlebih.", category: "Lemak Sehat", calories: 160 },
  { name: "Yogurt Plain & Madu", description: "Yogurt plain rendah lemak dengan sedikit madu murni.", category: "Tinggi Protein", calories: 140 },
  { name: "Edamame Rebus Garam Laut", description: "Edamame rebus ditaburi sedikit garam laut.", category: "Tinggi Protein", calories: 130 },
  { name: "Smoothie Alpukat Ringan", description: "Smoothie alpukat dengan susu rendah lemak tanpa gula tambahan.", category: "Lemak Sehat", calories: 170 },
  { name: "Ubi Rebus", description: "Ubi jalar rebus tanpa tambahan gula.", category: "Tinggi Serat", calories: 150 },
  { name: "Puding Chia Seed Mini", description: "Puding chia seed porsi kecil dengan susu almond.", category: "Tinggi Serat", calories: 140 },
  { name: "Kacang Edamame & Wortel Stik", description: "Edamame rebus dengan stik wortel segar.", category: "Rendah Kalori", calories: 110 },
  { name: "Apel Slice & Selai Kacang Alami", description: "Irisan apel dengan olesan tipis selai kacang alami tanpa gula.", category: "Lemak Sehat", calories: 180 },
  { name: "Rice Cake & Alpukat Tumbuk", description: "Rice cake gandum dengan olesan alpukat tumbuk.", category: "Rendah Kalori", calories: 150 },
  { name: "Susu Kedelai Tanpa Gula", description: "Segelas susu kedelai tanpa tambahan gula.", category: "Vegetarian", calories: 100 },
  { name: "Popcorn Panggang Tanpa Minyak", description: "Popcorn dipanggang tanpa minyak dan garam berlebih.", category: "Rendah Kalori", calories: 110 },
  { name: "Salad Buah Yogurt Mini", description: "Potongan buah kecil dengan sesendok yogurt plain.", category: "Rendah Kalori", calories: 130 },
  { name: "Telur Rebus Tunggal", description: "Satu butir telur rebus dengan sedikit garam himalaya.", category: "Tinggi Protein", calories: 90 },
  { name: "Smoothie Buah Naga", description: "Smoothie buah naga dengan air kelapa tanpa gula tambahan.", category: "Detoks", calories: 140 },
  { name: "Kacang Edamame Pedas Manis Ringan", description: "Edamame rebus bumbu pedas manis rendah gula.", category: "Tinggi Protein", calories: 130 },
  { name: "Overnight Oats Mini Cokelat", description: "Oat rendam susu rendah lemak dengan sedikit kakao murni.", category: "Tinggi Serat", calories: 160 },
  { name: "Jus Wortel Apel Segar", description: "Jus wortel dan apel segar tanpa gula tambahan.", category: "Detoks", calories: 120 },
  { name: "Keju Cottage & Buah Beri", description: "Keju cottage rendah lemak dengan buah beri segar.", category: "Tinggi Protein", calories: 150 },
  { name: "Granola Bar Homemade", description: "Granola bar buatan sendiri dari oat dan madu, tanpa pengawet.", category: "Tinggi Serat", calories: 170 },
];

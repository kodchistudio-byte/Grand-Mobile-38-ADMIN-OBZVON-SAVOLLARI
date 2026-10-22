const CATS={"E": "Ko‘p uchraydigan (★)", "U": "Umumiy qoidalar", "M": "Muloqot va chatlar", "A": "Ma’muriyat bilan munosabat", "H": "Akkaunt va iqtisod", "R": "RP jarayoni", "S": "Shikoyat tartibi", "G": "Yashil zona", "T": "RP atamalari", "O": "FW · OPG · BizWar · Furgon"};
const D=[
{
"c": "E",
"q": "VIP bo‘lmasa kiyimni qayerdan almashtiriladi?",
"a": "Kvartira, Dom yoki Kiyim do‘konida."
},
{
"c": "E",
"q": "Kop va arkon nima maqsadda ishlatiladi?",
"a": "Odamni qo‘lga olish/garovga olishda: kop boshiga kiydiriladi, arkon bilan qo‘l bog‘lanadi."
},
{
"c": "E",
"q": "Nitkani qayerdan olish mumkin?",
"a": "Grand Marketdan sotib olinadi yoki kiyim/aksessuarni kraft qilib olinadi."
},
{
"c": "E",
"q": "Shikoyat insidentdan necha soatgacha qabul qilinadi? (S 1.2.6)",
"a": "48 soatgacha. Undan oshsa rad etiladi. Istisno: jiddiy va qo‘pol qoidabuzarlikda rahbariyat/kurator qarori bilan muddat uzaytirilishi mumkin."
},
{
"c": "E",
"q": "RK nima va jazosi qanday?",
"a": "O‘ch olish maqsadida o‘ldirish yoki 20 daqiqa ichida o‘lgan joyga qaytish. Jazo: DEMORGAN 30 daqiqagacha. Twink bilan qaytish ham taqiqlangan."
},
{
"c": "E",
"q": "Report xizmatidan maqsadsiz foydalanish (3.1) nima va jazosi?",
"a": "Offtop, flood, valyuta/lvl/mulk/teleport so‘rash. Jazo: og‘zaki ogohlantirish yoki MUTE REPORT 30 daqiqagacha."
},
{
"c": "E",
"q": "Haqorat jazolari (2.1)?",
"a": "O‘yinchini haqorat: MUTE 15–30 daq. Yaqinlarini salbiy eslash: MUTE 90–180 daq. Yaqinlarini haqorat: 3–10 kun ban."
},
{
"c": "E",
"q": "Sovg‘a limiti va jazosi (4.5)?",
"a": "Sutkasiga 30 000 000 rubldan oshmasligi kerak. Jazo: og‘zaki ogohlantirish + otkat. Qo‘pol holatda 31 kungacha ban + sovg‘a obnulit."
},
{
"c": "E",
"q": "Avtomobil raqamidagi haqoratga jazo (5.7)?",
"a": "31 kungacha ban. Raqam to‘g‘rilansa, ban muddatidan oldin yechilishi mumkin."
},
{
"c": "E",
"q": "Biznesni arzon o‘tkazish (4.3.1) nima?",
"a": "Sotib olish narxidan 50% dan kam narxda boshqa akkauntga o‘tkazish yoki biznesni boshqalar hisobidan saqlash. Hamma ishtirokchilarga 31 kungacha ban."
},
{
"c": "E",
"q": "Yashil zonada o‘ldirish/zarar yetkazish (1.1)?",
"a": "Sabab yoki RP bo‘lishidan qat’i nazar taqiqlangan. Jazo: DEMORGAN 60 daq + WARN."
},
{
"c": "U",
"q": "Qoidalarni bilmaslik jazoni bekor qiladimi? (1.1)",
"a": "Yo‘q. Akkaunt ochgan har kim qoidalarni so‘zsiz qabul qiladi va o‘zgarishlarni kuzatishi shart."
},
{
"c": "U",
"q": "Ma’muriyat vakili qilib ko‘rsatishga jazo? (1.2)",
"a": "3–7 kun ban. Qo‘pol holatda 31 kundan butunlay ban."
},
{
"c": "U",
"q": "Qoidalardagi bo‘shliqdan foydalanish (1.3)?",
"a": "Taqiqlangan. Jazo: 3–31 kun ban (fair play prinsipi)."
},
{
"c": "U",
"q": "Yo‘qotilgan yoki aldov bilan berib yuborilgan mulk tiklanadimi? (1.4)",
"a": "Yo‘q. Akkaunt va mulk xavfsizligi uchun o‘yinchining o‘zi javobgar."
},
{
"c": "U",
"q": "Taqiqlangan nikneymga jazo? (1.6)",
"a": "Og‘zaki ogohlantirish; qo‘pol holatda 31 kungacha ban."
},
{
"c": "U",
"q": "O‘chirilgan akkaunt tiklanadimi? (1.7)",
"a": "Yo‘q, hatto xato yoki vzlom bo‘lsa ham."
},
{
"c": "U",
"q": "Jazo qachon bir necha barobar oshadi? (1.8)",
"a": "Takroriy, qasddan va og‘irlashtiruvchi holatlarda: tizimli buzish, mexanika suiiste’moli, ogohlantirishni mensimaslik."
},
{
"c": "U",
"q": "Rahbariyat qoidaga qat’iy bog‘langanmi? (1.5)",
"a": "Yo‘q, vaziyatdan kelib chiqib jazo tayinlashi mumkin. Yakuniy qaror — kurator yoki yuqori rahbariyat."
},
{
"c": "M",
"q": "Taqiqlangan mavzularni targ‘ib qilishga jazo? (2.2)",
"a": "3–14 kun ban; qo‘pol holatda 31 kundan butunlay. Mavzular: giyohvandlik, pornografiya, ekstremizm, suitsid va h.k."
},
{
"c": "M",
"q": "Reklamaga jazo? (2.3)",
"a": "MUTE 60–120 daq; qo‘pol holatda 31 kundan butunlay ban."
},
{
"c": "M",
"q": "Irqchilik, din haqorati, real siyosat muhokamasi jazosi? (2.4)",
"a": "MUTE 60–180 daq yoki 1–31 kun ban."
},
{
"c": "M",
"q": "Mikrofondagi xalaqit jazosi? (2.5)",
"a": "MUTE 20 daqiqagacha; qo‘pol holatda MUTE 30–60 daq."
},
{
"c": "M",
"q": "Doxing va real ma’lumot bilan tahdid jazosi? (2.6)",
"a": "7 kundan butunlay ban."
},
{
"c": "A",
"q": "Ma’muriyatga qo‘pollik jazosi? (3.2)",
"a": "MUTE 30–60 daq; qo‘pol holatda 3–31 kun ban."
},
{
"c": "A",
"q": "Administrator ustidan shikoyat necha kun ichida? (3.4)",
"a": "Jazo berilgan vaqtdan 2 kun ichida, maxsus bo‘lim orqali. Ommaviy muhokama taqiqlangan (MUTE 60 daq)."
},
{
"c": "A",
"q": "Ma’muriyat ichki ma’lumotini tarqatish jazosi? (3.5)",
"a": "7–31 kun ban."
},
{
"c": "A",
"q": "Server ma’muriyati ishiga xalaqit berish jazosi? (3.3)",
"a": "Og‘zaki ogohlantirish; qo‘pol holatda DEMORGAN 60 daqiqagacha."
},
{
"c": "H",
"q": "Akkaunt/personaj sotish va maxinatsiya jazosi? (4.1)",
"a": "3–7 kun ban; qo‘pol holatda 31 kundan butunlay. Bozor narxidan 50% dan ortiq farq — maxinatsiya."
},
{
"c": "H",
"q": "RMT nima va jazosi? (4.4)",
"a": "O‘yin mulki/valyutasini real pulga oldi-sotdi. Jazo: 31 kungacha ban + obnulit; qo‘pol holatda butunlay ban."
},
{
"c": "H",
"q": "Nechta biznesga egalik qilish mumkin? (4.3)",
"a": "Har serverda faqat bitta, personajlar soniga qaramay. Jazo: og‘zaki ogohlantirish; qo‘pol holatda 31 kungacha ban."
},
{
"c": "H",
"q": "Multi-akkauntlar o‘rtasida o‘tkazma jazosi? (4.6)",
"a": "Og‘zaki ogohlantirish + mulk qaytarish; qo‘pol holatda hammaga 31 kungacha ban + obnulit."
},
{
"c": "H",
"q": "Serverlararo o‘tkazma jazosi? (4.7)",
"a": "Barcha ishtirokchilarga 31 kungacha ban + mulk obnulit."
},
{
"c": "H",
"q": "Alt akkaunt orqali jazodan qochish? (4.8)",
"a": "Jazo asosiy personajga ham dublikat qilinadi; qo‘pol holatda 31 kundan butunlay ban."
},
{
"c": "H",
"q": "Fraksiya/oilalararo konflikt qayerda bo‘lishi kerak? (4.2)",
"a": "Faqat RP doirasida. Undirish va ultimatum uchun 7–31 kun ban. Shikoyat ko‘p bo‘lsa, oila tarqatilishi mumkin."
},
{
"c": "R",
"q": "Faqat o‘z foydasiga o‘ynash (5.1.1) nima?",
"a": "O‘z harakatini muvaffaqiyatsizlik yoki salbiy oqibatsiz tasvirlash. Jazo: DEMORGAN 20 daqiqagacha."
},
{
"c": "R",
"q": "Chit, avtokliker, bagoyuz jazolari? (5.2)",
"a": "Bagoyuz: WARN/3 kungacha ban. Avtokliker, skript: 3–7 kun. Tarqatish: 7–31 kun. Tugma hajmi modi: 7 kungacha ban."
},
{
"c": "R",
"q": "RPdan qochish jazosi? (5.3)",
"a": "DEMORGAN 60 daqiqagacha. Krash bo‘lsa, dalil (fiksatsiya) shart."
},
{
"c": "R",
"q": "Uy hududi deganda nima tushuniladi? (5.4)",
"a": "Bino devoridan eng yaqin bordyur yoki yo‘l chetigacha bo‘lgan masofa. SK jazosi: DEMORGAN 120 daqiqagacha."
},
{
"c": "R",
"q": "Provokatsiya nima? (5.4.1)",
"a": "Uy hududidagilarga qaratilgan agressiv harakat: qurol ushlash, o‘t ochish, tahdid, tark etish talabini mensimaslik. Konfliktdan qochib o‘z uyiga kirish ham taqiqlangan."
},
{
"c": "R",
"q": "Yashovchi qachon kuch ishlatishi mumkin? (5.4.2)",
"a": "Chaqirilmagan mehmonga ketish aytilib, u rad etsa yoki provokatsiyani davom ettirsa. Qolgan o‘yinchi javob o‘t ochishga haqli emas."
},
{
"c": "R",
"q": "Strimsnayp jazosi? (5.5)",
"a": "DEMORGAN 60 daqiqagacha; qo‘pol holatda 3 kungacha ban."
},
{
"c": "R",
"q": "Oila nomiga qo‘yiladigan cheklov va jazo? (5.8)",
"a": "Uyatsiz, haqoratli yoki plagiat nom taqiqlangan. Jazo: 31 kungacha ban; nom o‘zgarsa muddatidan oldin yechiladi."
},
{
"c": "R",
"q": "Tizimli tadbirga xalaqit berish jazosi? (5.9)",
"a": "WARN."
},
{
"c": "S",
"q": "Skrinshot va video uchun ruxsat etilgan platformalar? (1.2.1)",
"a": "Skrinshot: launcher, imgur, yapx.ru, Yandex Disk, Google Disk. Video: youtube, imgur, rutube, Yandex Disk, Google Disk."
},
{
"c": "S",
"q": "Shikoyatda nechta o‘yinchi bo‘lishi mumkin? (1.3.2)",
"a": "Faqat bitta. Har bir qoidabuzarga alohida shikoyat."
},
{
"c": "S",
"q": "Shikoyat qaysi hollarda rad etiladi?",
"a": "Dalil yo‘q yoki kesilgan, tavsif noaniq, haqorat/toksik matn, dublikat yoki spam, begona akkaunt, 48 soatdan o‘tgan, videoda interfeys/ovoz tushunarsiz."
},
{
"c": "S",
"q": "Shikoyatni boshqa akkauntdan berish mumkinmi? (1.2.4)",
"a": "Yo‘q. Istisno: akkauntdagi uchta faol personajning istalgan biridan mumkin."
},
{
"c": "S",
"q": "Uchinchi shaxs shikoyat bera oladimi? (1.2.8)",
"a": "Faqat passiv guvoh bo‘lsa, o‘zi provokatsiya qilmagan va dalili yetarli bo‘lsa."
},
{
"c": "S",
"q": "Shikoyat necha soatda ko‘rib chiqiladi? (1.4)",
"a": "48 soat; murakkab holatda 72 soatgacha. Javob bo‘lmasa — kurator nomiga takroriy shikoyat."
},
{
"c": "S",
"q": "Majburiy talablar nimalar? (1.3.1)",
"a": "Jazo skrinshoti, voqea tavsifi, to‘liq dalil va qoidabuzarning to‘g‘ri NickName’i."
},
{
"c": "S",
"q": "Verdikt bilan kelishmasangiz kimdan shikoyat qilinadi? (1.3.2)",
"a": "Verdikt chiqargan administrator ustidan; keyin bosqichma-bosqich loyiha kuratorigacha."
},
{
"c": "S",
"q": "Ma’muriyat ichki dalillari o‘yinchiga beriladimi? (1.5.2)",
"a": "Yo‘q, faqat katta ma’muriyat, kurator yoki rahbariyat so‘rovi bilan tekshiriladi."
},
{
"c": "S",
"q": "Shikoyat qayerda berilmaydi? (1.1.2)",
"a": "Muloqot, savol-javob, texnik muammo, taklif uchun emas: Discord va support.grnd.gg ishlatiladi."
},
{
"c": "G",
"q": "Kuch tuzilmalari yashil zonada qachon o‘t ocha oladi? (1.1)",
"a": "Faqat ularga safda yoki xizmat vaqtida hujum qilinsa, javob tariqasida. Birinchi bo‘lib boshlash taqiqlangan."
},
{
"c": "G",
"q": "Yashil zonada jinoiy harakatlarga jazo? (1.2)",
"a": "WARN; ko‘p marta bo‘lsa 3 kungacha ban. Odam o‘g‘irlash, talonchilik, arqon/qop ishlatish kiradi."
},
{
"c": "G",
"q": "Yashil zonadan RPdan qochish uchun foydalanish? (1.3, 1.4)",
"a": "Taqiqlangan, WARN. RP asboblari bilan majburlab olib chiqish ham WARN."
},
{
"c": "G",
"q": "Otishma paytida yashil zonaga kirish (1.5)?",
"a": "Taqiqlangan, DEMORGAN 30 daq. Tasodifan kirgan bo‘lsa, video fiksatsiya shart. Zona tashqarisidan ichkaridagiga zarar ham qoidabuzarlik."
},
{
"c": "G",
"q": "Yashil zonaga nimalar kiradi?",
"a": "Obyektning o‘zi va tutash maydonlar (turargoh, bortdyur), shuningdek kasalxona, bank, avtosalon, kazino, AZS, doʻkon, vokzal, ish joylari, barcha interyerlar (OPG interyeridan tashqari)."
},
{
"c": "T",
"q": "MG nima?",
"a": "IC ichida OOC ma’lumotdan foydalanish. Jazo: MUTE 15 daqiqagacha."
},
{
"c": "T",
"q": "NonRP, PG, DB, RK jazolari?",
"a": "Hammasi DEMORGAN 30 daqiqagacha. PG — o‘zini superqahramon qilib ko‘rsatish (3+ kishiga qarshi yolg‘iz, qurolliga musht bilan)."
},
{
"c": "T",
"q": "DM va Mass DM jazolari?",
"a": "DM: DEMORGAN 30–60 daq. Mass DM: WARN."
},
{
"c": "T",
"q": "Mass DM GZ jazosi?",
"a": "DEMORGAN 90 daqiqagacha + WARN; takrorlansa 3 kungacha ban."
},
{
"c": "T",
"q": "SK va Mass SK jazolari?",
"a": "SK: DEMORGAN 60–120 daq. Mass SK: WARN; takrorlansa 3 kungacha ban."
},
{
"c": "T",
"q": "TK nima va jazosi?",
"a": "Bir tashkilot/oiladagi o‘yinchini o‘ldirish. DEMORGAN 30 daq; tashkilotda bo‘lsa WARN."
},
{
"c": "T",
"q": "DriveBy nima?",
"a": "Transport rulidan turib o‘ldirish yoki jiddiy IC sababsiz boshqa transportni ataylab urish (taran)."
},
{
"c": "T",
"q": "IC va OOC farqi?",
"a": "IC — personaj nomidan, RP ichidagi ma’lumot. OOC — o‘yinchi shaxsiyatidan, RPga daxli yo‘q ma’lumot."
},
{
"c": "O",
"q": "Family War: minimal daraja va qurollar?",
"a": "5-darajadan past qatnasha olmaydi (SPAWN). Do‘kon qurollari ruxsat, bronijilet taqiqlangan (SPAWN)."
},
{
"c": "O",
"q": "Family War: AFK va o‘limdan qochish?",
"a": "AFK 30 soniyadan oshsa KICK. O‘limdan qochish (chiqish, AFK, taqiqlangan zonaga qochish) — WARN."
},
{
"c": "O",
"q": "Family War: qizil zonada zarar yetkazish?",
"a": "Taqiqlangan, WARN. Tadbir hududiga faqat piyoda va uchta kirishdan kiriladi."
},
{
"c": "O",
"q": "Family War: RK va tvink?",
"a": "Tashlab ketilgan portda RK — WARN; o‘lgandan keyin tvink bilan qatnashish ham taqiqlangan."
},
{
"c": "O",
"q": "OPG titul hududida nima taqiqlangan?",
"a": "A’zolarga agressiya (WARN), ta’qibdan o‘z titul hududiga qochib kirish (WARN). Qabul faqat titul hududida."
},
{
"c": "O",
"q": "Qora bozor qoidasi?",
"a": "Neytral hudud: agressiya va otishma taqiqlangan, WARN. Otishmadan qochib kirish ham WARN."
},
{
"c": "O",
"q": "BizWar: kuniga nechta hujum va mudofaa?",
"a": "Kuniga 3 ta hujum va 3 ta mudofaa; yakshanba 2 tadan. Ikki OPG o‘rtasida 2 tadan ko‘p emas."
},
{
"c": "O",
"q": "BizWar: ruxsat etilgan vaqt va e’lon muddati?",
"a": "Ish kunlari MSK 14:00–23:00, dam olish kunlari 12:00–23:00. Urush boshlanishiga 60 daqiqadan oldin va 30 daqiqadan ko‘p qolmaganda e’lon qilinadi."
},
{
"c": "O",
"q": "BizWar: minimal daraja va taqiqlar?",
"a": "Minimal lvl 7. Bronijilet, snayper, jang vaqtida aptechka (ukritiyesiz) va RK taqiqlangan. Qizil kvadratdan tashqarida o‘ldirish taqiqlangan."
},
{
"c": "O",
"q": "BizWar: videofiksatsiya qoidasi?",
"a": "Urush boshidan oxirgi o‘limgacha yozish, 2 kun saqlash, minimal 480p. Kurator so‘rasa 24 soatda taqdim etiladi."
},
{
"c": "O",
"q": "Furgon: minimal OPG a’zolari va kelish vaqti?",
"a": "Minimal 10 kishi (aks holda diskvalifikatsiya). Tadbirdan 5 daqiqa oldin kelish shart; 55-daqiqadan keyin kirish taqiqlangan."
},
{
"c": "O",
"q": "Furgon: transport va niqob?",
"a": "Tadbir davomida avtomobilda yurish (DEMORGAN 30 daq) va niqob taqish (DEMORGAN 60 daq) taqiqlangan."
}
];

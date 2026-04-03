(function () {
  'use strict';

  function normalizeKey(s) {
    return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  const translations = {
    en: {
      page_title_index: 'CatCaff',
      page_title_about: 'About Us - CatCaff',
      page_title_faq: 'FAQ - CatCaff',
      page_title_booking: 'Book a Visit - CatCaff',

      brand_name: 'CatCaff',
      subtitle_index: 'A cozy café where coffee meets cuddles. Enjoy freshly brewed drinks and spend time with our adorable cats!',
      about_header_title: 'About Us',
      about_header_subtitle: 'Learn more about CatCaff, our mission, and our furry friends.',
      faq_header_title: 'Frequently Asked Questions',
      faq_header_subtitle: 'Here are some answers to common questions from our visitors.',
      booking_header_title: 'Book a Visit',
      booking_header_subtitle: 'Reserve your spot at CatCaff and enjoy a relaxing time with our adorable cats!',

      nav_home: 'Home',
      nav_about: 'About Us',
      nav_faq: 'FAQ',
      nav_booking: 'Book a Visit',

      meet_cats: 'Meet Our Cats',
      our_menu: 'Our Menu',
      visit_us: 'Visit Us',
      menu_cat_coffee: 'Coffee',
      menu_cat_snacks: 'Snacks',
      menu_cat_specials: 'Specials',

      cat_mochi_name: 'Mochi',
      cat_luna_name: 'Luna',
      cat_oliver_name: 'Oliver',

      item_espresso_name: 'Espresso',
      item_latte_name: 'Latte',
      item_cappuccino_name: 'Cappuccino',
      item_americano_name: 'Americano',
      item_icedmatchalatte_name: 'Iced Matcha Latte',
      item_yerbamate_name: 'Yerba Mate',
      item_croissant_name: 'Croissant',
      item_cheesecake_name: 'Cheesecake',
      item_sandwich_name: 'Sandwich',
      item_catcookie_name: 'Cat-Shaped Cookie',
      item_cattreats_name: 'Cat Treats',
      item_pumpkinlatte_name: 'Pumpkin Latte',

      contact_address: 'Address: 123 Cat Street, Meowtown',
      contact_hours: 'Hours: Mon-Sun: 10am - 8pm',
      contact_email: 'Email: contact@catcaff.com',
      contact_title: 'Send us a message',
      contact_name_ph: 'Your Name',
      contact_email_ph: 'Your Email',
      contact_message_ph: 'Your Message',
      contact_send: 'Send',

      footer_copyright: '© 2025 CatCaff. All Rights Reserved.',

      about_story_title: 'Our Story',
      about_story_p1: "CatCaff was founded in 2025 with a dream to combine the love of coffee with the love of cats. Starting with three rescue cats, we created a welcoming space where people can relax, enjoy quality coffee, and spend time with our adorable feline friends.",
      about_story_p2: "Over the years, CatCaff has grown into a community hub for cat lovers, offering events, adoption opportunities, and a safe haven for rescued cats. Every visit helps us continue our mission to care for cats and provide them with loving homes.",

      about_mission_title: 'Our Mission',
      about_mission_p1: 'At CatCaff, our mission is simple: to provide a safe, cozy, and engaging environment for both cats and humans. We focus on:',
      about_mission_li1: 'Rescuing and caring for cats in need.',
      about_mission_li2: 'Promoting adoption to give cats forever homes.',
      about_mission_li3: 'Offering a relaxing and enjoyable café experience.',
      about_mission_li4: 'Building a community of cat enthusiasts who support animal welfare.',
      about_mission_p2: "By visiting CatCaff, you're helping us make a positive impact on the lives of cats and people alike.",

      about_cats_title: 'Meet Our Cats',
      about_cats_p1: 'Our cats each have unique personalities and stories:',
      about_cats_li1: 'Mochi: Playful and curious, always exploring new spaces and bringing joy to visitors.',
      about_cats_li2: 'Luna: Calm and affectionate, loves curling up in laps for naps and gentle cuddles.',
      about_cats_li3: 'Oliver: Adventurous and friendly, he loves interacting with guests and climbing to high spots.',
      about_cats_li4: 'Every cat is a rescue, and we strive to ensure they feel loved, safe, and comfortable at CatCaff.',

      about_coffee_title: 'Our Coffee & Menu',
      about_coffee_p1: "We believe coffee should be as comforting as a cat's purr. That's why we partner with local roasters to bring ethically sourced, fresh beans to our café.",
      about_coffee_p2: 'Our menu includes classic favorites and seasonal specials:',
      about_coffee_li1: 'Coffee: Espresso, Latte, Cappuccino, Americano, Iced Matcha Latte, Yerba Mate',
      about_coffee_li2: 'Snacks: Croissant, Cheesecake, Sandwiches',
      about_coffee_li3: 'Special Treats: Cat-shaped cookies, Cat treats, Pumpkin Latte',
      about_coffee_p3: 'All food and beverages are made with quality ingredients, and vegan or seasonal options are available.',

      about_sustain_title: 'Sustainability & Community',
      about_sustain_p1: 'CatCaff is committed to reducing waste and promoting sustainability:',
      about_sustain_li1: 'We use biodegradable cups and straws whenever possible.',
      about_sustain_li2: 'We recycle and compost to reduce our environmental footprint.',
      about_sustain_li3: 'We host community events and workshops to educate about animal welfare and responsible pet ownership.',
      about_sustain_p2: 'Visiting CatCaff means supporting not only rescued cats but also a café that cares about people, animals, and the planet.',

      about_fun_title: 'Fun Facts About CatCaff',
      about_fun_li1: 'We have a rotating “Cat of the Month” spotlight to introduce visitors to new furry friends.',
      about_fun_li2: 'All our cats are fully vaccinated and cared for by our experienced staff.',
      about_fun_li3: 'We organize monthly adoption events for local rescue cats.',
      about_fun_li4: 'Visitors can participate in cat yoga sessions and themed cat events.',

      faq_q1: 'Can I bring my own cat?',
      faq_a1: 'No, for the safety of all cats, we only allow our resident cats in the café.',
      faq_q2: 'Do I need to book in advance?',
      faq_a2: 'Yes, we recommend booking in advance to guarantee your spot, especially during weekends.',
      faq_q3: 'Is there a time limit for visits?',
      faq_a3: 'Yes, visits are usually limited to 3 hours to ensure everyone gets a chance to spend time with the cats.',
      faq_q4: 'Are the cats adoptable?',
      faq_a4: 'Yes! Many of our cats are rescues looking for forever homes. Our staff will be happy to guide you through the adoption process.',
      faq_q5: 'Do you serve food and drinks?',
      faq_a5: 'Absolutely! We offer fresh coffee, tea, and a variety of snacks and desserts. Vegan and seasonal options are available.',

      booking_form_title: 'Plan Your Visit',
      booking_name_label: 'Full Name',
      booking_name_ph: 'Your Name',
      booking_email_label: 'Email',
      booking_email_ph: 'Your Email',
      booking_date_label: 'Preferred Date',
      booking_time_label: 'Preferred Time',
      booking_guests_label: 'Number of Guests',
      booking_submit: 'Confirm Booking',
      booking_back: 'Back to Main Menu',

      toast_contact_success: "Thank you for your message! We'll get back to you soon.",
      toast_booking_success: 'Thank you! Your visit has been booked at CatCaff.',
      toast_cat_not_found: 'Cat info not found.',
      toast_item_not_found: 'Item details not available.'
    },

    am: {
      page_title_index: 'CatCaff',
      page_title_about: 'Մեր մասին - CatCaff',
      page_title_faq: 'ՀՏՀ - CatCaff',
      page_title_booking: 'Ամրագրել այց - CatCaff',

      brand_name: 'CatCaff',
      subtitle_index: 'Հարմարավետ սրճարան, որտեղ սուրճը հանդիպում է քնքշությանը։ Վայելեք թարմ սուրճ և ժամանակ անցկացրեք մեր սիրելի կատուների հետ։',
      about_header_title: 'Մեր մասին',
      about_header_subtitle: 'Իմացեք ավելին CatCaff-ի, մեր առաքելության և մեր փափուկ ընկերների մասին։',
      faq_header_title: 'Հաճախ տրվող հարցեր',
      faq_header_subtitle: 'Ահա մեր այցելուների հաճախ տրվող հարցերի պատասխանները։',
      booking_header_title: 'Ամրագրել այց',
      booking_header_subtitle: 'Ամրագրեք ձեր տեղը CatCaff-ում և վայելեք հանգիստ ժամանակ մեր սիրելի կատուների հետ։',

      nav_home: 'Գլխավոր',
      nav_about: 'Մեր մասին',
      nav_faq: 'ՀՏՀ',
      nav_booking: 'Ամրագրել այց',

      meet_cats: 'Ծանոթացեք մեր կատուներին',
      our_menu: 'Մեր մենյուն',
      visit_us: 'Այցելեք մեզ',
      menu_cat_coffee: 'Սուրճ',
      menu_cat_snacks: 'Խորտիկներ',
      menu_cat_specials: 'Հատուկ',

      cat_mochi_name: 'Մոչի',
      cat_luna_name: 'Լունա',
      cat_oliver_name: 'Օլիվեր',

      item_espresso_name: 'Էսպրեսո',
      item_latte_name: 'Լատե',
      item_cappuccino_name: 'Կապուչինո',
      item_americano_name: 'Ամերիկանո',
      item_icedmatchalatte_name: 'Սառը մատչա լատե',
      item_yerbamate_name: 'Յերբա մատե',
      item_croissant_name: 'Կրուասան',
      item_cheesecake_name: 'Չիզքեյք',
      item_sandwich_name: 'Սենդվիչ',
      item_catcookie_name: 'Կատվի ձևով թխվածքաբլիթ',
      item_cattreats_name: 'Կատվի խորտիկներ',
      item_pumpkinlatte_name: 'Դդմիկով լատե',

      contact_address: 'Հասցե՝ 123 Cat Street, Meowtown',
      contact_hours: 'Ժամեր՝ Երկուշաբթի-Կիրակի՝ 10:00 - 20:00',
      contact_email: 'Էլ․ փոստ՝ contact@catcaff.com',
      contact_title: 'Ուղարկեք մեզ հաղորդագրություն',
      contact_name_ph: 'Ձեր անունը',
      contact_email_ph: 'Ձեր էլ․ փոստը',
      contact_message_ph: 'Ձեր հաղորդագրությունը',
      contact_send: 'Ուղարկել',

      footer_copyright: '© 2025 CatCaff. Բոլոր իրավունքները պաշտպանված են։',

      about_story_title: 'Մեր պատմությունը',
      about_story_p1: 'CatCaff-ը հիմնադրվել է 2025 թվականին՝ սուրճի և կատուների սերը միավորելու երազանքով։ Երեք փրկված կատուներով սկսելով՝ մենք ստեղծեցինք հյուրընկալ վայր, որտեղ մարդիկ կարող են հանգստանալ, վայելել որակյալ սուրճ և ժամանակ անցկացնել մեր սիրելի կատուների հետ։',
      about_story_p2: 'Տարիների ընթացքում CatCaff-ը դարձել է կատու սիրողների համայնքային կենտրոն՝ առաջարկելով միջոցառումներ, որդեգրման հնարավորություններ և անվտանգ ապաստարան փրկված կատուների համար։ Յուրաքանչյուր այց օգնում է մեզ շարունակել մեր առաքելությունը՝ հոգ տանել կատուների մասին և նրանց սիրով լի տներ գտնել։',

      about_mission_title: 'Մեր առաքելությունը',
      about_mission_p1: 'CatCaff-ում մեր առաքելությունը պարզ է՝ ապահովել անվտանգ, հարմարավետ և հետաքրքիր միջավայր թե՛ կատուների, թե՛ մարդկանց համար։ Մենք կենտրոնանում ենք՝',
      about_mission_li1: 'Օգնության կարիք ունեցող կատուների փրկության և խնամքի վրա։',
      about_mission_li2: 'Որդեգրման խթանման վրա՝ կատուներին մշտական տներ գտնելու համար։',
      about_mission_li3: 'Հանգստացնող և հաճելի սրճարանային փորձ առաջարկելու վրա։',
      about_mission_li4: 'Կատու սիրողների համայնք կառուցելու վրա, որը աջակցում է կենդանիների բարեկեցությանը։',
      about_mission_p2: 'Այցելելով CatCaff՝ դուք օգնում եք դրական ազդեցություն ունենալ կատուների և մարդկանց կյանքի վրա։',

      about_cats_title: 'Ծանոթացեք մեր կատուներին',
      about_cats_p1: 'Մեր կատուներից յուրաքանչյուրն ունի յուրահատուկ բնավորություն և պատմություն։',
      about_cats_li1: 'Մոչի՝ խաղասեր ու հետաքրքրասեր, միշտ ուսումնասիրում է նոր տարածքներ և ուրախություն պարգևում այցելուներին։',
      about_cats_li2: 'Լունա՝ հանգիստ ու քնքուշ, սիրում է ծալվել ծնկներին և քնքուշ գրկախառնություններ ստանալ։',
      about_cats_li3: 'Օլիվեր՝ արկածախնդիր ու ընկերասեր, սիրում է շփվել հյուրերի հետ և բարձր տեղեր բարձրանալ։',
      about_cats_li4: 'Յուրաքանչյուր կատու փրկված է, և մենք ձգտում ենք ապահովել, որ նրանք CatCaff-ում իրենց սիրված, ապահով և հարմարավետ զգան։',

      about_coffee_title: 'Մեր սուրճը և մենյուն',
      about_coffee_p1: 'Մենք հավատում ենք, որ սուրճը պետք է նույնքան ջերմ լինի, որքան կատվի մռռոցը։ Այդ պատճառով մենք համագործակցում ենք տեղական թրծողների հետ՝ մեր սրճարան բերելով էթիկապես ստացված թարմ հատիկներ։',
      about_coffee_p2: 'Մեր մենյուն ներառում է դասական սիրված տարբերակներ և սեզոնային հատուկներ։',
      about_coffee_li1: 'Սուրճ՝ Էսպրեսո, Լատե, Կապուչինո, Ամերիկանո, Սառը մատչա լատե, Յերբա մատե',
      about_coffee_li2: 'Խորտիկներ՝ կրուասան, չիզքեյք, սենդվիչներ',
      about_coffee_li3: 'Հատուկ ուտեստներ՝ կատվի ձևով թխվածքաբլիթներ, կատվի խորտիկներ, դդմիկով լատե',
      about_coffee_p3: 'Բոլոր ուտեստներն ու խմիչքները պատրաստվում են որակյալ բաղադրիչներով, իսկ վեգան կամ սեզոնային տարբերակներ էլ կան։',

      about_sustain_title: 'Կայունություն և համայնք',
      about_sustain_p1: 'CatCaff-ը նպատակ ունի նվազեցնել թափոնները և խթանել կայունությունը։',
      about_sustain_li1: 'Հնարավորության դեպքում օգտագործում ենք կենսաքայքայվող բաժակներ և խողովակներ։',
      about_sustain_li2: 'Կրճատում ենք մեր բնապահպանական հետքը՝ վերամշակելով և կոմպոստացնելով։',
      about_sustain_li3: 'Կազմակերպում ենք համայնքային միջոցառումներ և աշխատարաններ՝ կենդանիների բարեկեցության և պատասխանատու խնամքի մասին տեղեկացնելու համար։',
      about_sustain_p2: 'CatCaff այցելելը նշանակում է աջակցել ոչ միայն փրկված կատուներին, այլև այն սրճարանին, որը հոգ է տանում մարդկանց, կենդանիների և մոլորակի մասին։',

      about_fun_title: 'Հետաքրքիր փաստեր CatCaff-ի մասին',
      about_fun_li1: 'Մենք ունենք «Ամսվա կատու» պարբերական ցուցադրություն՝ այցելուներին նոր փափուկ ընկերների հետ ծանոթացնելու համար։',
      about_fun_li2: 'Մեր բոլոր կատուները լիովին պատվաստված են և խնամվում են փորձառու աշխատակիցների կողմից։',
      about_fun_li3: 'Մենք կազմակերպում ենք ամենամսյա որդեգրման միջոցառումներ տեղական փրկված կատուների համար։',
      about_fun_li4: 'Այցելուները կարող են մասնակցել կատուների յոգայի և թեմատիկ միջոցառումների։',

      faq_q1: 'Կարո՞ղ եմ բերել իմ կատուն։',
      faq_a1: 'Ոչ, բոլոր կատուների անվտանգության համար թույլատրվում են միայն մեր սրճարանի կատուները։',
      faq_q2: 'Պե՞տք է նախապես ամրագրել։',
      faq_a2: 'Այո, խորհուրդ ենք տալիս նախապես ամրագրել, հատկապես հանգստյան օրերին։',
      faq_q3: 'Կա՞ այցելության ժամանակային սահմանափակում։',
      faq_a3: 'Այո, այցելությունները սովորաբար սահմանափակվում են 3 ժամով, որպեսզի բոլորը հնարավորություն ունենան ժամանակ անցկացնել կատուների հետ։',
      faq_q4: 'Կատուները որդեգրվու՞մ են։',
      faq_a4: 'Այո՛։ Մեր շատ կատուներ փրկված կենդանիներ են, որոնք նոր տներ են փնտրում։ Մեր աշխատակիցները սիրով կօգնեն որդեգրման գործընթացում։',
      faq_q5: 'Դուք ուտելիք և խմիչք մատուցո՞ւմ եք։',
      faq_a5: 'Իհարկե՛։ Մենք առաջարկում ենք թարմ սուրճ, թեյ և տարբեր խորտիկներ ու աղանդերներ։ Կան նաև վեգան և սեզոնային տարբերակներ։',

      booking_form_title: 'Պլանավորեք ձեր այցելությունը',
      booking_name_label: 'Անուն, ազգանուն',
      booking_name_ph: 'Ձեր անունը',
      booking_email_label: 'Էլ․ փոստ',
      booking_email_ph: 'Ձեր էլ․ փոստը',
      booking_date_label: 'Նախընտրելի ամսաթիվ',
      booking_time_label: 'Նախընտրելի ժամ',
      booking_guests_label: 'Հյուրերի քանակ',
      booking_submit: 'Հաստատել ամրագրումը',
      booking_back: 'Վերադառնալ գլխավոր մենյու',

      toast_contact_success: 'Շնորհակալություն ձեր հաղորդագրության համար։ Մենք շուտով կապ կհաստատենք ձեզ հետ։',
      toast_booking_success: 'Շնորհակալություն։ Ձեր այցելությունը ամրագրվել է CatCaff-ում։',
      toast_cat_not_found: 'Կատվի տեղեկությունը չի գտնվել։',
      toast_item_not_found: 'Տվյալ ուտեստի տեղեկությունը հասանելի չէ։'
    },

    ru: {
      page_title_index: 'CatCaff',
      page_title_about: 'О нас - CatCaff',
      page_title_faq: 'FAQ - CatCaff',
      page_title_booking: 'Забронировать визит - CatCaff',

      brand_name: 'КэтКафф',
      subtitle_index: 'Уютное кафе, где кофе встречается с кошками. Наслаждайтесь свежим кофе и проводите время с нашими очаровательными котами.',
      about_header_title: 'О нас',
      about_header_subtitle: 'Узнайте больше о CatCaff, нашей миссии и наших пушистых друзьях.',
      faq_header_title: 'Часто задаваемые вопросы',
      faq_header_subtitle: 'Здесь вы найдёте ответы на частые вопросы наших посетителей.',
      booking_header_title: 'Забронировать визит',
      booking_header_subtitle: 'Забронируйте место в CatCaff и проведите спокойное время с нашими очаровательными котами!',

      nav_home: 'Главная',
      nav_about: 'О нас',
      nav_faq: 'FAQ',
      nav_booking: 'Забронировать визит',

      meet_cats: 'Наши кошки',
      our_menu: 'Меню',
      visit_us: 'Посетите нас',
      menu_cat_coffee: 'Кофе',
      menu_cat_snacks: 'Закуски',
      menu_cat_specials: 'Особое',

      cat_mochi_name: 'Моти',
      cat_luna_name: 'Луна',
      cat_oliver_name: 'Оливер',

      item_espresso_name: 'Эспрессо',
      item_latte_name: 'Латте',
      item_cappuccino_name: 'Капучино',
      item_americano_name: 'Американо',
      item_icedmatchalatte_name: 'Латте со льдом и матча',
      item_yerbamate_name: 'Йерба мате',
      item_croissant_name: 'Круассан',
      item_cheesecake_name: 'Чизкейк',
      item_sandwich_name: 'Сэндвич',
      item_catcookie_name: 'Печенье в форме кота',
      item_cattreats_name: 'Лакомства для котов',
      item_pumpkinlatte_name: 'Тыквенный латте',

      contact_address: 'Адрес: 123 Cat Street, Meowtown',
      contact_hours: 'Часы работы: Пн-Вс: 10:00 - 20:00',
      contact_email: 'Эл. почта: contact@catcaff.com',
      contact_title: 'Отправьте нам сообщение',
      contact_name_ph: 'Ваше имя',
      contact_email_ph: 'Ваша эл. почта',
      contact_message_ph: 'Ваше сообщение',
      contact_send: 'Отправить',

      footer_copyright: '© 2025 CatCaff. Все права защищены.',

      about_story_title: 'Наша история',
      about_story_p1: 'CatCaff был основан в 2025 году с мечтой объединить любовь к кофе и любовь к кошкам. Начав с трёх спасённых кошек, мы создали уютное пространство, где люди могут отдыхать, пить качественный кофе и проводить время с нашими очаровательными пушистыми друзьями.',
      about_story_p2: 'Со временем CatCaff стал местом встречи для любителей кошек, предлагая мероприятия, возможности для усыновления и безопасное убежище для спасённых кошек. Каждый визит помогает нам продолжать заботиться о кошках и находить им любящие дома.',

      about_mission_title: 'Наша миссия',
      about_mission_p1: 'В CatCaff наша миссия проста: создать безопасную, уютную и приятную среду как для кошек, так и для людей. Мы сосредоточены на:',
      about_mission_li1: 'Спасении и уходе за кошками, нуждающимися в помощи.',
      about_mission_li2: 'Продвижении усыновления, чтобы кошки находили постоянный дом.',
      about_mission_li3: 'Создании расслабляющего и приятного кафе-опыта.',
      about_mission_li4: 'Формировании сообщества любителей кошек, поддерживающих благополучие животных.',
      about_mission_p2: 'Посещая CatCaff, вы помогаете оказывать положительное влияние на жизнь кошек и людей.',

      about_cats_title: 'Наши кошки',
      about_cats_p1: 'У каждой нашей кошки свой характер и своя история:',
      about_cats_li1: 'Моти: игривый и любопытный, всегда исследует новые места и радует посетителей.',
      about_cats_li2: 'Луна: спокойная и ласковая, любит сворачиваться на коленях для сна и нежных объятий.',
      about_cats_li3: 'Оливер: дружелюбный и любознательный, любит общаться с гостями и забираться повыше.',
      about_cats_li4: 'Каждая кошка спасена, и мы стараемся, чтобы в CatCaff они чувствовали себя любимыми, в безопасности и комфорте.',

      about_coffee_title: 'Наш кофе и меню',
      about_coffee_p1: 'Мы считаем, что кофе должен быть таким же уютным, как мурлыканье кошки. Поэтому мы сотрудничаем с местными обжарщиками, чтобы подавать в кафе свежие и этично закупленные зёрна.',
      about_coffee_p2: 'В нашем меню есть классика и сезонные предложения:',
      about_coffee_li1: 'Кофе: Эспрессо, Латте, Капучино, Американо, Латте со льдом и матча, Йерба мате',
      about_coffee_li2: 'Закуски: круассан, чизкейк, сэндвичи',
      about_coffee_li3: 'Особые угощения: печенье в форме кота, лакомства для котов, тыквенный латте',
      about_coffee_p3: 'Все блюда и напитки готовятся из качественных ингредиентов, также доступны веганские и сезонные варианты.',

      about_sustain_title: 'Экология и сообщество',
      about_sustain_p1: 'CatCaff стремится сокращать отходы и поддерживать устойчивое развитие:',
      about_sustain_li1: 'По возможности мы используем биоразлагаемые стаканы и соломинки.',
      about_sustain_li2: 'Мы сортируем отходы и компостируем, чтобы уменьшить влияние на окружающую среду.',
      about_sustain_li3: 'Мы проводим общественные мероприятия и мастер-классы по благополучию животных и ответственному уходу за питомцами.',
      about_sustain_p2: 'Посещение CatCaff поддерживает не только спасённых кошек, но и кафе, которое заботится о людях, животных и планете.',

      about_fun_title: 'Интересные факты о CatCaff',
      about_fun_li1: 'У нас есть рубрика «Кошка месяца», чтобы знакомить посетителей с новыми пушистыми друзьями.',
      about_fun_li2: 'Все наши кошки полностью вакцинированы и находятся под присмотром опытного персонала.',
      about_fun_li3: 'Мы ежемесячно проводим мероприятия по усыновлению для местных спасённых кошек.',
      about_fun_li4: 'Посетители могут участвовать в йоге с кошками и тематических кошачьих мероприятиях.',

      faq_q1: 'Можно ли принести свою кошку?',
      faq_a1: 'Нет, ради безопасности всех кошек в кафе допускаются только наши собственные кошки.',
      faq_q2: 'Нужно ли бронировать заранее?',
      faq_a2: 'Да, мы рекомендуем бронировать заранее, особенно в выходные.',
      faq_q3: 'Есть ли ограничение по времени посещения?',
      faq_a3: 'Да, обычно посещение ограничено 3 часами, чтобы у всех была возможность провести время с кошками.',
      faq_q4: 'Можно ли забрать кошек домой?',
      faq_a4: 'Да! Многие наши кошки спасены и ищут постоянный дом. Наши сотрудники с радостью помогут вам с процессом усыновления.',
      faq_q5: 'У вас есть еда и напитки?',
      faq_a5: 'Конечно! Мы предлагаем свежий кофе, чай и разнообразные закуски и десерты. Есть веганские и сезонные варианты.',

      booking_form_title: 'Планируйте свой визит',
      booking_name_label: 'Полное имя',
      booking_name_ph: 'Ваше имя',
      booking_email_label: 'Эл. почта',
      booking_email_ph: 'Ваша эл. почта',
      booking_date_label: 'Желаемая дата',
      booking_time_label: 'Желаемое время',
      booking_guests_label: 'Количество гостей',
      booking_submit: 'Подтвердить бронирование',
      booking_back: 'Вернуться в главное меню',

      toast_contact_success: 'Спасибо за ваше сообщение! Мы скоро свяжемся с вами.',
      toast_booking_success: 'Спасибо! Ваш визит в CatCaff забронирован.',
      toast_cat_not_found: 'Информация о кошке не найдена.',
      toast_item_not_found: 'Информация о товаре недоступна.'
    }
  };

  const cats = {
    mochi: {
      img: 'Pictures/Mochi.jpg',
      name: { en: 'Mochi', am: 'Մոչի', ru: 'Моти' },
      info: {
        en: 'Mochi is playful and curious.',
        am: 'Մոչին խաղասեր ու հետաքրքրասեր է։',
        ru: 'Моти игривый и любопытный.'
      }
    },
    luna: {
      img: 'Pictures/Luna.jpg',
      name: { en: 'Luna', am: 'Լունա', ru: 'Луна' },
      info: {
        en: 'Luna is calm and affectionate.',
        am: 'Լունան հանգիստ ու քնքուշ է։',
        ru: 'Луна спокойная и ласковая.'
      }
    },
    oliver: {
      img: 'Pictures/Oliver.jpg',
      name: { en: 'Oliver', am: 'Օլիվեր', ru: 'Оливер' },
      info: {
        en: 'Oliver is adventurous and friendly.',
        am: 'Օլիվերը արկածախնդիր ու ընկերասեր է։',
        ru: 'Оливер дружелюбный и любознательный.'
      }
    }
  };

  const items = {
    espresso: {
      img: 'Pictures/Espresso.jpg',
      price: '$3',
      name: { en: 'Espresso', am: 'Էսպրեսո', ru: 'Эспрессо' },
      info: {
        en: 'Strong and rich espresso.',
        am: 'Ուժեղ և հարուստ էսպրեսո։',
        ru: 'Крепкий и насыщенный эспрессо.'
      }
    },
    latte: {
      img: 'Pictures/latte.jpg',
      price: '$4',
      name: { en: 'Latte', am: 'Լատե', ru: 'Латте' },
      info: {
        en: 'Creamy latte with steamed milk.',
        am: 'Կրեմային լատե՝ շոգեխաշած կաթով։',
        ru: 'Нежный латте с парным молоком.'
      }
    },
    cappuccino: {
      img: 'Pictures/cappuccino.jpg',
      price: '$4',
      name: { en: 'Cappuccino', am: 'Կապուչինո', ru: 'Капучино' },
      info: {
        en: 'Foamy cappuccino.',
        am: 'Փրփրուն կապուչինո։',
        ru: 'Пенный капучино.'
      }
    },
    americano: {
      img: 'Pictures/americano.jpg',
      price: '$3.5',
      name: { en: 'Americano', am: 'Ամերիկանո', ru: 'Американо' },
      info: {
        en: 'Classic Americano.',
        am: 'Դասական ամերիկանո։',
        ru: 'Классический американо.'
      }
    },
    icedmatchalatte: {
      img: 'Pictures/ice macha.jpg',
      price: '$4.5',
      name: { en: 'Iced Matcha Latte', am: 'Սառը մատչա լատե', ru: 'Латте со льдом и матча' },
      info: {
        en: 'Refreshing iced matcha latte.',
        am: 'Թարմացնող սառը մատչա լատե։',
        ru: 'Освежающий латте со льдом и матча.'
      }
    },
    yerbamate: {
      img: 'Pictures/Yerba_Mate.jpg',
      price: '$3.5',
      name: { en: 'Yerba Mate', am: 'Յերբա մատե', ru: 'Йерба мате' },
      info: {
        en: 'Traditional yerba mate brew.',
        am: 'Ավանդական յերբա մատե խմիչք։',
        ru: 'Традиционный напиток йерба мате.'
      }
    },
    croissant: {
      img: 'Pictures/croissant.jpg',
      price: '$2',
      name: { en: 'Croissant', am: 'Կրուասան', ru: 'Круассан' },
      info: {
        en: 'Buttery French croissant.',
        am: 'Յուղալի ֆրանսիական կրուասան։',
        ru: 'Слоёный французский круассан.'
      }
    },
    cheesecake: {
      img: 'Pictures/cheesecake.jpg',
      price: '$3.5',
      name: { en: 'Cheesecake', am: 'Չիզքեյք', ru: 'Чизкейк' },
      info: {
        en: 'Rich cheesecake slice.',
        am: 'Հարուստ համով չիզքեյքի կտոր։',
        ru: 'Насыщенный кусочек чизкейка.'
      }
    },
    sandwich: {
      img: 'Pictures/sandwich.jpg',
      price: '$5',
      name: { en: 'Sandwich', am: 'Սենդվիչ', ru: 'Сэндвич' },
      info: {
        en: 'Freshly made sandwich.',
        am: 'Թարմ պատրաստված սենդվիչ։',
        ru: 'Свежеприготовленный сэндвич.'
      }
    },
    catcookie: {
      img: 'Pictures/cat shaped cookie.jpg',
      price: '$2',
      name: { en: 'Cat-Shaped Cookie', am: 'Կատվի ձևով թխվածքաբլիթ', ru: 'Печенье в форме кота' },
      info: {
        en: 'Cute cat-shaped cookie.',
        am: 'Գեղեցիկ կատվի ձևով թխվածքաբլիթ։',
        ru: 'Милое печенье в форме кота.'
      }
    },
    cattreats: {
      img: 'Pictures/Cat Treats.jpg',
      price: '$2.5',
      name: { en: 'Cat Treats', am: 'Կատվի խորտիկներ', ru: 'Лакомства для котов' },
      info: {
        en: 'Special cat-shaped treats.',
        am: 'Հատուկ կատվի խորտիկներ։',
        ru: 'Особые лакомства для котов.'
      }
    },
    pumpkinlatte: {
      img: 'Pictures/pumpkin latte.jpg',
      price: '$5',
      name: { en: 'Pumpkin Latte', am: 'Դդմիկով լատե', ru: 'Тыквенный латте' },
      info: {
        en: 'Seasonal pumpkin latte.',
        am: 'Սեզոնային դդմիկով լատե։',
        ru: 'Сезонный тыквенный латте.'
      }
    }
  };

  function ensureToastElement() {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    return toast;
  }

  function showToast(message, type = 'default') {
    const toast = ensureToastElement();
    toast.textContent = message;

    if (type === 'success') toast.style.backgroundColor = '#28a745';
    else if (type === 'error') toast.style.backgroundColor = '#dc3545';
    else if (type === 'info') toast.style.backgroundColor = '#007bff';
    else toast.style.backgroundColor = '#333';

    toast.classList.remove('show');
    toast.offsetWidth;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  function getLang() {
    const saved = localStorage.getItem('lang');
    return translations[saved] ? saved : 'en';
  }

  function setLangDirection(lang) {
    document.documentElement.lang = lang === 'am' ? 'hy' : lang;
  }

  function updateModalCat(lang, key) {
    const cat = cats[key];
    if (!cat) return;
    const catImg = document.getElementById('catImg');
    const catName = document.getElementById('catName');
    const catInfo = document.getElementById('catInfo');
    if (catImg) catImg.src = cat.img;
    if (catName) catName.textContent = cat.name[lang] || cat.name.en;
    if (catInfo) catInfo.textContent = cat.info[lang] || cat.info.en;
  }

  function updateModalItem(lang, key) {
    const item = items[key];
    if (!item) return;
    const itemImg = document.getElementById('itemImg');
    const itemName = document.getElementById('itemName');
    const itemInfo = document.getElementById('itemInfo');
    if (itemImg) itemImg.src = item.img;
    if (itemName) itemName.textContent = item.name[lang] || item.name.en;
    if (itemInfo) itemInfo.textContent = `${item.info[lang] || item.info.en} ${item.price}`;
  }

  function syncMenuPrices() {
    document.querySelectorAll('.menu-category-items .card').forEach(card => {
      const key = normalizeKey(card.dataset.item);
      const item = items[key];
      if (!item) return;

      let priceEl = card.querySelector('.price');
      if (!priceEl) {
        priceEl = document.createElement('p');
        priceEl.className = 'price';
        card.appendChild(priceEl);
      }
      priceEl.textContent = item.price;
    });
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';

    localStorage.setItem('lang', lang);
    setLangDirection(lang);

    const t = translations[lang];

    document.querySelectorAll('[data-key]:not([data-attr])').forEach(el => {
      const key = el.getAttribute('data-key');
      if (t[key] !== undefined) {
        el.textContent = t[key];
      }
    });

    document.querySelectorAll('[data-key][data-attr]').forEach(el => {
      const key = el.getAttribute('data-key');
      const attr = el.getAttribute('data-attr');
      if (t[key] !== undefined && attr) {
        el.setAttribute(attr, t[key]);
      }
    });

    const dropdownBtn = document.querySelector('.lang-btn');
    if (dropdownBtn) dropdownBtn.textContent = `${lang.toUpperCase()} ▾`;

    syncMenuPrices();

    const catModal = document.getElementById('catModal');
    const itemModal = document.getElementById('itemModal');
    if (catModal && catModal.style.display === 'flex' && window.__currentCatKey) {
      updateModalCat(lang, window.__currentCatKey);
    }
    if (itemModal && itemModal.style.display === 'flex' && window.__currentItemKey) {
      updateModalItem(lang, window.__currentItemKey);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const currentLang = getLang();
    const dropdown = document.querySelector('.lang-dropdown');
    const dropdownBtn = document.querySelector('.lang-btn');
    const langOptions = document.querySelectorAll('.lang-menu div');

    if (dropdown && dropdownBtn) {
      dropdownBtn.addEventListener('click', () => {
        dropdown.classList.toggle('active');
      });

      window.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('active');
        }
      });

      langOptions.forEach(option => {
        option.addEventListener('click', () => {
          const lang = option.dataset.lang;
          applyLanguage(lang);
          dropdown.classList.remove('active');
        });
      });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const lang = getLang();
        showToast(translations[lang].toast_contact_success, 'success');
        contactForm.reset();
      });
    }

    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
      bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const lang = getLang();
        showToast(translations[lang].toast_booking_success, 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 3200);
      });
    }

    const tabButtons = document.querySelectorAll('.menu-categories button');
    const categories = document.querySelectorAll('.menu-category-items');
    if (tabButtons.length) {
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          tabButtons.forEach(b => b.classList.remove('active'));
          button.classList.add('active');

          categories.forEach(cat => cat.classList.remove('active'));
          const target = button.dataset.category;
          const el = document.getElementById(target);
          if (el) el.classList.add('active');
        });
      });
    }

    const catModal = document.getElementById('catModal');
    const catClose = catModal ? catModal.querySelector('.close') : null;

    document.querySelectorAll('.cats .card').forEach(card => {
      card.addEventListener('click', () => {
        const key = normalizeKey(card.dataset.cat);
        if (!cats[key]) {
          showToast(translations[getLang()].toast_cat_not_found, 'info');
          return;
        }
        window.__currentCatKey = key;
        updateModalCat(getLang(), key);
        if (catModal) catModal.style.display = 'flex';
      });
    });

    if (catClose) {
      catClose.addEventListener('click', () => {
        if (catModal) catModal.style.display = 'none';
        window.__currentCatKey = null;
      });
    }

    if (catModal) {
      window.addEventListener('click', e => {
        if (e.target === catModal) {
          catModal.style.display = 'none';
          window.__currentCatKey = null;
        }
      });
    }

    const itemModal = document.getElementById('itemModal');
    const itemClose = document.getElementById('itemClose') || (itemModal ? itemModal.querySelector('.close') : null);

    document.querySelectorAll('.menu-category-items .card').forEach(card => {
      card.addEventListener('click', () => {
        const key = normalizeKey(card.dataset.item);
        if (!items[key]) {
          showToast(translations[getLang()].toast_item_not_found, 'info');
          return;
        }
        window.__currentItemKey = key;
        updateModalItem(getLang(), key);
        if (itemModal) itemModal.style.display = 'flex';
      });
    });

    if (itemClose) {
      itemClose.addEventListener('click', () => {
        if (itemModal) itemModal.style.display = 'none';
        window.__currentItemKey = null;
      });
    }

    if (itemModal) {
      window.addEventListener('click', e => {
        if (e.target === itemModal) {
          itemModal.style.display = 'none';
          window.__currentItemKey = null;
        }
      });
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        if (catModal && catModal.style.display === 'flex') {
          catModal.style.display = 'none';
          window.__currentCatKey = null;
        }
        if (itemModal && itemModal.style.display === 'flex') {
          itemModal.style.display = 'none';
          window.__currentItemKey = null;
        }
      }
    });

    applyLanguage(currentLang);
  });

})();
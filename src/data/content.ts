export type Lang = 'pl' | 'de'

export interface PricingItem {
  pl: string
  de: string
  plPrice: string
  eurPrice: string
}

export interface GalleryItem {
  src: string
  alt_pl: string
  alt_de: string
  label_pl: string
  label_de: string
}

export interface PricingConfig {
  heading: string
  colNr: string
  colName: string
  colPrice: string
  dessertsHeading: string
  dessertsSubtitle: string
  dessertsNote: string
  cakesHeading: string
  cakesSubtitle: string
  cakesNote: string
  tortesNote: string
  nameKey: keyof Pick<PricingItem, 'pl' | 'de'>
  priceKey: keyof Pick<PricingItem, 'plPrice' | 'eurPrice'>
}

export interface I18nContent {
  htmlLang: string
  langBar: string
  selfLabel: string
  otherLabel: string
  otherPath: string
  header: {
    subtitle: string
  }
  about: {
    heading: string
    imgAlt: string
    text: string
    boldWord: string
    prefix: string
  }
  gallery: {
    heading: string
  }
  pricing: PricingConfig
  orderInfo: {
    heading: string
    waitHeading: string
    waitText: string
    deliveryHeading: string
    deliveryText: string
  }
  contact: {
    heading: string
    subtitle: string
    phoneLabel: string
    locationLabel: string
    locationValue: string
  }
  footer: {
    companyHeading: string
    addressHeading: string
    contactHeading: string
    addressLines: string[]
    copyright: string
    creditPrefix: string
  }
  meta: {
    title: string
    description: string
  }
}

// Shared pricing items: { pl, de, plPrice, eurPrice }
export const dessertItems: PricingItem[] = [
  { pl: 'Sernik z galaretką', de: 'Käsekuchen mit Fruchtgelee', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Serniczek krówkowy', de: 'Käseküchlein mit Karamell', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Szarlotka', de: 'Apfelkuchen', plPrice: '8 zł', eurPrice: '2 €' },
  { pl: 'Krem z białej czekolady z musem malinowym', de: 'Weißschokoladencreme mit Himbeermousse', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Kinder Bueno', de: 'Kinder Bueno', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Kinder Czekolada', de: 'Kinder Schokolade', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Kinder Country', de: 'Kinder Country', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Snickers', de: 'Snickers', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Oreo', de: 'Oreo', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Rafaello', de: 'Raffaello', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Pianka malinowa', de: 'Himbeerschaum', plPrice: '7 zł', eurPrice: '2 €' },
  { pl: 'Pianka waniliowa z galaretką', de: 'Vanilleschaum mit Gelee', plPrice: '8 zł', eurPrice: '2 €' },
  { pl: 'Ptasie mleczko z owocami', de: 'Vogelmilch mit Früchten', plPrice: '9 zł', eurPrice: '3 €' },
  { pl: 'Deser jogurtowy z galaretką i borówkami', de: 'Joghurtdessert mit Gelee und Blaubeeren', plPrice: '9 zł', eurPrice: '3 €' },
  { pl: 'Kraina Lodu', de: 'Eiskönigin', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Panna Cotta Mango', de: 'Panna Cotta Mango', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Galaretka „Arbuz"', de: 'Gelee „Wassermelone"', plPrice: '7 zł', eurPrice: '2 €' },
  { pl: 'Truskawkowy Przekładaniec', de: 'Erdbeer-Schichtkuchen', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Cytrynowy Deser', de: 'Zitronendessert', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Malinowa Chmurka', de: 'Himbeer-Wölkchen', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Deser czekoladowy z wiśniami', de: 'Schokoladendessert mit Kirschen', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Leśny Mech', de: 'Waldmoos', plPrice: '9 zł', eurPrice: '3 €' },
  { pl: 'Kopiec Kreta', de: 'Maulwurfskuchen', plPrice: '8 zł', eurPrice: '2 €' },
  { pl: 'Tiramisu', de: 'Tiramisu', plPrice: '10 zł', eurPrice: '3 €' },
  { pl: 'Krówka', de: 'Karamellbonbon', plPrice: '10 zł', eurPrice: '3 €' },
]

export const cakeItems: PricingItem[] = [
  { pl: 'Malinowa Chmurka', de: 'Himbeer-Wölkchen', plPrice: '170 zł', eurPrice: '40 €' },
  { pl: 'Rurociąg', de: 'Kremrolle', plPrice: '150 zł', eurPrice: '35 €' },
  { pl: 'Sernik z brzoskwiniami', de: 'Käsekuchen mit Pfirsichen', plPrice: '180 zł', eurPrice: '42 €' },
  { pl: 'Sernik z pianą', de: 'Käsekuchen mit Baiserschaum', plPrice: '160 zł', eurPrice: '38 €' },
  { pl: 'Sernik Królewski', de: 'Königlicher Käsekuchen', plPrice: '170 zł', eurPrice: '40 €' },
  { pl: 'Miodownik', de: 'Honigkuchen', plPrice: '130 zł', eurPrice: '31 €' },
  { pl: 'Królewiec', de: 'Königskuchen', plPrice: '140 zł', eurPrice: '33 €' },
  { pl: 'Kubusiowiec', de: 'Honig-Karotten-Kuchen', plPrice: '130 zł', eurPrice: '31 €' },
  { pl: 'Rafaello', de: 'Raffaello-Kuchen', plPrice: '150 zł', eurPrice: '35 €' },
  { pl: 'Pleśniak', de: 'Streuselkuchen mit Marmelade', plPrice: '150 zł', eurPrice: '35 €' },
  { pl: '3BIT', de: '3BIT', plPrice: '180 zł', eurPrice: '42 €' },
  { pl: 'Kinder Bueno', de: 'Kinder Bueno Kuchen', plPrice: '200 zł', eurPrice: '47 €' },
  { pl: 'Cycki Murzynki', de: 'Schokoladen-Sahne-Törtchen', plPrice: '160 zł', eurPrice: '38 €' },
  { pl: 'Makowiec zwijany', de: 'Mohnstrudel', plPrice: '70 zł', eurPrice: '17 €' },
  { pl: 'Makowiec', de: 'Mohnkuchen', plPrice: '100 zł', eurPrice: '24 €' },
  { pl: 'Pychotka', de: 'Leckereikuchen', plPrice: '150 zł', eurPrice: '35 €' },
  { pl: 'Snickers', de: 'Snickers Kuchen', plPrice: '190 zł', eurPrice: '45 €' },
  { pl: 'Jabłecznik z budyniem', de: 'Apfelkuchen mit Pudding', plPrice: '140 zł', eurPrice: '33 €' },
  { pl: 'Szarlotka', de: 'Apfelkuchen (Szarlotka)', plPrice: '130 zł', eurPrice: '31 €' },
  { pl: 'Tiramisu', de: 'Tiramisu', plPrice: '160 zł', eurPrice: '38 €' },
  { pl: 'Wuzetka (W-Z)', de: 'Warschauer Schokoladenkuchen', plPrice: '150 zł', eurPrice: '35 €' },
  { pl: 'Karpatka', de: 'Karpaten-Windbeutelkuchen', plPrice: '140 zł', eurPrice: '33 €' },
  { pl: 'Kokosanki', de: 'Kokosmakronen', plPrice: '120 zł', eurPrice: '28 €' },
  { pl: 'Kopiec Kreta', de: 'Maulwurfskuchen', plPrice: '140 zł', eurPrice: '33 €' },
  { pl: 'Przekładaniec', de: 'Schichtkuchen', plPrice: '180 zł', eurPrice: '42 €' },
  { pl: 'Krówka', de: 'Toffee-Kuchen', plPrice: '160 zł', eurPrice: '38 €' },
  { pl: 'Lion', de: 'Lion Kuchen', plPrice: '180 zł', eurPrice: '42 €' },
  { pl: 'Mleczna Kanapka', de: 'Milch-Sandwich', plPrice: '160 zł', eurPrice: '38 €' },
  { pl: 'Babka 4-kolorowa', de: 'Vierfarbige Babka', plPrice: '100 zł', eurPrice: '24 €' },
  { pl: 'Babka piaskowa/czekoladowa', de: 'Sandkuchen / Schokoladenkuchen', plPrice: '80 zł', eurPrice: '19 €' },
  { pl: 'Murzynek', de: 'Schokoladenkuchen (Murzynek)', plPrice: '80 zł', eurPrice: '19 €' },
  { pl: 'Leśny Mech', de: 'Waldmoos', plPrice: '140 zł', eurPrice: '33 €' },
  { pl: 'Śmietanowiec', de: 'Sahnekuchen', plPrice: '120 zł', eurPrice: '28 €' },
  { pl: 'Torcik Oreo', de: 'Oreo-Törtchen', plPrice: '180 zł', eurPrice: '42 €' },
  {
    pl: 'Muffinki (10 sztuk) + ozdoby 2 zł/szt',
    de: 'Muffins (10 Stück) + Dekoration 1 €/Stk.',
    plPrice: '50 zł',
    eurPrice: '12 €',
  },
  { pl: 'Kruche ciastka cynamonowe (30 sztuk)', de: 'Zimtmürbekekse (30 Stück)', plPrice: '60 zł', eurPrice: '14 €' },
  {
    pl: 'Deserki (różne rodzaje, pojemność 180-280ml)',
    de: 'Desserts (verschiedene Sorten, 180-280 ml)',
    plPrice: '7 zł - 10 zł',
    eurPrice: '2 € - 3 €',
  },
]

export const galleryItems: GalleryItem[] = [
  { src: '/img/tort.jpg', alt_pl: 'Torty', alt_de: 'Torten', label_pl: 'Torty', label_de: 'Torten' },
  { src: '/img/tort1.jpg', alt_pl: 'Torty Urodzinowe', alt_de: 'Geburtstagstorten', label_pl: 'Torty Urodzinowe', label_de: 'Geburtstagstorten' },
  { src: '/img/ciasto.jpg', alt_pl: 'Ciasta', alt_de: 'Kuchen', label_pl: 'Ciasta', label_de: 'Kuchen' },
  { src: '/img/ciasto2.jpg', alt_pl: 'Serniki i inne', alt_de: 'Käsekuchen und mehr', label_pl: 'Serniki i inne', label_de: 'Käsekuchen und mehr' },
  { src: '/img/ciasto3.jpg', alt_pl: 'Domowe Wypieki', alt_de: 'Hausgemachtes Gebäck', label_pl: 'Domowe Wypieki', label_de: 'Hausgemachtes Gebäck' },
  { src: '/img/ciasteczka.jpg', alt_pl: 'Ciasteczka', alt_de: 'Kekse', label_pl: 'Ciasteczka', label_de: 'Kekse' },
  { src: '/img/deserki.jpg', alt_pl: 'Deserki', alt_de: 'Desserts', label_pl: 'Deserki', label_de: 'Desserts' },
  { src: '/img/deserki2.jpg', alt_pl: 'Słodkie stoły', alt_de: 'Süße Tische', label_pl: 'Słodkie stoły', label_de: 'Süße Tische' },
]

export const i18n: Record<Lang, I18nContent> = {
  pl: {
    htmlLang: 'pl',
    langBar: '🌐 Język:',
    selfLabel: '🇵🇱 Polski',
    otherLabel: '🇩🇪 Deutsch',
    otherPath: '/de',
    header: {
      subtitle: 'Domowe torty, ciastka i desery na zamówienie. Każdą słodkość przygotowuję z miłością i pasją!',
    },
    about: {
      heading: 'O mnie',
      imgAlt: 'Marzena Radomska - Słodkości u Marzusi',
      text: 'Witaj! Jestem Marzusia i od 25 lat tworzę pyszne słodkości na każdą okazję. Specjalizuję się w tortach urodzinowych, weselnych, ciastkach i deserach. Wszystkie wyroby przygotowuję ze świeżych, wysokiej jakości składników. Zapraszam do składania zamówień!',
      boldWord: '25 lat',
      prefix: 'od ',
    },
    gallery: { heading: 'Moje Słodkości' },
    pricing: {
      heading: 'Cennik',
      colNr: 'Lp.',
      colName: 'Nazwa',
      colPrice: 'Cena',
      dessertsHeading: 'Deserki',
      dessertsSubtitle: 'Pojedyncze porcje',
      dessertsNote: 'Pojemność deserków: 180 - 280 ml',
      cakesHeading: 'Ciasta i Wypieki',
      cakesSubtitle: 'Całe blachy / Zestawy',
      cakesNote:
        'Ciasta pieczone są w blachach o wymiarach 24x30 cm lub 20x30 cm. Możliwość zamówienia połowy blachy.',
      tortesNote: 'Torty: Wykonuję torty o średnicy 26 cm lub 28 cm.',
      nameKey: 'pl',
      priceKey: 'plPrice',
    },
    orderInfo: {
      heading: 'Informacje o zamówieniach',
      waitHeading: 'Czas oczekiwania',
      waitText: 'Od 1 do 3 dni w zależności od zamówienia',
      deliveryHeading: 'Odbiór / Dostawa',
      deliveryText: 'Odbiór osobisty lub dostawa na terenie Jawora',
    },
    contact: {
      heading: 'Kontakt',
      subtitle: 'Chętnie odpowiem na wszystkie pytania i przyjmę zamówienie!',
      phoneLabel: 'Telefon / WhatsApp',
      locationLabel: 'Lokalizacja',
      locationValue: 'Jawor, woj. dolnośląskie',
    },
    footer: {
      companyHeading: 'Dane firmy',
      addressHeading: 'Adres',
      contactHeading: 'Kontakt',
      addressLines: ['59-400 Jawor', 'woj. dolnośląskie', 'pow. jaworski'],
      copyright: '© 2025 Słodkości u Marzusi - MARZENA RADOMSKA. Wszelkie prawa zastrzeżone.',
      creditPrefix: 'Strona stworzona przez',
    },
    meta: {
      title: 'Słodkości u Marzusi - Torty, Ciasta, Desery na Zamówienie | Jawor',
      description:
        'Słodkości u Marzusi - domowe torty, ciasta i desery na zamówienie w Jaworze. Serniki, szarlotki, tiramisu, babeczki i wiele więcej.',
    },
  },
  de: {
    htmlLang: 'de',
    langBar: '🌐 Sprache:',
    selfLabel: '🇩🇪 Deutsch',
    otherLabel: '🇵🇱 Polski',
    otherPath: '/',
    header: {
      subtitle:
        'Hausgemachte Torten, Kuchen und Desserts auf Bestellung. Jede Süßigkeit bereite ich mit Liebe und Leidenschaft zu!',
    },
    about: {
      heading: 'Über mich',
      imgAlt: 'Marzena Radomska - Słodkości u Marzusi',
      text: 'Hallo! Ich bin Marzusia und seit 25 Jahren kreiere ich köstliche Süßigkeiten für jeden Anlass. Ich bin spezialisiert auf Geburtstagstorten, Hochzeitstorten, Kuchen und Desserts. Alle Produkte bereite ich aus frischen, hochwertigen Zutaten zu. Ich freue mich auf Ihre Bestellungen!',
      boldWord: '25 Jahren',
      prefix: 'seit ',
    },
    gallery: { heading: 'Meine Süßigkeiten' },
    pricing: {
      heading: 'Preisliste',
      colNr: 'Nr.',
      colName: 'Name',
      colPrice: 'Preis',
      dessertsHeading: 'Desserts',
      dessertsSubtitle: 'Einzelportionen',
      dessertsNote: 'Fassungsvermögen der Desserts: 180 - 280 ml',
      cakesHeading: 'Kuchen und Gebäck',
      cakesSubtitle: 'Ganze Bleche / Sets',
      cakesNote: 'Kuchen werden in Blechen der Größe 24x30 cm oder 20x30 cm gebacken. Möglichkeit, die Hälfte eines Blechs zu bestellen.',
      tortesNote: 'Torten: Ich fertige Torten mit einem Durchmesser von 26 cm oder 28 cm an.',
      nameKey: 'de',
      priceKey: 'eurPrice',
    },
    orderInfo: {
      heading: 'Bestellinformationen',
      waitHeading: 'Wartezeit',
      waitText: 'Von 1 bis 3 Tagen je nach Bestellung',
      deliveryHeading: 'Abholung / Lieferung',
      deliveryText: 'Persönliche Abholung oder Lieferung im Bereich Düsseldorf',
    },
    contact: {
      heading: 'Kontakt',
      subtitle: 'Ich beantworte gerne alle Ihre Fragen und nehme Ihre Bestellung entgegen!',
      phoneLabel: 'Telefon / WhatsApp',
      locationLabel: 'Standort',
      locationValue: '40221 Düsseldorf, Deutschland',
    },
    footer: {
      companyHeading: 'Firmendaten',
      addressHeading: 'Adresse',
      contactHeading: 'Kontakt',
      addressLines: ['40221 Düsseldorf, Deutschland'],
      copyright: '© 2025 Słodkości u Marzusi - MARZENA RADOMSKA. Alle Rechte vorbehalten.',
      creditPrefix: 'Webseite erstellt von',
    },
    meta: {
      title: 'Słodkości u Marzusi - Torten, Kuchen, Desserts auf Bestellung | Düsseldorf',
      description:
        'Słodkości u Marzusi - hausgemachte Torten, Kuchen und Desserts auf Bestellung. Lieferung nach Düsseldorf. Käsekuchen, Apfelkuchen, Tiramisu und vieles mehr.',
    },
  },
}

import { WebsiteContent } from './types';

export const INITIAL_CONTENT: WebsiteContent = {
  companyName: "Adler² Gebäudetechnik",
  ownerName: "Osman Yilmaz",
  tagline: "Kompetenz in Heizung, Sanitär, Klima und Solar",
  introText: "Als moderner Fachbetrieb für Sanitär, Heizung, Klima und Solar stehen wir für Qualität, Zuverlässigkeit und durchdachte Lösungen, die den Alltag spürbar angenehmer machen. Unser Anspruch ist es, Technik, Komfort und Energieeffizienz so zu verbinden, dass nicht nur funktionierende Systeme entstehen, sondern echte Lebensqualität. Denn wenn Komfort, Qualität und Zufriedenheit perfekt zusammenspielen, wird aus einem Haus ein echtes Zuhause.",
  address: "Mannheim, Deutschland",
  phone: "+4917672763366",
  emergencyPhone: "+4915758304883",
  email: "info@adlergebaeudetechnik.de",
  location: "Mannheim",
  serviceAreasRange: "Mannheim, Ludwigshafen und Umgebung",
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com"
  },
  slides: [
    { 
      id: 'unternehmen', 
      title: 'Unser Unternehmen', 
      subtitle: 'Qualität & Zuverlässigkeit',
      description: 'Als moderner Fachbetrieb für Sanitär, Heizung, Klima und Solar stehen wir für Qualität, Zuverlässigkeit und durchdachte Lösungen, die den Alltag spürbar angenehmer machen. Unser Anspruch ist es, Technik, Komfort und Energieeffizienz so zu verbinden, dass nicht nur funktionierende Systeme entstehen, sondern echte Lebensqualität.',
      image: 'https://picsum.photos/seed/company/1920/1080', 
      link: '/unternehmen',
      titleColor: '#ffffff'
    },
    { id: 'service', title: 'Unser Service', image: 'https://picsum.photos/seed/service/1920/1080', link: '/service', titleColor: '#ffffff', description: 'Von der persönlichen Beratung bis zur zuverlässigen Umsetzung stehen wir Ihnen mit Fachwissen, Sorgfalt und Engagement zur Seite. Wir bieten individuelle Konzepte, saubere Handwerksarbeit und verlässlichen Service für spürbaren Komfort und nachhaltige Lösungen.' },
    { id: 'heizung', title: 'Heizung', image: '/Heizung_Startseite_Neu.png', link: '/heizung', titleColor: '#ff0000' },
    { id: 'sanitaer', title: 'Sanitär', image: '/Sanitaer_Startseite_Neu.png', link: '/sanitaer', titleColor: '#000080' },
    { id: 'klima', title: 'Klima', image: '/Klima_Startseite_Neu.png', link: '/klima', titleColor: '#a2d2ff' },
    { id: 'solar', title: 'Solar', image: '/Solar_Startseite_Neu.png', link: '/solar', titleColor: '#ff9100' },
    { id: 'notdienst', title: 'Notdienst', image: '/Notdienst_Startseite_Neu.png', link: '/notdienst', titleColor: '#ffffff' },
  ],
  services: [
    {
      id: 'heizung',
      title: 'Heizung',
      text: 'Wir planen, installieren und modernisieren Heizungsanlagen für Wohngebäude und Gewerbeobjekte. Dabei setzen wir auf effiziente, wirtschaftliche und bedarfsgerechte Lösungen für eine zuverlässige Wärmeversorgung.',
      points: [
        'Heizungsmodernisierung',
        'Wärmepumpen',
        'Hybridanlagen',
        'Gasanlagen / Brennwerttechnik',
        'Fußbodenheizung & Heizkörpertechnik',
        'Speicher- & Systemtechnik',
        'Heizlastberechnung',
        'Hydraulischer Abgleich',
        'Wartung, Reparatur & Optimierung'
      ],
      image: '/Heizungsbild%20_Leistungen.png',
      isVisible: true,
      detailContent: {
        mainText: "Moderne Heizungstechnik für Ihr Zuhause",
        description: "Wir bieten moderne Heizlösungen für Neubau, Sanierung und Austausch. Von der klassischen Heizungsanlage über Wärmepumpen bis hin zu Hybridanlagen, Biomassekesseln und Pufferspeichern erhalten Sie bei uns fachgerechte Planung, Installation und zuverlässigen Service.",
        benefits: ["Hohe Energieeffizienz", "Umweltfreundliche Technik", "Zuverlässiger Service"],
        galleryImages: ["/Heizungsbild%20_Leistungen.png", "https://picsum.photos/seed/h-g2/800/600"],
        customBlocks: [
          {
            title: "Dienstleistungen",
            text: "- Heizungsinstallation im Neubau und Altbau\n- Heizungsmodernisierung und Heizungserneuerung\n- Austausch alter Heizungsanlagen\n- Wartung, Instandhaltung und Reparatur von Heizsystemen\n- Störungsdienst und schnelle Fehlerbehebung\n- Installation von Wärmepumpenanlagen\n- Einbau von Hybridanlagen\n- Planung und Montage von Biomassekesseln\n- Installation von Pelletkesseln und anderen Biomasse-Heizsystemen\n- Einbau und Anbindung von Pufferspeichern\n- Heizkörpermontage und Heizkörperaustausch\n- Fußbodenheizungen und Flächenheizsysteme\n- Hydraulischer Abgleich\n- Heizungswasseraufbereitung\n- Regelungs- und Steuerungstechnik für Heizungsanlagen\n- Energieeffiziente Optimierung bestehender Heizsysteme\n- Beratung zu wirtschaftlichen und nachhaltigen Heizlösungen"
          }
        ]
      }
    },
    {
      id: 'sanitaer',
      title: 'Sanitär',
      text: 'Wir bieten Ihnen fachgerechte Sanitärarbeiten rund um Bad, Trinkwasser, Rohrsysteme und Entwässerungstechnik. Von der Modernisierung bis zur technischen Erneuerung erhalten Sie bei uns saubere und langlebige Lösungen.',
      points: [
        'Badmodernisierung',
        'Trinkwasserinstallation',
        'Rohrerneuerung & Leitungsumbau',
        'Wasseraufbereitung & Schutzarmaturen',
        'Abwasser- & Entwässerungstechnik',
        'Reparaturen & Instandsetzung'
      ],
      image: '/sanitär_Leistungen.png',
      isVisible: true,
      detailContent: {
        mainText: "Badplanung und Sanitärinstallation",
        description: "Im Bereich Sanitär bieten wir zuverlässige Lösungen rund um Bad, Trinkwasser und Installationstechnik. Ob Neuinstallation, Modernisierung oder Reparatur – wir arbeiten fachgerecht, sauber und nach Ihren individuellen Anforderungen.",
        benefits: ["Modernes Design", "Wassersparende Armaturen", "Saubere Ausführung"],
        galleryImages: ["https://picsum.photos/seed/s-g1/800/600", "https://picsum.photos/seed/s-g2/800/600"],
        customBlocks: [
          {
            title: "Dienstleistungen",
            text: "- Sanitärinstallationen im Neubau, Altbau und bei Sanierungen\n- Badsanierung, Badmodernisierung und Komplettbäder aus einer Hand\n- Vorwand- und Spülsysteme\n- Trinkwasser-, Warmwasser- und Zirkulationsinstallationen\n- Warmwasserspeicher und Frischwasserstationen\n- Elektrische Warmwasserbereitung\n- Wasserfilter, Druckminderer und Enthärtungsanlagen\n- Sicherheitstechnische Bauteile im Sanitärbereich\n- Hygienische Optimierung von Trinkwasseranlagen\n- Abwasser- und Entwässerungstechnik\n- Hebeanlagen und Rückstausicherungen\n- Wartung, Instandhaltung und Modernisierung von Sanitäranlagen"
          }
        ]
      }
    },
    {
      id: 'klima',
      title: 'Klima',
      text: 'Wir bieten moderne Klimaanlagen für Wohn- und Arbeitsbereiche und schaffen damit mehr Komfort, Effizienz und ein angenehmes Raumklima. Von der Planung bis zur Wartung erhalten Sie bei uns professionelle Lösungen aus einer Hand.',
      points: [
        'Klimaanlagen für Wohnräume',
        'Klimaanlagen für Gewerberäume',
        'Split- & Multi-Split-Systeme',
        'Planung & Montage',
        'Wartung & Reinigung',
        'Reparatur & Störungsbeseitigung'
      ],
      image: '/Klima_Leistungen.png',
      isVisible: true,
      detailContent: {
        mainText: "Angenehmes Klima zu jeder Jahreszeit",
        description: "Wir sorgen für ein angenehmes Raumklima mit modernen und effizienten Klimasystemen. Von der Planung bis zur Wartung erhalten Sie bei uns passende Lösungen für Wohn- und Gewerbeobjekte.",
        benefits: ["Präzise Temperaturregelung", "Geringer Energieverbrauch", "Luftreinigung inklusive"],
        galleryImages: ["https://picsum.photos/seed/k-g1/800/600", "https://picsum.photos/seed/k-g2/800/600"],
        customBlocks: [
          {
            title: "Dienstleistungen",
            text: "- Installation von Klimaanlagen für Wohn- und Gewerbeobjekte\n- Montage von Split- und Multisplit-Anlagen\n- Nachrüstung von Klimasystemen in Bestandsgebäuden\n- Wartung und Inspektion von Klimaanlagen\n- Reparatur und Störungsbeseitigung\n- Dichtheitsprüfung und Funktionskontrolle\n- Austausch veralteter Klimageräte\n- Optimierung bestehender Klimaanlagen\n- Beratung zur passenden Klimatisierungslösung\n- Kühl- und Heizlösungen mit modernen Klimasystemen\n- Verbesserung des Raumkomforts durch individuelle Klimakonzepte"
          }
        ]
      }
    },
    {
      id: 'solar',
      title: 'Solar',
      text: 'Mit modernen Solarlösungen unterstützen wir eine nachhaltige und energieeffiziente Gebäudetechnik. Wir integrieren Solarsysteme sinnvoll in neue oder bestehende Anlagen und schaffen wirtschaftliche Lösungen für Wärme und Energie.',
      points: [
        'Solarthermie',
        'Systemintegration',
        'Speichertechnik',
        'Hybridlösungen',
        'Wartung & Anlagenoptimierung'
      ],
      image: '/Solar_Leistungen.png',
      isVisible: true,
      detailContent: {
        mainText: "Nachhaltige Energie durch die Sonne",
        description: "Mit moderner Solartechnik unterstützen wir eine effiziente und nachhaltige Energieversorgung. Wir planen und installieren Solaranlagen passend zu Ihrem Gebäude und binden diese fachgerecht in bestehende Systeme ein.",
        benefits: ["CO2-Ersparnis", "Unabhängigkeit von Energiepreisen", "Langlebige Technik"],
        galleryImages: ["https://picsum.photos/seed/so-g1/800/600", "https://picsum.photos/seed/so-g2/800/600"],
        customBlocks: [
          {
            title: "Dienstleistungen",
            text: "- Planung und Installation von Solaranlagen\n- Integration von Solartechnik in bestehende Heizsysteme\n- Solarthermieanlagen zur Heizungsunterstützung\n- Solartechnik für die Warmwasserbereitung\n- Einbindung von Speichern und Systemkomponenten\n- Modernisierung bestehender Solaranlagen\n- Wartung und Funktionskontrolle von Solarsystemen\n- Reparatur und Instandsetzung von Solaranlagen\n- Optimierung der Anlageneffizienz\n- Beratung zu nachhaltigen Energielösungen\n- Individuelle Systemlösungen passend zum Gebäude und Bedarf"
          }
        ]
      }
    },
    {
      id: 'notdienst',
      title: 'Notdienst',
      text: 'Im Notfall sind wir schnell für Sie da. Bei akuten Störungen, Ausfällen oder dringenden Problemen im Bereich Sanitär, Heizung, Klima oder Versorgungstechnik unterstützen wir Sie zuverlässig und fachgerecht.',
      points: [
        'Schnelle Hilfe im Störungsfall',
        'Sanitär-Notfälle',
        'Heizungs-Notfälle',
        'Klimastörungen'
      ],
      image: '/Notdienst_Leistungen.png',
      isVisible: true,
      detailContent: {
        mainText: "24h Notdienst – Wir sind für Sie da!",
        description: "Im Notfall sind wir schnell zur Stelle. Bei akuten Störungen und Schäden im Bereich Heizung, Sanitär, Klima oder Solar sorgen wir für schnelle Hilfe, Schadensbegrenzung und eine fachgerechte erste Instandsetzung.",
        benefits: ["Schnelle Reaktionszeit", "Erfahrene Techniker", "Transparente Preise"],
        galleryImages: ["https://picsum.photos/seed/n-g1/800/600", "https://picsum.photos/seed/n-g2/800/600"],
        customBlocks: [
          {
            title: "Dienstleistungen",
            text: "- Heizungsausfall\n- Rohrbruch\n- Wasserleckagen\n- Wasserschäden\n- Abwasserstörungen\n- akute Heizungsstörungen\n- Störungen an Hybridanlagen\n- Ausfall von Biomassekesseln\n- Störungen an Solaranlagen\n- Notfallreparaturen"
          }
        ]
      }
    },
    {
      id: 'service',
      title: 'Unser Service',
      text: 'Wir bieten umfassende Serviceleistungen rund um Ihre Haustechnik.',
      points: ['Wartung', 'Reparatur', 'Planung', 'Beratung'],
      image: 'https://picsum.photos/seed/service_det/1200/800',
      isVisible: false,
      detailContent: {
        mainText: "Alles aus einer Hand",
        description: "Von der ersten Beratung bis zur regelmäßigen Wartung begleiten wir Sie zuverlässig.",
        benefits: ["Termintreue", "Saubere Arbeit", "Faire Konditionen"],
        galleryImages: ["https://picsum.photos/seed/s_v1/800/600"]
      }
    },
    {
      id: 'unternehmen',
      title: 'Unser Unternehmen',
      text: 'Als moderner Fachbetrieb für Sanitär, Heizung, Klima und Solar stehen wir für Qualität, Zuverlässigkeit und durchdachte Lösungen, die den Alltag spürbar angenehmer machen. Unser Anspruch ist es, Technik, Komfort und Energieeffizienz so zu verbinden, dass nicht nur funktionierende Systeme entstehen, sondern echte Lebensqualität. Denn wenn Komfort, Qualität und Zufriedenheit perfekt zusammenspielen, wird aus einem Haus ein echtes Zuhause.',
      points: [
        'Qualität und Zuverlässigkeit',
        'Durchdachte Lösungen',
        'Moderne Gebäudetechnik',
        'Energieeffizienz',
        'Lebensqualität durch Komfort',
        'Zufriedenheit unserer Kunden'
      ],
      image: 'https://picsum.photos/seed/company/1200/800',
      isVisible: false,
      detailContent: {
        mainText: 'Qualität, Zuverlässigkeit und echte Lebensqualität',
        description: 'Als moderner Fachbetrieb für Sanitär, Heizung, Klima und Solar stehen wir für Qualität, Zuverlässigkeit und durchdachte Lösungen, die den Alltag spürbar angenehmer machen. Unser Anspruch ist es, Technik, Komfort und Energieeffizienz so zu verbinden, dass nicht nur funktionierende Systeme entstehen, sondern echte Lebensqualität.\n\nWir beraten Sie umfassend und individuell zu Ihren Vorhaben. Dabei setzen wir auf hochwertige Materialien und eine fachgerechte Ausführung. Denn wenn Komfort, Qualität und Zufriedenheit perfekt zusammenspielen, wird aus einem Haus ein echtes Zuhause.',
        benefits: ['Individuelle Beratung', 'Fachgerechte Ausführung', 'Hochwertige Materialien'],
        galleryImages: ['https://picsum.photos/seed/team1/800/600', 'https://picsum.photos/seed/team2/800/600']
      }
    },
    {
      id: 'heizlast',
      title: 'Hydraulischer Abgleich und Normheizlast',
      text: 'Maximale Effizienz für Ihre Heizungsanlage durch präzise Berechnungen und fachgerechte Einregulierung.',
      points: [
        'Präzise Heizlastberechnung nach DIN EN 12831',
        'Hydraulischer Abgleich für optimalen Komfort',
        'Optimierung des Energieverbrauchs',
        'Förderfähigkeit sicherstellen'
      ],
      image: '/HeizlastundhydraulicherabgleichRatgeber.png',
      isVisible: false,
      detailContent: {
        mainText: "Effizienz durch Präzision",
        description: "Ein hydraulischer Abgleich sorgt dafür, dass jeder Heizkörper genau mit der Wärmemenge versorgt wird, die er benötigt. Dies spart bis zu 15% Energie.",
        benefits: ["Geringere Heizkosten", "Gleichmäßige Wärmeverteilung", "Voraussetzung für Förderungen"],
        galleryImages: ["https://picsum.photos/seed/hl-g1/800/600"],
        legalBasics: "Gemäß GEG (Gebäudeenergiegesetz) und VOB/C ist der hydraulische Abgleich bei vielen Maßnahmen Pflicht oder Voraussetzung für BAFA-Förderungen.",
        professionalInfo: "Wir nutzen modernste Software zur raumweisen Heizlastberechnung, um exakte Daten für Ihr Gebäude zu ermitteln.",
        customBlocks: [
          { title: "Gesetzliche Vorschriften", text: "Die Pflicht zum hydraulischen Abgleich wurde durch die EnSimiMaV (Mittelfristenergieversorgungssicherungsmaßnahmenverordnung) weiter verschärft." }
        ]
      }
    }
  ],
  ratgeberCards: [
    { 
      id: 'h-rg', 
      title: 'Heizung', 
      intro: 'Moderne Heizsysteme, effiziente Sanierungslösungen und wichtige Hinweise.', 
      image: '/HeizungRatgeber.png', 
      link: '/blog/h-rg',
      topText: 'Moderne Heizsysteme, effiziente Sanierungslösungen und wichtige Hinweise rund um Austausch, Betrieb und Optimierung Ihrer Heizungsanlage.',
      detailTitle: 'Heizung – aktuelle Themen, moderne Systeme und wichtige Hinweise',
      detailIntro: 'Wer heute eine Heizung plant, modernisiert oder austauscht, braucht mehr als nur ein neues Gerät. Entscheidend sind eine saubere Planung, das passende System für das Gebäude, eine wirtschaftliche Lösung im Betrieb und eine dauerhaft zuverlässige Technik. In unserem Heizungsratgeber erklären wir verständlich, welche Möglichkeiten es gibt, worauf Eigentümer und Bauherren achten sollten und welche Punkte bei Effizienz, Komfort und Zukunftssicherheit besonders wichtig sind.',
      posts: [
        { title: 'Heizung modernisieren: Was heute wirklich wichtig ist', text: 'Eine Heizungsmodernisierung sollte immer ganzheitlich betrachtet werden. Nicht nur das Heizgerät selbst, sondern auch Wärmeverteilung, Regelung, Dämmstandard und Warmwasserbereitung spielen eine wichtige Rolle. Wer hier von Anfang an richtig plant, vermeidet unnötige Kosten und schafft eine Lösung, die langfristig sinnvoll funktioniert.' },
        { title: 'Wärmepumpe im Altbau: Wann sie sinnvoll ist', text: 'Die Wärmepumpe ist für viele Gebäude eine interessante Lösung, aber nicht jede Immobilie ist gleich. Entscheidend sind unter anderem die vorhandenen Heizflächen, die benötigten Systemtemperaturen und der energetische Zustand des Hauses. Mit einer fachgerechten Prüfung lässt sich einschätzen, ob eine Wärmepumpe direkt passt oder ob zunächst Optimierungen sinnvoll sind.' },
        { title: 'Hybridheizung: Wenn mehrere Systeme sinnvoll zusammenarbeiten', text: 'In manchen Gebäuden kann eine Hybridlösung eine gute Wahl sein. Dabei werden verschiedene Wärmeerzeuger sinnvoll kombiniert, um Komfort, Versorgungssicherheit und Wirtschaftlichkeit miteinander zu verbinden. Wichtig ist, dass die Technik sauber abgestimmt ist und das Gesamtsystem hydraulisch und regelungstechnisch durchdacht geplant wird.' },
        { title: 'Heizkosten senken durch richtige Einstellung', text: 'Viele Heizungsanlagen arbeiten im Alltag nicht optimal. Zu hohe Vorlauftemperaturen, falsche Pumpeneinstellungen oder schlecht abgestimmte Heizkreise führen oft zu unnötigem Energieverbrauch. Bereits durch eine fachgerechte Optimierung lässt sich häufig spürbar mehr Effizienz erreichen.' },
        { title: 'Wartung und regelmäßige Kontrolle der Heizungsanlage', text: 'Eine Heizung sollte nicht erst dann Beachtung bekommen, wenn sie ausfällt. Regelmäßige Wartung hilft dabei, Störungen zu vermeiden, die Betriebssicherheit zu erhöhen und die Lebensdauer der Anlage zu verlängern. Gleichzeitig bleibt die Technik effizient und arbeitet zuverlässiger über many Jahre hinweg.' }
      ],
      ctaText: 'Sie möchten Ihre Heizung modernisieren, optimieren oder eine neue Lösung planen? Wir beraten Sie praxisnah und finden die Technik, die wirklich zu Ihrem Gebäude passt.'
    },
    { 
      id: 's-rg', 
      title: 'Sanitär', 
      intro: 'Nachhaltige Badkonzepte und innovative Trinkwassersysteme.', 
      image: '/SanitärRatgeber.png', 
      link: '/blog/s-rg',
      topText: 'Aktuelle Themen zu Trinkwasserhygiene, Badmodernisierung, Komfortlösungen und moderner Sanitärtechnik für Wohngebäude und Gewerbe.',
      detailTitle: 'Sanitär – moderne Badlösungen, Trinkwasserhygiene und zukunftssichere Technik',
      detailIntro: 'Sanitärtechnik bedeutet heute weit mehr als nur schöne Armaturen und moderne Bäder. Es geht um hygienisch sicheres Trinkwasser, langlebige Installationstechnik, komfortable Nutzung und eine Planung, die auch in Zukunft funktioniert. In unserem Sanitär-Ratgeber zeigen wir, worauf es bei Badmodernisierung, Trinkwasserinstallation, Leitungstechnik und modernen Komfortlösungen wirklich ankommt.',
      posts: [
        { title: 'Badmodernisierung: Komfort, Design und Funktion sinnvoll verbinden', text: 'Ein modernes Bad soll nicht nur gut aussehen, sondern auch im Alltag überzeugen. Entscheidend sind eine durchdachte Raumaufteilung, hochwertige Materialien und eine Technik, die zuverlässig funktioniert. So entsteht ein Bad, das optisch anspricht und gleichzeitig langlebig, pflegeleicht und praktisch bleibt.' },
        { title: 'Trinkwasserhygiene: Warum saubere Planung so wichtig ist', text: 'Trinkwasser gehört zu den sensibelsten Bereichen der Gebäudetechnik. Deshalb ist eine hygienisch sichere Ausführung besonders wichtig – von der Leitungsführung bis zur richtigen Nutzung der Anlage. Eine fachgerechte Planung hilft, Stagnation zu vermeiden und die Wasserqualität dauerhaft auf einem hohen Niveau zu halten.' },
        { title: 'Wasserfilter, Druckminderer und Enthärtungsanlagen sinnvoll einsetzen', text: 'Moderne Sanitäranlagen profitieren von zusätzlichen Schutz- und Komfortkomponenten. Wasserfilter schützen die Installation vor Partikeln, Druckminderer sorgen für stabile Druckverhältnisse und Enthärtungsanlagen können helfen, Kalkablagerungen zu reduzieren. Richtig eingesetzt tragen diese Bauteile zu Werterhalt, Komfort und Anlagenschutz bei.' },
        { title: 'Barrierearme Bäder modern gedacht', text: 'Ein barrierearmes Bad muss heute nicht nach Sonderlösung aussehen. Mit bodengleichen Duschen, durchdachten Bewegungsflächen und komfortabler Ausstattung lassen sich zeitgemäße Badezimmer schaffen, die sowohl funktional als auch stilvoll sind. Damit entsteht eine Lösung, die den Alltag erleichtert und langfristig mehr Lebensqualität bietet.' },
        { title: 'Alte Leitungen und veraltete Sanitärtechnik rechtzeitig erneuern', text: 'In älteren Gebäuden lohnt sich der Blick auf die vorhandene Sanitärinstallation. Veraltete Leitungen, alte Armaturen oder technisch überholte Komponenten können Komfort, Hygiene und Betriebssicherheit beeinträchtigen. Eine rechtzeitige Modernisierung schützt die Anlage und sorgt für einen zuverlässigen Betrieb.' }
      ],
      ctaText: 'Ob Badmodernisierung, Trinkwasserinstallation oder technische Aufwertung – wir unterstützen Sie mit durchdachten Sanitärlösungen für Bestand und Neubau.'
    },
    { 
      id: 'k-rg', 
      title: 'Klima', 
      intro: 'Effiziente Klimatisierung für das perfekte Raumklima.', 
      image: '/KlimaRatgeber.png', 
      link: '/blog/k-rg',
      topText: 'Zeitgemäße Klimatisierung, gesunde Raumluft und effiziente Kühllösungen für mehr Komfort im Alltag und im Arbeitsumfeld.',
      detailTitle: 'Klima – effiziente Kühlung, saubere Luft und moderner Raumkomfort',
      detailIntro: 'Moderne Klimatechnik sorgt heute nicht nur für angenehme Temperaturen, sondern auch für mehr Lebensqualität, bessere Arbeitsbedingungen und ein spürbar höheres Raumklima. Dabei kommt es auf weit mehr an als reine Kühlleistung. Energieeffizienz, Lautstärke, Hygiene, Bedienkomfort und die passende Systemauswahl sind entscheidend für eine Lösung, die dauerhaft überzeugt.',
      posts: [
        { title: 'Klimaanlage richtig wählen: Welche Lösung passt zum Objekt', text: 'Nicht jedes Gebäude braucht die gleiche Klimaanlage. Je nach Raumnutzung, Größe, Einbausituation und Komfortanspruch kommen unterschiedliche Systeme infrage. Eine saubere Auswahl sorgt dafür, dass Kühlleistung, Energieverbrauch und Nutzungskomfort optimal zusammenpassen.' },
        { title: 'Kühlen und Heizen mit einem System', text: 'Viele moderne Klimasysteme können nicht nur kühlen, sondern auch in Übergangszeiten effizient heizen. Das macht sie besonders interessant für einzelne Räume, Büros oder ergänzende Lösungen im Wohnbereich. Wichtig ist dabei, dass das System richtig ausgelegt und fachgerecht montiert wird.' },
        { title: 'Energieeffizienz bei Klimaanlagen verstehen', text: 'Eine gute Klimaanlage soll nicht nur leistungsstark, sondern auch wirtschaftlich im Betrieb sein. Deshalb lohnt sich der Blick auf Effizienz, Regelverhalten und den realen Einsatz im Alltag. Wer hier auf Qualität und Fachplanung setzt, spart langfristig Betriebskosten und erhöht den Komfort deutlich.' },
        { title: 'Wartung und Hygiene von Klimaanlagen', text: 'Eine Klimaanlage sollte regelmäßig kontrolliert und gereinigt werden. Nur so bleibt die Leistung stabil, die Luftqualität gut und die Technik zuverlässig. Wartung ist deshalb nicht nur ein Servicethema, sondern ein wichtiger Bestandteil für Komfort, Werterhalt und einen dauerhaft sicheren Betrieb.' },
        { title: 'Angenehmes Raumklima im Sommer richtig planen', text: 'Gerade in warmen Monaten steigt der Anspruch an Wohn- und Arbeitsräume deutlich. Eine gute Klimatisierung sorgt für angenehme Temperaturen, bessere Konzentration und mehr Wohlbefinden. Entscheidend ist, dass die Lösung nicht überdimensioniert, sondern passend zum Objekt geplant wird.' }
      ],
      ctaText: 'Sie suchen eine moderne Klimaanlage oder möchten bestehende Räume sinnvoll nachrüsten? Wir helfen Ihnen mit einer Lösung, die Komfort, Effizienz und Alltagstauglichkeit verbindet.'
    },
    { 
      id: 'so-rg', 
      title: 'Solar', 
      intro: 'Die Sonne als unerschöpfliche Energiequelle nutzen.', 
      image: '/SolarRatgeber.png', 
      link: '/blog/so-rg',
      topText: 'Smarte Lösungen rund um Solarenergie, Eigenverbrauch, Warmwasser und die sinnvolle Verbindung moderner Energietechnik.',
      detailTitle: 'Solar – moderne Energienutzung intelligent gedacht',
      detailIntro: 'Solartechnik ist heute ein zentraler Bestandteil moderner Gebäudekonzepte. Dabei geht es längst nicht mehr nur um einzelne Komponenten, sondern um das Zusammenspiel von Energieerzeugung, Eigenverbrauch, Speichertechnik und sinnvoller Nutzung im Alltag. In unserem Solar-Ratgeber zeigen wir, wie Solarlösungen heute gedacht werden und worauf es bei Planung, Wirtschaftlichkeit und technischer Abstimmung ankommt.',
      posts: [
        { title: 'Solarenergie sinnvoll nutzen statt nur Strom erzeugen', text: 'Eine gute Solarlösung endet nicht auf dem Dach. Entscheidend ist, wie der erzeugte Strom im Gebäude genutzt wird und wie sich verschiedene technische Bereiche miteinander verbinden lassen. Wer Erzeugung und Verbrauch sinnvoll abstimmt, holt deutlich mehr aus seiner Anlage heraus.' },
        { title: 'Photovoltaik und Gebäudetechnik zusammendenken', text: 'Photovoltaik wird besonders interessant, wenn sie mit moderner Haustechnik kombiniert wird. So lassen sich verschiedene Systeme intelligenter betreiben und energetisch besser aufeinander abstimmen. Genau hier entsteht der Unterschied zwischen einer Einzelmaßnahme und einem durchdachten Gesamtkonzept.' },
        { title: 'Solarthermie: Wann sie weiterhin sinnvoll ist', text: 'Auch die solare Wärmenutzung bleibt für viele Gebäude ein spannendes Thema. Je nach Nutzung, Warmwasserbedarf und Anlagentechnik kann Solarthermie eine interessante Ergänzung sein. Wichtig ist, die Lösung passend zum Gebäude und nicht pauschal zu betrachten.' },
        { title: 'Speicher und Eigenverbrauch richtig einordnen', text: 'Wer Solarstrom erzeugt, denkt oft automatisch auch an Speicherlösungen. Ob ein Speicher sinnvoll ist, hängt jedoch immer vom Gebäude, vom Verbrauchsverhalten und vom Nutzungskonzept ab. Eine fundierte Planung hilft, Investition und Nutzen realistisch zu bewerten.' },
        { title: 'Solar als Teil moderner Energiekonzepte', text: 'Die größte Stärke moderner Solartechnik liegt im Zusammenspiel mit anderen Systemen. Wird Solar intelligent in das Gebäude eingebunden, entsteht daraus ein zukunftsfähiges Energiekonzept mit hohem Nutzwert. Genau darauf sollte der Fokus bei jeder Planung liegen.' }
      ],
      ctaText: 'Sie möchten Solartechnik sinnvoll in Ihr Gebäude integrieren? Wir beraten Sie ganzheitlich und denken Energie, Wärme und Technik als funktionierende Gesamtlösung.'
    },
    { 
      id: 'n-rg', 
      title: 'Notdienst', 
      intro: 'Richtiges Verhalten im Notfall – so reagieren Sie bei Störungen.', 
      image: '/NotdienstRatgeber.png', 
      link: '/blog/n-rg',
      topText: 'Wichtige Sofortmaßnahmen und praktische Hinweise bei Störungen, Rohrbruch, Heizungsausfall, Wasserschäden oder Gasgeruch.',
      detailTitle: 'Notdienst – richtig handeln, Schäden begrenzen, schnell Hilfe bekommen',
      detailIntro: 'Wenn plötzlich die Heizung ausfällt, Wasser austritt oder eine Störung an der Haustechnik auftritt, zählt vor allem schnelles und richtiges Handeln. In unserem Notdienst-Ratgeber finden Sie wichtige Sofortmaßnahmen, erste Orientierung und praktische Hinweise für typische Notfälle im Bereich Sanitär, Heizung und Gebäudetechnik. So wissen Sie, was zu tun ist, bis fachgerechte Hilfe eintrifft.',
      posts: [
        { title: 'Rohrbruch: Was Sie sofort tun sollten', text: 'Bei einem Rohrbruch zählt jede Minute. Die Wasserzufuhr sollte so schnell wie möglich gestoppt werden, um größere Schäden zu vermeiden. Danach ist wichtig, die Lage zu sichern und schnell fachkundige Hilfe zu organisieren.' },
        { title: 'Heizungsausfall: Erste Schritte vor dem Notdienst', text: 'Wenn die Heizung ausfällt, muss nicht immer direkt ein größerer Defekt dahinterstecken. Oft lassen sich erste Punkte wie Anlagendruck, Stromversorgung oder offensichtliche Störmeldungen prüfen. Trotzdem gilt: Wenn Unsicherheit besteht, sollte die Anlage nicht eigenmächtig verändert, sondern fachgerecht überprüft werden.' },
        { title: 'Kein Warmwasser: Mögliche Ursachen richtig einordnen', text: 'Fehlendes Warmwasser kann verschiedene Gründe haben – von einer einfachen Störung bis zu einem technischen Defekt. Wichtig ist, die Situation ruhig einzuordnen und keine unüberlegten Eingriffe an der Anlage vorzunehmen. Mit einer fachgerechten Prüfung lässt sich die Ursache in der Regel schnell eingrenzen.' },
        { title: 'Gasgeruch: Sicherheit geht immer vor', text: 'Bei Gasgeruch steht Sicherheit an erster Stelle. In einer solchen Situation dürfen keine Risiken eingegangen werden. Wichtig ist, sofort richtig zu reagieren, Gefahrenquellen zu vermeiden und umgehend die zuständigen Stellen zu kontaktieren.' },
        { title: 'Wasserschaden: So begrenzen Sie Folgeschäden', text: 'Ein Wasserschaden betrifft oft nicht nur die sichtbare Stelle, sondern auch Böden, Wände und angrenzende Bereiche. Deshalb ist schnelles Handeln besonders wichtig. Wer sofort reagiert, kann den Schaden häufig deutlich begrenzen und weitere Folgen vermeiden.' }
      ],
      ctaText: 'Im Ernstfall sind wir für Sie da. Wenn es schnell gehen muss, unterstützen wir Sie mit fachgerechter Hilfe und klaren Lösungen.'
    },
    { 
      id: 'hl-rg', 
      title: 'Heizlast & Abgleich', 
      intro: 'Warum technische Präzision Energie und Geld spart.', 
      image: '/HeizlastundhydraulicherabgleichRatgeber.png', 
      link: '/blog/hl-rg',
      topText: 'Warum präzise Planung, richtige Dimensionierung und ein sauber eingestelltes Heizsystem entscheidend für Effizienz und Komfort sind.',
      detailTitle: 'Heizlast & Abgleich – die Grundlage für ein effizient funktionierendes Heizsystem',
      detailIntro: 'Ein Heizsystem arbeitet nur dann wirklich gut, wenn es sauber geplant und richtig eingestellt ist. Genau hier kommen Heizlastberechnung und hydraulischer Abgleich ins Spiel. Beide Themen sind entscheidend für Effizienz, Komfort, gleichmäßige Wärmeverteilung und einen wirtschaftlichen Anlagenbetrieb. In unserem Ratgeber erklären wir, warum diese Punkte so wichtig sind und weshalb moderne Heiztechnik ohne eine präzise Auslegung oft unter ihren Möglichkeiten bleibt.',
      posts: [
        { title: 'Warum die Heizlast keine grobe Schätzung sein sollte', text: 'Die Heizlast bildet die Grundlage für die richtige Dimensionierung einer Heizungsanlage. Wird sie zu hoch oder zu niedrig angesetzt, wirkt sich das direkt auf Effizienz, Komfort und Betriebskosten aus. Eine präzise Ermittlung sorgt dafür, dass das System wirklich zum Gebäude passt.' },
        { title: 'Hydraulischer Abgleich einfach erklärt', text: 'Beim hydraulischen Abgleich geht es darum, die Wärme im Gebäude gleichmäßig und bedarfsgerecht zu verteilen. Nur wenn alle Heizflächen richtig versorgt werden, arbeitet die Anlage effizient und komfortabel. In der Praxis wird dieser wichtige Schritt oft unterschätzt, obwohl er großen Einfluss auf den Betrieb hat.' },
        { title: 'Wärmepumpe richtig auslegen', text: 'Gerade moderne Wärmepumpensysteme reagieren besonders sensibel auf die richtige Planung. Deshalb sind passende Heizflächen, abgestimmte Volumenströme und eine korrekte Auslegung entscheidend. Wer hier sauber arbeitet, schafft bessere Voraussetzungen für einen wirtschaftlichen und störungsarmen Betrieb.' },
        { title: 'Warum falsche Einstellungen Energie kosten', text: 'Viele Anlagen verlieren Effizienz nicht wegen der Technik selbst, sondern wegen einer unpassenden Einstellung. Werden Temperaturen, Pumpenleistungen oder Heizkreise nicht richtig abgestimmt, steigt der Verbrauch oft unnötig an. Eine fachliche Optimierung kann hier spürbar helfen.' },
        { title: 'Saubere Planung schafft langfristige Betriebssicherheit', text: 'Heizlast und Abgleich sind keine theoretischen Nebenthemen, sondern wichtige Grundlagen für den Alltag. Sie helfen dabei, Reklamationen zu vermeiden, den Komfort zu verbessern und die Technik langfristig stabil zu betreiben. Genau deshalb lohnt sich eine sorgfältige Planung von Anfang an.' }
      ],
      ctaText: 'Sie möchten wissen, ob Ihre Anlage richtig ausgelegt und eingestellt ist? Wir prüfen Ihr System fachgerecht und zeigen Ihnen, wo Optimierung sinnvoll ist.'
    }
  ],
  blogPosts: [
    {
      id: 'bp-h-1',
      title: 'Heizung in Mannheim modernisieren: Wann ist der richtige Zeitpunkt?',
      excerpt: 'Erfahren Sie, wann eine Heizungsmodernisierung in Mannheim und Ludwigshafen sinnvoll ist, welche Anzeichen auf eine Störung hindeuten und warum regelmäßige Wartung sowie eine jährliche Kontrolle langfristig Betriebskosten senken können.',
      content: '### Der optimale Zeitpunkt für Ihre Heizung in Mannheim und Ludwigshafen\n\nEine Heizungsmodernisierung ist eine weitreichende Entscheidung für Eigentümer in Mannheim und Umgebung. Oft stellt sich die Frage: Soll man warten, bis eine akute Störung auftritt, oder ist ein vorausschauender Austausch wirtschaftlicher? Die Erfahrung zeigt, dass ein geplanter Heizungswechsel ohne Zeitdruck deutlich stressfreier verläuft und eine bessere Abstimmung auf Fördermöglichkeiten erlaubt.\n\n### Typische Anzeichen für Modernisierungsbedarf\n\nWenn Ihre Heizungsanlage älter als 15 bis 20 Jahre ist, arbeitet sie meist nicht mehr mit optimaler Energieeffizienz. Häufige Störungen, steigender Brennstoffverbrauch und teure Reparaturen deuten darauf hin, dass ein Austausch wirtschaftlicher sein kann. Auch neue gesetzliche Vorgaben durch das Gebäudeenergiegesetz (GEG) spielen bei der Entscheidungsfindung eine wichtige Rolle.\n\n### Effizienzsteigerung und jährliche Wartung\n\nModerne Brennwertgeräte oder Wärmepumpen arbeiten im Vergleich zu alten Konstanttemperaturkesseln extrem sparsam. Um diesen hocheffizienten Betrieb langfristig zu sichern, ist eine regelmäßige, jährliche Wartung unerlässlich. Sie schützt vor unerwarteten Ausfällen in der Heizperiode, sorgt für die Werterhaltung der Anlage und minimiert CO2-Emissionen.\n\n### Beratung und individuelle Analyse vor Ort\n\nJedes Gebäude in Mannheim und Ludwigshafen hat spezifische Anforderungen. Eine detaillierte Bestandsaufnahme bildet das Fundament für ein passendes Heizkonzept. Gerne analysieren wir Ihre bestehende Haustechnik und zeigen Ihnen herstellerunabhängig die sinnvollsten Optionen auf.',
      date: '2026-05-10',
      category: 'Heizung',
      image: '/HeizungRatgeber.png'
    },
    {
      id: 'bp-h-2',
      title: 'Wärmepumpe in Mannheim und Ludwigshafen: Wann passt sie wirklich zum Gebäude?',
      excerpt: 'Nicht jede Immobilie ist gleich. Dieser Beitrag zeigt, wann eine Wärmepumpe in Mannheim oder Ludwigshafen sinnvoll ist, welche Rolle Heizflächen, Systemtemperaturen, Wartung und eine saubere Planung für einen effizienten und störungsarmen Betrieb spielen.',
      content: '### Die Wärmepumpe als zukunftssichere Heizung\n\nIn Mannheim und Ludwigshafen gewinnt die Umstellung auf Wärmepumpentechnik stetig an Bedeutung. Eine Wärmepumpe nutzt Umweltwärme hocheffizient, vorausgesetzt, die Rahmenbedingungen des Gebäudes stimmen. Doch wann ist der Einsatz im Altbau oder teilsanierten Bestand wirklich sinnvoll?\n\n### Heizflächen und Systemtemperaturen\n\nDer Wirkungsgrad einer Wärmepumpe hängt maßgeblich von der Vorlauftemperatur ab. Eine Fußbodenheizung ist ideal, aber kein absolutes Muss. Auch groß dimensionierte Flachheizkörper können ausreichen, um das Gebäude an kalten Tagen behaglich zu erwärmen. Eine raumweise Heizlastberechnung nach DIN EN 12831-1 liefert hier verlässliche technische Gewissheit.\n\n### Zuverlässiger Betrieb und sorgfältige Planung\n\nUm einen störungsfreien Betrieb und maximale Energieeffizienz zu garantieren, ist eine sorgfältige Fachplanung notwendig. Auch die Wasserbeschaffenheit im Heizkreis spielt eine Rolle – hier setzen wir auf die Einhaltung der VDI 2035 Richtlinie zur Vermeidung von Steinbildung und Korrosionsschäden. Zudem sichert eine jährliche Wartung die Langlebigkeit aller Komponenten.\n\n### Ihr Weg zur passenden Lösung\n\nLassen Sie uns gemeinsam prüfen, ob Ihr Gebäude in Mannheim oder Ludwigshafen bereit ist für eine Wärmepumpe. Wir bewerten die Gegebenheiten sachlich und planen eine maßgeschneiderte Lösung für Ihr Zuhause.',
      date: '2026-05-12',
      category: 'Heizung',
      image: '/HeizungRatgeber.png'
    },
    {
      id: 'bp-s-1',
      title: 'Badmodernisierung in Mannheim: Was heute wirklich wichtig ist',
      excerpt: 'Von der Planung bis zur Ausführung: So gelingt eine moderne Badmodernisierung in Mannheim und Ludwigshafen. Erfahren Sie, worauf es bei Komfort, Funktion, Trinkwasserhygiene und langlebiger Sanitärtechnik ankommt.',
      content: '### Zeitgemäße Badgestaltung im Raum Mannheim\n\nEin Badezimmer ist heute weit mehr als nur ein funktionaler Raum – es ist ein persönlicher Rückzugsort. Bei einer professionellen Badmodernisierung in Mannheim und Ludwigshafen gilt es, modernes Design mit zukunftssicherer und langlebiger Sanitärtechnik zu verbinden.\n\n### Komfort, Barrierefreiheit und Raumaufteilung\n\nEgal ob kleines Bad oder großzügiger Wellnessbereich: Eine intelligente Raumplanung schafft Bewegungsfreiheit. Bodengleiche Duschen, rutschhemmende Oberflächen und clevere Lichtkonzepte sorgen für Komfort auf ganzer Linie und machen das Bad fit für jede Lebensphase.\n\n### Trinkwasserhygiene und unsichtbare Qualität\n\nWährend Fliesen und Armaturen optisch im Vordergrund stehen, entscheidet die Technik hinter der Wand über dauerhafte Zufriedenheit. Die Einhaltung strenger Normanforderungen (wie DIN EN 806 und DIN 1988) schützt vor Stagnationswasser und sichert die Trinkwasserhygiene über Jahrzehnte. Auch der Schallschutz und professionelle Abdichtungsverfahren sind unverzichtbar.\n\n### Fachgerechte Umsetzung aus einer Hand\n\nWir begleiten Sie von der ersten Entwurfsidee bis zum fertigen Traumbad. Verlassen Sie sich auf saubere Handwerksleistung und eine zuverlässige Koordination aller Arbeitsschritte in Mannheim und Umgebung.',
      date: '2026-05-14',
      category: 'Sanitär',
      image: '/SanitärRatgeber.png'
    },
    {
      id: 'bp-s-2',
      title: 'Trinkwasserhygiene in Mannheim und Ludwigshafen: Warum saubere Planung entscheidend ist',
      excerpt: 'Stagnation, alte Leitungen und fehlende Wartung können Probleme verursachen. Dieser Beitrag zeigt, warum eine fachgerechte Sanitärplanung, regelmäßige Kontrolle und rechtzeitige Erneuerung für Hygiene und Betriebssicherheit wichtig sind.',
      content: '### Höchste Priorität für unser Lebensmittel Nummer 1\n\nSauberes Trinkwasser ist für unsere Gesundheit und Lebensqualität im Raum Mannheim und Ludwigshafen unverzichtbar. Doch erst im Gebäude entscheidet sich, ob das Wasser mikrobiologisch einwandfrei an der Entnahmestelle ankommt. Fehler in der Leitungsführung können zu schwerwiegenden Hygienemängeln wie Legionellenbildung führen.\n\n### Die Gefahren von Stagnation und Temperaturfehlern\n\nVerweilt Wasser zu lange in den Rohrleitungen (Stagnation), verschlechtert sich die Trinkwasserhygiene rapide. Ein weiteres Risiko sind falsche Systemtemperaturen: Kaltwasserleitungen dürfen sich nicht unzulässig erwärmen, während Warmwassersysteme konstant über 60 °C gehalten werden müssen. Die Einhaltung der technischen Regeln nach DIN EN 806, DIN 1988 und des DVGW-Regelwerks ist daher bei jeder Sanitärplanung Pflicht.\n\n### Wartung, Spülung und Sanierung alter Systeme\n\nRegelmäßige Kontrollen der Haustechnik, der Zustand der Filter und die fachgerechte Inbetriebnahme von selten genutzten Leitungen minimieren Risiken. Bei älteren Immobilien in Mannheim oder Ludwigshafen empfiehlt sich eine genaue Überprüfung und bei Bedarf eine gezielte Sanierung veralteter Rohrnetze nach den aktuellen Richtlinien von DIN EN 12056 und DIN 1986-100.\n\n### Beratung zur Trinkwassersicherheit\n\nSchützen Sie die Gesundheit Ihrer Familie oder Mieter. Wir analysieren Ihre Installationen und sorgen mit fachgerechten Lösungen für dauerhafte Hygiene und Betriebssicherheit.',
      date: '2026-05-16',
      category: 'Sanitär',
      image: '/SanitärRatgeber.png'
    },
    {
      id: 'bp-k-1',
      title: 'Klimaanlage in Mannheim warten: So bleiben Effizienz und Hygiene erhalten',
      excerpt: 'Eine regelmäßige Wartung der Klimaanlage in Mannheim und Ludwigshafen hilft, Störungen zu vermeiden, die Luftqualität zu verbessern und die Anlage langfristig effizient und zuverlässig zu betreiben.',
      content: '### Sommerkomfort mit hygienischer Raumluft\n\nIn den heißen Sommermonaten im Raum Mannheim und Ludwigshafen ist eine Klimaanlage eine wahre Wohltat. Doch um dauerhaft für gesunde Abkühlung zu sorgen, benötigt das Klimagerät eine regelmäßige, jährliche Untersuchung. Nur so bleiben Energieeffizienz und Raumluftqualität auf hohem Niveau.\n\n### Vermeidung von Störungen und hohem Stromverbrauch\n\nIm Laufe des Betriebs sammeln sich Staub, Pollen und andere Schwebstoffe in den Filtern und Wärmetauschern an. Dies schränkt den Luftstrom ein, wodurch die Klimaanlage härter arbeiten muss. Die Folge: Der Energieverbrauch steigt spürbar an, und das Risiko für eine technische Störung nimmt zu. Ein gereinigtes System schont somit Ihren Geldbeutel und die Umwelt.\n\n### Hygiene und Gesundheit im Fokus\n\nFeuchtigkeit am Kondensator kann ohne regelmäßige Desinfektion einen Nährboden für Bakterien und Pilze bilden. Eine fachgerechte Wartung umfasst deshalb die gründliche Reinigung aller Komponenten, die Überprüfung des Kältemittelkreislaufs sowie eine hygienische Desinfektion. So atmen Sie stets saubere, frische Luft.\n\n### Zuverlässiger Wartungsservice\n\nSichern Sie die Einsatzbereitschaft Ihrer Klimaanlage rechtzeitig vor der nächsten Hitzewelle. Wir bieten Ihnen im Raum Mannheim und Ludwigshafen den passenden Service für alle gängigen Klimasysteme.',
      date: '2026-05-18',
      category: 'Klima',
      image: '/KlimaRatgeber.png'
    },
    {
      id: 'bp-k-2',
      title: 'Klimaanlage in Mannheim und Ludwigshafen: Welche Lösung passt zum Objekt?',
      excerpt: 'Ob Wohnung, Büro oder Gewerbe: Wir erklären, welche Klimaanlage zum Objekt passt, warum die richtige Auslegung so wichtig ist und wie Wartung, Kontrolle und saubere Montage spätere Störungen reduzieren.',
      content: '### Maßgeschneiderte Klimatisierung für jedes Gebäude\n\nDie Klimaanforderungen in Mannheim und Ludwigshafen sind vielfältig. Eine private Wohnung benötigt ein anderes Klimakonzept als ein großes Büro oder eine gewerbliche Verkaufsfläche. Um spätere Störungen auszuschließen und eine exzellente Energieeffizienz zu gewährleisten, ist die präzise Auswahl des Systems entscheidend.\n\n### Von der Single-Split- bis zur VRF-Multisplit-Anlage\n\nFür einzelne Räume wie das Schlafzimmer eignet sich eine klassische Single-Split-Klimaanlage. Sollen dagegen mehrere Räume unabhängig voneinander klimatisiert werden, bieten Multisplit-Systeme hohe Flexibilität bei platzsparender Außenmontage. Im gewerblichen Umfeld sorgen hochentwickelte VRF-Anlagen für punktgenaue Temperaturregelung und optimalen Luftwechsel.\n\n### Wichtige Kriterien: Leistung, Platzierung und Montage\n\nNeben der Kühlleistung spielen Luftverteilung, Schallschutz und Ästhetik eine tragende Rolle bei der Planung. Nur eine fachgerechte Auslegung und saubere Montage garantieren einen flüsterleisen Betrieb und verhindern Zugluft. Eine regelmäßige Wartung sichert den Werterhalt über viele Jahre.\n\n### Individuelle Bedarfsanalyse vor Ort\n\nWir ermitteln die Kühllast für Ihr Objekt im Raum Mannheim oder Ludwigshafen und konfigurieren ein hocheffizientes System, das perfekt zu Ihren Anforderungen und Ihrem Budget passt.',
      date: '2026-05-20',
      category: 'Klima',
      image: '/KlimaRatgeber.png'
    },
    {
      id: 'bp-so-1',
      title: 'Solar in Mannheim: Wie sinnvoll ist moderne Solartechnik wirklich?',
      excerpt: 'Solarenergie in Mannheim und Ludwigshafen can deutlich mehr als nur Strom erzeugen. Erfahren Sie, wie Eigenverbrauch, Warmwasser, Wirtschaftlichkeit und die richtige Einbindung in die Gebäudetechnik zusammenwirken.',
      content: '### Nachhaltige Energie vom eigenen Dach\n\nDie Sonne liefert auch in Mannheim und Ludwigshafen reichlich Energie, die sich mit moderner Solartechnik effizient nutzen lässt. Für Immobilienbesitzer bietet die Installation einer Photovoltaik- oder Solarthermieanlage eine hervorragende Möglichkeit, sich von steigenden Energiepreisen unabhängiger zu machen.\n\n### Eigenverbrauch optimieren mit Batteriespeichern\n\nDie bloße Einspeisung ins öffentliche Netz ist heute wirtschaftlich weniger attraktiv als der direkte Eigenverbrauch des erzeugten Stroms. Durch den Einsatz moderner Batteriespeicher lässt sich dieser Eigenanteil massiv steigern. So nutzen Sie Ihren Solarstrom genau dann, wenn Sie ihn im Alltag tatsächlich benötigen – auch nach Sonnenuntergang.\n\n### Intelligente Verbindung mit der Haustechnik\n\nBesonders effizient wird Solarenergie, wenn sie mit anderen Systemen wie einer Wärmepumpe oder einer Brauchwasser-Wärmepumpe verknüpft wird. Der überschüssige Solarstrom lässt sich so direkt für Heizung und Warmwasser nutzen, was die Rentabilität des Gesamtsystems weiter erhöht. Die regelmäßige, fachgerechte Wartung garantiert dabei jahrzehntelange Erträge.\n\n### Ihr Einstieg in die Solarenergie\n\nGerne prüfen wir die solare Eignung Ihrer Dachfläche im Raum Mannheim oder Ludwigshafen und planen ein maßgeschneidertes Energiekonzept für Ihr Gebäude.',
      date: '2026-05-22',
      category: 'Solar',
      image: '/SolarRatgeber.png'
    },
    {
      id: 'bp-so-2',
      title: 'Photovoltaik und Haustechnik in Ludwigshafen und Mannheim sinnvoll kombinieren',
      excerpt: 'Eine Solaranlage funktioniert am besten als Teil eines Gesamtkonzepts. Dieser Beitrag zeigt, wie Solar, Heizung, Warmwasser und Verbrauch intelligent aufeinander abgestimmt werden können.',
      content: '### Der Schlüssel zur echten Energieeffizienz\n\nWer in Ludwigshafen oder Mannheim über die Anschaffung einer Solaranlage nachdenkt, sollte diese nie isoliert betrachten. Die wahre Stärke moderner Photovoltaik entfaltet sich erst, wenn sie intelligent mit der übrigen Gebäudetechnik (Heizung, Lüftung, Warmwasser und E-Mobilität) verschmilzt.\n\n### Sektorenkopplung: Solarstrom für Wärme und Mobilität\n\nDurch eine gezielte Verknüpfung von Photovoltaik und einer modulierenden Wärmepumpe lässt sich ein beträchtlicher Teil des Energiebedarfs für Heizung und Warmwasser direkt solar decken. Intelligente Energiemanager steuern die Verbraucher so, dass sie vorrangig bei hoher Sonneneinstrahlung arbeiten. Das steigert die Energieeffizienz enorm und reduziert Störungen durch unnötige Taktzyklen der Heizung.\n\n### Planung, Wartung und Betriebssicherheit\n\nDamit das Zusammenspiel reibungslos klappt, müssen alle Komponenten regelungstechnisch sauber aufeinander abgestimmt sein. Eine professionelle Installation nach den gängigen Richtlinien und Normen sowie eine regelmäßige Wartung stellen sicher, dass die Haustechnik effizient und zuverlässig arbeitet.\n\n### Ganzheitliche Konzepte für Ihr Gebäude\n\nPlanen Sie langfristig und zukunftssicher. Wir entwickeln für Sie im Raum Mannheim und Ludwigshafen ganzheitliche Energiekonzepte, die Ökonomie und Ökologie perfekt vereinen.',
      date: '2026-05-24',
      category: 'Solar',
      image: '/SolarRatgeber.png'
    },
    {
      id: 'bp-hl-1',
      title: 'Hydraulischer Abgleich in Mannheim: Warum er für Effizienz und Komfort so wichtig ist',
      excerpt: 'Ein hydraulischer Abgleich sorgt in Mannheim und Ludwigshafen für eine gleichmäßige Wärmeverteilung, weniger Störungen und einen effizienteren Betrieb der Heizungsanlage – besonders bei Modernisierung und Wärmepumpe.',
      content: '### Gleichmäßige Wärme im ganzen Haus\n\nWer kennt es nicht? Einige Heizkörper im Haus werden kochend heiß, während andere kaum warm werden. Die Ursache dafür ist fast immer eine ungleiche Wasserverteilung im Rohrnetz. Abhilfe schafft hier ein fachgerecht durchgeführter hydraulischer Abgleich, der in Mannheim und Ludwigshafen für ein ausgeglichenes System sorgt.\n\n### Wie funktioniert der hydraulische Abgleich?\n\nBeim hydraulischen Abgleich wird jeder einzelne Heizkörper bzw. Heizkreis genau auf den benötigten Wasserdurchfluss eingestellt. So erhält jeder Raum exakt die Wärmemenge, die für die gewünschte Raumtemperatur erforderlich ist. Hierzu berechnet die Fachkraft zunächst die raumweise Heizlast und stellt die Thermostatventile entsprechend ein.\n\n### Steigerung der Energieeffizienz und Heizkosten-Senkung\n\nOhne Abgleich arbeiten Heizungspumpen oft mit viel zu hoher Leistung und die Vorlauftemperatur wird unnötig hoch eingestellt, was zu erheblichem Mehrverbrauch führt. Durch den Abgleich läuft die Anlage deutlich leiser, Störungen werden minimiert, und die Betriebssicherheit steigt. Zudem ist der hydraulische Abgleich oft Voraussetzung für attraktive staatliche Förderungen (z.B. über die BAFA oder KfW) und nach dem Gebäudeenergiegesetz (GEG) teilweise gesetzlich gefordert.\n\n### Fachgerechte Durchführung in Ihrer Region\n\nWir führen den hydraulischen Abgleich für Ihr Objekt in Mannheim oder Ludwigshafen fachgerecht und sauber durch. Spüren Sie sofort mehr Wohnkomfort und sparen Sie spürbar Heizkosten.',
      date: '2026-05-25',
      category: 'Hydraulischer Abgleich & Heizlastberechnung',
      image: '/HeizlastundhydraulicherabgleichRatgeber.png'
    },
    {
      id: 'bp-hl-2',
      title: 'Heizlastberechnung in Mannheim und Ludwigshafen: Warum richtige Auslegung entscheidend ist',
      excerpt: 'Eine präzise Heizlastberechnung ist die Grundlage für die richtige Dimensionierung. Erfahren Sie, warum Schätzwerte oft zu Problemen führen und wie eine saubere Planung Betrieb, Wartung und Effizienz verbessert.',
      content: '### Das Fundament jeder effizienten Heizungsanlage\n\nDie Heizlastberechnung nach DIN EN 12831-1 ist das wichtigste Werkzeug für eine fachgerechte Heizungsplanung. Sie ermittelt wissenschaftlich präzise, wie viel Wärmeleistung ein Gebäude und jeder einzelne Raum an den kältesten Tagen des Jahres benötigt. Leider wird darauf im Raum Mannheim und Ludwigshafen noch zu oft verzichtet, und es wird auf grobe Schätzwerte zurückgegriffen.\n\n### Die Risiken von Über- und Unterdimensionierung\n\nWird eine Heizungsanlage – besonders eine moderne Wärmepumpe – nur geschätzt, drohen erhebliche Nachteile. Ein überdimensionierter Erzeuger neigt zu häufigem Ein- und Ausschalten („Takten“), was zu vorzeitigem Verschleiß der Bauteile, Störungen und einem schlechten Wirkungsgrad führt. Ein unterdimensioniertes System hingegen bringt das Haus an klirrend kalten Wintertagen nicht auf die gewünschte Temperatur.\n\n### Pflicht bei Sanierung und Förderansprüchen\n\nEine raumweise Heizlastberechnung ist die technische Voraussetzung für den hydraulischen Abgleich und wird von vielen Fördergebern zwingend verlangt, um Zuschüsse freizugeben. Wer hier vorausschauend investiert, sichert sich maximale Energieeffizienz und schont die Haustechnik langfristig.\n\n### Präzise Planung für Ihr Gebäude\n\nWir überlassen die Leistungsfähigkeit Ihrer neuen Heizung nicht dem Zufall. Mit moderner Berechnungssoftware ermitteln wir exakt die Heizlast für Ihr Gebäude im Raum Mannheim und Ludwigshafen.',
      date: '2026-05-25',
      category: 'Hydraulischer Abgleich & Heizlastberechnung',
      image: '/HeizlastundhydraulicherabgleichRatgeber.png'
    },
    {
      id: 'bp-v-1',
      title: 'Aktuelle Vorgaben, Förderungen und technische Hinweise für Mannheim und Ludwigshafen',
      excerpt: 'Ein kompakter Überblick zu GEG, Förderungen, technischer Planung und wichtigen Hinweisen für Eigentümer in Mannheim und Ludwigshafen – verständlich, sachlich und ohne unnötige Komplexität.',
      content: '### Die Energiewende im Gebäude verständlich erklärt\n\nGesetze, Verordnungen und Förderprogramme ändern sich häufig und werfen bei vielen Eigentümern im Raum Mannheim und Ludwigshafen Fragen auf. Das Gebäudeenergiegesetz (GEG) setzt klare Vorgaben für den Einbau neuer Heizungen und fordert schrittweise den Einsatz von mindestens 65 % erneuerbaren Energien. Doch wie lässt sich dies im Alltag pragmatisch umsetzen?\n\n### Förderungen klug nutzen und Fehler vermeiden\n\nStaatliche Zuschüsse über die KfW oder das BAFA bieten attraktive Unterstützung bei der Heizungsmodernisierung oder energetischen Sanierung. Um Förderungen nicht zu gefährden, müssen technische Nachweise wie die raumweise Heizlastberechnung nach DIN EN 12831-1 und der Nachweis über den hydraulischen Abgleich zwingend erbracht werden. Hier ist die Zusammenarbeit mit einem zertifizierten Fachhandwerksbetrieb unerlässlich.\n\n### Wichtiger technischer Hinweis vorab\n\nBitte beachten Sie: gesetzliche Vorgaben, technische Richtlinien (wie DIN 1988, VDI 2035) und Förderbedingungen der Bundesförderung für effiziente Gebäude (BEG) unterliegen einem stetigen Wandel. Eine detaillierte, projektbezogene Prüfung Ihrer Immobilie vor Ort ist die einzige Gewährleistung für Planungs- und Investitionssicherheit.\n\n### Kompetente Beratung für Ihr Vorhaben\n\nWir behalten die aktuellen rechtlichen und technischen Rahmenbedingungen für Sie im Blick. Sprechen Sie uns an – wir beraten Sie verständlich, unabhängig und zukunftssicher.',
      date: '2026-05-25',
      category: 'Vorgaben & Hinweise',
      image: '/Heizung_Startseite_Neu.png'
    }
  ],
  gallery: [
    { id: '1', image: 'https://picsum.photos/seed/work-h/800/600', isVisible: true },
    { id: '2', image: 'https://picsum.photos/seed/work-s/800/600', isVisible: true },
    { id: '3', image: 'https://picsum.photos/seed/work-k/800/600', isVisible: true },
    { id: '4', image: 'https://picsum.photos/seed/work-so/800/600', isVisible: true },
    { id: '5', image: 'https://picsum.photos/seed/work-n/800/600', isVisible: true },
    { id: '6', image: 'https://picsum.photos/seed/work-hl/800/600', isVisible: true },
  ],
  jobs: [
    {
      id: 'anlagenmechaniker',
      title: 'Anlagenmechaniker SHK (m/w/d)',
      description: 'Wir suchen einen erfahrenen Anlagenmechaniker für Sanitär-, Heizungs- und Klimatechnik zur Verstärkung unseres Teams in Mannheim.',
      tasks: [
        'Installation von Heizungs- und Sanitäranlagen',
        'Wartungs- und Instandsetzungsarbeiten',
        'Kundendienst und Fehlerdiagnose',
        'Baustellenkoordination vor Ort'
      ],
      requirements: [
        'Abgeschlossene Ausbildung als Anlagenmechaniker SHK',
        'Mehrjährige Berufserfahrung wünschenswert',
        'Führerschein Klasse B',
        'Selbstständige und saubere Arbeitsweise'
      ],
      qualifications: [
        'Fachausweis Anlagenmechaniker',
        'Zusatzqualifikationen im Bereich Wärmepumpen von Vorteil'
      ],
      location: 'Mannheim & Umgebung',
      type: 'Vollzeit',
      isVisible: true
    },
    {
      id: 'kundendienstmonteur',
      title: 'Kundendienstmonteur (m/w/d)',
      description: 'Verstärken Sie unseren Service im Bereich Wartung und Reparatur.',
      tasks: [
        'Durchführung von Wartungsarbeiten',
        'Behebung von Störungen',
        'Inbetriebnahme neuer Anlagen'
      ],
      requirements: [
        'Erfahrung im Kundendienst',
        'Sicheres Auftreten beim Kunden'
      ],
      qualifications: ['Gesellenbrief'],
      location: 'Mannheim',
      type: 'Vollzeit',
      isVisible: true
    }
  ],
  processDetails: [
    {
      id: 'beratung',
      title: 'Beratung & Planung',
      mainText: 'Ihr Projekt beginnt mit dem richtigen Gespräch.',
      descriptionOfWork: 'Wir nehmen uns Zeit für Ihre Wünsche und analysieren die Gegebenheiten vor Ort.',
      process: '1. Erstgespräch | 2. Bestandsaufnahme | 3. Konzeptentwicklung | 4. Angebotserstellung',
      definition: 'Beratung bedeutet für uns, technisches Know-how mit Ihren persönlichen Bedürfnissen in Einklang zu bringen.',
      importance: 'Eine fundierte Beratung verhindert Fehlplanungen und spart langfristig Kosten.',
      image: 'https://picsum.photos/seed/advice/1200/600',
      introText: 'Eine saubere Beratung und Planung ist die Grundlage für jedes erfolgreiche Projekt. Bevor eine Anlage installiert oder modernisiert wird, prüfen wir die Ausgangssituation, besprechen Ihre Wünsche und entwickeln eine Lösung, die technisch sinnvoll, wirtschaftlich durchdacht und langfristig zuverlässig ist. So schaffen wir von Anfang an Klarheit, vermeiden unnötige Kosten und sorgen für einen reibungslosen Ablauf.',
      remarkText: 'Wir begleiten Ihr Projekt von Anfang an mit einer strukturierten Beratung und durchdachten Planung. Von der ersten Besprechung über die Bestandsaufnahme bis zur Konzeptentwicklung und Angebotserstellung schaffen wir eine fundierte Grundlage für eine technisch saubere und wirtschaftlich sinnvolle Umsetzung.',
      steps: [
        { title: '1. Erstgespräch', text: 'Im Erstgespräch lernen wir Ihr Vorhaben, Ihre Wünsche und die wichtigsten Rahmenbedingungen genau kennen. Dabei besprechen wir, worum es konkret geht, welche Ziele Sie haben, welche Anforderungen erfüllt werden sollen und welche Vorstellungen Sie bereits mitbringen. Das Gespräch dient dazu, den Bedarf richtig einzuordnen, erste Möglichkeiten aufzuzeigen und eine klare Grundlage für die nächsten Schritte zu schaffen.' },
        { title: '2. Bestandsaufnahme', text: 'Bei der Bestandsaufnahme wird die vorhandene Situation vor Ort genau geprüft. Dabei erfassen wir die baulichen Gegebenheiten, den technischen Bestand, mögliche Besonderheiten und alle wichtigen Anschluss- oder Platzverhältnisse. So erhalten wir ein realistisches Bild der Ausgangslage und können die weitere Planung exakt auf das Objekt und die tatsächlichen Bedingungen abstimmen.' },
        { title: '3. Konzeptentwicklung', text: 'Auf Basis der aufgenommenen Daten entwickeln wir ein passendes technisches Konzept für Ihr Vorhaben. Dabei berücksichtigen wir Funktion, Effizienz, Wirtschaftlichkeit, Nutzungsanforderungen und eine fachgerechte Umsetzbarkeit. Ziel ist es, nicht einfach irgendeine Lösung zu wählen, sondern ein stimmiges Gesamtkonzept zu erstellen, das in der Praxis zuverlässig funktioniert und zu Ihrem Objekt passt.' },
        { title: '4. Angebotserstellung', text: 'Nach der Beratung und Planung erhalten Sie ein transparentes und nachvollziehbares Angebot. Darin werden die vorgesehenen Leistungen, der geplante Umfang und die einzelnen Arbeitsschritte übersichtlich zusammengefasst. So wissen Sie von Anfang an, welche Leistungen vorgesehen sind, wie die Umsetzung geplant ist und auf welcher Grundlage das Projekt ausgeführt wird.' }
      ]
    },
    {
      id: 'installation',
      title: 'Installation',
      mainText: 'Qualität in der Ausführung ist unser Maßstab.',
      descriptionOfWork: 'Unsere Experten installieren Ihre neuen Anlagen nach höchsten technischen Standards.',
      process: '1. Vorbereitung | 2. Montage | 3. Prüfung | 4. Inbetriebnahme',
      definition: 'Die Installation umfasst den fachgerechten Einbau und Anschluss aller Systemkomponenten.',
      importance: 'Nur eine präzise Installation garantiert die volle Leistungsfähigkeit und Langlebigkeit Ihrer Technik.',
      image: 'https://picsum.photos/seed/install/1200/600',
      introText: 'Die fachgerechte Installation ist entscheidend für die Qualität, Sicherheit und Langlebigkeit einer technischen Anlage. Deshalb arbeiten wir strukturiert, sauber und mit einem klaren Ablauf. Von der Vorbereitung über die Montage bis zur abschließenden Inbetriebnahme achten wir darauf, dass alle Arbeiten präzise ausgeführt und alle Komponenten fachgerecht eingebunden werden.',
      remarkText: 'Bei der Installation achten wir auf eine fachgerechte, saubere und präzise Ausführung aller Arbeiten. Durch eine gute Vorbereitung, sorgfältige Montage, abschließende Prüfung und professionelle Inbetriebnahme stellen wir sicher, dass Ihre Anlage zuverlässig und betriebsbereit übergeben wird.',
      steps: [
        { title: '1. Vorbereitung', text: 'Vor Beginn der eigentlichen Arbeiten wird die Baustelle und der gesamte Ablauf sorgfältig vorbereitet. Dazu gehören die Abstimmung der Arbeitsschritte, die Prüfung der Voraussetzungen vor Ort, die Materialplanung und die Organisation eines sauberen und sicheren Arbeitsbereichs. Eine gute Vorbereitung sorgt dafür, dass die Installation effizient, geordnet und ohne unnötige Verzögerungen durchgeführt werden kann.' },
        { title: '2. Montage', text: 'In der Montagephase werden die vorgesehenen Komponenten fachgerecht eingebaut und miteinander verbunden. Dabei achten wir auf eine saubere Ausführung, passgenaue Installation und eine technisch einwandfreie Einbindung in das bestehende oder neue System. Ziel ist eine langlebige, sichere und optisch ordentliche Umsetzung, die sowohl funktional als auch handwerklich überzeugt.' },
        { title: '3. Prüfung', text: 'Nach der Montage werden die installierten Komponenten und Verbindungen sorgfältig geprüft. Dabei kontrollieren wir, ob alle Bauteile korrekt montiert wurden, die Anlage ordnungsgemäß angeschlossen ist und die technischen Voraussetzungen für einen sicheren Betrieb erfüllt sind. Diese Prüfung ist ein wichtiger Schritt, um Fehler frühzeitig zu erkennen und eine zuverlässige Funktion sicherzustellen.' },
        { title: '4. Inbetriebnahme', text: 'Bei der Inbetriebnahme wird das installierte System fachgerecht gestartet, eingestellt und auf seine Funktion überprüft. Dabei werden die einzelnen Komponenten aufeinander abgestimmt, die wichtigsten Betriebswerte kontrolliert und die Anlage in einen ordnungsgemäßen Betriebszustand versetzt. So stellen wir sicher, dass die Technik nicht nur eingebaut, sondern auch korrekt eingestellt und betriebsbereit an Sie übergeben wird.' }
      ]
    },
    {
      id: 'wartung',
      title: 'Wartung',
      mainText: 'Sicherheit und Effizienz durch regelmäßige Pflege.',
      descriptionOfWork: 'Wir überprüfen Ihre Anlagen regelmäßig, um Ausfälle zu vermeiden und die Effizienz zu erhalten.',
      process: '1. Inspektion | 2. Reinigung | 3. Funktionstest | 4. Protokollierung',
      definition: 'Wartung ist die vorbeugende Instandhaltung Ihrer gebäudetechnischen Systeme.',
      importance: 'Regelmäßige Wartung erhöht die Lebensdauer und sichert Garantieansprüche.',
      image: 'https://picsum.photos/seed/maintain/1200/600',
      introText: 'Regelmäßige Wartung trägt dazu bei, die Betriebssicherheit, Effizienz und Lebensdauer technischer Anlagen langfristig zu erhalten. Durch planmäßige Kontrollen und gezielte Servicearbeiten können Abnutzung, Verschmutzungen oder Funktionsstörungen frühzeitig erkannt und behoben werden. So lassen sich Ausfälle vermeiden und die Anlage bleibt zuverlässig im Betrieb.',
      remarkText: 'Mit regelmäßiger Wartung sorgen wir dafür, dass Ihre Anlage dauerhaft sicher, effizient und funktionsfähig bleibt. Durch Inspektion, Reinigung, Funktionstest und Protokollierung können mögliche Störungen frühzeitig erkannt und die Lebensdauer der Technik verbessert werden.',
      steps: [
        { title: '1. Inspektion', text: 'Bei der Inspektion überprüfen wir den allgemeinen Zustand der Anlage sowie die wesentlichen Bauteile und Funktionen. Dabei achten wir auf sichtbare Abnutzung, Auffälligkeiten, Verschleißerscheinungen und mögliche Schwachstellen. Die Inspektion dient dazu, den technischen Zustand frühzeitig zu bewerten und notwendige Maßnahmen rechtzeitig zu erkennen.' },
        { title: '2. Reinigung', text: 'Im Rahmen der Wartung werden relevante Bauteile und Bereiche fachgerecht gereinigt, damit die Anlage dauerhaft sauber und funktionsfähig bleibt. Ablagerungen, Verschmutzungen oder betriebsbedingte Rückstände können die Leistung beeinträchtigen und auf Dauer zu Störungen führen. Durch eine gezielte Reinigung unterstützen wir einen zuverlässigen und effizienten Anlagenbetrieb.' },
        { title: '3. Funktionstest', text: 'Nach der Kontrolle und Reinigung wird die Anlage auf ihre ordnungsgemäße Funktion geprüft. Dabei testen wir, ob die einzelnen Komponenten wie vorgesehen arbeiten und ob das System im normalen Betrieb zuverlässig reagiert. So können mögliche Fehlfunktionen erkannt und die Betriebssicherheit der Anlage sichergestellt werden.' },
        { title: '4. Protokollierung', text: 'Zum Abschluss werden die durchgeführten Arbeiten, die festgestellten Zustände und gegebenenfalls empfohlene Maßnahmen dokumentiert. Die Protokollierung schafft Transparenz, dient als Nachweis der Wartung und gibt einen klaren Überblick über den aktuellen Zustand der Anlage. So sind alle wichtigen Informationen nachvollziehbar festgehalten.' }
      ]
    }
  ],
  sectionVisibility: {
    intro: true,
    unternehmen: false, // Bereich "Unser Unternehmen" vorerst verdeckt
    service: true,
    highlights: true,
    referenzen: true,
    karriere: true,
    service_promise: true,
    blog: false,
    ratgeber: true,
    social: true,
  },
  seo: {
    title: 'Adler² Gebäudetechnik | Ihr Partner für Heizung, Sanitär, Klima & Solar',
    description: 'Adler² Gebäudetechnik ist Ihr kompetenter Fachbetrieb für Heizung, Sanitär, Klima und Solar in Mannheim, Ludwigshafen und Umgebung. 24h Notdienst verfügbar.',
    keywords: 'Heizung, Sanitär, Klima, Solar, Mannheim, Ludwigshafen, Notdienst, Gebäudetechnik',
    ogImage: 'https://picsum.photos/seed/adler-og-shk/1200/630',
  },
  forms: {
    contactForm: {
      title: 'Schreiben Sie uns',
      subtitle: 'Wir freuen uns auf Ihre Anfrage und melden uns zeitnah bei Ihnen.',
      submitButtonText: 'Nachricht absenden',
      successMessage: 'Vielen Dank für Ihr Vertrauen. Wir werden uns in Kürze bei Ihnen melden.',
      fields: [
        { id: 'name', label: 'Vor-/Nachname / Firma', type: 'text', placeholder: 'Max Mustermann / Musterfirma GmbH', required: true },
        { id: 'email', label: 'E-Mail Adresse', type: 'email', placeholder: 'ihre@mail.de', required: true },
        { id: 'phone', label: 'Telefonnummer', type: 'tel', placeholder: '+49 123 456789', required: true },
        { id: 'service', label: 'Service', type: 'select', placeholder: '', required: true, options: ['Heizung', 'Sanitär', 'Klima', 'Solar', 'Notdienst', 'Instandhaltungsverträge'] },
        { id: 'message', label: 'Ihre Nachricht', type: 'textarea', placeholder: 'Wie können wir Ihnen helfen?', required: true },
      ],
    },
  },
  navigation: {
    items: [
      { id: 'start', name: 'Startseite', path: '/', isVisible: false, order: 0 },
      { id: 'unternehmen', name: 'Unser Unternehmen', path: '/unternehmen', isVisible: true, order: 1 },
      { id: 'service', name: 'Unser Service', path: '/service', isVisible: true, order: 2 },
      { id: 'heizung', name: 'Heizung', path: '/heizung', isVisible: true, order: 3 },
      { id: 'sanitaer', name: 'Sanitär', path: '/sanitaer', isVisible: true, order: 4 },
      { id: 'klima', name: 'Klima', path: '/klima', isVisible: true, order: 5 },
      { id: 'solar', name: 'Solar', path: '/solar', isVisible: true, order: 6 },
      { id: 'notdienst', name: 'Notdienst', path: '/notdienst', isVisible: true, order: 7 },
      { id: 'galerie', name: 'Galerie', path: '/galerie', isVisible: false, order: 8 },
      { id: 'karriere', name: 'Karriere', path: '/karriere', isVisible: false, order: 9 },
      { id: 'blog', name: 'Ratgeber', path: '/blog', isVisible: false, order: 10 },
      { id: 'kontakt', name: 'Kontakt', path: '/kontakt', isVisible: true, order: 11 },
    ],
    branding: {
      showLogo: true,
      showText: false,
      customText: "Adler² Gebäudetechnik",
      logoHeight: "56px",
      logoUrl: "/logo.png"
    }
  },
  pages: {
    servicesOverview: {
      title: 'Unser Service',
      introText: 'Von der persönlichen Beratung bis zur zuverlässigen Umsetzung stehen wir Ihnen mit Fachwissen, Sorgfalt und Engagement zur Seite. Wir bieten individuelle Konzepte, saubere Handwerksarbeit und verlässlichen Service für spürbaren Komfort und nachhaltige Lösungen.'
    },
    ratgeber: {
      introText: 'Mit unserem Ratgeber möchten wir Ihnen nicht nur Technik erklären, sondern echte Orientierung geben. Verständlich, praxisnah und auf das Wesentliche konzentriert – damit Sie bessere Entscheidungen für Ihre Immobilie, Ihre Haustechnik und Ihren Komfort treffen können.'
    }
  },
  layout: {
    hero: { alignment: 'center', order: 0, showTitle: true, showSubtitle: true },
    intro: { alignment: 'center', order: 1, showTitle: true, showSubtitle: true },
    service: { alignment: 'center', order: 2, showTitle: true, showSubtitle: true },
    highlights: { alignment: 'center', order: 3, showTitle: true, showSubtitle: true },
    service_promise: { alignment: 'center', order: 4, showTitle: true, showSubtitle: true },
    referenzen: { alignment: 'center', order: 5, showTitle: true, showSubtitle: true },
    karriere: { alignment: 'left', order: 6, imagePosition: 'right', showTitle: true, showSubtitle: true },
    ratgeber: { alignment: 'center', order: 7, showTitle: true, showSubtitle: true },
    contact_info: { alignment: 'center', order: 8, showTitle: true, showSubtitle: true },
    contact_form: { alignment: 'center', order: 9, showTitle: true, showSubtitle: true },
    unternehmen: { alignment: 'left', order: 99, imagePosition: 'right', showTitle: false, showSubtitle: false },
    blog: { alignment: 'center', order: 99, showTitle: false, showSubtitle: false },
    social: { alignment: 'center', order: 99, showTitle: true, showSubtitle: true },
    process: { alignment: 'center', order: 99, showTitle: true, showSubtitle: true },
  },
  designSettings: {
    primaryColor: '#0a1e36',
    accentColor: '#d4af37',
    fontFamilyTitle: 'Inter',
    fontFamilyBody: 'Inter',
    fontSizeBase: '16px',
    heroOverlayOpacity: 0.4,
    headerHeight: '80px',
    borderRadius: '2px',
    buttonStyle: 'square',
    titleColor: '#0a1e36',
    bodyColor: '#4b5563',
    footerBgColor: '#0a1e36',
    footerTextColor: '#ffffff',
    headingWeight: '800',
    bodyWeight: '400',
    sectionPadding: 'py-24'
  },
  authorizedAdmins: ['osm.ymz535@gmail.com']
};

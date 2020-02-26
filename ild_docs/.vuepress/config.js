module.exports = {
    title: 'Ebook',
    description: "Καλώς Ήρθατε στο ηλεκτρονικό βιβλίο του ILD",
    base: "/ebook/",
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://use.fontawesome.com/releases/v5.8.0/css/all.css'
        }],
        ['link', {
            rel: "shortcut icon",
            href: "/images/favicon.ico"
        }],
    ],
    themeConfig: {
        smoothScroll: true,
        displayAllHeaders: false,
        nav: [{
                text: 'Κεφάλαια',
                ariaLabel: 'Chapter Menu',
                items: [{
                        text: 'Εισαγωγή',
                        link: '/Chapters/Einleitung/'
                    },
                    {
                        text: 'Άρθρο και κλίσεις',
                        link: '/Chapters/ArtikelundDeklinationen/'
                    },
                    {
                        text: 'Αριθμοί',
                        link: '/Chapters/Zahlen/'
                    },
                    {
                        text: 'Ρήματα',
                        link: '/Chapters/Verben/'
                    },
                    {
                        text: 'Προθέσεις',
                        link: '/Chapters/Präpositionen/'
                    },
                    {
                        text: 'Προτάσεις',
                        link: '/Chapters/Vorschläge/'
                    },
                    {
                        text: 'Επίθετα',
                        link: '/Chapters/Adjektive/'
                    }
                ]
            },
            {
                text: 'Play',
                ariaLabel: 'Play Menu',
                items: [{
                        text: 'Κάρτες',
                        link: '/Chapters/Karten/'
                    },
                    {
                        text: 'Κουίζ',
                        link: '/Chapters/Quiz/'
                    }
                ]
            }
        ],
        sidebar: [
            ['/', 'Αρχική'],
            '/Chapters/Einleitung/',
            '/Chapters/ArtikelundDeklinationen/',
            '/Chapters/Zahlen/',
            '/Chapters/Verben/',
            '/Chapters/Präpositionen/',
            '/Chapters/Vorschläge/',
            '/Chapters/Adjektive/',
            '/Chapters/Karten/',
            '/Chapters/Quiz/'

        ]
    },
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ]
}
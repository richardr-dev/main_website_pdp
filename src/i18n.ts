export type Lang = 'id' | 'en'

/** Indonesian lives at the root, English under /en. */
export const langFromPath = (path: string): Lang => (path === '/en' || path.startsWith('/en/') ? 'en' : 'id')
export const basePath = (path: string) => (langFromPath(path) === 'en' ? path.slice(3) || '/' : path)
export const localize = (path: string, lang: Lang) => (lang === 'en' ? (path === '/' ? '/en' : `/en${path}`) : path)
/** A section link on the homepage, e.g. home('features', 'en') → /en#features. */
export const home = (hash: string, lang: Lang) => `${localize('/', lang)}#${hash}`

const id = {
  nav: { features: 'Fitur', sizes: 'Untuk siapa', how: 'Cara kerja', faq: 'FAQ', signIn: 'Masuk', sales: 'Hubungi sales', switchLabel: 'EN', switchName: 'English' },
  hero: {
    tag: 'Dari usaha mikro hingga enterprise',
    title: 'Pembukuan yang selalu seimbang, di mana pun Anda berjualan.',
    lead: 'Faktur, stok, buku besar, dan laporan pajak dalam satu aplikasi. Penjualan dari toko dan marketplace langsung tercatat.',
  },
  ledger: { caption: 'Neraca saldo', example: 'Contoh', account: 'Akun', debit: 'Debit', credit: 'Kredit', total: 'Total', balanced: 'Seimbang',
    rows: ['Kas & bank', 'Piutang usaha', 'Utang usaha', 'PPN keluaran', 'Pendapatan'] },
  features: {
    eyebrow: 'Fitur',
    title: 'Semua yang dibutuhkan pembukuan usaha Anda.',
    items: [
      ['Faktur penjualan', 'Buat faktur, pantau yang sudah dan belum dibayar, dan simpan semua dokumen di satu tempat.'],
      ['Penjualan marketplace', 'Pesanan dari Shopee, Tokopedia, TikTok Shop, Lazada, dan toko Anda sendiri masuk ke satu pembukuan.'],
      ['Stok & pembelian', 'Stok berkurang otomatis saat terjual, dengan HPP rata-rata, pembelian dari pemasok, dan stok opname.'],
      ['Buku besar', 'Jurnal dibuat otomatis dari setiap transaksi, sehingga buku besar dan saldo selalu cocok.'],
      ['Laporan pajak', 'Lembar kerja Faktur Pajak dan SPT PPN bulanan, diperiksa dulu dan siap dipakai di Coretax DJP.'],
      ['Laporan keuangan', 'Laba rugi, neraca, dan arus kas siap kapan saja untuk pemilik, manajemen, bank, atau investor.'],
    ],
  },
  sizes: {
    eyebrow: 'Untuk setiap skala',
    title: 'Tumbuh bersama usaha Anda.',
    items: [
      ['Usaha mikro & kecil', 'Mulai dari faktur, stok, dan penjualan marketplace tanpa harus paham akuntansi. Jurnal dibuat otomatis.'],
      ['Usaha menengah', 'Pembelian dari pemasok, beberapa gudang, dan laporan pajak bulanan yang siap untuk Coretax DJP.'],
      ['Enterprise', 'Beberapa brand dalam satu organisasi, hak akses per peran untuk tim keuangan, pajak, dan gudang, serta tutup buku per periode.'],
    ],
  },
  how: {
    eyebrow: 'Cara kerja',
    title: 'Dari obrolan pertama sampai laporan pertama.',
    steps: [
      ['01', 'Hubungi sales', 'Ceritakan usaha Anda. Kami tunjukkan aplikasinya dan siapkan akun Anda.'],
      ['02', 'Siapkan pembukuan', 'Kami bantu memasukkan bagan akun, produk, pelanggan, dan saldo awal.'],
      ['03', 'Jualan, catat, laporkan', 'Jalankan pembukuan harian di satu tempat dan tutup buku tiap bulan dengan laporan siap pajak.'],
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan yang sering diajukan.',
    items: [
      ['Untuk siapa PatuhData Accounting?', 'Untuk usaha di Indonesia dari skala mikro, kecil, dan menengah hingga enterprise, yang ingin faktur, stok, pembukuan, dan laporan pajak dalam satu aplikasi, bukan di banyak spreadsheet.'],
      ['Apakah cocok untuk perusahaan yang lebih besar?', 'Ya. Satu organisasi dapat mengelola beberapa brand dan gudang, dengan hak akses per peran (admin, keuangan, pajak, gudang, dan lainnya) serta tutup buku per periode.'],
      ['Apakah saya harus paham akuntansi?', 'Tidak harus. Jurnal dibuat otomatis dari penjualan, pembelian, dan pembayaran, dan tim kami membantu saat penyiapan.'],
      ['Bagaimana dengan pajak dan Coretax?', 'Aplikasi menyiapkan lembar kerja Faktur Pajak dan SPT PPN dari pembukuan yang sama. Nomor Faktur Pajak resmi tetap diterbitkan melalui Coretax DJP.'],
      ['Bagaimana cara mulai?', 'Akun dibuat oleh tim sales kami. Hubungi kami, lalu kami siapkan akun dan bantu memasukkan data usaha serta saldo awal.'],
      ['Siapa di balik PatuhData?', 'PT PatuhData Solusi Nusantara, perusahaan perangkat lunak di Jakarta, Indonesia.'],
    ],
  },
  cta: { title: 'Mulai pembukuan yang rapi hari ini.' },
  footer: {
    tagline: 'Faktur, stok, buku besar, dan laporan pajak dalam satu aplikasi, untuk usaha dari skala mikro hingga enterprise.',
    product: 'Produk', account: 'Akun', contact: 'Kontak',
    privacy: 'Privasi', terms: 'Ketentuan', cookies: 'Cookie', cookieSettings: 'Pengaturan Cookie',
  },
  notFound: { title: 'Halaman tidak ditemukan', text: 'Halaman ini mungkin sudah dipindahkan.', back: 'Ke beranda' },
  whatsapp: 'Halo PatuhData, saya ingin tahu lebih lanjut tentang PatuhData Accounting untuk usaha saya.',
  contact: {
    kicker: 'HUBUNGI SALES',
    title: 'Bicara dengan tim sales kami.',
    lead: 'Ceritakan sedikit tentang usaha Anda dan cara Anda mencatat keuangan saat ini. Kami tunjukkan aplikasinya dan siapkan akun untuk usaha Anda.',
    nextTitle: 'Langkah berikutnya',
    next: ['Tim sales kami menghubungi Anda untuk mengatur jadwal.', 'Kami tunjukkan aplikasinya sesuai kebutuhan usaha Anda.', 'Kami siapkan akun dan bantu memasukkan data usaha Anda.'],
    direct: 'Ingin langsung menghubungi kami?',
    successTitle: 'Terima kasih. Pesan Anda sudah terkirim.',
    successText: 'Tim sales kami akan segera menghubungi Anda. Anda juga bisa menghubungi kami di',
    formLabel: 'Pesan untuk sales',
    formEyebrow: 'USAHA ANDA',
    formTitle: 'Ceritakan tentang pembukuan Anda.',
    formIntro: 'Beberapa detail membantu kami menyiapkan panggilan sesuai cara usaha Anda bekerja.',
    name: 'Nama lengkap', namePlaceholder: 'Nama Anda',
    email: 'Email', emailPlaceholder: 'nama@usaha.com',
    company: 'Nama usaha', companyPlaceholder: 'Nama usaha Anda',
    phone: 'Telepon / WhatsApp', optional: 'Opsional',
    interest: 'Apa yang bisa kami bantu?', interestPlaceholder: 'Pilih salah satu',
    interests: ['Buka akun untuk usaha saya', 'Minta demo', 'Pindah dari aplikasi akuntansi lain', 'Pertanyaan tentang akun saya', 'Lainnya'],
    message: 'Ada yang perlu kami ketahui?', messagePlaceholder: 'Contoh: berapa faktur yang Anda buat per bulan, marketplace yang Anda pakai, atau aplikasi pembukuan Anda sekarang.',
    timeline: 'Kapan ingin mulai?', timelinePlaceholder: 'Pilih waktu',
    timelines: ['Secepatnya', 'Dalam 30 hari', 'Dalam 1–3 bulan', 'Masih melihat-lihat'],
    error: 'Pesan Anda belum terkirim. Coba lagi atau email ke',
    submit: 'Kirim pesan', sending: 'Mengirim…',
    privacy: 'Kami memakai data ini hanya untuk membalas pesan Anda. Jangan cantumkan kata sandi, dokumen identitas, atau data rahasia di formulir ini.',
    privacyLink: 'Kebijakan Privasi',
  },
}

export type Copy = typeof id

const en: Copy = {
  nav: { features: 'Features', sizes: 'Who it’s for', how: 'How it works', faq: 'FAQ', signIn: 'Sign in', sales: 'Contact sales', switchLabel: 'ID', switchName: 'Bahasa Indonesia' },
  hero: {
    tag: 'From micro businesses to enterprises',
    title: 'Books that balance, wherever you sell.',
    lead: 'Invoicing, stock, ledgers and tax reports in one app. Sales from your shop and marketplaces are recorded automatically.',
  },
  ledger: { caption: 'Trial balance', example: 'Example', account: 'Account', debit: 'Debit', credit: 'Credit', total: 'Total', balanced: 'Balanced',
    rows: ['Cash & bank', 'Accounts receivable', 'Accounts payable', 'VAT output', 'Revenue'] },
  features: {
    eyebrow: 'Features',
    title: 'Everything your business needs for its books.',
    items: [
      ['Invoicing', 'Issue invoices, track what is paid and what is due, and keep every document in one place.'],
      ['Marketplace sales', 'Orders from Shopee, Tokopedia, TikTok Shop, Lazada and your own shop land in one set of books.'],
      ['Stock & purchasing', 'Stock goes down automatically when you sell, with average cost of goods, supplier purchases and stock counts.'],
      ['Ledgers', 'Journals are posted automatically from every transaction, so the ledger and balances always agree.'],
      ['Tax reports', 'Monthly Faktur Pajak and VAT return worksheets, checked first and ready to use in Coretax DJP.'],
      ['Financial reports', 'Profit and loss, balance sheet and cash flow, ready any time for owners, management, banks or investors.'],
    ],
  },
  sizes: {
    eyebrow: 'For every size',
    title: 'Grows with your business.',
    items: [
      ['Micro & small businesses', 'Start with invoicing, stock and marketplace sales, no accounting knowledge needed. Journals are posted for you.'],
      ['Medium businesses', 'Supplier purchasing, several warehouses and monthly tax reports ready for Coretax DJP.'],
      ['Enterprises', 'Several brands under one organisation, role-based access for finance, tax and warehouse teams, and period closing.'],
    ],
  },
  how: {
    eyebrow: 'How it works',
    title: 'From first call to your first report.',
    steps: [
      ['01', 'Talk to sales', 'Tell us about your business. We show you the app and set up your account.'],
      ['02', 'Set up your books', 'We help you add your chart of accounts, products, customers and opening balances.'],
      ['03', 'Sell, record, report', 'Run daily bookkeeping in one place and close each month with reports ready for tax.'],
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    items: [
      ['Who is PatuhData Accounting for?', 'Businesses in Indonesia of every size, from micro, small and medium businesses to enterprises, that want invoicing, stock, bookkeeping and tax reports in one app instead of scattered spreadsheets.'],
      ['Does it suit larger companies?', 'Yes. One organisation can run several brands and warehouses, with role-based access (admin, finance, tax, warehouse and more) and period closing.'],
      ['Do I need to know accounting?', 'No. Journals are posted automatically from sales, purchases and payments, and our team helps you during setup.'],
      ['What about tax and Coretax?', 'The app prepares Faktur Pajak and VAT return worksheets from the same books. Official Faktur Pajak numbers are still issued through Coretax DJP.'],
      ['How do I get started?', 'Accounts are set up by our sales team. Contact us and we will create your account and help you add your business data and opening balances.'],
      ['Who is behind PatuhData?', 'PT PatuhData Solusi Nusantara, a software company based in Jakarta, Indonesia.'],
    ],
  },
  cta: { title: 'Start keeping books that balance.' },
  footer: {
    tagline: 'Invoicing, stock, ledgers and tax reports in one app, for businesses from micro to enterprise.',
    product: 'Product', account: 'Account', contact: 'Contact',
    privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies', cookieSettings: 'Cookie Settings',
  },
  notFound: { title: 'Page not found', text: 'This page may have moved.', back: 'Go to the homepage' },
  whatsapp: 'Hello PatuhData, I would like to know more about PatuhData Accounting for my business.',
  contact: {
    kicker: 'CONTACT SALES',
    title: 'Talk to our sales team.',
    lead: 'Tell us a little about your business and how you keep your books today. We will show you the app and set up an account for your business.',
    nextTitle: 'What happens next',
    next: ['Our sales team contacts you to arrange a call.', 'We walk you through the app with your use case.', 'We set up your account and help you add your business data.'],
    direct: 'Prefer to reach us directly?',
    successTitle: 'Thank you. Your inquiry was sent.',
    successText: 'Our sales team will contact you shortly. You can also reach us at',
    formLabel: 'Sales inquiry',
    formEyebrow: 'YOUR BUSINESS',
    formTitle: 'Tell us about your books.',
    formIntro: 'A few details help us prepare for a call about how your business works.',
    name: 'Full name', namePlaceholder: 'Your name',
    email: 'Email', emailPlaceholder: 'name@business.com',
    company: 'Business name', companyPlaceholder: 'Your business name',
    phone: 'Phone / WhatsApp', optional: 'Optional',
    interest: 'How can we help?', interestPlaceholder: 'Select an option',
    interests: ['Set up an account for my business', 'Book a demo', 'Moving from another accounting app', 'Question about my account', 'Something else'],
    message: 'Anything we should know?', messagePlaceholder: 'For example: how many invoices you send each month, the marketplaces you sell on, or the bookkeeping app you use today.',
    timeline: 'When would you like to start?', timelinePlaceholder: 'Select a timeframe',
    timelines: ['As soon as possible', 'Within 30 days', 'In the next 1–3 months', 'Just exploring'],
    error: 'Your inquiry could not be sent. Please try again or email',
    submit: 'Send my inquiry', sending: 'Sending…',
    privacy: 'We only use these details to reply to your inquiry. Please do not include passwords, identity documents or confidential records in this form.',
    privacyLink: 'Privacy Policy',
  },
}

export const copy: Record<Lang, Copy> = { id, en }

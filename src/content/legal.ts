import type { Lang } from '../i18n'

/** A paragraph or list item; [text](href) becomes a link, **text** becomes bold. */
type Section = { h: string; p?: string[]; list?: string[]; after?: string[] }
export type LegalDoc = { kicker: string; title: string; updated: string; sections: Section[] }
export type LegalKey = 'privacy' | 'terms' | 'cookies'

const privacyId: LegalDoc = {
  kicker: 'Legal', title: 'Kebijakan Privasi', updated: 'Terakhir diperbarui: 15 November 2026',
  sections: [
    { h: '1. Siapa Kami', p: [
      'Kebijakan Privasi ini berlaku untuk PT PatuhData Solusi Nusantara ("PatuhData", "kami"), badan usaha PT PMDN yang terdaftar di Indonesia, pengelola situs patuhdata.id dan aplikasi PatuhData Accounting.',
      'Kontak: [hello@patuhdata.id](mailto:hello@patuhdata.id) | +62 819 0337 8000 | Jakarta, Indonesia',
    ] },
    { h: '2. Data yang Kami Kumpulkan', p: ['Kami mengumpulkan data pribadi dalam keadaan berikut:'], list: [
      '**Formulir hubungi sales:** nama, nama usaha, email, nomor WhatsApp, kebutuhan, waktu mulai, dan pesan Anda.',
      '**Catatan persetujuan:** ID persetujuan acak, waktu, versi kebijakan, cara persetujuan, dan kategori cookie yang dipilih. Catatan di peramban tidak sengaja memuat nama atau email Anda.',
      '**Analitik:** jika Anda menerima cookie analitik, kami mengumpulkan data penggunaan anonim (halaman yang dikunjungi, durasi kunjungan, jenis peramban). Analitik tidak mengumpulkan informasi yang mengidentifikasi Anda secara langsung.',
      '**Korespondensi email:** jika Anda menghubungi kami lewat email, kami menyimpan isi pesan dan alamat email Anda.',
    ], after: ['Situs ini tidak mengumpulkan data kartu pembayaran, nomor identitas resmi, atau data pribadi spesifik (sebagaimana diatur dalam Pasal 4 UU PDP).'] },
    { h: '3. Dasar Pemrosesan', p: ['Berdasarkan UU PDP No. 27 Tahun 2022, kami memproses data pribadi Anda atas dasar berikut:'], list: [
      '**Persetujuan (Pasal 20):** untuk cookie analitik, melalui mekanisme persetujuan cookie di situs ini.',
      '**Kepentingan yang sah (Pasal 20):** untuk membalas pesan yang Anda kirim melalui formulir, tanpa mengesampingkan hak Anda.',
      '**Pelaksanaan perjanjian:** untuk pelanggan PatuhData Accounting, pemrosesan diperlukan untuk menjalankan perjanjian layanan.',
    ] },
    { h: '4. Penggunaan Data', list: [
      'Membalas pertanyaan atau permintaan Anda kepada tim sales',
      'Menyiapkan dan mengelola akun serta layanan yang Anda gunakan',
      'Mengirim komunikasi terkait layanan (bukan pemasaran tanpa persetujuan)',
      'Meningkatkan situs dan layanan kami (hanya analitik anonim)',
      'Memenuhi kewajiban hukum menurut hukum Indonesia',
    ] },
    { h: '5. Masa Penyimpanan', p: [
      'Data pertanyaan dan email dapat disimpan hingga 3 tahun sejak interaksi terakhir, kecuali periode lebih lama diperlukan untuk layanan atau kewajiban hukum. Cookie persetujuan disimpan hingga 1 tahun, dan riwayat di peramban menyimpan 20 keputusan persetujuan terakhir. Data analitik mengikuti pengaturan penyimpanan penyedia.',
    ] },
    { h: '6. Berbagi Data', p: ['Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk pemasaran. Kami dapat membagikan data kepada:'], list: [
      '**Penyedia layanan:** Vercel menjadi hosting situs, Web3Forms memproses formulir, dan Google Analytics memproses data penggunaan hanya setelah ada persetujuan analitik.',
      '**Kewajiban hukum:** otoritas di Indonesia (termasuk lembaga pelindungan data pribadi, Komdigi, atau penegak hukum) bila diwajibkan oleh hukum.',
    ] },
    { h: '7. Hak Anda Menurut UU PDP', p: ['Berdasarkan UU PDP No. 27 Tahun 2022, Anda berhak:'], list: [
      '**Mendapatkan informasi (Pasal 5):** tentang siapa yang memproses data Anda, untuk tujuan apa, dan atas dasar apa.',
      '**Memperbaiki data (Pasal 6):** yang tidak akurat atau tidak lengkap.',
      '**Mengakses data (Pasal 7):** dan memperoleh salinan data pribadi Anda yang kami simpan.',
      '**Mengakhiri pemrosesan dan menghapus data (Pasal 8).**',
      '**Menarik persetujuan (Pasal 9):** kapan saja, bila persetujuan menjadi dasar pemrosesan.',
      '**Menunda atau membatasi pemrosesan (Pasal 11).**',
      '**Memperoleh data dalam format umum (Pasal 13):** yang dapat dibaca mesin.',
    ], after: ['Untuk menggunakan hak ini, hubungi [privacy@patuhdata.id](mailto:privacy@patuhdata.id). Kami akan memverifikasi dan menanggapi dalam jangka waktu yang diwajibkan hukum.'] },
    { h: '8. Cookie', p: ['Kami memakai penyimpanan yang diperlukan untuk fungsi situs dan bukti persetujuan. Cookie analitik opsional tetap nonaktif sampai Anda setuju. Buka kembali pengaturan melalui "Pengaturan Cookie". Lihat [Kebijakan Cookie](/cookies).'] },
    { h: '9. Keamanan', p: ['Kami menerapkan langkah teknis dan organisasi yang sesuai untuk melindungi data pribadi dari akses, pengungkapan, perubahan, atau perusakan tanpa izin, termasuk enkripsi TLS saat data dikirim, kontrol akses, dan peninjauan keamanan berkala.'] },
    { h: '10. Perubahan Kebijakan', p: ['Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru selalu tersedia di patuhdata.id/privacy beserta tanggal berlakunya.'] },
    { h: '11. Kontak & Pengaduan', p: [
      'Untuk pertanyaan privasi: [privacy@patuhdata.id](mailto:privacy@patuhdata.id)',
      'Jika Anda tidak puas dengan tanggapan kami, Anda dapat mengajukan pengaduan kepada lembaga pelindungan data pribadi yang dibentuk berdasarkan UU PDP No. 27 Tahun 2022.',
    ] },
  ],
}

const privacyEn: LegalDoc = {
  kicker: 'Legal', title: 'Privacy Policy', updated: 'Last updated: 15 November 2026',
  sections: [
    { h: '1. Who We Are', p: [
      'This Privacy Policy applies to PT PatuhData Solusi Nusantara ("PatuhData", "we", "us"), a registered PT PMDN entity in Indonesia that operates patuhdata.id and the PatuhData Accounting app.',
      'Contact: [hello@patuhdata.id](mailto:hello@patuhdata.id) | +62 819 0337 8000 | Jakarta, Indonesia',
    ] },
    { h: '2. Data We Collect', p: ['We collect personal data in the following circumstances:'], list: [
      '**Contact sales form:** name, business name, email, WhatsApp number, needs, preferred start and your message.',
      '**Consent records:** a random consent ID, timestamp, policy version, consent method and selected cookie categories. Browser-side consent records do not intentionally contain your name or email.',
      '**Analytics:** if you accept optional analytics cookies, we collect anonymised usage data (pages visited, session duration, browser type). No directly identifying information is collected through analytics.',
      '**Email correspondence:** if you contact us by email, we keep the content of that correspondence and your email address.',
    ], after: ['This website does not collect payment card information, government identification numbers or specific personal data (as defined in Article 4 of UU PDP).'] },
    { h: '3. Legal Basis for Processing', p: ['Under UU PDP No. 27/2022, we process your personal data on the following bases:'], list: [
      '**Consent (Article 20):** for analytics cookies, through the cookie consent mechanism on this website.',
      '**Legitimate interest (Article 20):** to reply to messages you send through the form, without overriding your rights.',
      '**Performance of a contract:** for PatuhData Accounting customers, processing is necessary to provide the service agreement.',
    ] },
    { h: '4. How We Use Your Data', list: [
      'To reply to your questions or requests to our sales team',
      'To set up and manage the account and services you use',
      'To send service-related communications (not marketing without consent)',
      'To improve our website and services (anonymised analytics only)',
      'To comply with our legal obligations under Indonesian law',
    ] },
    { h: '5. Data Retention', p: [
      'Inquiry and email data may be kept for up to 3 years from the last interaction, unless a longer period is required for a service or legal obligation. The consent cookie is kept for up to 1 year, and browser-side history stores the most recent 20 consent decisions. Analytics data follows the provider\'s retention settings.',
    ] },
    { h: '6. Data Sharing', p: ['We do not sell, rent or share your personal data with third parties for marketing. We may share data with:'], list: [
      '**Service providers:** Vercel hosts the website, Web3Forms processes submitted forms, and Google Analytics processes usage information only after analytics consent.',
      '**Legal requirement:** Indonesian authorities (including the personal data protection authority, Komdigi or law enforcement) where required by law.',
    ] },
    { h: '7. Your Rights Under UU PDP', p: ['Under UU PDP No. 27/2022, you have the right to:'], list: [
      '**Information (Article 5):** know who processes your data, for what purpose and on what basis.',
      '**Correction (Article 6):** correct inaccurate or incomplete data.',
      '**Access (Article 7):** access and obtain a copy of the personal data we hold about you.',
      '**End processing and deletion (Article 8).**',
      '**Withdraw consent (Article 9):** at any time, where consent is the basis for processing.',
      '**Delay or restrict processing (Article 11).**',
      '**Portability (Article 13):** obtain your data in a common, machine-readable format.',
    ], after: ['To exercise these rights, contact [privacy@patuhdata.id](mailto:privacy@patuhdata.id). We will verify and respond within the period required by law.'] },
    { h: '8. Cookies', p: ['We use essential storage for site functionality and consent evidence. Optional analytics cookies stay disabled until you consent. Reopen your preferences through "Cookie Settings". See our [Cookie Policy](/cookies).'] },
    { h: '9. Security', p: ['We apply appropriate technical and organisational measures to protect personal data against unauthorised access, disclosure, alteration or destruction, including TLS encryption in transit, access controls and regular security reviews.'] },
    { h: '10. Changes to This Policy', p: ['We may update this Privacy Policy from time to time. The current version is always available at patuhdata.id/en/privacy with its effective date.'] },
    { h: '11. Contact & Complaints', p: [
      'For privacy questions: [privacy@patuhdata.id](mailto:privacy@patuhdata.id)',
      'If you are not satisfied with our response, you may lodge a complaint with the personal data protection authority established under UU PDP No. 27/2022.',
    ] },
  ],
}

const termsId: LegalDoc = {
  kicker: 'Legal', title: 'Syarat & Ketentuan', updated: 'Terakhir diperbarui: 15 November 2026',
  sections: [
    { h: '1. Para Pihak dan Perjanjian', p: [
      'Syarat & Ketentuan ini ("Ketentuan") mengatur penggunaan situs patuhdata.id dan layanan PT PatuhData Solusi Nusantara ("PatuhData"), badan usaha PT PMDN yang terdaftar di Indonesia. Dengan memakai situs ini atau layanan PatuhData, Anda menyetujui Ketentuan ini.',
      'Penggunaan aplikasi dan layanan penyiapan juga diatur oleh perjanjian layanan tertulis antara PatuhData dan pelanggan. Jika terdapat pertentangan, perjanjian layanan yang ditandatangani yang berlaku.',
    ] },
    { h: '2. Layanan', p: [
      'PatuhData menyediakan PatuhData Accounting, aplikasi pembukuan dan akuntansi untuk usaha di Indonesia dari skala mikro hingga enterprise yang mencakup faktur, stok, buku besar, dan laporan pajak, beserta layanan penyiapan dan dukungan. Akun dibuat oleh tim sales PatuhData.',
      'Konten situs (termasuk uraian produk dan fitur) bersifat informasi umum dan bukan penawaran yang mengikat, kecuali dikonfirmasi dalam perjanjian layanan tertulis.',
    ] },
    { h: '3. Batas Tanggung Jawab', p: [
      'Total tanggung jawab PatuhData kepada pelanggan atas klaim apa pun yang timbul dari atau terkait layanan dibatasi sebesar enam (6) bulan nilai kontrak yang berlaku untuk layanan tersebut, baik klaim timbul karena kontrak, perbuatan melawan hukum, maupun lainnya.',
      'PatuhData tidak bertanggung jawab atas kerugian tidak langsung, konsekuensial, atau ganti rugi yang bersifat menghukum; kehilangan pendapatan atau keuntungan yang tidak langsung disebabkan pelanggaran kami; kerugian akibat data yang dimasukkan pelanggan tidak benar; atau sanksi pajak dan regulasi yang timbul dari kewajiban pelanggan sendiri.',
    ] },
    { h: '4. Hak Kekayaan Intelektual', p: [
      'Data usaha yang Anda masukkan ke aplikasi tetap menjadi milik Anda. PatuhData tetap memiliki aplikasi, metode, templat, dan perangkat yang dipakai untuk menyediakan layanan.',
      'Konten situs, merek, dan materi pemasaran adalah milik PT PatuhData Solusi Nusantara dan tidak boleh diperbanyak tanpa izin tertulis.',
    ] },
    { h: '5. Kerahasiaan', p: ['PatuhData menjaga kerahasiaan semua informasi pelanggan. Kami tidak mengungkapkan informasi pelanggan kepada pihak ketiga kecuali diwajibkan hukum Indonesia atau diperlukan untuk menyediakan layanan (misalnya kepada penyedia layanan yang terikat perjanjian pemrosesan).'] },
    { h: '6. Jaminan', p: [
      'PatuhData menjamin layanan diberikan dengan keahlian dan kehati-hatian yang wajar. Laporan pajak dan keuangan disusun dari data yang Anda masukkan; kebenaran data dan pelaporan pajak tetap menjadi tanggung jawab pelanggan.',
      'PatuhData menyediakan perangkat lunak dan dukungan, bukan nasihat pajak atau hukum. Untuk penafsiran peraturan tertentu, mintalah nasihat konsultan pajak atau penasihat hukum yang berkompeten.',
    ] },
    { h: '7. Pembayaran', p: ['Ketentuan pembayaran diatur dalam perjanjian layanan. Keterlambatan pembayaran dapat mengakibatkan layanan ditangguhkan setelah pemberitahuan tertulis 30 hari.'] },
    { h: '8. Pengakhiran', p: ['Masing-masing pihak dapat mengakhiri layanan sesuai perjanjian layanan. Setelah pengakhiran, PatuhData membantu pelanggan mengekspor data usahanya dalam 10 hari kerja.'] },
    { h: '9. Hukum yang Berlaku', p: ['Ketentuan ini dan setiap layanan tunduk pada hukum Republik Indonesia. Sengketa diselesaikan terlebih dahulu melalui musyawarah, dan bila tidak tercapai, melalui pengadilan yang berwenang di Jakarta.'] },
    { h: '10. Kontak', p: ['Untuk pertanyaan tentang Ketentuan ini: [hello@patuhdata.id](mailto:hello@patuhdata.id) | PT PatuhData Solusi Nusantara, Jakarta, Indonesia.'] },
  ],
}

const termsEn: LegalDoc = {
  kicker: 'Legal', title: 'Terms of Service', updated: 'Last updated: 15 November 2026',
  sections: [
    { h: '1. Parties and Agreement', p: [
      'These Terms of Service ("Terms") govern the use of patuhdata.id and the services of PT PatuhData Solusi Nusantara ("PatuhData"), a registered PT PMDN entity in Indonesia. By using this website or PatuhData services, you agree to these Terms.',
      'Use of the app and setup services is also governed by a written service agreement between PatuhData and the customer. In the event of any conflict, the signed service agreement prevails.',
    ] },
    { h: '2. Services', p: [
      'PatuhData provides PatuhData Accounting, bookkeeping and accounting software for businesses in Indonesia, from micro businesses to enterprises, covering invoicing, stock, ledgers and tax reports, together with setup and support. Accounts are created by the PatuhData sales team.',
      'Website content (including product and feature descriptions) is general information only and is not a binding offer unless confirmed in a written service agreement.',
    ] },
    { h: '3. Limitation of Liability', p: [
      'PatuhData\'s total liability to a customer for any claim arising from or in connection with the services is capped at six (6) months of the contract value applicable to those services, whether the claim arises in contract, tort or otherwise.',
      'PatuhData is not liable for indirect, consequential or punitive damages; loss of revenue or profits not directly caused by our breach; losses caused by incorrect data entered by the customer; or tax and regulatory penalties arising from the customer\'s own obligations.',
    ] },
    { h: '4. Intellectual Property', p: [
      'The business data you enter into the app remains yours. PatuhData retains ownership of the app, methods, templates and tools used to provide the services.',
      'Website content, branding and marketing materials are the property of PT PatuhData Solusi Nusantara and may not be reproduced without written permission.',
    ] },
    { h: '5. Confidentiality', p: ['PatuhData keeps all customer information confidential. We do not disclose customer information to third parties except as required by Indonesian law or as necessary to provide the services (for example, to service providers bound by processing agreements).'] },
    { h: '6. Warranties', p: [
      'PatuhData warrants that the services will be provided with reasonable skill and care. Tax and financial reports are prepared from the data you enter; the accuracy of that data and of tax filings remains the customer\'s responsibility.',
      'PatuhData provides software and support, not tax or legal advice. For specific regulatory interpretations, please consult a qualified tax consultant or legal adviser.',
    ] },
    { h: '7. Payment', p: ['Payment terms are set out in the service agreement. Late payment may result in suspension of the services after 30 days\' written notice.'] },
    { h: '8. Termination', p: ['Either party may terminate the services as set out in the service agreement. After termination, PatuhData helps the customer export their business data within 10 business days.'] },
    { h: '9. Governing Law', p: ['These Terms and any services are governed by the laws of the Republic of Indonesia. Disputes are first resolved through good-faith negotiation and, if unresolved, through the competent court in Jakarta.'] },
    { h: '10. Contact', p: ['For questions about these Terms: [hello@patuhdata.id](mailto:hello@patuhdata.id) | PT PatuhData Solusi Nusantara, Jakarta, Indonesia.'] },
  ],
}

const cookiesId: LegalDoc = {
  kicker: 'Legal', title: 'Kebijakan Cookie', updated: 'Terakhir diperbarui: 15 November 2026',
  sections: [
    { h: '1. Apa Itu Cookie', p: ['Cookie adalah berkas teks kecil yang disimpan di perangkat Anda oleh situs yang Anda kunjungi. PatuhData memakai cookie sesuai Kebijakan Cookie ini dan [Kebijakan Privasi](/privacy) kami.'] },
    { h: '2. Cookie yang Kami Pakai', list: [
      '**patuhdata_consent_v1 (wajib, selalu aktif):** menyimpan ID persetujuan, waktu, versi kebijakan, cara persetujuan, dan pilihan kategori. Disimpan 1 tahun.',
      '**patuhdata-language dan riwayat persetujuan di peramban (wajib, selalu aktif):** menyimpan preferensi bahasa, catatan saat ini, dan hingga 20 keputusan persetujuan terakhir.',
      '**_ga dan _ga_5QYE9SJ0CX (analitik, perlu persetujuan):** dipasang oleh Google Analytics hanya setelah Anda setuju, untuk memahami penggunaan situs. Biasanya disimpan hingga 2 tahun.',
    ] },
    { h: '3. Mengatur Preferensi Cookie', p: [
      'Pada kunjungan pertama, Anda dapat menerima semua, menolak cookie opsional, atau mengatur per kategori. Buka kembali pengaturan kapan saja melalui tombol "Pengaturan Cookie".',
      'Jika Anda menarik persetujuan analitik, kami menghentikan pengumpulan Google Analytics, menghapus skripnya, dan menghapus cookie Google Analytics yang dapat diakses dari patuhdata.id. Anda juga dapat mengatur cookie melalui peramban. Menonaktifkan penyimpanan wajib dapat mengganggu fungsi situs.',
    ] },
    { h: '4. Cookie Pihak Ketiga', p: ['Kami tidak mengizinkan jaringan iklan pihak ketiga memasang cookie di patuhdata.id. Cookie analitik, bila diterima, diproses oleh penyedia analitik berdasarkan perjanjian pemrosesan data.'] },
    { h: '5. Kepatuhan UU PDP', p: ['Mekanisme persetujuan cookie kami dirancang sesuai UU PDP No. 27 Tahun 2022, yang mensyaratkan persetujuan diberikan secara bebas, spesifik, berdasarkan informasi, dan tegas. Cookie opsional tidak aktif sampai Anda menerimanya, dan menolaknya tidak membatasi penggunaan situs.'] },
    { h: '6. Perubahan Kebijakan', p: ['Kami dapat memperbarui Kebijakan Cookie ini. Versi terbaru tersedia di patuhdata.id/cookies. Versi kebijakan baru dapat menampilkan kembali permintaan persetujuan.'] },
    { h: '7. Kontak', p: ['Untuk pertanyaan tentang cookie: [privacy@patuhdata.id](mailto:privacy@patuhdata.id)'] },
  ],
}

const cookiesEn: LegalDoc = {
  kicker: 'Legal', title: 'Cookie Policy', updated: 'Last updated: 15 November 2026',
  sections: [
    { h: '1. What Are Cookies', p: ['Cookies are small text files that websites you visit place on your device. PatuhData uses cookies in line with this Cookie Policy and our [Privacy Policy](/privacy).'] },
    { h: '2. Cookies We Use', list: [
      '**patuhdata_consent_v1 (essential, always active):** stores a consent ID, timestamp, policy version, consent method and category choices. Kept for 1 year.',
      '**patuhdata-language and browser consent history (essential, always active):** stores language preferences, the current record and up to 20 recent consent decisions.',
      '**_ga and _ga_5QYE9SJ0CX (analytics, requires consent):** set by Google Analytics only after you consent, to understand website usage. Typically kept for up to 2 years.',
    ] },
    { h: '3. Managing Your Cookie Preferences', p: [
      'On your first visit, you can accept all, reject optional cookies or manage categories. Reopen your preferences at any time with the "Cookie Settings" button.',
      'If you withdraw analytics consent, we stop Google Analytics collection, remove its script and delete Google Analytics cookies accessible from patuhdata.id. You can also manage cookies in your browser. Disabling essential storage may affect site functionality.',
    ] },
    { h: '4. Third-Party Cookies', p: ['We do not allow third-party advertising networks to place cookies on patuhdata.id. Analytics cookies, if accepted, are processed by our analytics provider under a data processing agreement.'] },
    { h: '5. UU PDP Compliance', p: ['Our cookie consent mechanism is designed in line with UU PDP No. 27/2022, which requires consent to be freely given, specific, informed and unambiguous. Optional cookies stay off until you accept them, and declining them does not limit your use of the site.'] },
    { h: '6. Updates to This Policy', p: ['We may update this Cookie Policy. The current version is available at patuhdata.id/en/cookies. A new policy version may show the consent request again.'] },
    { h: '7. Contact', p: ['For questions about cookies: [privacy@patuhdata.id](mailto:privacy@patuhdata.id)'] },
  ],
}

export const legal: Record<LegalKey, Record<Lang, LegalDoc>> = {
  privacy: { id: privacyId, en: privacyEn },
  terms: { id: termsId, en: termsEn },
  cookies: { id: cookiesId, en: cookiesEn },
}

export interface SolutionItem {
  slug: string
  name: string
  tagline: string
  description: string
  deliverables: string[]
  forWho: string[]
  waText: string
}

export interface SolutionCategory {
  number: string
  slug: string
  title: string
  subtitle: string
  items: SolutionItem[]
}

export const solutionCategories: SolutionCategory[] = [
  {
    number: '01',
    slug: 'it-infrastructure',
    title: 'IT Infrastructure',
    subtitle: 'Pasang, konfigurasi, dan dokumentasikan infrastruktur IT kantor Anda dari nol.',
    items: [
      {
        slug: 'network-wifi',
        name: 'Jaringan & Wi-Fi',
        tagline: 'Koneksi stabil untuk seluruh kantor.',
        description: 'Desain dan instalasi jaringan enterprise-grade menggunakan Ubiquiti, Mikrotik, dan TP-Link. Dari satu access point hingga multi-lantai.',
        deliverables: ['Site survey & coverage mapping', 'Instalasi AP, switch, dan router', 'VLAN, guest network & QoS', 'Dokumentasi topologi jaringan'],
        forWho: ['Kantor 5–500 orang', 'Gedung multi-lantai', 'Warehouse & pabrik'],
        waText: 'Halo PatuhData, saya ingin konsultasi instalasi Jaringan & Wi-Fi.',
      },
      {
        slug: 'cctv-security',
        name: 'CCTV & Keamanan Fisik',
        tagline: 'Pantau aset bisnis Anda 24/7.',
        description: 'Sistem CCTV IP dengan analitik cerdas — motion detection, night vision, dan remote view dari mana saja. Hikvision & Dahua bersertifikat.',
        deliverables: ['Survei titik & desain layout kamera', 'Instalasi IP camera indoor/outdoor', 'Setup NVR/DVR & HDD storage', 'Konfigurasi remote view HP/laptop'],
        forWho: ['Kantor & ruko', 'Warehouse & gudang', 'Retail & minimarket'],
        waText: 'Halo PatuhData, saya ingin konsultasi instalasi CCTV & Keamanan Fisik.',
      },
      {
        slug: 'server-nas',
        name: 'Server & NAS Storage',
        tagline: 'Penyimpanan terpusat yang aman dan cepat.',
        description: 'Setup file server, NAS, dan backup lokal untuk bisnis Anda. Synology, QNAP, Dell, HP ProLiant — dipasang dan dikonfigurasi siap pakai.',
        deliverables: ['Konsultasi spesifikasi server', 'Instalasi & konfigurasi OS server', 'Setup NAS + RAID storage', 'Backup policy & disaster recovery'],
        forWho: ['Bisnis dengan data besar', 'Tim kerja bersama file', 'Kantor yang butuh backup rutin'],
        waText: 'Halo PatuhData, saya ingin konsultasi Server & NAS Storage.',
      },
      {
        slug: 'ups-power',
        name: 'UPS & Proteksi Daya',
        tagline: 'Lindungi perangkat dari mati lampu mendadak.',
        description: 'Instalasi UPS dan AVR untuk melindungi server, PC, dan perangkat jaringan dari fluktuasi listrik dan pemadaman. APC, Eaton, Rimo.',
        deliverables: ['Kalkulasi kebutuhan VA/Watt', 'Instalasi UPS & AVR', 'Konfigurasi auto-shutdown', 'Garansi perangkat resmi'],
        forWho: ['Server room', 'Kantor dengan sering mati lampu', 'Perangkat kritikal 24/7'],
        waText: 'Halo PatuhData, saya ingin konsultasi UPS & Proteksi Daya.',
      },
    ],
  },
  {
    number: '02',
    slug: 'agentic-ai',
    title: 'Agentic AI & Automation',
    subtitle: 'AI agent yang bekerja 24/7 — menggantikan proses manual dan mempercepat operasi bisnis.',
    items: [
      {
        slug: 'agentic-ai-impl',
        name: 'Agentic AI Implementation',
        tagline: 'AI yang berpikir, memutuskan, dan bertindak.',
        description: 'Bangun dan deploy AI agent yang mengerjakan tugas kompleks secara mandiri — dari pengumpulan data hingga pengambilan keputusan berbasis konteks bisnis Anda.',
        deliverables: ['Discovery & process mapping session', 'Desain arsitektur AI agent', 'Integrasi ke sistem existing', 'Testing, deployment & monitoring'],
        forWho: ['Bisnis dengan proses berulang', 'Tim yang overloaded dengan manual task', 'SME yang ingin skala tanpa tambah staff'],
        waText: 'Halo PatuhData, saya tertarik dengan implementasi Agentic AI. Bisa jadwalkan discovery session?',
      },
      {
        slug: 'llm-workflow',
        name: 'LLM Workflow Automation',
        tagline: 'Hubungkan LLM ke sistem internal Anda.',
        description: 'Integrasikan GPT-4, Claude, atau Gemini ke email, ERP, dan CRM untuk mengotomatisasi approval, routing dokumen, dan pelaporan — tanpa sentuhan manual.',
        deliverables: ['Pemetaan workflow yang akan diotomasi', 'Integrasi LLM ke sistem existing', 'Prompt engineering & fine-tuning', 'Audit trail & logging'],
        forWho: ['Tim ops & administrasi', 'Bisnis dengan approval chain panjang', 'Kantor yang masih kirim laporan manual'],
        waText: 'Halo PatuhData, saya tertarik dengan LLM Workflow Automation.',
      },
      {
        slug: 'document-processing',
        name: 'Intelligent Document Processing',
        tagline: 'AI membaca dokumen, Anda cukup review hasilnya.',
        description: 'Sistem AI yang mengekstrak, memvalidasi, dan merouting data dari invoice, kontrak, dan formulir. Akurasi 95%+, 10× lebih cepat dari proses manual.',
        deliverables: ['Konfigurasi AI OCR & ekstraksi data', 'Validasi otomatis & exception handling', 'Integrasi ke ERP/sistem akuntansi', 'Dashboard monitoring akurasi'],
        forWho: ['Finance & akuntansi', 'Procurement & purchasing', 'HR dengan form onboarding banyak'],
        waText: 'Halo PatuhData, saya tertarik dengan Intelligent Document Processing.',
      },
      {
        slug: 'ai-chatbot',
        name: 'AI Chatbot & Virtual Assistant',
        tagline: 'Asisten internal yang paham SOP perusahaan Anda.',
        description: 'Chatbot berbasis LLM yang memahami SOP, kebijakan, dan FAQ perusahaan. Staff bertanya dalam Bahasa Indonesia, mendapat jawaban akurat seketika.',
        deliverables: ['Konfigurasi knowledge base perusahaan', 'Training model dengan SOP & FAQ', 'Deploy di WhatsApp, Slack, atau web', 'Dashboard analytics & feedback'],
        forWho: ['HR & onboarding tim baru', 'Customer service internal', 'IT helpdesk otomatis'],
        waText: 'Halo PatuhData, saya tertarik dengan AI Chatbot & Virtual Assistant.',
      },
      {
        slug: 'rpa',
        name: 'Robotic Process Automation',
        tagline: 'Bot yang mengerjakan tugas berulang tanpa lelah.',
        description: 'Otomasi klik-dan-ketik di sistem legacy yang tidak punya API. RPA bot mengerjakan input data, rekonsiliasi, dan reporting secara terjadwal.',
        deliverables: ['Identifikasi & dokumentasi proses', 'Pengembangan RPA bot', 'Testing & error handling', 'Monitoring & alert otomatis'],
        forWho: ['Bisnis dengan sistem lama tanpa API', 'Tim yang entry data manual setiap hari', 'Finance & rekonsiliasi rutin'],
        waText: 'Halo PatuhData, saya tertarik dengan Robotic Process Automation.',
      },
    ],
  },
  {
    number: '03',
    slug: 'cybersecurity',
    title: 'Keamanan Siber & Kepatuhan',
    subtitle: 'Proteksi endpoint, jaringan, dan data bisnis Anda — sesuai regulasi UU PDP.',
    items: [
      {
        slug: 'endpoint-protection',
        name: 'Endpoint Protection & EDR',
        tagline: 'Lindungi setiap perangkat dari ancaman siber.',
        description: 'Pasang dan kelola solusi antivirus enterprise, EDR, dan firewall untuk semua endpoint — laptop, PC, server. Respons insiden cepat jika ada ancaman.',
        deliverables: ['Deployment EDR di semua endpoint', 'Konfigurasi firewall & network policy', 'Alert & incident response setup', 'Laporan keamanan bulanan'],
        forWho: ['Bisnis dengan data sensitif', 'Tim remote/hybrid work', 'Sektor yang sering jadi target ransomware'],
        waText: 'Halo PatuhData, saya ingin konsultasi Endpoint Protection & EDR.',
      },
      {
        slug: 'pdp-compliance',
        name: 'PDP Compliance Assessment',
        tagline: 'Siap audit UU PDP No. 27/2022.',
        description: 'Gap assessment lengkap terhadap regulasi perlindungan data pribadi. Identifikasi risiko, susun kebijakan, dan implementasi kontrol teknis yang dipersyaratkan.',
        deliverables: ['Gap analysis vs. UU PDP', 'Penyusunan kebijakan privasi & data', 'Implementasi kontrol teknis', 'Laporan kesiapan kepatuhan'],
        forWho: ['Bisnis yang menyimpan data pelanggan', 'Perusahaan yang akan diaudit', 'HR & fintech dengan data karyawan/user'],
        waText: 'Halo PatuhData, saya ingin konsultasi PDP Compliance Assessment.',
      },
      {
        slug: 'zero-trust',
        name: 'Zero-Trust Network Setup',
        tagline: 'Tidak ada akses tanpa verifikasi.',
        description: 'Implementasi arsitektur zero-trust — segmentasi jaringan, MFA, least-privilege access, dan monitoring koneksi mencurigakan secara real-time.',
        deliverables: ['Network segmentation & VLAN policy', 'MFA setup untuk semua akun', 'Least-privilege access review', 'Continuous monitoring & alerting'],
        forWho: ['Bisnis dengan akses remote banyak', 'Perusahaan dengan data kritikal', 'Tim IT yang khawatir insider threat'],
        waText: 'Halo PatuhData, saya ingin konsultasi Zero-Trust Network Setup.',
      },
      {
        slug: 'security-training',
        name: 'Security Awareness Training',
        tagline: 'Manusia adalah pertahanan pertama.',
        description: 'Pelatihan keamanan siber untuk seluruh karyawan — mengenali phishing, keamanan password, dan prosedur insiden. Workshop on-site atau online.',
        deliverables: ['Modul pelatihan anti-phishing', 'Simulasi serangan phishing', 'Workshop kebijakan keamanan', 'Sertifikat & laporan kelulusan'],
        forWho: ['Seluruh karyawan', 'Tim yang baru bergabung', 'Bisnis yang pernah kena insiden'],
        waText: 'Halo PatuhData, saya ingin informasi Security Awareness Training.',
      },
    ],
  },
  {
    number: '04',
    slug: 'cloud-digital',
    title: 'Cloud & Digital Workplace',
    subtitle: 'Migrasi ke cloud dan setup tools kolaborasi digital yang siap pakai dalam hitungan hari.',
    items: [
      {
        slug: 'google-workspace',
        name: 'Google Workspace',
        tagline: 'Email profesional & kolaborasi Google.',
        description: 'Setup Google Workspace dari awal — domain, email, Drive, Meet, dan Calendar. Termasuk migrasi data dari platform lama dan training tim.',
        deliverables: ['Provisioning akun & domain setup', 'Migrasi email & data existing', 'Konfigurasi kebijakan keamanan', 'Training basic penggunaan'],
        forWho: ['Bisnis yang baru mulai', 'Migrasi dari email hosting biasa', 'Tim yang butuh kolaborasi cloud'],
        waText: 'Halo PatuhData, saya ingin konsultasi setup Google Workspace.',
      },
      {
        slug: 'microsoft-365',
        name: 'Microsoft 365',
        tagline: 'Office, Teams, dan OneDrive untuk tim Anda.',
        description: 'Implementasi Microsoft 365 lengkap — Outlook, Teams, SharePoint, dan OneDrive. Cocok untuk bisnis yang sudah pakai ekosistem Microsoft.',
        deliverables: ['Lisensi & provisioning akun', 'Setup Teams & SharePoint', 'Migrasi email & file', 'Integrasi dengan sistem existing'],
        forWho: ['Bisnis yang pakai Office lama', 'Tim dengan kebutuhan Teams meeting', 'Enterprise dengan Active Directory'],
        waText: 'Halo PatuhData, saya ingin konsultasi setup Microsoft 365.',
      },
      {
        slug: 'cloud-migration',
        name: 'Cloud Migration',
        tagline: 'Pindah ke cloud tanpa downtime.',
        description: 'Migrasi server, aplikasi, dan data ke AWS, GCP, atau Azure. Perencanaan matang, eksekusi terstruktur, dan rollback plan tersedia.',
        deliverables: ['Audit infrastruktur existing', 'Perencanaan & timeline migrasi', 'Eksekusi migrasi bertahap', 'Post-migration monitoring & support'],
        forWho: ['Bisnis dengan server on-premise tua', 'Aplikasi yang butuh skalabilitas', 'DR & high-availability requirements'],
        waText: 'Halo PatuhData, saya ingin konsultasi Cloud Migration.',
      },
      {
        slug: 'cloud-backup',
        name: 'Cloud Backup & Disaster Recovery',
        tagline: 'Data Anda aman, selalu bisa dipulihkan.',
        description: 'Setup backup otomatis ke cloud dengan enkripsi end-to-end. Termasuk disaster recovery plan dan uji pemulihan berkala.',
        deliverables: ['Setup backup otomatis terjadwal', 'Enkripsi & retensi policy', 'DR plan & runbook dokumentasi', 'Uji pemulihan berkala (test restore)'],
        forWho: ['Bisnis tanpa backup yang andal', 'Yang pernah kehilangan data', 'Compliance & audit requirements'],
        waText: 'Halo PatuhData, saya ingin konsultasi Cloud Backup & Disaster Recovery.',
      },
    ],
  },
  {
    number: '05',
    slug: 'managed-it',
    title: 'Managed IT & Support',
    subtitle: 'Tim IT on-demand untuk bisnis Anda — tanpa biaya rekrut karyawan tetap.',
    items: [
      {
        slug: 'managed-it-services',
        name: 'Managed IT Services',
        tagline: 'IT Anda dikelola penuh oleh tim kami.',
        description: 'Monitoring proaktif, patch management, dan perawatan rutin untuk seluruh infrastruktur IT Anda. Laporan bulanan dan eskalasi insiden cepat.',
        deliverables: ['Monitoring 24/7 semua perangkat', 'Patch & update management', 'Perawatan rutin terjadwal', 'Laporan IT health bulanan'],
        forWho: ['Bisnis tanpa staff IT internal', 'Kantor 10–200 karyawan', 'Yang butuh SLA tertulis'],
        waText: 'Halo PatuhData, saya tertarik dengan Managed IT Services.',
      },
      {
        slug: 'helpdesk-support',
        name: 'IT Helpdesk & Support',
        tagline: 'Masalah IT diselesaikan, bukan diendapkan.',
        description: 'Layanan helpdesk remote dan on-site untuk semua masalah IT karyawan. Tiket tercatat, waktu respons terjamin, tidak ada lagi chaos di WhatsApp group.',
        deliverables: ['Portal helpdesk & ticketing system', 'Remote support via TeamViewer/AnyDesk', 'On-site visit jika diperlukan', 'Laporan resolusi & waktu respons'],
        forWho: ['Tim yang sering terganggu masalah IT', 'Kantor dengan karyawan non-teknis', 'Yang butuh SLA respons tertulis'],
        waText: 'Halo PatuhData, saya tertarik dengan layanan IT Helpdesk & Support.',
      },
      {
        slug: 'proactive-monitoring',
        name: 'Proactive IT Monitoring',
        tagline: 'Tahu masalah sebelum bisnis terdampak.',
        description: 'Monitoring real-time untuk server, jaringan, dan endpoint. Alert otomatis dan tindakan pre-emptif sebelum downtime terjadi.',
        deliverables: ['Setup monitoring agent di semua perangkat', 'Dashboard real-time & alerting', 'Notifikasi via WhatsApp/email', 'Root cause analysis tiap insiden'],
        forWho: ['Bisnis yang tidak boleh downtime', 'Server & infrastruktur kritikal', 'Yang sudah pernah kena kerugian akibat IT mati'],
        waText: 'Halo PatuhData, saya tertarik dengan Proactive IT Monitoring.',
      },
      {
        slug: 'patuhdata-one',
        name: 'PatuhData ONE Platform',
        tagline: 'Satu platform untuk semua operasi IT.',
        description: 'Platform operasional all-in-one — aset IT, SOP, workflow approval, dan helpdesk dalam satu dashboard. Dirancang untuk SME 10–500 karyawan.',
        deliverables: ['Onboarding & setup aset IT registry', 'Konfigurasi modul SOP & workflow', 'Training admin & end-user', 'Support & update berkelanjutan'],
        forWho: ['Bisnis yang kelola IT dengan spreadsheet', 'HR & ops yang butuh SOP terstruktur', 'Manajemen yang ingin visibilitas IT real-time'],
        waText: 'Halo PatuhData, saya ingin demo PatuhData ONE Platform.',
      },
    ],
  },
]

export function findSolutionBySlug(slug: string): { category: SolutionCategory; item: SolutionItem } | null {
  for (const cat of solutionCategories) {
    const item = cat.items.find((i) => i.slug === slug)
    if (item) return { category: cat, item }
  }
  return null
}

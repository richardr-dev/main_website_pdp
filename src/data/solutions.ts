export interface SolutionItem {
  slug: string
  name: string
  tagline: string
  description: string
  deliverables: string[]
  forWho: string[]
  waText: string
  comingSoon?: boolean
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
    slug: 'business-continuity-dr',
    title: 'Business Continuity & Disaster Recovery',
    subtitle: 'PatuhData Backup & Restore, PatuhData Care, dan PatuhData ONE — data Anda terlindungi, terawasi, dan terlihat jelas apakah benar-benar bisa dipulihkan.',
    items: [
      {
        slug: 'patuhdata-backup-restore',
        name: 'PatuhData Backup & Restore',
        tagline: 'Data Anda benar-benar bisa dipulihkan saat terjadi masalah.',
        description: 'Melindungi data Anda dari awal: setup backup berbasis Veeam, immutable & offsite copy, uji restore rutin, target RPO/RTO yang jelas, hingga kesiapan pemulihan dari ransomware dan bencana. Bukan sekadar "ada backup" — tapi backup yang terbukti bisa dipulihkan.',
        deliverables: ['Deployment backup Veeam dengan strategi 3-2-1 & immutable/offsite copy', 'Definisi RPO/RTO per sistem kritikal', 'Uji restore terjadwal & simulasi pemulihan ransomware', 'DR readiness check & dokumentasi prosedur pemulihan'],
        forWho: ['Bisnis tanpa backup yang andal atau teruji', 'Yang pernah kena ransomware atau kehilangan data penting', 'Compliance & audit yang mensyaratkan backup & DR teruji'],
        waText: 'Halo PatuhData, saya ingin konsultasi PatuhData Backup & Restore.',
      },
      {
        slug: 'patuhdata-care',
        name: 'PatuhData Care',
        tagline: 'Kami terus mengawasi, agar Anda tidak menemukan masalah saat bencana terjadi.',
        description: 'Layanan terkelola berkelanjutan yang menjaga environment backup & recovery Anda tetap sehat — monitoring job backup, alert kegagalan, health check bulanan, pemantauan kapasitas storage, restore drill, dukungan insiden, dokumentasi, dan continuity review triwulanan.',
        deliverables: ['Monitoring backup 24/7 & alert otomatis untuk job yang gagal', 'Health check bulanan & pemantauan kapasitas storage', 'Restore drill berkala & dukungan insiden', 'Dokumentasi berjalan & continuity review triwulanan'],
        forWho: ['Bisnis yang sudah punya backup tapi tidak ada yang memantau', 'Tim IT kecil tanpa kapasitas monitoring berkelanjutan', 'Yang ingin kepastian backup benar-benar bisa dipakai, bukan cuma "jalan"'],
        waText: 'Halo PatuhData, saya ingin konsultasi PatuhData Care.',
      },
      {
        slug: 'patuhdata-one',
        name: 'PatuhData ONE',
        tagline: 'Satu tempat untuk tahu apakah bisnis Anda benar-benar bisa pulih. Segera hadir.',
        description: 'Control center berbasis software untuk manajemen — satu dashboard yang menampilkan status backup, waktu backup sukses terakhir, status uji restore, sistem yang terlindungi, kepatuhan RPO/RTO, insiden, dokumentasi pemulihan, dan pemilik aset, dengan kontrol resiliensi lain menyusul. Saat ini dalam tahap pengembangan.',
        deliverables: ['Dashboard status backup & waktu backup sukses terakhir', 'Status uji restore & kepatuhan RPO/RTO per sistem', 'Log insiden, dokumentasi pemulihan & pemilik aset (asset owner)', 'Visibilitas seluruh sistem terlindungi dalam satu tampilan untuk manajemen'],
        forWho: ['Manajemen yang ingin tahu apakah bisnis benar-benar bisa pulih', 'Tim IT yang mengelola backup & DR di banyak sistem sekaligus', 'Bisnis yang butuh bukti RPO/RTO tercapai untuk audit & compliance UU PDP'],
        waText: 'Halo PatuhData, saya ingin didaftarkan untuk info PatuhData ONE.',
        comingSoon: true,
      },
      {
        slug: 'business-continuity',
        name: 'Business Continuity Plan',
        tagline: 'Bisnis tetap jalan meski IT bermasalah.',
        description: 'Susun Business Continuity Plan (BCP) yang mencakup skenario gangguan IT, prosedur darurat, komunikasi krisis, dan pemulihan operasional bisnis secara menyeluruh.',
        deliverables: ['Business Impact Analysis (BIA)', 'Penyusunan BCP & prosedur darurat', 'Identifikasi dependencies & titik kritis bisnis', 'Pelatihan tim & simulasi skenario gangguan'],
        forWho: ['Bisnis di sektor regulated (keuangan, kesehatan)', 'Yang butuh sertifikasi atau audit kepatuhan', 'SME yang ingin siap hadapi gangguan operasional'],
        waText: 'Halo PatuhData, saya ingin konsultasi Business Continuity Plan.',
      },
    ],
  },
  {
    number: '02',
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    subtitle: 'Perlindungan jaringan dari gerbang utamanya — Sophos, di-deploy dan dikelola tim kami.',
    items: [
      {
        slug: 'sophos-firewall',
        name: 'Sophos Firewall & Network Security',
        tagline: 'Jaringan kantor terlindungi dari gerbang utamanya.',
        description: 'Deployment dan pengelolaan Sophos Firewall — inspeksi trafik, IPS, web filtering, dan VPN untuk akses remote yang aman. Jaringan kantor Anda terlindungi sebelum ancaman mencapai perangkat.',
        deliverables: ['Deployment & konfigurasi Sophos Firewall', 'Segmentasi jaringan, IPS & web filtering', 'VPN site-to-site & remote access aman untuk tim', 'Monitoring, update firmware & manajemen rule berkelanjutan'],
        forWho: ['Kantor yang masih pakai router bawaan ISP', 'Bisnis dengan tim remote atau multi-cabang', 'Yang butuh kontrol akses internet & proteksi jaringan menyeluruh'],
        waText: 'Halo PatuhData, saya ingin konsultasi Sophos Firewall & Network Security.',
      },
    ],
  },
  {
    number: '03',
    slug: 'cloud-services',
    title: 'Cloud Services',
    subtitle: 'Migrasi, setup, dan pengelolaan infrastruktur cloud di AWS, GCP, dan Azure — terencana, terstruktur, tanpa downtime.',
    items: [
      {
        slug: 'cloud-migration',
        name: 'Cloud Migration',
        tagline: 'Pindah ke cloud tanpa downtime.',
        description: 'Migrasi server, aplikasi, dan data ke AWS, GCP, atau Azure. Perencanaan matang, eksekusi terstruktur, dan rollback plan tersedia untuk setiap proyek.',
        deliverables: ['Audit infrastruktur existing & readiness assessment', 'Perencanaan arsitektur & timeline migrasi', 'Eksekusi migrasi bertahap dengan zero-downtime plan', 'Post-migration monitoring & hypercare support'],
        forWho: ['Bisnis dengan server on-premise yang sudah tua', 'Aplikasi yang butuh skalabilitas cloud', 'Kantor yang ingin kurangi biaya hardware'],
        waText: 'Halo PatuhData, saya ingin konsultasi Cloud Migration.',
      },
      {
        slug: 'cloud-infrastructure',
        name: 'Cloud Infrastructure Setup',
        tagline: 'Cloud yang dirancang untuk bisnis Anda, bukan template generik.',
        description: 'Desain dan setup infrastruktur cloud dari nol — VPC, compute, storage, database, dan networking di AWS, GCP, atau Azure. Dengan keamanan dan cost-efficiency sebagai prioritas.',
        deliverables: ['Desain arsitektur cloud (VPC, subnet, security groups)', 'Setup compute, storage & database cloud', 'Konfigurasi firewall, IAM & akses kontrol', 'Cost monitoring & billing alert setup'],
        forWho: ['Startup yang baru mulai di cloud', 'Bisnis yang expand butuh infrastruktur baru', 'Tim dev yang perlu lingkungan cloud staging/production'],
        waText: 'Halo PatuhData, saya ingin konsultasi Cloud Infrastructure Setup.',
      },
    ],
  },
  {
    number: '04',
    slug: 'managed-it',
    title: 'Managed IT Services',
    subtitle: 'Tim IT on-demand untuk bisnis Anda — monitoring proaktif, perawatan rutin, dan visibilitas penuh tanpa rekrut karyawan tetap.',
    items: [
      {
        slug: 'managed-it-services',
        name: 'Managed IT Services',
        tagline: 'IT Anda dikelola penuh oleh tim kami.',
        description: 'Monitoring proaktif, patch management, dan perawatan rutin untuk seluruh infrastruktur IT Anda. Laporan bulanan, SLA tertulis, dan eskalasi insiden cepat.',
        deliverables: ['Monitoring 24/7 untuk semua perangkat & sistem', 'Patch & update management terjadwal', 'Perawatan preventif & health check rutin', 'Laporan IT health bulanan + rekomendasi'],
        forWho: ['Bisnis tanpa staff IT internal', 'Kantor 10–200 karyawan', 'Yang butuh SLA & akuntabilitas tertulis'],
        waText: 'Halo PatuhData, saya tertarik dengan Managed IT Services.',
      },
      {
        slug: 'proactive-monitoring',
        name: 'Proactive IT Monitoring',
        tagline: 'Tahu masalah sebelum bisnis terdampak.',
        description: 'Monitoring real-time untuk server, jaringan, cloud, dan endpoint. Alert otomatis dan tindakan pre-emptif sebelum downtime terjadi dan merugikan bisnis Anda.',
        deliverables: ['Setup monitoring agent di semua perangkat & cloud', 'Dashboard real-time & konfigurasi alerting', 'Notifikasi insiden via WhatsApp & email', 'Root cause analysis tiap insiden yang terjadi'],
        forWho: ['Bisnis yang tidak boleh downtime', 'Server & infrastruktur cloud kritikal', 'Yang pernah rugi karena IT mati mendadak'],
        waText: 'Halo PatuhData, saya tertarik dengan Proactive IT Monitoring.',
      },
    ],
  },
  {
    number: '05',
    slug: 'google-workspace',
    title: 'Google Workspace',
    subtitle: 'Email profesional, kolaborasi cloud, dan produktivitas tim — disetup, dikelola, dan diamankan oleh tim kami.',
    items: [
      {
        slug: 'google-workspace-setup',
        name: 'Google Workspace Setup & Migrasi',
        tagline: 'Email profesional & kolaborasi Google dari hari pertama.',
        description: 'Setup Google Workspace dari awal — domain, email bisnis, Drive, Meet, dan Calendar. Termasuk migrasi data dari platform lama dan onboarding tim.',
        deliverables: ['Provisioning domain & akun Google Workspace', 'Migrasi email, kontak & kalender dari platform lama', 'Konfigurasi kebijakan keamanan & MFA', 'Training penggunaan Gmail, Drive, Meet & Calendar'],
        forWho: ['Bisnis yang baru butuh email profesional', 'Migrasi dari email hosting biasa atau Yahoo/Gmail personal', 'Tim yang butuh kolaborasi dokumen real-time'],
        waText: 'Halo PatuhData, saya ingin konsultasi setup Google Workspace.',
      },
      {
        slug: 'workspace-admin',
        name: 'Google Workspace Admin & Keamanan',
        tagline: 'Kelola akun, kebijakan, dan keamanan data Google Workspace.',
        description: 'Pengelolaan Admin Console Google Workspace — onboarding/offboarding user, kebijakan keamanan, DLP, audit log, dan konfigurasi lanjutan untuk bisnis Anda.',
        deliverables: ['Setup Admin Console & organizational units', 'Kebijakan keamanan: MFA, session control, app access', 'Data Loss Prevention (DLP) konfigurasi', 'Audit log & laporan aktivitas user bulanan'],
        forWho: ['Bisnis yang sudah pakai Google Workspace tapi belum dikonfigurasi dengan benar', 'Tim IT yang butuh kontrol lebih ketat', 'Bisnis dengan data sensitif di Google Drive'],
        waText: 'Halo PatuhData, saya ingin konsultasi Google Workspace Admin & Keamanan.',
      },
      {
        slug: 'workspace-reseller',
        name: 'Lisensi Google Workspace',
        tagline: 'Beli lisensi Google Workspace resmi dengan harga terbaik.',
        description: 'PatuhData adalah reseller resmi Google Workspace. Dapatkan lisensi Business Starter, Business Standard, Business Plus, atau Enterprise dengan dukungan setup dan support lokal.',
        deliverables: ['Konsultasi pemilihan paket yang tepat', 'Proses pembelian lisensi resmi', 'Setup awal & domain verification', 'Support & renewal manajemen'],
        forWho: ['Bisnis yang baru beli Google Workspace', 'Yang ingin upgrade atau tambah lisensi', 'SME yang butuh partner lokal, bukan beli sendiri'],
        waText: 'Halo PatuhData, saya ingin tanya harga lisensi Google Workspace.',
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

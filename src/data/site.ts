/**
 * All website content lives here. Pages render from these records, so a new division or industry
 * page only needs a new entry (and it is picked up by routing, navigation, SEO, and the sitemap).
 * Rules: no invented clients, statistics, certifications, partnerships, or 24/7 promises.
 */

export type Division = {
  slug: string
  name: string
  title: string
  summary: string
  intro: string
  problems: string[]
  scope: [string, string][]
  deliverables: string[]
  serviceLevels?: [string, string][]
  note?: string
  showcase?: boolean
  steps: [string, string, string][]
  faqs: [string, string][]
  cta: string
  seo: { title: string; description: string }
  id: { name: string; summary: string }
}

export type Industry = {
  slug: string
  name: string
  title: string
  summary: string
  intro: string
  challenges: [string, string][]
  divisions: string[]
  image?: string
  seo: { title: string; description: string }
  id: { name: string; summary: string; example: [string, string] }
}

export const divisions: Division[] = [
  {
    slug: 'it-infrastructure-implementation',
    name: 'Infrastructure & Implementation',
    title: 'IT Infrastructure & Implementation',
    summary: 'Networks, Wi-Fi, firewalls, and servers designed and installed for offices, warehouses, and branches.',
    intro: 'We design and install the IT infrastructure your operations depend on, from cabling and enterprise Wi-Fi to firewalls, servers, and virtualization, and hand it over tested and documented.',
    problems: ['Wi-Fi that drops in the warehouse or between floors', 'Branches that cannot reliably reach head-office systems', 'Servers and network equipment past their useful life', 'A new office or warehouse that needs IT ready by opening day'],
    scope: [
      ['Network design and cabling', 'Structured cabling, racks, and a network layout planned around how your sites operate.'],
      ['Enterprise Wi-Fi and LAN', 'Coverage surveys and access points placed for offices, meeting rooms, and warehouse floors.'],
      ['Routers, switches, and firewalls', 'Secure internet, branch connectivity, and separate networks for office, guest, and operational devices.'],
      ['Servers and virtualization', 'Servers, storage, and virtualization deployed for your business applications.'],
      ['Office and warehouse IT', 'Complete IT setup for new or relocated sites, coordinated with your fit-out timeline.'],
      ['Infrastructure upgrades', 'Ageing equipment replaced in planned stages, so operations keep running.'],
    ],
    deliverables: ['Site survey and network design', 'Bill of materials and commercial quotation', 'Installation and configuration', 'Test results and handover documentation', 'Network diagram and equipment register'],
    steps: [['01', 'Site survey', 'We visit your site, review existing equipment, and agree requirements.'], ['02', 'Design & quotation', 'We propose a design, bill of materials, schedule, and quotation.'], ['03', 'Install & test', 'We install, configure, and test with minimal disruption to operations.'], ['04', 'Handover', 'You receive full documentation, with the option of ongoing support.']],
    faqs: [
      ['Can you work outside business hours?', 'Yes. Installation and cut-overs can be scheduled in the evening or at weekends to avoid disrupting operations, as agreed in the quotation.'],
      ['Do you supply the equipment as well?', 'Yes. We can procure the hardware and implement it under one quotation, or install equipment you already own.'],
      ['Which areas do you cover?', 'Jakarta, Tangerang, Bekasi, Cikarang, and the wider Greater Jakarta area. Sites further away are considered per project.'],
    ],
    cta: 'Request a Site Survey',
    seo: { title: 'IT Infrastructure & Network Implementation Jakarta | PatuhData', description: 'Network, Wi-Fi, firewall, and server implementation for offices, warehouses, and branches in Greater Jakarta. Site survey, design, installation, and documented handover.' },
    id: { name: 'Infrastruktur & Implementasi', summary: 'Jaringan, Wi-Fi, firewall, dan server dirancang dan dipasang untuk kantor, gudang, dan cabang.' },
  },
  {
    slug: 'hardware-procurement',
    name: 'Hardware & Procurement',
    title: 'Hardware & Technology Procurement',
    summary: 'Computers, servers, networking, and barcode equipment sourced, configured, and delivered to your sites.',
    intro: 'We source the business technology your teams need, including computers, servers, networking equipment, and barcode and labeling hardware, and deliver it configured and ready to use.',
    problems: ['Buying equipment from several vendors with no one accountable', 'Devices that arrive unconfigured and take days to set up', 'Barcode printers and scanners that do not work with your systems', 'Procurement teams that need formal quotations, invoices, and tax documents'],
    scope: [
      ['Computers and workstations', 'Business laptops, desktops, and monitors specified for each role.'],
      ['Servers and storage', 'Servers, storage, and backup appliances sized for your workloads.'],
      ['Networking equipment', 'Routers, switches, firewalls, and wireless access points.'],
      ['Barcode scanners and terminals', 'Handheld scanners and mobile terminals for receiving, picking, and stock counts.'],
      ['Thermal and label printers', 'Barcode, shipping-label, and receipt printers, with labels and ribbons for ongoing operations.'],
      ['Peripherals and accessories', 'UPS units, docking stations, peripherals, and cabling.'],
    ],
    deliverables: ['Specification based on your requirements', 'Formal quotation with delivery schedule', 'Configured equipment, ready to use', 'Delivery and installation at your sites', 'Warranty handling support'],
    note: 'We source through established distributors in Indonesia and recommend brands based on your requirements, budget, and local availability. We describe a brand relationship as a partnership only where an official one exists.',
    steps: [['01', 'Requirements', 'Tell us what you need, for which users, sites, and systems.'], ['02', 'Specification & quotation', 'We recommend models and send a formal quotation with delivery times.'], ['03', 'Procure & configure', 'We order, receive, and configure the equipment for your environment.'], ['04', 'Deliver & install', 'We deliver to your sites and install or hand over, with warranty support.']],
    faqs: [
      ['Which brands do you supply?', 'We recommend brands based on your requirements, budget, and availability in Indonesia, and confirm exact models in the quotation.'],
      ['Can you follow our procurement process?', 'Yes. We work with formal quotations, purchase orders, invoices, and tax invoices, and can register as a vendor in your system.'],
      ['Do you configure equipment before delivery?', 'Yes, where agreed. Computers, network equipment, and barcode devices can be configured so they work on arrival.'],
    ],
    cta: 'Request a Quotation',
    seo: { title: 'IT Hardware Procurement & Barcode Equipment Jakarta | PatuhData', description: 'Business computers, servers, networking equipment, barcode scanners, and thermal label printers sourced, configured, and delivered to your sites in Greater Jakarta.' },
    id: { name: 'Hardware & Pengadaan', summary: 'Komputer, server, perangkat jaringan, dan perangkat barcode disediakan, dikonfigurasi, dan dikirim ke lokasi Anda.' },
  },
  {
    slug: 'managed-it-business-continuity',
    name: 'Managed IT Operations',
    title: 'Managed IT & Business Continuity',
    summary: 'Monitoring, preventive maintenance, backup, and support contracts that keep your systems running.',
    intro: 'We look after your IT infrastructure under a support contract with a defined scope, response targets, and a maintenance schedule, so problems are prevented, data is recoverable, and your team knows who to call.',
    problems: ['Problems discovered only when staff cannot work', 'Backups that have never been tested', 'No one responsible for updates and maintenance', 'IT support that depends on one person being available'],
    scope: [
      ['Infrastructure monitoring', 'Servers, network devices, and internet links monitored, with alerts handled by our engineers.'],
      ['Preventive maintenance', 'Scheduled checks of servers, network, and equipment on a monthly or quarterly plan.'],
      ['Backup and recovery', 'Backups implemented, checked, and restore-tested on schedule, with an offsite copy.'],
      ['Network health checks', 'Regular reviews of performance, security, and capacity, with clear recommendations.'],
      ['Helpdesk and on-site support', 'Support for your staff by WhatsApp, email, phone, remote session, or site visit.'],
      ['Monthly reporting', 'Incidents, maintenance completed, backup status, and recommendations in one report.'],
    ],
    serviceLevels: [
      ['Defined scope', 'Every contract lists the sites, devices, and systems covered.'],
      ['Response targets by priority', 'Response and resolution targets for each priority level are written into the contract.'],
      ['Agreed support hours', 'Support hours are set in the contract. Extended coverage is available by arrangement.'],
      ['Maintenance calendar', 'Preventive maintenance follows a schedule you approve in advance.'],
    ],
    deliverables: ['Support contract with service levels', 'Infrastructure documentation and asset register', 'Preventive maintenance schedule', 'Monthly service report', 'Backup and restore test records'],
    steps: [['01', 'Assess', 'We review your infrastructure, backups, and risks.'], ['02', 'Stabilize', 'We fix urgent issues and set up monitoring and backup.'], ['03', 'Operate', 'We support, monitor, and maintain according to your contract.'], ['04', 'Review', 'We report monthly and review improvements with you.']],
    faqs: [
      ['Do you provide 24/7 support?', 'Support hours and response targets are agreed in your contract. We only commit to coverage we can deliver.'],
      ['Can we keep our own IT staff?', 'Yes. Many businesses keep an internal IT person and use us for engineering depth, maintenance, and backup.'],
      ['How is the contract priced?', 'By the number of sites, users, servers, and devices, and the coverage required. We provide a written quotation after an assessment.'],
    ],
    cta: 'Request an IT Assessment',
    seo: { title: 'Managed IT Services, Maintenance & Backup Jakarta | PatuhData', description: 'IT support contracts with defined scope and response targets: monitoring, preventive maintenance, backup and recovery, and network health checks for businesses in Greater Jakarta.' },
    id: { name: 'Managed IT & Kontinuitas', summary: 'Monitoring, pemeliharaan rutin, backup, dan kontrak dukungan yang menjaga sistem Anda tetap berjalan.' },
  },
  {
    slug: 'business-systems-integration',
    name: 'Business Systems Integration',
    title: 'Business Systems & Integration',
    summary: 'ERP, warehouse, barcode, and inventory systems implemented and connected to the way you operate.',
    intro: 'We implement and connect the business systems behind your operations, including ERP, warehouse management, barcode and inventory, and the integrations between them, so data is entered once and every team works from the same numbers.',
    problems: ['Stock counts that do not match the system', 'Orders and invoices entered more than once', 'Warehouse processes running on paper and spreadsheets', 'Systems from different vendors that do not share data'],
    scope: [
      ['Process review and automation', 'We map how orders, stock, and documents move today, and remove manual steps.'],
      ['ERP implementation and integration', 'Implementation support and integration with your ERP or accounting system.'],
      ['Warehouse management', 'Receiving, bin locations, picking, packing, and stock counts managed in one system.'],
      ['Barcode and inventory', 'Barcode labels, scanners, and inventory tracking connected to your stock records.'],
      ['Business software integration', 'Existing applications connected where no standard connector exists.'],
      ['API and system integration', 'Marketplaces, couriers, payments, and internal systems exchanging data automatically.'],
    ],
    deliverables: ['Process map and solution design', 'Configured or integrated systems', 'Barcode and hardware setup where required', 'User training and documentation', 'Support after go-live'],
    showcase: true,
    steps: [['01', 'Map', 'We map your current processes, systems, and data.'], ['02', 'Design', 'We propose the solution, scope, timeline, and quotation.'], ['03', 'Implement', 'We configure, integrate, test, and train your users.'], ['04', 'Support', 'We support go-live and keep the systems running.']],
    faqs: [
      ['Do you sell your own ERP?', 'No. We implement and integrate the systems that fit your business, including the ERP you already use.'],
      ['Can you connect our ERP to marketplaces or couriers?', 'Yes, where the systems provide an API or data export. We confirm feasibility before quoting.'],
      ['Do you also supply barcode hardware?', 'Yes. Scanners, printers, and labels are supplied through our hardware procurement division.'],
    ],
    cta: 'Discuss Your Project',
    seo: { title: 'ERP, Warehouse & Barcode System Integration Jakarta | PatuhData', description: 'ERP integration, warehouse management, barcode and inventory systems, and API integration implemented for distributors, warehouses, and manufacturers in Greater Jakarta.' },
    id: { name: 'Integrasi Sistem Bisnis', summary: 'Sistem ERP, gudang, barcode, dan inventori diimplementasikan dan terhubung sesuai cara kerja Anda.' },
  },
]

export const industries: Industry[] = [
  {
    slug: 'trading-distribution',
    name: 'Trading & Distribution',
    title: 'Technology for Trading & Distribution Companies',
    summary: 'Connected branches, accurate stock, and systems that keep orders moving.',
    intro: 'Distributors depend on orders, stock, and deliveries moving between head office, warehouses, branches, and sales teams. We provide the infrastructure, hardware, systems, and support behind it.',
    challenges: [
      ['Branches and warehouses on unreliable connections', 'We implement secure branch connectivity and Wi-Fi so every site can reach your ERP.'],
      ['Stock in the system does not match the shelf', 'We implement barcode scanning and inventory processes connected to your stock records.'],
      ['Sales and admin teams on unmanaged devices', 'We supply, configure, and support laptops with a standard security setup.'],
      ['ERP and accounting data at risk', 'We implement backup with regular restore tests and an offsite copy.'],
    ],
    divisions: ['it-infrastructure-implementation', 'business-systems-integration', 'managed-it-business-continuity'],
    seo: { title: 'IT Solutions for Distribution Companies in Jakarta | PatuhData', description: 'Branch networks, barcode and inventory systems, managed devices, and backup for trading and distribution companies in Greater Jakarta.' },
    id: { name: 'Perdagangan & Distribusi', summary: 'Cabang yang terhubung, stok yang akurat, dan sistem yang menjaga pesanan tetap berjalan.', example: ['Cabang dan gudang dengan koneksi yang tidak stabil', 'Kami memasang konektivitas cabang dan Wi-Fi yang aman agar semua lokasi bisa mengakses ERP Anda.'] },
  },
  {
    slug: 'warehousing-logistics',
    name: 'Warehousing & Logistics',
    title: 'Technology for Warehousing & Fulfillment',
    summary: 'Warehouse Wi-Fi, barcode systems, and label printing that hold up every shift.',
    intro: 'Warehouses and fulfillment operations run on scanners, label printers, and Wi-Fi across large floors. When any of them fail, shipments stop. We design, supply, and support the technology on the warehouse floor.',
    challenges: [
      ['Wi-Fi dead zones between racks', 'We survey the floor and place access points for coverage across aisles, docks, and offices.'],
      ['Scanners and printers failing mid-shift', 'We supply, configure, and maintain handheld terminals and label printers, and plan spares.'],
      ['Picking and packing on paper', 'We implement warehouse and barcode processes for receiving, picking, packing, and stock counts.'],
      ['Labels that do not match courier or customer formats', 'We set up label printing connected to your systems and courier requirements.'],
    ],
    divisions: ['hardware-procurement', 'business-systems-integration', 'it-infrastructure-implementation'],
    seo: { title: 'Warehouse Wi-Fi, Barcode & WMS Solutions Jakarta | PatuhData', description: 'Warehouse Wi-Fi, barcode scanners, label printers, and warehouse management systems for fulfillment and logistics operators in Greater Jakarta.' },
    id: { name: 'Pergudangan & Logistik', summary: 'Wi-Fi gudang, sistem barcode, dan pencetakan label yang andal di setiap shift.', example: ['Area Wi-Fi mati di antara rak', 'Kami menyurvei lantai gudang dan menempatkan access point untuk cakupan di lorong, dok, dan kantor.'] },
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    title: 'Technology for Manufacturing Companies',
    summary: 'Reliable plant networks, protected production data, and connected inventory.',
    intro: 'Factories need IT that does not stop the line: dependable networks across production areas, maintained servers with protected data, and inventory that matches what is produced and shipped.',
    challenges: [
      ['Network outages that interrupt production systems', 'We design and implement separated, reliable networks for office and production areas.'],
      ['Materials and finished goods tracked on paper', 'We implement barcode-based tracking for materials, work in progress, and finished goods.'],
      ['Plant servers without monitoring or backup', 'We monitor and maintain servers on schedule, and implement tested backups.'],
      ['Equipment replaced only after it fails', 'We plan upgrades in stages and provide preventive maintenance.'],
    ],
    divisions: ['it-infrastructure-implementation', 'managed-it-business-continuity', 'business-systems-integration'],
    seo: { title: 'IT Infrastructure for Manufacturing Companies Jakarta | PatuhData', description: 'Plant networks, server maintenance and backup, and barcode inventory tracking for manufacturers in Jakarta, Tangerang, Bekasi, and Cikarang.' },
    id: { name: 'Manufaktur', summary: 'Jaringan pabrik yang andal, data produksi yang terlindungi, dan inventori yang terhubung.', example: ['Gangguan jaringan yang menghentikan sistem produksi', 'Kami merancang jaringan terpisah dan andal untuk area kantor dan produksi.'] },
  },
  {
    slug: 'corporate-offices',
    name: 'Corporate Offices',
    title: 'Technology for Corporate & Professional Offices',
    summary: 'Secure networks, ready-to-use devices, protected data, and responsive support.',
    intro: 'Corporate and professional service offices need IT that simply works: fast and secure networks, well-managed devices, protected data, and support staff can reach quickly.',
    image: '/images/office-interior.jpg',
    challenges: [
      ['Slow or unreliable office Wi-Fi', 'We redesign office networks and Wi-Fi for coverage, speed, and security.'],
      ['New staff waiting days for working equipment', 'We supply and configure laptops and accounts so new staff are ready on day one.'],
      ['Files and email without proper backup', 'We implement backup for servers, files, and Microsoft 365 or Google Workspace.'],
      ['No one accountable for day-to-day IT', 'We provide a support contract with defined response targets and regular maintenance.'],
    ],
    divisions: ['managed-it-business-continuity', 'hardware-procurement', 'it-infrastructure-implementation'],
    seo: { title: 'Managed IT for Corporate Offices in Jakarta | PatuhData', description: 'Office networks and Wi-Fi, configured laptops, backup for files and email, and IT support contracts for corporate and professional offices in Greater Jakarta.' },
    id: { name: 'Kantor Korporat', summary: 'Jaringan aman, perangkat siap pakai, data terlindungi, dan dukungan yang responsif.', example: ['Wi-Fi kantor yang lambat atau tidak stabil', 'Kami mendesain ulang jaringan dan Wi-Fi kantor untuk cakupan, kecepatan, dan keamanan.'] },
  },
]

/** Platforms we implement and support. Shown as technologies, never as official partnerships. */
export const technologies: { name: string; logo: string; scale?: number }[] = [
  { name: 'Veeam', logo: '/Veeam_logo.png' },
  { name: 'Synology', logo: '/synology-logo.svg' },
  { name: 'VMware', logo: '/VMware-Logo.png', scale: 1.7 },
  { name: 'MikroTik', logo: '/MikroTik_Logo_(2022).svg' },
  { name: 'Sophos', logo: '/Sophos_logo.png', scale: 1.5 },
  { name: 'AWS', logo: '/Amazon_Web_Services_Logo.svg' },
]

export const lakuin = { name: 'Lakuin', url: 'https://lakuin.store' }

export const serviceArea = 'Jakarta, Tangerang, Bekasi, Cikarang, and Greater Jakarta'

export const findDivision = (slug: string) => divisions.find(division => division.slug === slug)
export const findIndustry = (slug: string) => industries.find(industry => industry.slug === slug)

type Page = { title: string; description: string; type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'Service' | 'CollectionPage' }

/** SEO metadata for every route. Also drives prerendering and the sitemap. */
export const pages: Record<string, Page> = {
  '/': { title: 'IT Infrastructure, Hardware & Managed IT Solutions Jakarta | PatuhData', description: 'PatuhData helps Indonesian businesses acquire, implement, integrate, and maintain technology infrastructure: networks, hardware procurement, managed IT, and business systems. One accountable partner.', type: 'WebPage' },
  '/id': { title: 'Solusi Infrastruktur IT, Hardware & Managed IT Jakarta | PatuhData', description: 'PatuhData membantu bisnis di Indonesia memperoleh, mengimplementasikan, mengintegrasikan, dan memelihara infrastruktur teknologi: jaringan, pengadaan hardware, managed IT, dan sistem bisnis.', type: 'WebPage' },
  '/about': { title: 'About PatuhData | Technology & Infrastructure Partner', description: 'PT PatuhData Solusi Nusantara is a Jakarta technology solutions company providing IT infrastructure, hardware procurement, managed IT, and business systems integration.', type: 'AboutPage' },
  '/contact': { title: 'Contact PatuhData | Discuss Your IT Requirements', description: 'Request a quotation, a site assessment, or discuss your project with PatuhData by WhatsApp, email, or our requirements form. We reply within one working day.', type: 'ContactPage' },
  ...Object.fromEntries(divisions.map(d => [`/services/${d.slug}`, { ...d.seo, type: 'Service' as const }])),
  ...Object.fromEntries(industries.map(i => [`/industries/${i.slug}`, { ...i.seo, type: 'WebPage' as const }])),
  '/privacy': { title: 'Privacy Policy | PatuhData', description: 'How PatuhData collects, uses, protects and manages personal data.', type: 'WebPage' },
  '/terms': { title: 'Terms of Service | PatuhData', description: 'Terms governing the use of the PatuhData website and services.', type: 'WebPage' },
  '/cookies': { title: 'Cookie Policy | PatuhData', description: 'Information about cookies used on the PatuhData website.', type: 'WebPage' },
}

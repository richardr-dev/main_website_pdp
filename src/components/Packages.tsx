import { useState } from 'react'

const waBase = 'https://wa.me/6281903378000?text='

const tabs = ['Jaringan & Wi-Fi', 'CCTV & Kamera', 'Paket Lengkap']

const networkPackages = [
  {
    name: 'Paket Wi-Fi Mini',
    highlight: '1 Access Point',
    best: 'Cocok untuk kantor s/d 20 orang',
    specs: [
      '1 Unit Access Point TP-Link EAP225 AC1200',
      '1 Unit Switch TP-Link TL-SG105 5-Port Gigabit',
      'Kabel UTP Cat6 30 Meter',
      'RJ45 Connector & Keystone Jack',
      'Jasa Instalasi & Konfigurasi',
      'Speed Test & Coverage Check',
    ],
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan Paket Wi-Fi Mini (1 AP). Boleh info harga dan jadwal survei?'),
  },
  {
    name: 'Paket Wi-Fi Bisnis',
    highlight: '2 Access Points',
    best: 'Cocok untuk kantor 20–75 orang',
    specs: [
      '2 Unit Ubiquiti UniFi U6-Lite Access Point',
      '1 Unit Switch TP-Link TL-SG1016D 16-Port',
      'Kabel UTP Cat6 80 Meter',
      'Patch Panel & Rack Mini',
      'Setup UniFi Network Controller',
      'Guest Network & SSID terpisah',
      'Jasa Instalasi & Konfigurasi lengkap',
    ],
    featured: true,
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan Paket Wi-Fi Bisnis (2 AP Ubiquiti). Boleh info harga dan jadwal survei?'),
  },
  {
    name: 'Paket Wi-Fi Gedung',
    highlight: '4+ Access Points',
    best: 'Multi-lantai atau 75+ orang',
    specs: [
      '4 Unit Ubiquiti UniFi U6-Pro Access Point',
      '1 Unit Switch Managed TP-Link 24-Port',
      '1 Unit Router Mikrotik hEX S',
      'Kabel UTP Cat6 200 Meter',
      'Rack Cabinet 6U + Patch Panel',
      'VLAN Setup, Guest Network, Bandwidth Management',
      'Survei & Desain Jaringan termasuk',
    ],
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan Paket Wi-Fi Gedung (4 AP). Boleh info harga dan jadwal survei?'),
  },
]

const cctvPackages = [
  {
    name: 'Paket CCTV 4 Titik',
    highlight: '4 Kamera',
    best: 'Cocok untuk toko, ruko, atau kantor kecil',
    specs: [
      '4 Unit IP Camera 2MP Hikvision DS-2CD1123G0E',
      '1 Unit NVR 4 Channel Hikvision DS-7604NI-K1',
      'Kabel FTP Cat6 60 Meter',
      '1 Unit HDD WD Purple 1TB',
      'PoE Injector + Power Supply',
      'Jasa Instalasi 4 Titik',
      'Setting Remote View di HP/Laptop',
    ],
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan Paket CCTV 4 Titik. Boleh info harga dan jadwal survei?'),
  },
  {
    name: 'Paket CCTV 8 Titik',
    highlight: '8 Kamera',
    best: 'Warehouse, kantor menengah, minimarket',
    specs: [
      '8 Unit IP Camera 2MP Dahua HAC-HFW1200C',
      '1 Unit DVR 8 Channel Dahua XVR5108HS',
      'Kabel Video + Power 120 Meter',
      '1 Unit HDD WD Purple 2TB',
      'Power Supply Brand Hikvision/Dahua',
      'Jasa Instalasi 8 Titik',
      'Setting Remote View Gratis',
    ],
    featured: true,
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan Paket CCTV 8 Titik. Boleh info harga dan jadwal survei?'),
  },
  {
    name: 'Paket CCTV 16 Titik',
    highlight: '16 Kamera',
    best: 'Gedung, pabrik, area besar',
    specs: [
      '16 Unit IP Camera 2MP Hikvision/Dahua',
      '1 Unit DVR 16 Channel',
      'Kabel Video + Power 240 Meter',
      '1 Unit HDD WD Purple 4TB',
      'Power Supply & Housing termasuk',
      'Jasa Instalasi 16 Titik',
      'Setting Remote View semua kamera',
    ],
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan Paket CCTV 16 Titik. Boleh info harga dan jadwal survei?'),
  },
]

const bundlePackages = [
  {
    name: 'SME Starter Pack',
    highlight: 'Wi-Fi + CCTV + UPS',
    best: 'Kantor baru atau renovasi IT',
    specs: [
      '1 x AP TP-Link EAP225 + Switch 5-Port',
      '4 x CCTV 2MP Hikvision + NVR + HDD 1TB',
      '1 x UPS APC BX1100C-MS 1100VA',
      'Semua kabel & aksesoris termasuk',
      'Instalasi & konfigurasi semua perangkat',
      'Setting remote view CCTV',
      'Garansi hardware 1 tahun',
    ],
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan SME Starter Pack (Wi-Fi + CCTV + UPS). Boleh info harga dan jadwal survei?'),
  },
  {
    name: 'SME Office Pack',
    highlight: 'Wi-Fi + CCTV + UPS + NAS',
    best: 'Kantor 20–75 orang, all-in-one',
    specs: [
      '2 x Ubiquiti UniFi U6-Lite + Switch 16-Port',
      '8 x CCTV 2MP Dahua + DVR + HDD 2TB',
      '2 x UPS APC BX1100C-MS 1100VA',
      '1 x NAS Synology DS223 + HDD 4TB Mirror',
      'Rack cabinet + patch panel',
      'Full instalasi & konfigurasi semua unit',
      'Garansi hardware 2 tahun + support 12 bulan',
    ],
    featured: true,
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan SME Office Pack (Paket Lengkap). Boleh info harga dan jadwal survei?'),
  },
  {
    name: 'SME Enterprise Pack',
    highlight: 'Full IT Infrastructure',
    best: 'Gedung, multi-lantai, 75+ orang',
    specs: [
      '4 x Ubiquiti U6-Pro + Managed Switch 24-Port + Mikrotik',
      '16 x CCTV 2MP + DVR 16Ch + HDD 4TB',
      '4 x UPS APC + AVR untuk server',
      '1 x Server Dell/HP + NAS Synology 4-bay',
      'Rack server 12U + structured cabling',
      'VLAN + firewall + monitoring 24/7',
      'Kontrak maintenance 12 bulan termasuk',
    ],
    wa: encodeURIComponent('Halo PatuhData, saya tertarik dengan SME Enterprise Pack. Boleh info harga dan jadwal survei?'),
  },
]

const allPackages = [networkPackages, cctvPackages, bundlePackages]

function CheckIcon() {
  return <span className="shrink-0 text-primary-500 font-bold mt-0.5 text-xs">✓</span>
}

export default function Packages() {
  const [active, setActive] = useState(0)
  const packages = allPackages[active]

  return (
    <section id="packages" className="section bg-slate-50 border-y border-slate-100">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="label">Paket Harga</p>
          <h2
            className="mt-3 font-black text-slate-900 leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
          >
            Harga Transparan.<br />Spesifikasi Jelas.
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Tidak ada biaya tersembunyi. Semua sudah termasuk hardware, kabel, dan jasa instalasi. Tanya via WhatsApp untuk penawaran sesuai kebutuhan Anda.
          </p>
        </div>

        {/* tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActive(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* package cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl bg-white border flex flex-col transition-all duration-200 ${
                pkg.featured
                  ? 'border-primary-400 shadow-xl shadow-primary-100 ring-1 ring-primary-400'
                  : 'border-slate-200 hover:border-primary-200 hover:shadow-card'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary-600 px-4 py-1 text-xs font-bold text-white shadow">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className={`rounded-t-2xl p-6 ${pkg.featured ? 'bg-primary-600' : 'bg-slate-50 border-b border-slate-100'}`}>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${pkg.featured ? 'text-primary-200' : 'text-slate-400'}`}>
                  {pkg.highlight}
                </p>
                <h3 className={`text-lg font-black ${pkg.featured ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
                <p className={`text-xs mt-1 ${pkg.featured ? 'text-primary-200' : 'text-slate-500'}`}>{pkg.best}</p>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-2.5 flex-1">
                  {pkg.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <CheckIcon />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2.5">
                  <a
                    href={waBase + pkg.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full rounded-full bg-primary-600 py-3 text-sm font-bold text-white hover:bg-primary-500 transition-all duration-200 hover:-translate-y-px"
                  >
                    Tanya via WhatsApp →
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center justify-center w-full rounded-lg border border-slate-200 py-2.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    Minta Penawaran Tertulis
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Harga disesuaikan dengan kondisi lokasi & kebutuhan aktual setelah survei gratis.{' '}
          <a href="https://wa.me/6281903378000" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold hover:underline">
            Hubungi kami
          </a>{' '}
          untuk paket custom.
        </p>
      </div>
    </section>
  )
}

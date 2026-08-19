const partners = [
  { name: 'Veeam', src: '/Veeam_logo.png' },
  { name: 'Sophos', src: '/Sophos_logo.png' },
  { name: 'VMware', src: '/VMware-Logo.png' },
  { name: 'Synology', src: '/Synology--Streamline-Simple-Icons.svg' },
  { name: 'AWS', src: '/Amazon_Web_Services_Logo.svg' },
]

export default function ClientLogos() {
  return (
    <div className="bg-white border-b border-slate-100 py-14">
      <div className="container reveal">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-600 mb-10 text-center">
          Technology Partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {partners.map((p) => (
            <img
              key={p.name}
              src={p.src}
              alt={p.name}
              className="h-8 w-auto object-contain grayscale opacity-50"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  radius: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0
    let H = 0
    let particles: Particle[] = []

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * window.devicePixelRatio
      canvas.height = H * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const initParticles = () => {
      particles = []
      const count = Math.floor((W * H) / 9000)
      for (let i = 0; i < Math.max(count, 60); i++) {
        const z = Math.random()
        particles.push({
          x: Math.random() * W,
          // wave distribution — cluster in sine wave bands
          y: H * 0.35 + Math.sin(i * 0.4) * H * 0.28 + (Math.random() - 0.5) * H * 0.35,
          z,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.12,
          vz: (Math.random() - 0.5) * 0.003,
          radius: 1.2 + z * 3,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Background
      ctx.fillStyle = '#060c18'
      ctx.fillRect(0, 0, W, H)

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.z += p.vz
        if (p.x < -20) p.x = W + 20
        if (p.x > W + 20) p.x = -20
        if (p.y < -40) p.y = H + 40
        if (p.y > H + 40) p.y = -40
        if (p.z < 0) p.z = 1
        if (p.z > 1) p.z = 0

        const alpha = 0.25 + p.z * 0.65
        const r = 1 + p.z * 3.5

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 5)
        grd.addColorStop(0, `rgba(56,139,253,${alpha * 0.9})`)
        grd.addColorStop(0.4, `rgba(37,99,235,${alpha * 0.35})`)
        grd.addColorStop(1, 'rgba(37,99,235,0)')
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 5, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147,197,253,${alpha})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 130

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.18 * ((p.z + q.z) / 2 + 0.3)
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(56,139,253,${lineAlpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    const ro = new ResizeObserver(() => {
      resize()
      initParticles()
    })
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: '340px', background: '#060c18' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating stats card */}
      <div
        className="absolute top-5 right-5 rounded-xl border border-white/10 px-5 py-4 backdrop-blur-md z-10"
        style={{ background: 'rgba(10,15,30,0.85)' }}
      >
        <p
          className="font-black text-primary-400 leading-none"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '2.4rem' }}
        >
          50+
        </p>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-0.5">
          Proyek Selesai
        </p>
      </div>

      {/* Bottom labels */}
      <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between z-10">
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/25">
          Dipercaya tim IT di berbagai industri
        </p>
        <div className="flex items-center gap-1.5 text-white/25">
          <p className="text-[10px] font-bold uppercase tracking-widest">Gulir ke bawah</p>
          <svg className="h-3 w-3 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Edge fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(6,12,24,0.4) 0%, transparent 15%, transparent 85%, rgba(6,12,24,0.4) 100%)',
        }}
      />
    </div>
  )
}

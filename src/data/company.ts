/** Contact details and service commitments shown across the site. Edit here to change them everywhere. */
export const company = {
  email: 'hello@patuhdata.id',
  phone: '+62 819 0337 8000',
  whatsappNumber: '6281903378000',
  officeHours: 'Monday to Friday, 09.00–17.00 WIB',
  officeHoursId: 'Senin–Jumat, 09.00–17.00 WIB',
  responseTime: 'one working day',
}

export const whatsappLink = (message: string) => `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`

export const urgentWhatsapp = whatsappLink('URGENT — Hello PatuhData, we have an IT problem that needs help now: ')

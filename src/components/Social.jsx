import React from 'react'

function Social() {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '💻', url: '#' },
    { name: 'Email', icon: '📧', url: 'mailto:example@email.com' }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        🌐 Kết Nối
      </h2>
      
      <p className="text-center text-gray-600 mb-8">
        Hãy giữ liên lạc và theo dõi hành trình của tôi!
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="flex flex-col items-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg hover:from-purple-200 hover:to-pink-200 transition-all duration-200 transform hover:scale-105"
          >
            <span className="text-3xl mb-2">{social.icon}</span>
            <span className="text-sm font-medium text-gray-700">{social.name}</span>
          </a>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 - Thiệp Tốt Nghiệp được tạo với NguyenVanThinh
        </p>
      </div>
    </div>
  )
}

export default Social
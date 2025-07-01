import React from 'react'

function Notes() {
  return (
    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        📝 Lưu Bút & Lời Cảm Ơn
      </h2>
      
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">💝 Lời Cảm Ơn</h3>
          <p className="text-gray-600 leading-relaxed">
            Cảm ơn gia đình, thầy cô và bạn bè đã đồng hành cùng tôi trong suốt quãng đường học tập. 
            Những kỷ niệm đẹp sẽ mãi mãi được lưu giữ trong tim.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">🎯 Lời Hứa</h3>
          <p className="text-gray-600 leading-relaxed">
            Tôi hứa sẽ không ngừng nỗ lực, phấn đấu để trở thành người có ích cho xã hội 
            và làm rạng danh mái trường thân yêu.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="font-semibold text-gray-800 mb-3">🌟 Ước Mơ</h3>
          <p className="text-gray-600 leading-relaxed">
            Với kiến thức đã tích lũy, tôi sẽ theo đuổi ước mơ của mình và đóng góp 
            vào sự phát triển của đất nước.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Notes
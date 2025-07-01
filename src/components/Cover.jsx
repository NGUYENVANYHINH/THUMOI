import React, { useState } from 'react'
import Select from 'react-select'

const PRONOUNS = [
  'Anh', 'Chị', 'Em', 'Cô', 'Dì', 'Chú', 'Bác', 'Ông', 'Bà', 'Bạn', 'Thầy', 'Cô giáo'
]

const PRONOUN_OPTIONS = PRONOUNS.map(p => ({ value: p, label: p }))

function Cover({ onOpenCard }) {
  const [name, setName] = useState('')
  const [pronoun, setPronoun] = useState(PRONOUN_OPTIONS[0])
  const [inputFocus, setInputFocus] = useState(false)

  const handleOpenCard = () => {
    if (name.trim()) {
      onOpenCard({ name: name.trim(), pronoun: pronoun.value })
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white"
      style={{}}
    >
      {/* Overlay trắng trong suốt để chữ dễ đọc */}
      <div className="absolute inset-0 bg-white/20 z-0"></div>
      {/* Hiệu ứng động cho nhiều bóng tròn màu đậm nhạt khác nhau */}
      <style>{`
        @keyframes floatY { 0% { transform: translateY(0); } 30% { transform: translateY(-20px) scale(1.08) rotate(-6deg); } 50% { transform: translateY(40px) scale(1.12) rotate(6deg); } 70% { transform: translateY(-10px) scale(1.05) rotate(-3deg); } 100% { transform: translateY(0); } }
        @keyframes scalePulse { 0% { transform: scale(1) rotate(0deg); } 30% { transform: scale(1.15) rotate(3deg); } 50% { transform: scale(1.22) rotate(-4deg); } 70% { transform: scale(1.08) rotate(2deg); } 100% { transform: scale(1) rotate(0deg); } }
        @keyframes floatX { 0% { transform: translateX(0); } 30% { transform: translateX(-18px) scale(1.08); } 50% { transform: translateX(38px) scale(1.13); } 70% { transform: translateX(-10px) scale(1.05); } 100% { transform: translateX(0); } }
        @keyframes floatXY { 0% { transform: translate(0,0) scale(1); } 30% { transform: translate(-12px,12px) scale(1.08); } 50% { transform: translate(32px,32px) scale(1.15); } 70% { transform: translate(-8px,8px) scale(1.05); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes gentleFloat { 0% { transform: translate(-50%, 0) rotate(-4deg); } 50% { transform: translate(-50%, -25px) rotate(4deg); } 100% { transform: translate(-50%, 0) rotate(-4deg); } }
        @keyframes diplomaFloat { 0% { transform: translate(-50%, 0); } 50% { transform: translate(-50%, -15px); } 100% { transform: translate(-50%, 0); } }
        select.custom-pronoun-select {
          background: transparent;
          border-radius: 1.5rem;
          border: 1.5px solid #6ee7b7;
          box-shadow: 0 2px 8px 0 #6ee7b722;
          font-size: 15px;
          font-weight: 500;
          color: #134e4a;
          transition: border 0.2s, box-shadow 0.2s;
          padding: 6px 16px;
          min-height: 28px;
          max-width: 180px;
        }
        select.custom-pronoun-select:focus {
          border: 2px solid #34d399;
          box-shadow: 0 4px 16px 0 #6ee7b799;
        }
        select.custom-pronoun-select option {
          background: rgba(52, 211, 153, 0.10);
          color: #134e4a;
          border-radius: 1rem;
        }
        select.custom-pronoun-select option:hover, select.custom-pronoun-select option:focus {
          background: rgba(52, 211, 153, 0.22) !important;
          color: #065f46;
        }
        input.custom-modern-input {
          background: rgba(255,255,255,0.10);
          border-radius: 1.5rem;
          border: 1.5px solid #6ee7b7;
          box-shadow: 0 2px 8px 0 #6ee7b722;
          font-size: 16px;
          font-weight: 500;
          color: #134e4a;
          transition: border 0.2s, box-shadow 0.2s;
          padding: 12px 20px 12px 44px;
        }
        input.custom-modern-input:focus {
          border: 2px solid #34d399;
          box-shadow: 0 4px 16px 0 #6ee7b799;
          background: rgba(255,255,255,0.18);
        }
        input.custom-modern-input::placeholder {
          color: #6ee7b7;
          opacity: 1;
        }
        button.custom-modern-btn {
          background: rgba(255,255,255,0.10);
          border-radius: 1.5rem;
          border: 1.5px solid #6ee7b7;
          box-shadow: 0 2px 8px 0 #6ee7b722;
          font-size: 16px;
          font-weight: 700;
          color: #059669;
          transition: border 0.2s, box-shadow 0.2s, background 0.2s;
          padding: 10px 0;
        }
        button.custom-modern-btn:enabled:hover {
          border: 2px solid #34d399;
          background: rgba(52, 211, 153, 0.10);
          color: #065f46;
        }
        button.custom-modern-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        button.custom-modern-btn.custom-dark-btn {
          background: #101a36;
          color: #fff;
          border: 1.5px solid #101a36;
        }
        button.custom-modern-btn.custom-dark-btn:enabled:hover {
          background: #34d399;
          color: #101a36;
          border: 2px solid #34d399;
        }
      `}</style>
      {/* Bóng tròn xanh dương đậm lớn, trên trái, floatY */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-700 rounded-full opacity-20 z-10" style={{animation: 'floatY 7s ease-in-out infinite'}}></div>
      {/* Mũ tốt nghiệp lớn trên chữ YOU'VE GOT AN */}
      <div className="absolute left-1/2" style={{top: '70px', zIndex: 30, animation: 'gentleFloat 4s ease-in-out infinite'}}>
        <img src="https://i.postimg.cc/L4BHXwfh/illustration-of-graduation-cap-icon-free-png.webp" alt="Graduation Cap" className="w-28 h-auto" />
      </div>
      {/* Bóng tròn xanh dương nhạt lớn, dưới phải, scalePulse */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 z-10" style={{animation: 'scalePulse 9s ease-in-out infinite'}}></div>
      {/* Bóng tròn tím nhạt nhỏ, trên phải, floatX */}
      <div className="absolute top-10 right-32 w-16 h-16 bg-purple-200 rounded-full opacity-30 z-10" style={{animation: 'floatX 8s ease-in-out infinite'}}></div>
      {/* Bóng tròn xanh lá nhạt nhỏ, dưới trái, floatXY */}
      <div className="absolute bottom-20 left-24 w-20 h-20 bg-lime-200 rounded-full opacity-30 z-10" style={{animation: 'floatXY 10s ease-in-out infinite'}}></div>
      {/* Bóng tròn xanh dương đậm nhỏ, giữa phải, scalePulse */}
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-blue-500 rounded-full opacity-20 z-10" style={{animation: 'scalePulse 6s ease-in-out infinite'}}></div>
      <div className="relative z-20 w-full max-w-xl mx-4 flex flex-col items-center py-10 px-2">
        {/* Hiệu ứng cọ vẽ xanh đậm cho tiêu đề chính */}
        <div className="w-full flex flex-col items-center relative" style={{marginBottom: 36}}>
          <svg width="340" height="90" viewBox="0 0 340 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-[-55px]">
            <path d="M10 50 Q 60 15 170 45 Q 280 75 330 40" stroke="#dbeafe" strokeWidth="36" strokeLinecap="round" fill="none" opacity="0.8"/>
          </svg>
          <h2 className="text-3xl font-black text-blue-800 text-center relative select-none" style={{ top: 12, fontFamily: `'Playfair Display', serif`, textShadow: '3px 5px 8px rgba(0,0,0,0.4)', letterSpacing: '1px', WebkitTextStroke: '0.5px #1e40af', lineHeight: 1.1 }}>
            THƯ MỜI DỰ LỄ
            <br />
            TỐT NGHIỆP
          </h2>
        </div>
        {/* Invitation script trên nền cọ vẽ xanh nhạt */}
        <div className="relative flex flex-col items-center mb-4" style={{marginTop: 8}}>
          <svg width="170" height="36" viewBox="0 0 170 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute">
            <path d="M10 28 Q 130 6 160 18" stroke="#93c5fd" strokeWidth="16" strokeLinecap="round" fill="none" opacity="0.7"/>
          </svg>
          <span className="relative text-2xl italic font-bold text-blue-700" style={{fontFamily: 'cursive', marginTop: 10, letterSpacing: '1px', WebkitTextStroke: '1.2px #2563eb', color: '#2563eb'}}>
            GRADUATION
          </span>
        </div>
        {/* Nội dung chính */}
        <div className="mb-6 text-center mt-2 relative flex flex-col items-center">
          <p className="text-base font-semibold text-red-500 tracking-wide leading-tight">
            ĐẾN THAM DỰ<br/>BUỔI LỄ TỐT NGHIỆP
          </p>
          <svg width="260" height="18" viewBox="0 0 260 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginTop: -2}}>
            <path d="M12 12 Q 130 22 248 8" stroke="#fb7185" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.35"/>
          </svg>
        </div>
        <form className="space-y-6 w-full max-w-md mx-auto flex flex-col items-center" onSubmit={e => {e.preventDefault(); handleOpenCard();}}>
          <div className="w-full flex flex-col items-center">
            {/* Input tên trước */}
            <label className="block text-sm font-semibold text-blue-700 mb-2 text-left w-3/5 transition-all duration-300">
              Tên của bạn
            </label>
            <div className={`transition-all duration-300 ${inputFocus ? 'w-full' : 'w-3/5'} mb-3`} style={{maxWidth: 400}}>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300 text-xl pointer-events-none">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4" stroke="#60a5fa" strokeWidth="2"/></svg>
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setInputFocus(true)}
                  onBlur={() => setInputFocus(false)}
                  className="w-full custom-modern-input focus:outline-none"
                  placeholder="Nhập tên của bạn..."
                  style={{fontFamily: 'inherit'}}
                />
              </div>
            </div>
            {/* Dropdown xưng hô sau */}
            <label className="block text-sm font-semibold text-blue-700 mb-2 text-left w-3/5 transition-all duration-300">
              Xưng hô
            </label>
            <div className={`transition-all duration-300 ${inputFocus ? 'w-full' : 'w-3/5'} mb-3`} style={{maxWidth: 220}}>
              <Select
                value={pronoun}
                onChange={setPronoun}
                options={PRONOUN_OPTIONS}
                isSearchable={false}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    background: 'rgba(255,255,255,0.10)',
                    borderRadius: 24,
                    borderColor: state.isFocused ? '#34d399' : '#6ee7b7',
                    boxShadow: state.isFocused ? '0 4px 16px 0 #6ee7b799' : '0 2px 8px 0 #6ee7b722',
                    minHeight: 36,
                    maxWidth: 220,
                    fontWeight: 500,
                    fontSize: 15,
                    color: '#134e4a',
                    paddingLeft: 8,
                    paddingRight: 8,
                  }),
                  menu: base => ({
                    ...base,
                    background: 'rgba(255,255,255,0.85)',
                    borderRadius: 18,
                    boxShadow: '0 8px 32px 0 #6ee7b733',
                    marginTop: 4,
                    overflow: 'hidden',
                  }),
                  option: (base, state) => ({
                    ...base,
                    background: state.isSelected
                      ? 'rgba(52, 211, 153, 0.22)'
                      : state.isFocused
                        ? 'rgba(52, 211, 153, 0.12)'
                        : 'transparent',
                    color: state.isSelected ? '#065f46' : '#134e4a',
                    borderRadius: 12,
                    fontWeight: 500,
                    fontSize: 15,
                    cursor: 'pointer',
                  }),
                  singleValue: base => ({
                    ...base,
                    color: '#134e4a',
                  }),
                  dropdownIndicator: base => ({
                    ...base,
                    color: '#34d399',
                  }),
                  indicatorSeparator: () => ({ display: 'none' }),
                }}
                theme={theme => ({
                  ...theme,
                  borderRadius: 24,
                  colors: {
                    ...theme.colors,
                    primary25: 'rgba(52, 211, 153, 0.12)',
                    primary: '#34d399',
                  },
                })}
                menuPlacement="auto"
                menuPosition="fixed"
                placeholder="Chọn xưng hô..."
                inputId="pronoun-select"
                instanceId="pronoun-select"
              />
            </div>
            {/* Hiển thị preview Anh Thịnh */}
            {name.trim() && pronoun?.value && (
              <div className="w-full flex justify-center mb-2">
                <span className="inline-block px-4 py-1 rounded-full bg-green-50 text-green-700 font-semibold text-lg shadow-sm border border-green-200">
                  {pronoun.value} {name.trim()}
                </span>
              </div>
            )}
          </div>
          {/* Nút Open Invitation màu nền xanh đậm */}
          <div className={`transition-all duration-300 ${inputFocus ? 'w-full' : 'w-3/5'}`} style={{maxWidth: 400}}>
            <button
              type="submit"
              disabled={!name.trim()}
              className="w-full custom-modern-btn custom-dark-btn focus:outline-none"
              style={{fontFamily: 'inherit', letterSpacing: '1px'}}
            >
              <span
                className="relative z-10"
                style={{
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  fontFamily: `'cursive', sans-serif`,
                  letterSpacing: '1.5px'
                }}
              >
                Mở Thiệp →
              </span>
            </button>
          </div>
        </form>
        {/* Hình tròn trang trí nhỏ */}
        <div className="absolute top-10 right-10 w-8 h-8 bg-blue-200 rounded-full opacity-30 z-20"></div>
      </div>
      <img
        src="https://i.postimg.cc/mD0JyQnm/diploma-152024-640.webp"
        alt="Bằng tốt nghiệp"
        className="absolute bottom-10 left-1/2 w-24 h-auto"
        style={{ zIndex: 10, animation: 'diplomaFloat 5s ease-in-out infinite' }}
      />
    </div>
  )
}

export default Cover

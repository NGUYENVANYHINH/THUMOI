import React, { useEffect, useState } from 'react';

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;
      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeParts = [
    { value: timeLeft.days, label: 'ngày' },
    { value: String(timeLeft.hours).padStart(2, '0'), label: 'giờ' },
    { value: String(timeLeft.minutes).padStart(2, '0'), label: 'phút' },
    { value: String(timeLeft.seconds).padStart(2, '0'), label: 'giây' },
  ];

  return (
    <div className="text-center">
      <p className="text-sm" style={{ color: '#F3F4F6', fontFamily: "'Cormorant Garamond', serif" }}>Thời gian còn lại đến lễ tốt nghiệp</p>
      <div className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
        {timeParts.map(part => `${part.value}`).join(' : ')}
      </div>
    </div>
  );
}

function MainCard({ userInfo }) {
  const displayName = (userInfo?.pronoun ? userInfo.pronoun + ' ' : '') + (userInfo?.name || 'Bạn');
  const targetDate = new Date('2025-07-25T07:30:00+07:00');
  const mainFont = "'Cormorant Garamond', serif";
  const textColor = '#F3F4F6';

  // Hàm viết hoa chữ cái đầu tên
  function capitalizeName(name) {
    if (!name) return 'Bạn';
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  // Tạo displayName có xưng hô và tên viết hoa đầu
  const displayNameWithCap = (userInfo?.pronoun ? userInfo.pronoun + ' ' : '') + capitalizeName(userInfo?.name);

  // Hiệu ứng xuất hiện lần lượt
  const [visibleSections, setVisibleSections] = useState([]);
  useEffect(() => {
    setVisibleSections([]);
    let timeouts = [];
    for (let i = 0; i < 7; i++) {
      timeouts.push(setTimeout(() => {
        setVisibleSections(prev => [...prev, i]);
      }, i * 600));
    }
    return () => timeouts.forEach(clearTimeout);
  }, [userInfo]);

  // Helper cho class hiệu ứng
  function sectionClass(idx) {
    return `transition-all duration-700 ease-out ${visibleSections.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;
  }

  return (
    <>
      <div className="max-w-4xl mx-auto text-center p-4 md:p-6" style={{ fontFamily: mainFont, color: textColor }}>
        {/* Logo và trường */}
        <div className={`flex justify-center items-center mb-6 ${sectionClass(0)}`}> {/* idx 0 */}
          <div className="h-10 w-10 md:h-14 md:w-14 mr-2 md:mr-3 rounded-full bg-white flex items-center justify-center p-1 shadow-md">
            <img 
              src="https://i.postimg.cc/hjbBtddY/LOGO-removebg-preview.png" 
              alt="Logo Trường Đại học Quy Nhơn" 
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-sm md:text-base font-bold text-white">TRƯỜNG ĐẠI HỌC QUY NHƠN</h1>
            <p className="text-xs md:text-sm font-bold text-white">Khoa Công nghệ thông tin</p>
          </div>
        </div>

        {/* Lời mời và avatar */}
        <div className={`my-6 text-lg ${sectionClass(1)}`}> {/* idx 1 */}
          <p>Thân mời <span className="font-bold" style={{ color: '#FFD700' }}>{displayName.toUpperCase()}</span> tham gia và chung vui lễ tốt nghiệp của</p>
          <div className="flex justify-center my-2">
            <img 
              src="https://i.postimg.cc/4dyzhgdG/freepik-adjust-80621.png" 
              alt="Trang trí dưới tên"
              className="w-32 md:w-48 object-contain"
              draggable="false"
            />
          </div>
          <h3 
            className="text-4xl font-extrabold uppercase my-2 mt-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-md"
          >
            Tân Cử Nhân
          </h3>
          <div className="flex justify-center mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/ht63ppkV/avaata.jpg" 
                alt="Ảnh đại diện tân cử nhân" 
                className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-lg object-cover absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ objectPosition: 'center top' }}
              />
              <img
                src="https://i.postimg.cc/jS1Pf1pY/OPSKPI0-Photoroom.png"
                alt="Khung viền avatar"
                className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full pointer-events-none translate-y-4 md:translate-y-6"
                draggable="false"
              />
            </div>
          </div>
        </div>

        {/* Tên và thông tin */}
        <div className={`mt-0 mb-6 ${sectionClass(2)}`}> {/* idx 2 */}
          <h1 
            className="text-3xl md:text-4xl font-extrabold uppercase bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent whitespace-nowrap"
          >
            NGUYỄN VĂN THỊNH
          </h1>
          <div className="flex justify-center my-2">
            <img 
              src="https://i.postimg.cc/4dyzhgdG/freepik-adjust-80621.png" 
              alt="Trang trí dưới tên"
              className="w-32 md:w-48 object-contain"
              draggable="false"
            />
          </div>
          <div className="mt-2 text-lg md:text-xl space-y-1 font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <p>Cử nhân: Công nghệ thông tin</p>
            <p>Chuyên ngành: Công nghệ phần mềm</p>
            <p>Trường: ĐẠI HỌC QUY NHƠN</p>
            <p>Khóa: 2021 - 2025</p>
          </div>
        </div>

        {/* Thời gian & Địa điểm */}
        <div className={`flex flex-row justify-center items-stretch gap-0 my-6 max-w-lg ${sectionClass(3)}`}> {/* idx 3 */}
          {/* Ngăn thời gian */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-l-2xl shadow-lg p-4 flex flex-col items-center justify-center">
            <div className="font-bold text-base md:text-lg mb-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Thời gian</div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">08:00</span>
            </div>
            <div className="text-sm md:text-base text-center text-white font-normal">
              <span>Thứ Sáu, 25/07/2025</span>
            </div>
          </div>
          {/* Border dọc */}
          <div className="w-px bg-gray-300 mx-0 my-4"></div>
          {/* Ngăn địa điểm */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-r-2xl shadow-lg p-4 flex flex-col items-center justify-center">
            <div className="font-bold text-base md:text-lg mb-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Địa điểm</div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="font-extrabold text-xl md:text-2xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">Hội trường B</span>
            </div>
            <div className="text-sm md:text-base text-center text-white font-normal">
              <div>Đại học Quy Nhơn</div>
            </div>
          </div>
        </div>

        {/* Đếm ngược */}
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 my-6 max-w-lg ${sectionClass(4)}`}> {/* idx 4 */}
          <Countdown targetDate={targetDate} />
        </div>

        {/* Lời cuối thiệp */}
        <div className={`mt-8 text-lg md:text-xl font-medium leading-relaxed ${sectionClass(5)}`}> {/* idx 5 */}
          Sự hiện diện của <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-extrabold">{displayNameWithCap}</span> là niềm vinh dự lớn lao, góp phần làm nên ý nghĩa trọn vẹn cho ngày lễ tốt nghiệp này.<br />
          <span className="block mt-2 font-bold">Thân mời <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent font-extrabold">{userInfo?.pronoun || 'Bạn'}</span></span>
        </div>
        <div className={`mt-6 text-left ${sectionClass(6)}`}> {/* idx 6 */}
          <span className="font-bold text-white">Lưu ý: </span>
          <span className="text-white">Đừng quên giữ gìn cẩn thận tài sản cá nhân của mình trong ngày hôm đó nhé, để ngày vui trọn vẹn hơn.</span>
        </div>
        {/* Thông tin liên hệ */}
        <div className={`mt-6 text-left ${sectionClass(6)}`}> {/* idx 6 dùng lại */}
          <div className="font-bold text-white mb-2 text-center w-full">Thông tin liên hệ</div>
          <div className="flex flex-col items-center gap-2">
            {/* Số điện thoại */}
            <a href="tel:0971704417" title="Gọi 0971704417" className="flex items-center gap-2 mb-2 px-4 py-2 rounded-full bg-blue-700 hover:bg-green-500 transition text-white text-base select-all shadow-lg font-normal">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/phone.png" alt="Điện thoại" className="w-6 h-6" />
              0971704417
            </a>
            {/* 3 icon mạng xã hội */}
            <div className="flex flex-row gap-6 items-center justify-center mt-2">
              {/* Zalo */}
              <div className="flex flex-col items-center group">
                <a href="https://zalo.me/0971704417" target="_blank" rel="noopener noreferrer" title="Zalo" className="flex flex-col items-center">
                  <span className="relative">
                    <img src="https://img.icons8.com/color/48/000000/zalo.png" alt="Zalo" className="w-8 h-8 rounded-full bg-blue-700 p-1 group-hover:bg-blue-400 transition" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition">Nhấn để mở Zalo</span>
                  </span>
                  <span className="text-xs text-white mt-1">Zalo</span>
                </a>
              </div>
              {/* Facebook */}
              <div className="flex flex-col items-center group">
                <a href="https://www.facebook.com/vanthinh.nguyen.52142" target="_blank" rel="noopener noreferrer" title="Facebook" className="flex flex-col items-center">
                  <span className="relative">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" className="w-8 h-8 rounded-full bg-blue-700 p-1 group-hover:bg-blue-500 transition" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition">Nhấn để mở Facebook</span>
                  </span>
                  <span className="text-xs text-white mt-1">Facebook</span>
                </a>
              </div>
              {/* TikTok */}
              <div className="flex flex-col items-center group">
                <a href="https://www.tiktok.com/@vtn_nvt" target="_blank" rel="noopener noreferrer" title="TikTok" className="flex flex-col items-center">
                  <span className="relative">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok--v1.png" alt="TikTok" className="w-8 h-8 rounded-full bg-blue-700 p-1 group-hover:bg-pink-500 transition" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition">Nhấn để mở TikTok</span>
                  </span>
                  <span className="text-xs text-white mt-1">TikTok</span>
                </a>
              </div>
            </div>
          </div>
          {/* Dòng bản quyền dưới icon */}
          <div className="mt-4 text-center text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
            © 2025 - Thiệp tốt nghiệp được thiết kế bởi Nguyễn Văn Thịnh
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard;
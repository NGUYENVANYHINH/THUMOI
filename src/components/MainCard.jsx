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
      <div className="flex justify-center gap-4 mt-2">
        {timeParts.map((part, idx) => (
          <div key={part.label} className="flex flex-col items-center">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
              {part.value}
            </span>
            <span className="text-xs text-yellow-100 mt-1 uppercase tracking-wide">{part.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MainCard({ userInfo, lang = 'vi' }) {
  const displayName = (userInfo?.pronoun ? userInfo.pronoun + ' ' : '') + (userInfo?.name || 'Bạn');
  const targetDate = new Date('2025-07-31T07:30:00+07:00');
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

  const text = {
    vi: {
      school: 'TRƯỜNG ĐẠI HỌC QUY NHƠN',
      faculty: 'Khoa Công nghệ thông tin',
      invitation: (name) => `Thân mời ${name} tham dự và chung vui lễ tốt nghiệp của`,
      graduateTitle: 'Tân Cử Nhân',
      name: 'NGUYỄN VĂN THỊNH',
      major: 'Cử nhân: Công nghệ thông tin',
      specialization: 'Chuyên ngành: Công nghệ phần mềm',
      university: 'Trường: ĐẠI HỌC QUY NHƠN',
      course: 'Khóa: 2021 - 2025',
      time: 'Thời gian',
      date: 'Thứ Sáu, 25/07/2025',
      location: 'Địa điểm',
      hall: 'Hội trường B',
      address: 'Đại học Quy Nhơn',
      countdownTitle: 'Thời gian còn lại đến lễ tốt nghiệp',
      presence: (name) => `Sự hiện diện của ${name} là niềm vinh dự lớn lao, góp phần làm nên ý nghĩa trọn vẹn cho ngày lễ tốt nghiệp này.`,
      noteLabel: 'Lưu ý:',
      note: 'Đừng quên giữ gìn cẩn thận tài sản cá nhân của mình trong ngày hôm đó nhé, để ngày vui trọn vẹn hơn.',
      contact: 'Thông tin liên hệ',
      phone: 'Gọi 0971704417',
      zalo: 'Nhấn để mở Zalo',
      facebook: 'Nhấn để mở Facebook',
      tiktok: 'Nhấn để mở TikTok',
      zaloLabel: 'Zalo',
      facebookLabel: 'Facebook',
      tiktokLabel: 'TikTok',
      ad1: 'Đừng để ngày vui chỉ dừng lại ở lời nói!',
      ad2: 'Bạn muốn có một tấm thiệp online độc đáo, sang trọng, mang dấu ấn riêng cho ngày đặc biệt?',
      ad3: 'Hãy gửi thiệp online xịn sò, cá nhân hóa theo ý bạn – từ đám cưới, sinh nhật, tiệc mừng, lời chúc... Hãy để mình biến ý tưởng của bạn thành hiện thực!',
      ad4: 'Hãy liên hệ cho chúng tôi để biết thêm chi tiết',
      ad5: 'Đừng quên giới thiệu cho bạn bè nhé',
      zaloContact: 'Zalo: 0971704417',
      emailContact: 'Email: nguyenvanthinh08042003@gmail.com',
      copyright: '© 2025 - Thiệp tốt nghiệp được thiết kế bởi Nguyễn Văn Thịnh',
      days: 'ngày',
      hours: 'giờ',
      minutes: 'phút',
      seconds: 'giây',
    },
    en: {
      school: 'QUY NHON UNIVERSITY',
      faculty: 'Faculty of Information Technology',
      invitation: (name) => `Dear ${name}, you are cordially invited to the graduation ceremony of`,
      graduateTitle: 'Graduate',
      name: 'NGUYEN VAN THINH',
      major: 'Degree: Information Technology',
      specialization: 'Specialization: Software Engineering',
      university: 'University: QUY NHON UNIVERSITY',
      course: 'Course: 2021 - 2025',
      time: 'Time',
      date: 'Friday, 25/07/2025',
      location: 'Location',
      hall: 'Hall B',
      address: 'Quy Nhon University',
      countdownTitle: 'Countdown to Graduation Ceremony',
      presence: (name) => `Your presence is a great honor and will make this graduation day even more meaningful.`,
      noteLabel: 'Note:',
      note: 'Please take care of your personal belongings on this special day for a perfect celebration.',
      contact: 'Contact Information',
      phone: 'Call 0971704417',
      zalo: 'Click to open Zalo',
      facebook: 'Click to open Facebook',
      tiktok: 'Click to open TikTok',
      zaloLabel: 'Zalo',
      facebookLabel: 'Facebook',
      tiktokLabel: 'TikTok',
      ad1: `Don't let your happy day stop at words!`,
      ad2: 'Want a unique, classy, personalized online card for your special day?',
      ad3: 'Send a cool, personalized online card for weddings, birthdays, parties, wishes... Let me turn your ideas into reality!',
      ad4: 'Contact us for more details',
      ad5: "Don't forget to share with your friends!",
      zaloContact: 'Zalo: 0971704417',
      emailContact: 'Email: nguyenvanthinh08042003@gmail.com',
      copyright: '© 2025 - Graduation card designed by Nguyen Van Thinh',
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
    }
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <div className="w-full max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto text-center p-4 md:p-6" style={{ color: textColor }}>
        {/* Logo và trường */}
        <div className={`flex justify-center items-center mb-6 ${sectionClass(0)}`}> {/* idx 0 */}
          <div className="h-10 w-10 md:h-14 md:w-14 mr-2 md:mr-3 rounded-full bg-white flex items-center justify-center p-1 shadow-md">
            <img 
              src="/LOGO-removebg-preview-Photoroom.png" 
              alt="Logo Trường Đại học Quy Nhơn" 
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-sm md:text-base" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#fff' }}>TRƯỜNG ĐẠI HỌC QUY NHƠN</h1>
            <p className="text-xs md:text-sm uppercase" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#fff' }}>Khoa Công nghệ thông tin</p>
          </div>
        </div>

        {/* Lời mời và avatar */}
        <div className={`my-6 text-lg ${sectionClass(1)}`}> {/* idx 1 */}
          <p style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Thân mời
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent uppercase font-bold ml-2 mr-2">
              {displayNameWithCap}
            </span>
            tham dự và chung vui lễ tốt nghiệp của
          </p>
          <div className="flex justify-center my-2">
            <img 
              src="/freepik__adjust__80621.png" 
              alt="Trang trí dưới tên"
              className="w-32 md:w-48 object-contain"
              draggable="false"
            />
          </div>
          <h3 
            className="text-4xl uppercase my-2 mt-6 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-md mb-0"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
          >
            Tân Cử Nhân
          </h3>
          <div className="flex justify-center mb-0 mt-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              <img 
                src="/avaata.jpg" 
                alt="Ảnh đại diện tân cử nhân" 
                className="w-28 h-28 md:w-36 md:h-36 rounded-full shadow-lg object-cover absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ objectPosition: 'center top' }}
              />
              <img
                src="/OPSKPI0-Photoroom.png"
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
            className="text-3xl md:text-4xl uppercase bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent whitespace-nowrap mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
          >
            NGUYỄN VĂN THỊNH
          </h1>
          <div className="flex justify-center my-2">
            <img 
              src="/freepik__adjust__80621.png" 
              alt="Trang trí dưới tên"
              className="w-32 md:w-48 object-contain"
              draggable="false"
            />
          </div>
          <div className="mt-2 text-lg md:text-xl space-y-1 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
            <p>Cử nhân: Công nghệ thông tin</p>
            <p>Chuyên ngành: Công nghệ phần mềm</p>
            <p>Trường: ĐẠI HỌC QUY NHƠN</p>
            <p>Khóa: 2021 - 2025</p>
          </div>
        </div>

        {/* Thời gian & Địa điểm */}
        <div className={`flex flex-row justify-center items-stretch gap-0 my-6 w-full max-w-2xl mx-auto min-h-[140px] ${sectionClass(3)}`}> {/* idx 3 */}
          {/* Ngăn thời gian */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-l-2xl shadow-lg p-6 flex flex-col items-center justify-center">
            <div className="text-base md:text-lg mb-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>Thời gian</div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-2xl md:text-3xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>08:00</span>
            </div>
            <div className="text-sm md:text-base text-center text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <span>Thứ Năm, 31/07/2025</span>
            </div>
          </div>
          {/* Border dọc full height */}
          <div className="w-px bg-gray-300 self-stretch"></div>
          {/* Ngăn địa điểm */}
          <div className="flex-1 bg-white/10 backdrop-blur-md rounded-r-2xl shadow-lg p-6 flex flex-col items-center justify-center">
            <div className="text-base md:text-lg mb-2 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>Địa điểm</div>
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-lg md:text-xl bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>Hội trường B</span>
            </div>
            <div className="text-sm md:text-base text-center text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <div>Đại học Quy Nhơn</div>
            </div>
          </div>
        </div>

        {/* Đếm ngược */}
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-6 my-6 w-full max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl ${sectionClass(4)}`}> {/* idx 4 */}
          <Countdown targetDate={targetDate} />
        </div>

        {/* Lời cuối thiệp */}
        <div className={`mt-8 text-lg md:text-xl leading-relaxed ${sectionClass(5)}`}> {/* idx 5 */}
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Sự hiện diện của <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontWeight: 700, marginLeft: 4, marginRight: 4 }}>{displayNameWithCap}</span> là niềm vinh dự lớn lao, góp phần làm nên ý nghĩa trọn vẹn cho ngày lễ tốt nghiệp này.<br />
            <span className="block mt-2" style={{ fontWeight: 700 }}>
              Thân mời <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent" style={{ fontWeight: 700, marginLeft: 4 }}>{userInfo?.pronoun || 'Bạn'}</span>
            </span>
          </span>
        </div>
        <div className={`mt-6 text-left ${sectionClass(6)}`}> {/* idx 6 */}
          <span style={{ fontWeight: 700, color: '#fff', fontFamily: "'Cormorant Garamond', serif" }}>Lưu ý: </span>
          <span className="text-white" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Đừng quên giữ gìn cẩn thận tài sản cá nhân của mình trong ngày hôm đó nhé, để ngày vui trọn vẹn hơn.</span>
        </div>
        {/* Thông tin liên hệ */}
        <div className={`mt-6 text-left ${sectionClass(6)}`}> {/* idx 6 dùng lại */}
          <div style={{ fontWeight: 700, color: '#fff', fontFamily: "'Cormorant Garamond', serif" }} className="mb-2 text-center w-full">Thông tin liên hệ</div>
          <div className="flex flex-col items-center gap-2">
            {/* Số điện thoại */}
            <a href="tel:0971704417" title="Gọi 0971704417" className="flex items-center gap-2 mb-2 px-4 py-2 rounded-full bg-blue-700 hover:bg-green-500 transition text-white text-base select-all shadow-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              <img src="/phone.png" alt="Điện thoại" className="w-6 h-6" />
              0971704417
            </a>
            {/* 3 icon mạng xã hội */}
            <div className="flex flex-row gap-6 items-center justify-center mt-2">
              {/* Zalo */}
              <div className="flex flex-col items-center group">
                <a href="https://zalo.me/0971704417" target="_blank" rel="noopener noreferrer" title="Nhấn để mở Zalo" className="flex flex-col items-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <span className="relative">
                    <img src="/zalo.png" alt="Zalo" className="w-8 h-8 rounded-full bg-blue-700 p-1 group-hover:bg-blue-400 transition" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition">Nhấn để mở Zalo</span>
                  </span>
                  <span className="text-xs text-white mt-1">Zalo</span>
                </a>
              </div>
              {/* Facebook */}
              <div className="flex flex-col items-center group">
                <a href="https://www.facebook.com/vanthinh.nguyen.52142" target="_blank" rel="noopener noreferrer" title="Nhấn để mở Facebook" className="flex flex-col items-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <span className="relative">
                    <img src="/facebook-new.png" alt="Facebook" className="w-8 h-8 rounded-full bg-blue-700 p-1 group-hover:bg-blue-500 transition" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition">Nhấn để mở Facebook</span>
                  </span>
                  <span className="text-xs text-white mt-1">Facebook</span>
                </a>
              </div>
              {/* TikTok */}
              <div className="flex flex-col items-center group">
                <a href="https://www.tiktok.com/@vtn_nvt" target="_blank" rel="noopener noreferrer" title="Nhấn để mở TikTok" className="flex flex-col items-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  <span className="relative">
                    <img src="/tiktok.png" alt="TikTok" className="w-8 h-8 rounded-full bg-blue-700 p-1 group-hover:bg-pink-500 transition" />
                    <span className="absolute left-1/2 -translate-x-1/2 -top-8 opacity-0 group-hover:opacity-100 bg-black text-white text-xs rounded px-2 py-1 pointer-events-none transition">Nhấn để mở TikTok</span>
                  </span>
                  <span className="text-xs text-white mt-1">TikTok</span>
                </a>
              </div>
            </div>
          </div>
          {/* Dòng quảng cáo dịch vụ */}
          <div className="w-full text-xs text-white/70 mt-4 p-3 bg-white/5 rounded-lg shadow-inner italic space-y-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <div>Đừng để ngày vui chỉ dừng lại ở lời nói!</div>
            <div>Bạn muốn có một tấm thiệp online độc đáo, sang trọng, mang dấu ấn riêng cho ngày đặc biệt?</div>
            <div>Hãy gửi thiệp online xịn sò, cá nhân hóa theo ý bạn – từ đám cưới, sinh nhật, tiệc mừng, lời chúc... Hãy để mình biến ý tưởng của bạn thành hiện thực!</div>
            <div>Hãy liên hệ cho chúng tôi để biết thêm chi tiết</div>
            <div>Đừng quên giới thiệu cho bạn bè nhé</div>
            <div className="flex items-center gap-2 mt-1">
              <img src="/zalo.png" alt="Zalo" className="w-4 h-4" />
              <a href="https://zalo.me/0971704417" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 underline" style={{ fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>Zalo: 0971704417</a>
              <img src="/new-post.png" alt="Email" className="w-4 h-4 ml-3" />
              <a href="mailto:nguyenvanthinh08042003@gmail.com" className="hover:text-blue-400 underline" style={{ fontWeight: 700, fontFamily: "'Cormorant Garamond', serif" }}>Email: nguyenvanthinh08042003@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-xs italic mt-2" style={{ color: '#FFD700' }}>
           © 2025 - Thiệp tốt nghiệp được thiết kế bởi Nguyễn Văn Thịnh
        </div>
      </div>
    </div>
  );
}

export default MainCard;
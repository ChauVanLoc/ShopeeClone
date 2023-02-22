import React from 'react'

function Footer() {
  return (
    <footer className='bg-neutral-100 py-16 text-[12px]'>
      <div className='mx-auto lg:max-w-7xl'>
        <div className='my-8 grid grid-cols-5'>
          <div>
            <div className='pb-4 font-bold uppercase text-zinc-800'>Chăm sóc khách hàng</div>
            <div className='grid gap-2 text-gray-500'>
              <div>Trung Tâm Trợ Giúp</div>
              <div>Shopee Blog</div>
              <div>Shopee Mall</div>
              <div>Hướng Dẫn Mua Hàng</div>
              <div>Hướng Dẫn Bán Hàng</div>
              <div>Thanh Toán</div>
              <div>Shopee Xu</div>
              <div>Vận Chuyển</div>
              <div>Trả Hàng & Hoàn Tiền</div>
              <div>Chăm Sóc Khách Hàng</div>
              <div>Chính Sách Bảo Hành</div>
            </div>
          </div>
          <div>
            <div className='pb-4 font-bold uppercase text-zinc-800'>Về Shopee</div>
            <div className='grid gap-2 text-gray-500'>
              <div>Giới Thiệu Về Shopee Việt Nam</div>
              <div>Tuyển Dụng</div>
              <div>Điều Khoản Shopee</div>
              <div>Chính Sách Bảo Mật</div>
              <div>Chính Hãng</div>
              <div>Kênh Người Bán</div>
              <div>Flash Sales</div>
              <div>Chương Trình Tiếp Thị Liên Kết Shopee</div>
              <div>Liên Hệ Với Truyền Thông</div>
            </div>
          </div>
          <div>
            <div className='pb-4 font-bold uppercase text-zinc-800'>THANH TOÁN</div>
            <div className='grid grid-cols-3 grid-rows-3 gap-y-3'>
              <img
                className='rounded rounded-sm bg-white p-[2px] shadow-lg'
                src='https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8'
                alt='Thanh toán Visa'
              />
              <img
                className='rounded rounded-sm bg-white p-[2px] shadow-lg'
                src='https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16'
                alt='Thanh toán Visa'
              />
              <img
                className='rounded rounded-sm bg-white p-[2px] shadow-lg'
                src='https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08'
                alt='Thanh toán Visa'
              />
              <img
                className='rounded rounded-sm bg-white p-[2px] shadow-lg'
                src='https://cf.shopee.vn/file/38fd98e55806c3b2e4535c4e4a6c4c08'
                alt='Thanh toán Visa'
              />
              <img
                className='rounded rounded-sm bg-white p-[2px] shadow-lg'
                src='https://cf.shopee.vn/file/bc2a874caeee705449c164be385b796c'
                alt='Thanh toán Visa'
              />
              <img
                className='rounded rounded-sm bg-white p-[2px] shadow-lg'
                src='https://cf.shopee.vn/file/5e3f0bee86058637ff23cfdf2e14ca09'
                alt='Thanh toán Visa'
              />
              <img
                className='rounded rounded-sm bg-white p-[2px] shadow-lg'
                src='https://cf.shopee.vn/file/9263fa8c83628f5deff55e2a90758b06'
                alt='Thanh toán Visa'
              />
              <img
                className='rounded rounded-sm bg-white p-[2px] shadow-lg'
                src='https://cf.shopee.vn/file/0217f1d345587aa0a300e69e2195c492'
                alt='Thanh toán Visa'
              />
            </div>
          </div>
          <div>
            <div className='pb-4 font-bold uppercase text-zinc-800'>Theo dõi chúng tôi trên</div>
            <div>
              <div className='mb-3 flex'>
                <img className='mr-2' src='https://cf.shopee.vn/file/2277b37437aa470fd1c71127c6ff8eb5' alt='' />
                <span>Facebook</span>
              </div>
              <div className='mb-3 flex'>
                <img className='mr-2' src='https://cf.shopee.vn/file/5973ebbc642ceee80a504a81203bfb91' alt='' />
                <span>Instagram</span>
              </div>
              <div className='mb-3 flex'>
                <img className='mr-2' src='https://cf.shopee.vn/file/f4f86f1119712b553992a75493065d9a' alt='' />
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
          <div>
            <div className='pb-4 font-bold uppercase text-zinc-800'>Tải ứng dụng Shopee ngay thôi</div>
            <div className='grid grid-cols-8'>
              <img className='col-span-3' src='https://cf.shopee.vn/file/a5e589e8e118e937dc660f224b9a1472' alt='QR' />
              <div className='col-span-3 col-start-4 flex flex-col items-start justify-evenly'>
                <img
                  className='mb-1 bg-white px-2'
                  src='https://cf.shopee.vn/file/ad01628e90ddf248076685f73497c163'
                  alt='AppleStore'
                />
                <img
                  className='bg-white py-1 px-2'
                  src='https://cf.shopee.vn/file/ae7dced05f7243d0f3171f786e123def'
                  alt='GG Play'
                />
                <img
                  className='bg-white py-1 px-2'
                  src='https://cf.shopee.vn/file/35352374f39bdd03b25e7b83542b2cb0'
                  alt='AppGallery'
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-1 place-items-center gap-4 text-[14px] lg:grid-cols-3'>
            <div className='lg:col-span-1'>
              <div>© 2022 Shopee. Tất cả các quyền được bảo lưu.</div>
            </div>
            <div className='lg:col-span-2'>
              <div>
                Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
                Colombia Chile Poland
              </div>
            </div>
          </div>
          <div className='mt-10 text-center text-sm'>
            <div>Công ty TNHH Shopee</div>
            <div className='mt-6'>
              Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
              phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
            </div>
            <div className='mt-2'>
              Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
            </div>
            <div className='mt-2'>
              Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
            </div>
            <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

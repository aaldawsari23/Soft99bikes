import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-background py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">متجر </span>
            <span className="text-primary">Soft99bike</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8">
            متجرك المتخصص في الدراجات النارية
          </p>

          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
            نوفر أفضل الدراجات النارية وقطع الغيار الأصلية والإكسسوارات عالية الجودة
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/catalog" className="btn-primary px-8 py-3 text-lg">
              تصفح المنتجات
            </Link>
            <Link href="/contact" className="btn-secondary px-8 py-3 text-lg">
              تواصل معنا
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl mb-3">🏍️</div>
              <h3 className="text-white font-semibold mb-2">دراجات متنوعة</h3>
              <p className="text-text-secondary text-sm">
                دراجات رياضية، كروزر، وطرق وعرة
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <h3 className="text-white font-semibold mb-2">قطع غيار أصلية</h3>
              <p className="text-text-secondary text-sm">
                قطع غيار من أفضل الماركات العالمية
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🪖</div>
              <h3 className="text-white font-semibold mb-2">إكسسوارات كاملة</h3>
              <p className="text-text-secondary text-sm">
                خوذ، قفازات، وجاكيتات احترافية
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

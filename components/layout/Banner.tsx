// components/Banner.tsx

import Image from 'next/image';

export default function Banner() {
  return (
    <div className="w-full bg-black">
      <div className="relative max-w-[1200px] mx-auto">
        <div className="relative w-full h-auto">
          <Image
            src="/homebanner.png"
            alt="Elke Bitterhof Banner"
            width={1400}
            height={466}
            priority
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
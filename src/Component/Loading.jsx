import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[SystemColor]">
      <div className="w-48 h-48">
        <DotLottieReact
          src="/abc.lottie"
          loop
          autoplay
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '500px',
            maxHeight: '500px',
            imageRendering: 'pixelated', // Try 'auto', 'crisp-edges', or 'pixelated'
          }}
        />
      </div>
    </div>
  );
};

export default Loading;

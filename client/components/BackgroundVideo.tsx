import React, { useEffect, useRef, useState } from 'react';

interface BackgroundVideoProps {
  src: string;
  poster?: string;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  src,
  poster,
  className = "",
  overlay = true,
  overlayOpacity = 0.3
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      console.log('No video element found');
      return;
    }

    console.log('Setting up video with src:', src);

    const handleLoadedData = () => {
      setIsLoaded(true);
      console.log('✅ Video loaded successfully', {
        duration: video.duration,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight
      });
    };

    const handleError = (e: any) => {
      console.error('❌ Video error:', e);
      console.error('Video error details:', {
        error: video.error,
        networkState: video.networkState,
        readyState: video.readyState,
        src: video.src
      });
      setHasError(true);
    };

    const handleLoadStart = () => {
      console.log('📥 Video loading started');
    };

    const handleProgress = () => {
      console.log('📊 Video loading progress');
    };

    const handleCanPlay = async () => {
      console.log('🎬 Video can play');
      try {
        await video.play();
        console.log('✅ Video playing successfully');
      } catch (error) {
        console.warn('⚠️ Video autoplay failed (this is normal):', error);
      }
    };

    const handleTimeUpdate = () => {
      // Only log first few seconds to avoid spam
      if (video.currentTime < 3) {
        console.log(`⏰ Video playing at ${video.currentTime.toFixed(1)}s`);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('progress', handleProgress);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);

    // Force load the video
    console.log('🔄 Loading video...');
    video.load();

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('progress', handleProgress);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [src]);

  return (
    <div className={`background-video-container ${className}`}>
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        preload="auto"
        style={{ 
          opacity: hasError ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <source src={src} type="video/webm" />
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Fallback poster image when video fails */}
      {hasError && poster && (
        <div 
          className="background-video"
          style={{
            backgroundImage: `url(${poster})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      
      {overlay && (
        <div 
          className="background-video-overlay" 
          style={{ 
            backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` 
          }}
        />
      )}
    </div>
  );
};

export default BackgroundVideo;

import { useRef, useCallback } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  name: string;
  city: string;
  state: string;
  videoSrc: string;
  onClose: () => void;
}

const VideoModal = ({ name, city, state, videoSrc, onClose }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = useCallback(() => {
    videoRef.current?.pause();
    onClose();
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Fechar vídeo"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/60 text-background transition-colors hover:bg-foreground/80"
        >
          <X className="h-4 w-4" />
        </button>

        <video
          ref={videoRef}
          className="aspect-[9/16] w-full bg-foreground object-contain sm:aspect-video"
          controls
          autoPlay
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>

        <div className="p-4">
          <p className="font-heading text-sm font-bold text-card-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{city}, {state}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

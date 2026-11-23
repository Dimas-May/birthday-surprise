import { useEffect, useRef, useState } from "react";
import Intro from "./components/Intro";
import Reveal from "./components/Reveal";
import FlowerGarden from "./components/FlowerGarden";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Letter from "./components/Letter";
import Wish from "./components/Wish";
import Finale from "./components/Finale";
import Petals from "./components/Petals";
import { content } from "./data/content";

export default function App() {
  // 'intro' | 'experience'
  const [stage, setStage] = useState<"intro" | "experience">("intro");
  const revealRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const open = () => {
    setStage("experience");
    // scroll ke atas pengalaman setelah render
    requestAnimationFrame(() =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );

    // --- TAMBAHAN BARU: Otomatis putar musik saat masuk ke pengalaman ---
    if (content.audioEnabled && content.audioSrc && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => console.log("Audio autoplay diblokir:", err));
    }
  };

  const replay = () => {
    setStage("intro");
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlaying(false);
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const toggleAudio = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  // Fokus awal ke konten saat masuk tahap experience (aksesibilitas)
  useEffect(() => {
    if (stage === "experience") {
      revealRef.current?.focus();
    }
  }, [stage]);

  return (
    <>
      <Petals />

      {stage === "intro" ? (
        <Intro onOpen={open} />
      ) : (
        <main ref={revealRef} tabIndex={-1}>
          <Reveal />
          <FlowerGarden />
          <Gallery />
          <Timeline />
          <Letter />
          <Wish />
          <Finale onReplay={replay} />
        </main>
      )}

      {content.audioEnabled && content.audioSrc && (
        <>
          <audio ref={audioRef} src={content.audioSrc} loop preload="none" />
          <button
            className="audio-toggle"
            onClick={toggleAudio}
            aria-label={playing ? "Jeda musik" : "Putar musik"}
            aria-pressed={playing}
          >
            {playing ? "⏸" : "♪"}
          </button>
        </>
      )}
    </>
  );
}

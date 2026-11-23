// ============================================================
// FILE KONTEN — EDIT SEMUA PERSONALISASI DI SINI
// Semua teks yang dilihat penerima ada di file ini.
// ============================================================

export type Flower = {
  id: string;
  /** Jenis visual bunga: 'rose' | 'daisy' | 'tulip' | 'sunflower' | 'lavender' */
  type: "rose" | "daisy" | "tulip" | "sunflower" | "lavender";
  /** Warna kelopak (CSS color) */
  color: string;
  /** Label singkat yang muncul di bawah bunga */
  label: string;
  /** Pesan yang muncul saat bunga diklik/diketuk */
  message: string;
  /** Posisi dalam taman (persen, 0-100) */
  x: number;
  y: number;
  /** Ukuran relatif bunga */
  size: number;
  /** Apakah ini easter egg tersembunyi? */
  hidden?: boolean;
};

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  date?: string;
  /** Focal point untuk cropping, mis. '50% 30%' */
  focalPoint?: string;
};

export type TimelineEntry = {
  title: string;
  date?: string;
  caption: string;
  photo?: string;
  alt?: string;
};

export type BirthdayContent = {
  recipientName: string;
  senderName: string;
  birthdayDate?: string;

  // --- Pembuka ---
  introGreeting: string;
  introSubtext: string;
  introCta: string;

  // --- Reveal ---
  revealTitle: string;
  revealMessage: string;

  // --- Taman bunga ---
  gardenTitle: string;
  gardenSubtitle: string;
  gardenHint: string;
  flowers: Flower[];

  // --- Galeri foto ---
  galleryTitle: string;
  gallerySubtitle: string;
  photos: Photo[];

  // --- Timeline (opsional) ---
  timelineEnabled: boolean;
  timelineTitle: string;
  timelineSubtitle: string;
  timeline: TimelineEntry[];

  // --- Surat ---
  letterTitle: string;
  letterEnvelopeHint: string;
  letterOpenButton: string;
  letterSkipButton: string;
  letterSalutation: string;
  letterBody: string[]; // tiap string = satu paragraf
  letterClosing: string;
  letterSignature: string;

  // --- Harapan ---
  wishTitle: string;
  wishSubtitle: string;
  wishButton: string;
  wishCandleHint: string;
  wishResult: string;

  // --- Finale ---
  finaleTitle: string;
  finaleMessage: string;
  finaleSignature: string;
  replayButton: string;

  // --- Easter egg ---
  easterEggMessage: string;

  // --- Audio (opsional) ---
  audioEnabled: boolean;
  audioSrc: string; // mis. '/audio/music.mp3'

  // --- Tema ---
  theme: {
    cream: string;
    blush: string;
    rose: string;
    peach: string;
    lavender: string;
    green: string;
    ink: string;
  };
};

// ============================================================
// GANTI NILAI DI BAWAH INI DENGAN DATA ANDA
// ============================================================

export const content: BirthdayContent = {
  // --- INFORMASI UTAMA ---
  recipientName: "Nopnop, my love",
  senderName: "yang selalu menyayangimu",
  birthdayDate: "24 November 2026",

  // --- PEMBUKA ---
  introGreeting: "Untukmu yang paling kusayang, di hari bahagiamu…",
  introSubtext:
    "Sebelum dunia ramai mengucapkan selamat, izinkan aku menyapamu lebih dulu. Ada doa dan rasa sayang yang kusiapkan khusus untuk usiamu yang ke-22. Buka pelan-pelan, ya.",
  introCta: "Buka kejutan",

  // --- REVEAL ---
  revealTitle: "Selamat Ulang Tahun ke-22, Sayangku!",
  revealMessage:
    "Hari ini sepenuhnya tentangmu. Tentang senyummu yang selalu berhasil meredakan hariku, tentang kuatnya langkahmu menghadapi segala hal, dan tentang betapa bersyukurnya aku karena Tuhan menghadirkanmu di hidupku.",

  // --- TAMAN BUNGA ---
  gardenTitle: "Taman kecil untukmu",
  gardenSubtitle:
    "Setiap bunga di sini menyimpan doa dan hal-hal yang aku kagumi darimu. Klik bunganya pelan-pelan, ya... Mereka ingin menyapamu dengan hangat.",
  gardenHint: "Ketuk bunga untuk membuka pesannya",
  flowers: [
    {
      id: "f1",
      type: "rose",
      color: "#e8a0b4",
      label: "Mawar",
      message:
        "Untuk senyummu yang paling aku suka. Kamu itu seperti mawar di pagi hari sederhana, manis, dan selalu bikin hatiku terasa pulang setiap kali melihatmu.",
      x: 18,
      y: 55,
      size: 1,
    },
    {
      id: "f2",
      type: "daisy",
      color: "#f5efe0",
      label: "Daisy",
      message:
        "Untuk hati dan bakti besarmu. Terima kasih sudah menjadi anak yang luar biasa mandiri dan selalu menjaga keluargamu dengan sepenuh hati, bahkan saat kamu sendiri sedang lelah.",
      x: 38,
      y: 38,
      size: 0.85,
    },
    {
      id: "f3",
      type: "tulip",
      color: "#f2b9a0",
      label: "Tulip",
      message:
        "Untuk sisi tengil dan tawamu. Aku selalu suka caramu menertawakan hal-hal kecil. Tetaplah jadi dirimu yang ceria dan penuh warna, jangan pernah kehilangan tawa itu, ya.",
      x: 55,
      y: 62,
      size: 1.1,
    },
    {
      id: "f4",
      type: "sunflower",
      color: "#f2cf7a",
      label: "Bunga Matahari",
      message:
        "Untuk semua kerja kerasmu. Aku melihat betapa hebatnya kamu mengejar kelulusan dan mimpi-mimpimu. Semoga di usia 22 ini, Tuhan selalu menerangi setiap langkahmu dan mempermudah semua urusanmu.",
      x: 72,
      y: 40,
      size: 1,
    },
    {
      id: "f5",
      type: "lavender",
      color: "#b9a4d6",
      label: "Lavender",
      message:
        "Untuk ketenangan hatimu. Semoga di tahun yang baru ini, Tuhan selalu memelukmu erat, menjauhkanmu dari segala resah, dan mengganti setiap lelahmu dengan kebahagiaan yang berlipat.",
      x: 86,
      y: 60,
      size: 0.9,
    },
    {
      id: "f6",
      type: "rose",
      color: "#d97f9a",
      label: "Mawar kecil",
      message:
        "Pesan rahasia dariku: Satu hal yang mungkin jarang aku ucapkan dengan lantang aku bangga sekali padamu, sayanggkuu. Terima kasih sudah bertahan sejauh ini, dan izinkan aku terus menemani langkahmu ke depan. Aku sayang kamu, hari ini dan seterusnya.",
      x: 28,
      y: 72,
      size: 0.75,
      hidden: true, // easter egg: lebih redup sampai diklik
    },
  ],

  // --- GALERI FOTO ---
  galleryTitle: "Kenangan kita",
  gallerySubtitle:
    "Setiap bingkai di sini menyimpan cerita kecil tentang betapa bersyukurnya aku memilikimu.",
  photos: [
    {
      src: "/images/memory-01.jpg",
      alt: "Kenangan pertama",
      caption:
        "Momen di mana semuanya terasa sederhana, asal ada kamu di sampingku.",
    },
    {
      src: "/images/memory-02.jpg",
      alt: "Kenangan kedua",
      caption:
        "Di sela-sela sibuknya hari, ketemu kamu selalu jadi obat capek paling ampuh.",
    },
    {
      src: "/images/memory-03.jpg",
      alt: "Kenangan ketiga",
      caption:
        "Dua kepala yang sama-sama belajar dewasa, tapi tetap bisa ketawa bareng.",
    },
    {
      src: "/images/memory-04.jpg",
      alt: "Kenangan keempat",
      caption:
        "Salah satu hari favoritku—gak perlu tempat mewah, cukup jalan berdua.",
    },
  ],

  // --- TIMELINE ---
  timelineEnabled: true,
  timelineTitle: "Jejak kecil kita",
  timelineSubtitle:
    "Dari langkah awal yang canggung, sampai hari ini aku semakin yakin memilihmu.",
  timeline: [
    {
      title: "Pertama bertemu",
      date: "",
      caption:
        "Inget gak betapa kakunya aku di awal? Tapi dari situlah aku belajar bahwa bersamamu adalah hal yang paling layak diperjuangkan.",
      photo: "/images/memory_01.jpg",
      alt: "Foto pertemuan",
    },
    {
      title: "Sebuah momen",
      date: "",
      caption:
        "Melewati banyak cerita, tawa, dan proses saling mengerti. Melihatmu melangkah sejauh ini selalu bikin aku bangga.",
      photo: "/images/memory_02.jpg",
      alt: "Foto momen",
    },
    {
      title: "Hari ini",
      date: "",
      caption:
        "Senyum yang satu ini selalu jadi alasan favoritku buat terus bersyukur pada Tuhan. Selamat bertambah usia, kesayanganku.",
      photo: "/images/memory_03.jpg",
      alt: "Foto hari ini",
    },
  ],

  // --- SURAT ---
  letterTitle: "Surat kecil untukmu",
  letterEnvelopeHint:
    "Ada sesuatu yang kutulis sepenuh hati di dalam amplop ini. Buka pelan-pelan, ya.",
  letterOpenButton: "Buka surat",
  letterSkipButton: "Tampilkan semua",
  letterSalutation: "Selamat ulang tahun ke-22, Nopnop kesayanganku,",
  letterBody: [
    "Hari ini adalah hari spesialmu, dan aku cuma pengen kamu tahu betapa bersyukurnya aku karena kamu hadir di dunia ini. Terima kasih sudah berjuang sejauh ini mengejar laporan PLP, menyelesaikan revisian, dan tetap menjadi anak yang luar biasa hebat menjaga Mama dan keluargamu di tengah segala lelahmu. Melihatmu sekuat dan setulus itu selalu bikin aku bangga setengah mati.",
    "Di usiamu yang ke-22 ini, doaku selalu menyertai setiap langkahmu. Kiranya Tuhan senantiasa memberkati dan melindungimu, menyinari harimu dengan wajah-Nya, serta melimpahkan damai sejahtera di hatimu (Bilangan 6:24-26). Aku percaya Tuhan sudah menyiapkan rancangan masa depan yang penuh harapan dan hal-hal baik untuk setiap kerja kerasmu selama ini.",
    "Jangan pernah merasa berjuang sendirian ya, Bu Boss. Kalau dunia lagi terasa berat atau kepalamu lagi penuh, ingat kalau selalu ada aku di sini yang siap dengerin ceritamu, nemenin ketawa hal-hal receh, dan jadi tempatmu pulang. Tetaplah jadi Nopnop yang manis, ceria, dan tengil kesukaanku. Aku sayang kamu, hari ini dan seterusnya.",
  ],
  letterClosing: "Dengan seluruh rasa sayangg,",
  letterSignature: "your love",

  // --- HARAPAN ---
  wishTitle: "Buat satu harapan terbaikmu",
  wishSubtitle:
    "Pejamkan mata sebentar, tiup lilinnya, dan biarkan doa-doa baikmu naik ke langit.",
  wishButton: "Tiup lilin",
  wishCandleHint: "Ketuk lilin untuk meniupnya",
  wishResult:
    "Harapanmu sudah tersimpan rapi. Semoga Tuhan mendengarnya dan mengabulkan satu per satu di waktu yang paling indah.",

  // --- FINALE ---
  finaleTitle: "Selamat ulang tahun ke-22, sekali lagi sayanggku!",
  finaleMessage:
    "Semoga tahun ini dipenuhi tawa yang lepas, kesehatan untukmu dan keluarga, kelancaran untuk semua mimpimu, serta cinta yang selalu membuatmu merasa cukup dan aman. Terima kasih sudah menjadi dirimu.",
  finaleSignature: "Dengan sepenuh hati,\n your love",
  replayButton: "Putar ulang kenangan ini",

  // --- EASTER EGG ---
  easterEggMessage:
    "Kamu menemukannya. Ternyata kamu memang jeli. 🌷Ketemu juga akhirnya! Memang jeli banget sih kesayangan aku satu ini. 🌷❤️",

  // --- AUDIO (LAGU) ---
  // Ubah menjadi true agar tombol musik muncul dan lagu bisa diputar
  audioEnabled: true,
  // Pastikan file lagu ada di folder: public/audio/lagu.mp3
  audioSrc: "/audio/HER-Best Part.mp3", // contoh: '/audio/lagu.mp3'

  // --- TEMA WARNA ---
  theme: {
    cream: "#fbf6ee",
    blush: "#f7e4e1",
    rose: "#e8a0b4",
    peach: "#f2b9a0",
    lavender: "#b9a4d6",
    green: "#8faa84",
    ink: "#4a3f3a",
  },
};

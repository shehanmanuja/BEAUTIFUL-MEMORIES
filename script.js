/**
 * ============================================================================
 * OUR BEAUTIFUL MEMORIES — JAVASCRIPT (DARK PURPLE THEME)
 * ============================================================================
 * 
 * HOW TO ADD YOUR OWN PHOTOS & VIDEOS:
 * 1. Put your image files (.jpg, .png, .jpeg) or video files (.mp4, .mov, .webm)
 *    directly into this MEMORIES folder.
 * 2. Add them to the GALLERY_IMAGES list below with their filename and caption.
 *    Example photo: { src: "our-photo.jpg", caption: "Sweet smile" }
 *    Example video: { src: "our-video.mp4", caption: "Our laugh together" }
 * 3. Save this file and refresh your browser!
 * 
 * BACKGROUND MUSIC:
 * Place "Pesamale.mp3" directly into this MEMORIES folder.
 * ============================================================================
 */

/* ==========================================================================
   GALLERY IMAGES CONFIGURATION
   ========================================================================== */
const GALLERY_IMAGES = [
  { src: "WhatsApp Image 2025-11-08 at 11.00.03 PM.JPG", caption: "Our Beautiful Memory" },
  { src: "WhatsApp Image 2025-11-08 at 11.00.12 PM.JPEG", caption: "Moments With You" },
  { src: "IMG_0360.jpg", caption: "A Sweet Moment Together" },
  { src: "IMG_0364.jpg", caption: "Forever in My Heart" },
  { src: "IMG_0424.jpg", caption: "Your Beautiful Smile" },
  { src: "IMG_0517.jpg", caption: "Unforgettable Moments" },
  { src: "IMG_0530.jpg", caption: "Always Cherished" },
  { src: "IMG_0579.jpg", caption: "A Day to Remember" },
  { src: "IMG_0749.jpg", caption: "Happiness With You" },
  { src: "IMG_0813.jpg", caption: "Our Special Story" },
  { src: "IMG_0814.jpg", caption: "Treasured Forever" },
  { src: "IMG_0821.jpg", caption: "Pure Joy With You" },
  { src: "IMG_0855.jpg", caption: "Every Little Moment" },
  { src: "IMG_0876.jpg", caption: "Walking Together" },
  { src: "IMG_0888.PNG", caption: "Memories We Made" },
  { src: "IMG_1009.jpg", caption: "In Your Heart" },
  { src: "IMG_1101.jpg", caption: "Together Always" },
  { src: "IMG_1126.jpg", caption: "Special Days With You" },
  { src: "IMG_1137.jpg", caption: "Warm Smiles" },
  { src: "IMG_1143.jpg", caption: "Pieces of My Heart" },
  { src: "IMG_1440.jpg", caption: "A Golden Memory" },
  { src: "IMG_1827.jpg", caption: "My Little Chabee" },
  { src: "IMG_1879.jpg", caption: "Unfading Moments" },
  { src: "IMG_1931.jpg", caption: "Forever & Always" },
  { src: "IMG_2174.jpg", caption: "A Special Connection" },
  { src: "IMG_2185.jpg", caption: "Sweetest Memories" },
  { src: "IMG_2187.jpg", caption: "Every Smile of Yours" },
  { src: "IMG_2705.PNG", caption: "Kept in My Heart" },
  { src: "IMG_2707.PNG", caption: "Our Little World" },
  { src: "IMG_2868.jpg", caption: "Memories of Love" },
  { src: "IMG_2869.jpg", caption: "Days With You" },
  { src: "IMG_2871.jpg", caption: "Holding On to Love" },
  { src: "IMG_2873.jpg", caption: "Timeless Moments" },
  { src: "IMG_2882.jpg", caption: "Our Story Continues" },
  { src: "IMG_2886.jpg", caption: "A Chapter of Us" },
  { src: "IMG_2888.jpg", caption: "Cherished Forever" },
  { src: "IMG_2890.jpg", caption: "Deep in My Soul" },
  { src: "IMG_2896.jpg", caption: "Your Gentle Care" },
  { src: "IMG_3409.jpg", caption: "Never Forgotten" },
  { src: "IMG_3411.jpg", caption: "Moments of Peace" },
  { src: "IMG_3416.jpg", caption: "True Happiness" },
  { src: "IMG_3419.jpg", caption: "A Piece of Us" },
  { src: "IMG_4027.PNG", caption: "My Heart's Treasure" },
  { src: "IMG_4651.jpg", caption: "Memories That Shine" },
  { src: "IMG_4655.jpg", caption: "Quiet Little Talks" },
  { src: "IMG_5215.HEIC", caption: "A Beautiful Day" },
  { src: "IMG_5216.HEIC", caption: "With You Always" },
  { src: "IMG_5227.JPG", caption: "Always Special" },
  { src: "IMG_6048.jpg", caption: "Love in Every Picture" },
  { src: "IMG_6049.jpg", caption: "Endless Memories" },
  { src: "IMG_6051.jpg", caption: "Our Shared Journey" },
  { src: "IMG_6661.jpg", caption: "The Warmth of You" },
  { src: "IMG_7253.jpg", caption: "Every Single Day" },
  { src: "IMG_7254.jpg", caption: "Invaluable Moments" },
  { src: "IMG_7276.jpg", caption: "My Heart Awaits" },
  { src: "IMG_7294.JPG", caption: "Pure & Real" },
  { src: "IMG_7392.HEIC", caption: "Days We Smiled" },
  { src: "IMG_7428.HEIC", caption: "Remembering You" },
  { src: "IMG_7431.HEIC", caption: "Little Things That Matter" },
  { src: "IMG_7439.HEIC", caption: "Treasures of My Life" },
  { src: "IMG_7486.jpg", caption: "A Special Smile" },
  { src: "IMG_7487.jpg", caption: "Our Time Together" },
  { src: "IMG_7537.jpg", caption: "Heart & Soul" },
  { src: "IMG_8240.jpg", caption: "Forever Yours" },
  { src: "IMG_8653.jpg", caption: "A Beautiful Story" },
  { src: "IMG_8654.jpg", caption: "With Love Always" },
  { src: "IMG_8656.jpg", caption: "Deep in My Heart" },
  { src: "IMG_9134.jpg", caption: "Our Golden Days" },
  { src: "IMG_9860.jpg", caption: "Thank You for Everything" },
  { src: "IMG_9861.jpg", caption: "Forever Cherished" },
  { src: "2a5ebdcf-9df6-4822-8423-0d2c82bc807f.JPG", caption: "A Timeless Memory" },
  { src: "4080ad6b-f907-4fdd-9991-f2005e63c750.JPG", caption: "Always in My Mind" },
  { src: "456504a2-e995-4fe1-84ef-5ce3b6c5056c.JPG", caption: "Moments of Love" },
  { src: "4A89FE84-DFE2-4A28-967A-01079275A54C.JPG", caption: "Every Little Memory" },
  { src: "5C886B91-065A-49E7-A1B0-4D2BE4281079.JPG", caption: "The Love We Shared" },
  { src: "FBDFE410-EE60-49B3-9C51-43B52D1892FA.JPG", caption: "Forever Our Story" }
];

/* ==========================================================================
   BACKGROUND MUSIC CONFIGURATION
   ========================================================================== */
const BACKGROUND_MUSIC = {
  src: "Pesamale.mp3",
  fallbackSrc: "music/Pesamale.mp3",
  title: "Pesamale"
};

/* ==========================================================================
   APPLICATION STATE
   ========================================================================== */
const AppState = {
  currentLightboxIndex: 0,
  isPlayingMusic: false,
  musicPausedForVideo: false
};

/**
 * Checks if a gallery item is a video by explicit type or filename extension (.mp4, .mov, .webm, etc.)
 */
function isVideoItem(item) {
  if (!item) return false;
  if (item.type === "video") return true;
  if (typeof item.src === "string") {
    return /\.(mp4|mov|webm|m4v|ogg|ogv|mkv|avi)$/i.test(item.src);
  }
  return false;
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();
  renderGallery();
  initMusicPlayer();
  initLightbox();
  initScrollEffects();
});

/* ==========================================================================
   AMBIENT GLOWING PURPLE PARTICLES (CANVAS)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById("ambientCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const particleCount = Math.min(22, Math.floor(width / 55));
  const particles = [];

  class GlowHeart {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 20;
      this.size = Math.random() * 10 + 6;
      this.speedY = Math.random() * 0.45 + 0.2;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.15;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.015;
      this.wobble = Math.random() * Math.PI * 2;
      this.wobbleSpeed = Math.random() * 0.02 + 0.01;

      // Romantic dark purple, violet, and fuchsia particle palette
      const colors = [
        "rgba(192, 132, 252,", // Violet
        "rgba(217, 70, 239,",  // Fuchsia
        "rgba(168, 85, 247,",  // Purple
        "rgba(244, 114, 182,"  // Pink
      ];
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.y -= this.speedY;
      this.wobble += this.wobbleSpeed;
      this.x += Math.sin(this.wobble) * 0.5 + this.speedX;
      this.rotation += this.rotationSpeed;

      if (this.y < -30 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillStyle = `${this.colorBase} ${this.opacity})`;
      
      const s = this.size;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.35);
      ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.2, 0, s);
      ctx.bezierCurveTo(s, s * 0.2, s * 0.5, -s * 0.3, 0, s * 0.35);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new GlowHeart());
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    animationFrameId = requestAnimationFrame(animate);
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else {
      animationFrameId = requestAnimationFrame(animate);
    }
  });

  animate();
}

/* ==========================================================================
   RENDER PHOTO GALLERY
   ========================================================================== */
function renderGallery() {
  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) return;

  galleryGrid.innerHTML = "";

  GALLERY_IMAGES.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "photo-card";

    const isVideo = isVideoItem(item);

    // Media stage container
    const imgWrap = document.createElement("div");
    imgWrap.className = "photo-card-img-wrap";
    imgWrap.setAttribute("role", "button");
    imgWrap.setAttribute("tabindex", "0");
    imgWrap.setAttribute("aria-label", `View ${isVideo ? 'video' : 'photo'}: ${item.caption || 'Memory'}`);

    let mediaEl;

    if (isVideo) {
      mediaEl = document.createElement("video");
      mediaEl.className = "photo-card-img photo-card-video";
      mediaEl.src = item.src;
      mediaEl.preload = "metadata";
      mediaEl.muted = true;
      mediaEl.playsInline = true;
      mediaEl.loop = true;

      // Hover to preview video snippet on desktop
      imgWrap.addEventListener("mouseenter", () => {
        mediaEl.play().catch(() => {});
      });
      imgWrap.addEventListener("mouseleave", () => {
        mediaEl.pause();
        mediaEl.currentTime = 0;
      });

      // Video badge indicator
      const videoBadge = document.createElement("span");
      videoBadge.className = "video-indicator-badge";
      videoBadge.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
        <span>Video</span>
      `;
      imgWrap.appendChild(videoBadge);
    } else {
      mediaEl = document.createElement("img");
      mediaEl.className = "photo-card-img";
      mediaEl.src = item.src;
      mediaEl.alt = item.caption || "Our memory";
      mediaEl.loading = "lazy";
    }

    mediaEl.onerror = () => {
      if (!mediaEl.dataset.retried) {
        mediaEl.dataset.retried = "true";
        mediaEl.src = "images/" + item.src;
        downloadBtn.href = "images/" + item.src;
      } else {
        card.style.display = "none";
      }
    };

    // Overlay on hover
    const overlay = document.createElement("div");
    overlay.className = "photo-card-overlay";
    overlay.innerHTML = `
      <span class="view-badge">
        <svg style="width:16px;height:16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
        <span>${isVideo ? 'Play Video' : 'View'}</span>
      </span>
    `;

    imgWrap.appendChild(mediaEl);
    imgWrap.appendChild(overlay);

    // Open lightbox on click or enter
    imgWrap.addEventListener("click", () => openLightbox(index));
    imgWrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index);
      }
    });

    // Bottom info bar
    const infoBar = document.createElement("div");
    infoBar.className = "photo-card-info";

    const caption = document.createElement("p");
    caption.className = "photo-card-caption";
    caption.textContent = item.caption || "Our Memory";

    // Direct download button
    const downloadBtn = document.createElement("a");
    downloadBtn.className = "photo-card-download-btn";
    downloadBtn.setAttribute("title", isVideo ? "Download original video" : "Download original photo");
    downloadBtn.setAttribute("aria-label", `Download ${item.caption || (isVideo ? 'video' : 'photo')}`);
    
    const defaultDlName = isVideo ? `memory-${index + 1}.mp4` : `memory-${index + 1}.jpg`;
    const dlFilename = getFilenameFromPath(item.src, defaultDlName);
    downloadBtn.download = dlFilename;
    downloadBtn.href = item.src;

    downloadBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </svg>
    `;

    infoBar.appendChild(caption);
    infoBar.appendChild(downloadBtn);

    card.appendChild(imgWrap);
    card.appendChild(infoBar);
    galleryGrid.appendChild(card);
  });
}

/* ==========================================================================
   FLOATING MUSIC PLAYER WITH SMART AUTOPLAY & PERMANENT LOOP
   ========================================================================== */
function initMusicPlayer() {
  const audio = document.getElementById("bgAudio");
  const playBtn = document.getElementById("musicPlayBtn");
  const musicWidget = document.getElementById("musicPlayer");
  const playIcon = document.getElementById("musicPlayIcon");
  const pauseIcon = document.getElementById("musicPauseIcon");
  const trackTitle = document.getElementById("musicTrackTitle");
  const musicStatus = document.getElementById("musicStatus");

  if (!audio) return;

  // Always use the Pesamale.mp3 song in this folder
  audio.src = "Pesamale.mp3";
  audio.loop = true;
  audio.volume = 0.9;

  if (trackTitle) {
    trackTitle.textContent = "Pesamale";
  }
  if (musicStatus) {
    musicStatus.textContent = "Tap to play";
  }

  function updatePlayUI() {
    AppState.isPlayingMusic = true;
    playIcon?.classList.add("hidden");
    pauseIcon?.classList.remove("hidden");
    if (musicStatus) musicStatus.textContent = "Playing";
    if (musicWidget) musicWidget.classList.add("playing");
  }

  function updatePauseUI() {
    AppState.isPlayingMusic = false;
    playIcon?.classList.remove("hidden");
    pauseIcon?.classList.add("hidden");
    if (musicStatus) musicStatus.textContent = "Paused";
    if (musicWidget) musicWidget.classList.remove("playing");
  }

  audio.addEventListener("play", updatePlayUI);
  audio.addEventListener("pause", () => {
    if (!AppState.musicPausedForVideo) {
      updatePauseUI();
    }
  });

  // Always automatically loop when song ends
  audio.addEventListener("ended", () => {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  });

  const entryOverlay = document.getElementById("entryOverlay");
  const entryBtn = document.getElementById("entryBtn");

  function dismissOverlayAndPlay(e) {
    if (e) e.stopPropagation();
    if (entryOverlay) {
      entryOverlay.classList.add("hidden");
      entryOverlay.setAttribute("aria-hidden", "true");
    }
    startPlayback();
  }

  entryBtn?.addEventListener("click", dismissOverlayAndPlay);
  entryOverlay?.addEventListener("click", dismissOverlayAndPlay);

  // Safe playback trigger
  function startPlayback() {
    audio.loop = true;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updatePlayUI();
          if (entryOverlay) {
            entryOverlay.classList.add("hidden");
            entryOverlay.setAttribute("aria-hidden", "true");
          }
          removeUnlockListeners();
        })
        .catch(() => {
          // Autoplay blocked by browser policy until user gesture
          if (musicStatus) musicStatus.textContent = "Tap to play";
          if (entryOverlay) {
            entryOverlay.classList.remove("hidden");
            entryOverlay.removeAttribute("aria-hidden");
          }
        });
    }
  }

  // Toggle button click
  function handlePlayClick(e) {
    if (e) e.stopPropagation();
    if (audio.paused) {
      audio.play().then(updatePlayUI).catch(() => {});
    } else {
      audio.pause();
      updatePauseUI();
    }
  }

  playBtn?.addEventListener("click", handlePlayClick);
  musicWidget?.addEventListener("click", handlePlayClick);

  // Attempt initial playback immediately on load
  startPlayback();

  // Universal touch & click unlock for all mobile and desktop browsers
  const unlockEvents = [
    "click",
    "touchstart",
    "touchend",
    "pointerdown",
    "keydown",
    "scroll"
  ];

  function onUserGesture() {
    if (audio.paused && !AppState.musicPausedForVideo) {
      startPlayback();
    }
  }

  function removeUnlockListeners() {
    unlockEvents.forEach(evt => {
      window.removeEventListener(evt, onUserGesture);
      document.removeEventListener(evt, onUserGesture);
    });
  }

  unlockEvents.forEach(evt => {
    window.addEventListener(evt, onUserGesture, { passive: true });
    document.addEventListener(evt, onUserGesture, { passive: true });
  });

  // Direct trigger when exploring memories
  const exploreBtn = document.getElementById("exploreBtn");
  exploreBtn?.addEventListener("click", () => {
    if (audio.paused) {
      startPlayback();
    }
  });
}

/* ==========================================================================
   LIGHTBOX MODAL
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const backdrop = document.getElementById("lightboxBackdrop");
  const closeBtn = document.getElementById("lightboxCloseBtn");
  const prevBtn = document.getElementById("lightboxPrevBtn");
  const nextBtn = document.getElementById("lightboxNextBtn");
  const downloadBtn = document.getElementById("lightboxDownloadBtn");
  const videoEl = document.getElementById("lightboxVideo");
  const bgAudio = document.getElementById("bgAudio");

  if (!modal) return;

  closeBtn?.addEventListener("click", closeLightbox);
  backdrop?.addEventListener("click", closeLightbox);

  prevBtn?.addEventListener("click", () => navigateLightbox(-1));
  nextBtn?.addEventListener("click", () => navigateLightbox(1));

  // Audio coordination: if memory video is playing, pause background music so sound doesn't clash
  if (videoEl && bgAudio) {
    videoEl.addEventListener("play", () => {
      if (!bgAudio.paused) {
        bgAudio.pause();
        AppState.musicPausedForVideo = true;
      }
    });

    videoEl.addEventListener("pause", () => {
      if (AppState.musicPausedForVideo && !videoEl.seeking) {
        bgAudio.play().catch(() => {});
        AppState.musicPausedForVideo = false;
      }
    });

    videoEl.addEventListener("ended", () => {
      if (AppState.musicPausedForVideo) {
        bgAudio.play().catch(() => {});
        AppState.musicPausedForVideo = false;
      }
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const current = GALLERY_IMAGES[AppState.currentLightboxIndex];
      if (current) {
        const isVideo = isVideoItem(current);
        const defaultName = isVideo ? `memory-${AppState.currentLightboxIndex + 1}.mp4` : `memory-${AppState.currentLightboxIndex + 1}.jpg`;
        const filename = getFilenameFromPath(current.src, defaultName);
        downloadBtn.download = filename;
        downloadBtn.href = current.src;
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if (modal.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") navigateLightbox(-1);
    else if (e.key === "ArrowRight") navigateLightbox(1);
  });

  // Touch Swipe for mobile phones
  let touchStartX = 0;
  let touchEndX = 0;
  modal.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  modal.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) navigateLightbox(-1);
      else navigateLightbox(1);
    }
  }, { passive: true });
}

function openLightbox(index) {
  const modal = document.getElementById("lightboxModal");
  if (!modal || index < 0 || index >= GALLERY_IMAGES.length) return;

  AppState.currentLightboxIndex = index;
  updateLightboxContent();

  modal.removeAttribute("hidden");
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  const videoEl = document.getElementById("lightboxVideo");
  const bgAudio = document.getElementById("bgAudio");

  if (videoEl) {
    videoEl.pause();
    videoEl.removeAttribute("src");
    videoEl.load();
    videoEl.classList.add("hidden");
  }

  // Resume background music if it was paused specifically for video
  if (AppState.musicPausedForVideo && bgAudio) {
    bgAudio.play().catch(() => {});
    AppState.musicPausedForVideo = false;
  }

  modal.setAttribute("hidden", "true");
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function navigateLightbox(direction) {
  const total = GALLERY_IMAGES.length;
  if (total <= 1) return;

  AppState.currentLightboxIndex = (AppState.currentLightboxIndex + direction + total) % total;
  updateLightboxContent();
}

function updateLightboxContent() {
  const current = GALLERY_IMAGES[AppState.currentLightboxIndex];
  if (!current) return;

  const isVideo = isVideoItem(current);
  const imgEl = document.getElementById("lightboxImage");
  const videoEl = document.getElementById("lightboxVideo");
  const captionEl = document.getElementById("lightboxCaption");
  const counterEl = document.getElementById("lightboxCounter");
  const downloadBtn = document.getElementById("lightboxDownloadBtn");
  const bgAudio = document.getElementById("bgAudio");

  if (isVideo) {
    // Hide image and prepare video
    if (imgEl) {
      imgEl.classList.add("hidden");
      imgEl.src = "";
    }
    if (videoEl) {
      videoEl.classList.remove("hidden");
      videoEl.src = current.src;
      videoEl.currentTime = 0;
      videoEl.onerror = () => {
        if (!videoEl.dataset.retried) {
          videoEl.dataset.retried = "true";
          videoEl.src = "images/" + current.src;
          if (downloadBtn) downloadBtn.href = "images/" + current.src;
        }
      };

      // Coordinate audio
      if (bgAudio && !bgAudio.paused) {
        bgAudio.pause();
        AppState.musicPausedForVideo = true;
      }
      videoEl.play().catch(() => {});
    }

    if (downloadBtn) {
      downloadBtn.setAttribute("title", "Download original video");
      downloadBtn.setAttribute("aria-label", "Download original video");
      const filename = getFilenameFromPath(current.src, `memory-${AppState.currentLightboxIndex + 1}.mp4`);
      downloadBtn.download = filename;
      downloadBtn.href = current.src;
    }
  } else {
    // Show image and cleanup video
    if (videoEl) {
      videoEl.pause();
      videoEl.removeAttribute("src");
      videoEl.load();
      videoEl.classList.add("hidden");
    }

    // Resume bg audio if needed
    if (AppState.musicPausedForVideo && bgAudio) {
      bgAudio.play().catch(() => {});
      AppState.musicPausedForVideo = false;
    }

    if (imgEl) {
      imgEl.classList.remove("hidden");
      imgEl.src = current.src;
      imgEl.alt = current.caption || "Enlarged photo";
      imgEl.onerror = () => {
        if (!imgEl.dataset.retried) {
          imgEl.dataset.retried = "true";
          imgEl.src = "images/" + current.src;
          if (downloadBtn) downloadBtn.href = "images/" + current.src;
        }
      };
    }

    if (downloadBtn) {
      downloadBtn.setAttribute("title", "Download original photo");
      downloadBtn.setAttribute("aria-label", "Download original photo");
      const filename = getFilenameFromPath(current.src, `memory-${AppState.currentLightboxIndex + 1}.jpg`);
      downloadBtn.download = filename;
      downloadBtn.href = current.src;
    }
  }

  if (captionEl) {
    captionEl.textContent = current.caption || "";
  }

  if (counterEl) {
    counterEl.textContent = `${AppState.currentLightboxIndex + 1} / ${GALLERY_IMAGES.length}`;
  }
}

/* ==========================================================================
   SCROLL EFFECTS & BACK TO TOP
   ========================================================================== */
function initScrollEffects() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function getFilenameFromPath(path, defaultName = "memory-photo.jpg") {
  if (!path) return defaultName;
  try {
    const segments = path.split("/");
    const last = segments[segments.length - 1];
    return last.split("?")[0] || defaultName;
  } catch (e) {
    return defaultName;
  }
}

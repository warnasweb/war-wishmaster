"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const wishes = [
  "May your day sparkle with joy, laughter, and sweet surprises!",
  "Wishing you endless happiness and a year full of amazing moments.",
  "Keep smiling, keep shining, and keep making every day special!",
];

export default function Home() {
  const [isLampOn, setIsLampOn] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSlide = (value: number) => {
    setSliderValue(value);

    if (value >= 95) {
      setIsLampOn(true);
    }
  };

  if (!isLampOn) {
    return (
      <div className={styles.page}>
        <div className={styles.confettiLayer} aria-hidden="true" />

        <main className={styles.main}>
          <section className={styles.lampLogin}>
            <div className={styles.lampGlow} aria-hidden="true" />
            <div className={styles.lampBody} aria-hidden="true">
              <div className={styles.lampShade} />
              <div className={styles.lampStand} />
              <div className={styles.lampBase} />
            </div>
            <h1 className={styles.lampTitle}>Turn on the birthday lamp ✨</h1>
            <p className={styles.lampSubtitle}>
              Flip the switch to reveal your special surprise.
            </p>
            <div className={styles.slideControl}>
              <label htmlFor="lamp-slide" className={styles.slideLabel}>
                Slide to turn lamp on
              </label>
              <input
                id="lamp-slide"
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                className={styles.lampSlider}
                onChange={(event) => handleSlide(Number(event.target.value))}
                aria-label="Slide right to show birthday content"
              />
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.confettiLayer} aria-hidden="true" />

      <main className={styles.main}>
        <header className={styles.hero}>
          <Image
            src="/birthday-banner.svg"
            alt="Birthday banner"
            width={1200}
            height={320}
            className={styles.headerBanner}
            priority
          />
          <p className={styles.kicker}>Celebrate Today 🎉</p>
          <h1>Happy Birthday!</h1>
          <h1>Ansh</h1>
          <p className={styles.subtitle}>
            Sending warm hugs, big smiles, and magical birthday vibes your way.
          </p>

          <div className={styles.bannerImages}>
            <Image
              src="/ansh1.png"
              alt="Happy Birthday decorative banner"
              width={320}
              height={320}
              className={styles.bannerImage}
              priority
            />
            <Image
              src="/ansh11.png"
              alt="Colorful birthday balloons"
              width={320}
              height={320}
              className={styles.bannerImage}
            />
          </div>
        </header>

        <section className={styles.wishesSection}>
          {wishes.map((wish) => (
            <article className={styles.wishCard} key={wish}>
              ✨ {wish}
            </article>
          ))}
        </section>

        <footer className={styles.footer}>
          <p>Make a wish and blow out the candles! 🕯️🎂</p>
        </footer>
      </main>
    </div>
  );
}

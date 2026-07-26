export function NotionAvatar() {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[21rem] place-items-center">
      <div
        aria-hidden="true"
        className="absolute inset-[9%] animate-breathe rounded-full bg-canvas motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-[2%] animate-orbit rounded-full border border-line motion-reduce:animate-none"
      >
        <span className="absolute right-[12%] top-[15%] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_22px_rgba(35,131,226,0.35)]" />
      </div>
      <img
        src="/assets/sayyid-notion-face-800.png"
        alt="Illustrated portrait of Sayyid Haidar"
        width={800}
        height={800}
        className="relative z-10 w-[76%] animate-float object-contain motion-reduce:animate-none"
        loading="eager"
      />
    </div>
  )
}

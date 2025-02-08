export default function Blur() {
  return (
    <div
      aria-hidden
      className="
        select-none 
        pointer-events-none 
        fixed
        w-full
        h-[var(--pt)]
        z-1
        backdrop-blur-[5px]
        opacity-95
        [mask-image:linear-gradient(to_bottom,var(--foreground)_25%,transparent)]
        after:absolute
        after:inset-0
        after:bg-[linear-gradient(to_bottom,var(--background),transparent)]
      " 
    />
  )
}

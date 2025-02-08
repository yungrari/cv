
import Time from "./time";
import City from "./city";
import Weather from "./weather";

export default async function Footer() {
  return (
    <div className="mx-auto max-w-[var(--max-w)] px-[var(--px)] py-4 flex justify-between">
      {/* <City city={headersList.get('x-geo-city') || ''} /> */}
      <Weather />
      <Time />
    </div>
  )
}

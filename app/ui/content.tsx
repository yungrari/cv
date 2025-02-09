import config from "@/app/config";

function ArrowTopRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  )
}

export default function Content() {
  return (
    <article className="flex flex-col gap-15">
      {config.content.map((section) => (
        <section className="flex flex-col gap-6 first:gap-3" key={section.title}>
          <h3>{section.title}</h3>

          <ul className={`flex flex-col ${section.gap}`}>
            {section.items.map((item) => (
              <li key={item.id}>
                {item.year && (
                  <p className="text-[var(--grey3)]">{item.year}</p>
                )}

                {item.text && (
                  <p className="text-[var(--grey2)]">{item.text}</p>
                )}

                {item.link && (
                  <a
                    className="flex items-center gap-1 hover:underline hover:underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...item.link}
                  >
                    <span>{item.link.title}</span>
                    <ArrowTopRight />
                  </a>
                )}

                {item.list && (
                  <ul className="text-[var(--grey2)]">
                    {item.list.map((listItem) => (
                      <li key={listItem}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  )
}
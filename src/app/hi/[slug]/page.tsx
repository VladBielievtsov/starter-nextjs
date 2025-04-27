export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return (
    <main className="px-7 py-10 overflow-x-hidden">
      <div className="max-w-article! mx-auto prose">
        <div className="flex items-center gap-2">
          <img alt="👋" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" src="/hand.webp" style={{ color: "transparent", flex: "0 0 auto" }}></img>
          <h1>Hi, {slug}</h1>
        </div>
      </div>
    </main>
  )
}

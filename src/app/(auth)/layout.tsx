export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>Barra Lateral do Dashboard</h1>
      {children} {/* Renderiza /dashboard/admin ou /dashboard/professor */}
    </div>
  )
}

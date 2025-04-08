export const metadata = {
  title: 'Reserva de Quadras',
  description: 'Sistema de agendamento para o clube',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

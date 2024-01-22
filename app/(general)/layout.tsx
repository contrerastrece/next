import { NavBar } from "@/components";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center m-4">
        <h1>Hola Mundo</h1>
        {children}
      </main>
    </>
  );
}

import NavBar from "@/components/NavBar";

export default function WordleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen  bg-gray-900">
      <NavBar />
      <main className="flex flex-col mx-auto w-full ">{children}</main>
    </div>
  );
}

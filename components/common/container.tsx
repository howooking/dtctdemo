export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1360px] mx-auto h-full">{children}</div>;
}

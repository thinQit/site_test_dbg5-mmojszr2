import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-muted-foreground mb-6">That page isn’t on today’s bake list.</p>
        <Link
          href="/"
          className="bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

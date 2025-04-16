import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Категория не найдена</h2>
      <p className="mb-4">Запрашиваемая категория не существует.</p>
      <Link 
        href="/catalog" 
        className="text-primary hover:underline"
      >
        Вернуться в каталог
      </Link>
    </div>
  )
}
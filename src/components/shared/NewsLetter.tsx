import { Button } from "../ui/button"

export default function NewsLetter() {
  return (
    <section className="py-16 bg-emerald-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Подпишитесь на наши новости
          </h2>
          <p className="text-lg mb-8 text-white text-opacity-90">
            Будьте в курсе наших акций, новых услуг и полезных статей о ремонте
            и строительстве
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            <Button className="bg-amber-950 hover:bg-amber-900 text-white py-3 px-6">
              Подписаться
            </Button>
          </div>

          <p className="text-sm mt-4 text-white text-opacity-80">
            Подписываясь, вы соглашаетесь с нашей
            <a href="#" className="underline ml-1 hover:text-white">
              политикой конфиденциальности
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

import { Button } from "../ui/button"

export default function Reminder() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Заключение</h2>
          <p className="text-lg text-gray-700 mb-8">
            Процесс строительно-монтажных работ требует точного выполнения всех
            этапов. Важно согласование с заказчиком, обеспечение качества на
            каждом этапе и соблюдение сроков выполнения. Компания
            &quot;Универсал ремстрой&quot; гарантирует профессиональный подход и
            высокое качество всех выполняемых работ.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button className="bg-emerald-700 hover:bg-emerald-600">
              Заказать консультацию
            </Button>
            <Button
              variant="outline"
              className="border-emerald-700 text-emerald-700 hover:bg-emerald-50"
            >
              Наши проекты
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

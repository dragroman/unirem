// components/sections/Team.tsx
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Александр Иванов",
    position: "Генеральный директор",
    experience: "15 лет опыта в строительстве, MBA",
    image: "/images/team/team-1.jpg",
    certificates: ["Сертификат ISO 9001", "Диплом PMI"],
  },
  {
    name: "Елена Смирнова",
    position: "Главный архитектор",
    experience: "12 лет опыта, стажировка в Европе",
    image: "/images/team/team-2.jpg",
    certificates: ["Сертификат RIBA", "Диплом ARCHICAD"],
  },
  {
    name: "Дмитрий Петров",
    position: "Руководитель строительных работ",
    experience: "10 лет опыта в России и Китае",
    image: "/images/team/team-3.jpg",
    certificates: ["Сертификат BIM", "Аттестат НОСТРОЙ"],
  },
  {
    name: "Ольга Козлова",
    position: "Ведущий дизайнер интерьеров",
    experience: "8 лет опыта, обучение в Италии",
    image: "/images/team/team-4.jpg",
    certificates: ["Диплом Interior Design Institute", "Сертификат AutoCAD"],
  },
]

const Team = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Наша команда
          </h2>
          <p className="text-lg text-gray-600">
            Специалисты с зарубежным опытом работы, международными сертификатами
            и знанием современных технологий строительства
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-gray-200 transition-all hover:shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader className="pt-6 pb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <CardDescription className="text-emerald-700 font-medium">
                  {member.position}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-2">
                <p className="text-gray-600 text-sm mb-3">
                  {member.experience}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.certificates.map((cert, i) => (
                    <span
                      key={i}
                      className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-emerald-700"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-emerald-700"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-emerald-700 to-emerald-600 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-white mb-3">
            Присоединяйтесь к нашей команде!
          </h3>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            Мы постоянно ищем талантливых специалистов с опытом работы в
            строительной сфере. Отправьте нам ваше резюме, и мы обязательно
            рассмотрим вашу кандидатуру.
          </p>
          <Button
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-emerald-700"
          >
            Отправить резюме
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Team

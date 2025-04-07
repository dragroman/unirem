export type ProjectCategory =
  | "Жилой комплекс"
  | "Коммерческий объект"
  | "Ремонт помещений"
  | "Реконструкция"

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  year: number
  image?: string
}

export const projectCategories: ProjectCategory[] = [
  "Жилой комплекс",
  "Коммерческий объект",
  "Ремонт помещений",
  "Реконструкция",
]

export const projects: Project[] = [
  {
    id: "1",
    title: 'ЖК "Солнечный"',
    description:
      "Комплексное строительство жилого комплекса из 3 многоквартирных домов",
    category: "Жилой комплекс",
    year: 2022,
  },
  {
    id: "2",
    title: 'Торговый центр "Меридиан"',
    description: "Строительство и отделка торгового центра площадью 5000 кв.м.",
    category: "Коммерческий объект",
    year: 2021,
  },
  {
    id: "3",
    title: 'Офисный центр "Бизнес Плаза"',
    description: "Капитальный ремонт и реконструкция офисных помещений",
    category: "Ремонт помещений",
    year: 2023,
  },
  {
    id: "4",
    title: 'Гостиница "Восток"',
    description: "Реконструкция и модернизация гостиничного комплекса",
    category: "Реконструкция",
    year: 2022,
  },
  {
    id: "5",
    title: 'ЖК "Морской"',
    description: "Строительство жилого комплекса премиум-класса",
    category: "Жилой комплекс",
    year: 2021,
  },
  {
    id: "6",
    title: 'Бизнес-центр "Континент"',
    description: "Строительство современного бизнес-центра класса А",
    category: "Коммерческий объект",
    year: 2023,
  },
]

// src/data/pageContent.ts
import { Metadata } from "next"

export interface PageContent {
  id: string
  url: string
  title: string
  menuTitle?: string
  description: string
  image?: string
  metaTitle?: string
  metaDescription?: string
  isInMenu: boolean
  menuOrder?: number
  parent?: string // ID родительской страницы
  showInSubmenu?: boolean // Показывать ли в выпадающем меню родителя
}

export interface PageContentCollection {
  [key: string]: PageContent
}

const pageContent: PageContentCollection = {
  services: {
    id: "services",
    url: "/services",
    title: "Услуги",
    description:
      "Полный спектр услуг в сфере строительства, ремонта и отделки помещений. От проектирования до финальной отделки под ключ.",
    image: "/images/services/main.jpg",
    metaTitle: "Услуги компании Универсал ремстрой | Строительство и ремонт",
    metaDescription:
      "Комплексные услуги по ремонту квартир, отделке помещений, проектированию и строительству от компании Универсал ремстрой.",
    isInMenu: true,
    menuOrder: 1,
  },

  // Подстраницы раздела "Услуги"
  servicesApartment: {
    id: "servicesApartment",
    url: "/services/apartment",
    title: "Ремонт квартир во Владивостоке",
    menuTitle: "Ремонт квартир",
    description:
      "Комплексный ремонт квартир, коттеджей и офисов любой сложности. Работы выполняются с гарантией качества и в срок.",
    image: "/images/services/apartment/American_1.jpg",
    metaTitle: "Ремонт квартир во Владивостоке",
    metaDescription:
      "Профессиональный ремонт квартир, домов и офисов. Работаем с гарантией качества. Соблюдаем сроки выполнения проектов.",
    isInMenu: false,
    parent: "services",
    showInSubmenu: true,
  },
  servicesCommercial: {
    id: "servicesCommercial",
    url: "/services/commercial",
    title: "Коммерческие объекты",
    description:
      "Сервисное обслуживание и ремонт коммерческих зданий и помещений. Работаем с любыми объектами, включая офисы, магазины и рестораны.",
    image: "/images/services/design.jpg",
    metaTitle: "Коммерческие объекты",
    metaDescription:
      "Коммерческое обслуживание и ремонт зданий и помещений любой сложности. Работаем с любыми объектами, включая офисы, магазины и рестораны.",
    isInMenu: false,
    parent: "services",
    showInSubmenu: true,
  },
  // servicesImport: {
  //   id: "servicesImport",
  //   url: "/services/import",
  //   title: "Импортные материалы",
  //   description:
  //     "Поставки качественных строительных материалов из-за рубежа. Прямые контракты с производителями.",
  //   image: "/images/services/import.jpg",
  //   metaTitle: "Импорт строительных материалов | Универсал ремстрой",
  //   metaDescription:
  //     "Поставки качественных импортных строительных материалов. Прямые поставки от производителей без посредников.",
  //   isInMenu: false,
  //   parent: "services",
  //   showInSubmenu: true,
  // },

  // projects: {
  //   id: "projects",
  //   url: "/projects",
  //   title: "Наши проекты",
  //   description:
  //     "Портфолио завершенных проектов компании Универсал ремстрой. Жилые и коммерческие объекты, выполненные с высоким качеством и в срок.",
  //   image: "/images/projects/main.jpg",
  //   metaTitle: "Проекты компании Универсал ремстрой | Портфолио работ",
  //   metaDescription:
  //     "Ознакомьтесь с выполненными проектами компании Универсал ремстрой. Примеры ремонта квартир, офисов и коммерческих помещений.",
  //   isInMenu: true,
  //   menuOrder: 3,
  // },
  contact: {
    id: "contact",
    url: "/contact",
    title: "Контакты",
    description:
      "Свяжитесь с нами для получения консультации по вопросам ремонта и строительства. Наши специалисты всегда готовы помочь вам с выбором оптимального решения.",
    image: "/images/contacts/office.jpg",
    metaTitle: "Контакты | Универсал ремстрой",
    metaDescription:
      "Контактная информация компании Универсал ремстрой. Телефоны, адрес офиса, электронная почта и форма обратной связи.",
    isInMenu: true,
    menuOrder: 4,
  },
  about: {
    id: "about",
    url: "/about",
    title: "О компании",
    description:
      "Мы специализируемся на комплексном ремонте и строительстве жилых и коммерческих объектов, предоставляя полный цикл услуг от проектирования до финальной отделки. Наша миссия — создавать комфортные и функциональные пространства, используя современные технологии и качественные материалы, делая процесс ремонта максимально прозрачным и удобным для клиента.",
    image: "/images/about/company.jpg",
    metaTitle:
      "О компании Универсал ремстрой - надежный партнер в строительстве",
    metaDescription:
      "Узнайте о компании Универсал ремстрой - полный спектр услуг в сфере строительства и ремонта с фокусом на Дальневосточный регион",
    isInMenu: true,
    menuOrder: 5,
  },

  help: {
    id: "help",
    url: "/help",
    title: "Помощь",
    description:
      "Здесь вы найдете ответы на часто задаваемые вопросы и инструкции по использованию нашего сайта. Если у вас есть вопросы или проблемы, не стесняйтесь обращаться к нам.",
    image: "/images/help/main.jpg",
    metaTitle: "Помощь и поддержка | Универсал ремстрой",
    metaDescription:
      "Помощь и поддержка компании Универсал ремстрой. Инструкции, ответы на вопросы и контактная информация.",
    isInMenu: true,
    menuOrder: 6,
  },

  helpProcessApartment: {
    id: "helpProcessApartment",
    url: "/help/process-apartment",
    title: "Процесс отделки квартир",
    description:
      "Узнайте, как мы ремонтируем вашу квартиру, от выбора материалов до завершения работ. Получите ответы на все ваши вопросы.",
    image: "/images/help/process-apartment.jpg",
    metaTitle: "Процесс ремонта квартир | Универсал ремстрой",
    metaDescription:
      "Узнайте, как мы ремонтируем вашу квартиру. Получите ответы на часто задаваемые ваши вопросы.",
    isInMenu: false,
    parent: "help",
    showInSubmenu: true,
  },
  helpManual: {
    id: "helpManual",
    url: "/help/manual",
    title: "Технические руководства",
    description:
      "Здесь собраны все технические руководства по различным видам работ.",
    image: "/images/help/manual.jpg",
    metaTitle: "Технические руководства",
    metaDescription:
      "Здесь собраны все технические руководства по различным видам работ.",
    isInMenu: false,
    parent: "help",
    showInSubmenu: true,
  },
}

/**
 * Получает содержимое страницы по её идентификатору
 */
export const getPageContent = (id: string): PageContent | undefined => {
  return pageContent[id]
}

/**
 * Получает все пункты меню верхнего уровня (без дочерних элементов)
 */
export const getMenuItems = (): PageContent[] => {
  return Object.values(pageContent)
    .filter((page) => page.isInMenu)
    .sort((a, b) => (a.menuOrder || 999) - (b.menuOrder || 999))
}

/**
 * Получает все дочерние страницы для указанного родительского ID
 */
export const getSubmenuItems = (parentId: string): PageContent[] => {
  return Object.values(pageContent)
    .filter((page) => page.parent === parentId && page.showInSubmenu)
    .sort((a, b) => (a.menuOrder || 999) - (b.menuOrder || 999))
}

/**
 * Проверяет, имеет ли страница дочерние элементы для подменю
 */
export const hasSubmenu = (pageId: string): boolean => {
  return Object.values(pageContent).some(
    (page) => page.parent === pageId && page.showInSubmenu
  )
}

/**
 * Генерирует объект метаданных Next.js на основе данных страницы
 */
export function createPageMetadata(
  pageId: string,
  additionalDescription?: string
): Metadata {
  const page = getPageContent(pageId)

  if (!page) {
    return {
      title: "Универсал ремстрой",
      description: "Профессиональный ремонт и строительство во Владивостоке",
    }
  }

  // Получаем родительскую страницу, если она есть
  const parentPage = page.parent ? getPageContent(page.parent) : null
  const description = additionalDescription
    ? `${page.metaDescription || page.description} ${additionalDescription}`
    : page.metaDescription || page.description

  const title =
    page.metaTitle ||
    (parentPage
      ? `${page.title} - ${parentPage.title} | Универсал ремстрой`
      : `${page.title} | Универсал ремстрой`)

  return {
    title: {
      absolute: title,
    },
    description: description,
    openGraph: page.image
      ? {
          images: [
            {
              url: page.image,
              width: 1200,
              height: 630,
              alt: page.title,
            },
          ],
          title: title,
          description: description,
          type: "website",
        }
      : undefined,
  }
}

export default pageContent

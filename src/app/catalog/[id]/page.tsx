import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { drupal } from "@/lib/drupal"
import { absoluteUrl } from "@/lib/utils"
import { DrupalNode } from "next-drupal"
import Image from "next/image"

const t = {
  tableHead: "Характеристики",
  tableValue: "Значение",
  // Основные данные
  sku: "Артикул",
  field_category: "Категория",
  field_color: "Цвет",
  field_image: "Изображение",
  field_technical_description: "Техническое описание",
  // Размеры
  field_length: "Длина",
  field_thickness: "Толщина",
  field_width: "Ширина",
  // Характеристики (нет данных)
  field_brand: "Бренд",
  field_material: "Материал",
  field_surface: "Поверхность",
  field_texture: "Текстура",
  // Склад, доставка (нет данных)
  field_price: "Цена",
  field_price_m2: "Цена за квадратный метр",
  field_size: "Вместимость в один контейнер",
  field_delivery_time: "Время доставки",
  field_inventory: "Количество на складе",
  field_example: "Примеры",
}

export default async function MaterialDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params

  try {
    // Использование getResourceByPath с системным путем узла
    const material = await drupal.getResourceByPath<DrupalNode>(`/node/${id}`, {
      params: {
        "fields[node--material]":
          "title,field_image,field_vendor_code,field_brand,field_color,field_image,field_category,field_technical_description,field_length,field_thickness,field_width,field_material,field_surface,field_texture,field_price,field_price_m2,field_size,field_delivery_time,field_inventory,field_example",
        include: "field_image,uid,field_category",
      },
    })
    if (!material) {
      throw new Response("Not Found", { status: 404 })
    }
    console.log(material)
    return (
      <article className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <div className="relative h-[300px]">
              <Image
                src={absoluteUrl(material.field_image[0].uri.url)}
                alt={material.title || "Изображение материала"}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEtAJJXIDTjwAAAABJRU5ErkJggg=="
              />
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-6">{material.title}</h1>
            <div className="mb-4">
              {t.sku}: {material.field_vendor_code}
            </div>
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t.tableHead}</TableHead>
                    <TableHead>{t.tableValue}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>{t.field_category}</TableCell>
                    <TableCell>{material.field_category.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_color}</TableCell>
                    <TableCell>{material.field_color}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_technical_description}</TableCell>
                    <TableCell>
                      {material.field_technical_description}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_length}</TableCell>
                    <TableCell>{material.field_length}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_thickness}</TableCell>
                    <TableCell>{material.field_thickness}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_width}</TableCell>
                    <TableCell>{material.field_width}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_material}</TableCell>
                    <TableCell>{material.field_material}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_surface}</TableCell>
                    <TableCell>{material.field_surface}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_texture}</TableCell>
                    <TableCell>{material.field_textura}</TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableCell>{t.field_price}</TableCell>
                    <TableCell>{material.field_price}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_price_m2}</TableCell>
                    <TableCell>{material.field_price_m2}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_size}</TableCell>
                    <TableCell>{material.field_size}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_delivery_time}</TableCell>
                    <TableCell>{material.field_delivery_time}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{t.field_inventory}</TableCell>
                    <TableCell>{material.field_inventory}</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </div>
            {material.body?.processed && (
              <div
                dangerouslySetInnerHTML={{ __html: material.body.processed }}
                className="prose prose-lg max-w-none mt-6"
              />
            )}
          </div>
        </div>
      </article>
    )
  } catch (error) {
    console.error("Error fetching material:", error)
    throw new Response("Not Found", { status: 404 })
  }
}

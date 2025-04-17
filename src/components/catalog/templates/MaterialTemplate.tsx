// src/components/catalog/templates/MaterialTemplate.tsx
import React from "react"
import Image from "next/image"
import { Material } from "@/types/material"
import { CatalogBreadcrumbs } from "../ui/CatalogBreadcrumbs"
import { BreadcrumbItem } from "@/types/catalog"
import { absoluteUrl } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface MaterialTemplateProps {
  material: Material
  breadcrumbs: BreadcrumbItem[]
}

export function MaterialTemplate({
  material,
  breadcrumbs,
}: MaterialTemplateProps) {
  // Таблица соответствий полей и их названий
  const fieldLabels = {
    field_category: "Категория",
    field_color: "Цвет",
    field_technical_description: "Техническое описание",
    field_length: "Длина",
    field_thickness: "Толщина",
    field_width: "Ширина",
    field_brand: "Бренд",
    field_material: "Материал",
    field_surface: "Поверхность",
    field_texture: "Текстура",
  }

  // Функция для получения текстового значения из поля
  const getFieldDisplayValue = (field: keyof typeof fieldLabels) => {
    const value = material[field]

    // Проверяем, является ли значение объектом (например, категория)
    if (field === "field_category" && material.field_category) {
      return material.field_category.name || "Не указано"
    }

    // Для остальных полей возвращаем строковое значение или 'Не указано'
    return typeof value === "string" ? value : "Не указано"
  }

  // Функция для проверки наличия значения в поле
  const hasValue = (field: keyof typeof fieldLabels) =>
    material[field] !== undefined &&
    material[field] !== null &&
    material[field] !== ""

  // Фильтруем только те поля, у которых есть значения
  const availableFields = Object.keys(fieldLabels)
    .filter((field) => hasValue(field as keyof typeof fieldLabels))
    .map((field) => ({
      name: field as keyof typeof fieldLabels,
      label: fieldLabels[field as keyof typeof fieldLabels],
      value: getFieldDisplayValue(field as keyof typeof fieldLabels),
    }))

  return (
    <article className="container mx-auto py-8">
      <CatalogBreadcrumbs items={breadcrumbs} />

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-2xl font-bold mb-6">{material.title}</h1>

          <div className="mb-4">Артикул: {material.field_vendor_code}</div>

          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Характеристики</TableHead>
                  <TableHead>Значение</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {availableFields.map((field) => (
                  <TableRow key={field.name}>
                    <TableCell>{field.label}</TableCell>
                    <TableCell>{field.value}</TableCell>
                  </TableRow>
                ))}
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

        <div>
          <div className="relative h-[300px]">
            {material.field_image && material.field_image.length > 0 && (
              <Image
                src={absoluteUrl(material.field_image[0].uri.url)}
                alt={material.title || "Изображение материала"}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

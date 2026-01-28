import { Card } from "@/components/Card";

import { ProductsSectionBase } from "@/components/ProductsSectionBase";

const breakfasts = [
  {
    image: undefined,
    title: "Bacon & Egg",
    description:
      "Semi-brioche bun with crispy bacon and fried egg. Served with two hashbrowns, house sauce, and a hot or cold drink.",
    price: "£10.50",
  },
  {
    image: undefined,
    title: "Sausage & Egg",
    description:
      "Semi-brioche bun with grilled sausage and fried egg. Served with two hashbrowns, house sauce, and a hot or cold drink.",
    price: "£10.50",
  },
  {
    image: undefined,
    title: "Egg & Cheese",
    description:
      "Semi-brioche bun with fried egg and melted cheese. Served with two hashbrowns, house sauce, and a hot or cold drink.",
    price: "£9.50",
  },
  {
    image: undefined,
    title: "Smoked Salmon",
    description:
      "Semi-brioche bun with smoked salmon, scrambled egg, cream cheese, rocket, and balsamic glaze. Served with two hashbrowns, house sauce, and a hot or cold drink.",
    price: "£12.50",
  },
];

export const BreakfastSection = () => {
  return (
    <ProductsSectionBase id="breakfast" title="Breakfast">
      {breakfasts.map((item) => (
        <Card
          key={item.title}
          image={item.image}
          alt={item.title}
          title={item.title}
          description={item.description}
          price={item.price}
        />
      ))}
    </ProductsSectionBase>
  );
};

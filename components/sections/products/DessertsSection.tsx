import { Card } from "@/components/Card";
import { ProductsSectionBase } from "@/components/ProductsSectionBase";

const desserts = [
  {
    image: undefined,
    title: "White Chocolate Raspberry Cheesecake",
    description:
      "Creamy white chocolate cheesecake with a buttery shortbread base, raspberry jam and freeze-dried raspberries.",
    price: "£7.50",
  },
  {
    image: undefined,
    title: "Chocolate Fudge Cake",
    description: "Warm dark chocolate fudge cake.",
    price: "£7.00",
  },
  {
    image: undefined,
    title: "Tiramisu Cup",
    description:
      "Mascarpone cream layered with espresso-soaked ladyfingers, finished with cocoa powder.",
    price: "£7.50",
  },
];

export const DessertsSection = () => {
  return (
    <ProductsSectionBase id="desserts" title="Desserts by Namiee">
      {desserts.map((item) => (
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

import { Card } from "@/components/Card";
import { ProductsSectionBase } from "@/components/ProductsSectionBase";

const starters = [
  {
    image: undefined,
    title: "Burrata",
    description:
      "Creamy burrata with rocket, cherry tomatoes, green olives, toasted bread, balsamic glaze and olive oil.",
    price: "£13.90",
  },
  {
    image: undefined,
    title: "Chicken Wings",
    description:
      "Grilled chicken wings glazed with honey, pepperoncino, balsamic vinegar and olive oil.",
    price: "£6.90",
  },
  {
    image: undefined,
    title: "King Prawns",
    description:
      "Pan-seared king prawns in white wine reduction with butter, garlic, black pepper and a hint of spice.",
    price: "£6.90",
  },
  {
    image: undefined,
    title: "Loaded Nachos",
    description:
      "Nachos topped with melted cheddar, jalapeños, sour cream, guacamole and fresh salsa.",
    price: "£8.90",
  },
];

export const StartersSection = () => {
  return (
    <ProductsSectionBase id="starters" title="Starters">
      {starters.map((item) => (
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

import { Card } from "@/components/Card";
import { ProductsSectionBase } from "@/components/ProductsSectionBase";

const sides = [
  {
    image: undefined,
    title: "French Fries",
    description: "Classic crispy french fries.",
    price: "£3.50",
  },
  {
    image: undefined,
    title: "Sweet Potato Fries",
    description: "Crispy sweet potato fries.",
    price: "£3.50",
  },
  {
    image: undefined,
    title: "Halloumi Fries",
    description: "Golden fried halloumi sticks.",
    price: "£6.50",
  },
  {
    image: undefined,
    title: "Garlic Parmesan Fries",
    description: "French fries with garlic and parmesan.",
    price: "£1.50",
  },
  {
    image: undefined,
    title: "Truffle Fries",
    description: "French fries with truffle flavour.",
    price: "£1.50",
  },
  {
    image: undefined,
    title: "Cajun Fries",
    description: "French fries with cajun spices.",
    price: "£1.50",
  },
  {
    image: undefined,
    title: "Spicy Fries",
    description: "French fries with spicy seasoning.",
    price: "£1.50",
  },
];

export const SidesSection = () => {
  return (
    <ProductsSectionBase id="sides" title="Side">
      {sides.map((item) => (
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

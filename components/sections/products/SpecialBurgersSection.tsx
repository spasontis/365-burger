import { Card } from "@/components/Card";
import { ProductsSectionBase } from "@/components/ProductsSectionBase";

const specialBurgers = [
  {
    image: undefined,
    title: "Triple Cheese Burger",
    description:
      "Semi-brioche bun with three smash patties: blue cheese, brie cheese, cheddar, house sauce, lettuce, tomato, pickles and crispy bacon.",
    price: "£19.90",
  },
  {
    image: undefined,
    title: "Adana Beef Burger",
    description:
      "Semi-brioche bun with seasoned Adana-style beef patty, herb yogurt sauce, Adana onion salad, fresh parsley and a touch of spice.",
    price: "£18.90",
  },
  {
    image: undefined,
    title: "Burgerlicious",
    description:
      "Semi-brioche bun with four smash patties, American cheese, crispy onions, crispy bacon, lettuce, tomato, pickles and house sauce.",
    price: "£22.90",
  },
];

export const SpecialBurgersSection = () => {
  return (
    <ProductsSectionBase id="special-burgers" title="Special Burgers">
      {specialBurgers.map((item) => (
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

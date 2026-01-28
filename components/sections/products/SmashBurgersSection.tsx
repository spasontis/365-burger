import { Card } from "@/components/Card";
import { ProductsSectionBase } from "@/components/ProductsSectionBase";
import signatureBurger from "@/assets/burger-1.jpg";
import chickenBurger from "@/assets/burger-2.jpg";
import comboBurger from "@/assets/burger-3.jpg";

const smashBurgers = [
  {
    title: "365 Signature Burger",
    image: signatureBurger,
    description:
      "Semi-brioche bun with two smash patties, American cheese, house sauce, lettuce, tomato, pickles, crispy bacon, sauce and fries.",
    price: "£16.00",
  },
  {
    title: "Chicken Burger",
    image: chickenBurger,
    description:
      "Semi-brioche bun with mini-fillet chicken breast marinated, American cheese, house sauce, lettuce, tomato, pickles, crispy bacon, sauce and fries.",
    price: "£15.00",
  },
  {
    title: "Combo Burger",
    image: comboBurger,
    description:
      "Semi-brioche bun with one smash patty and marinated mini-fillet chicken breast, American cheese, house sauce, lettuce, tomato, pickles, crispy bacon, sauce and fries.",
    price: "£16.00",
  },
  {
    image: undefined,
    title: "Summer Burger",
    description:
      "Semi-brioche bun with marinated mini-fillet chicken breast, mozzarella, grilled mango, tomato, pesto sauce and fries.",
    price: "£15.00",
  },
  {
    image: undefined,
    title: "Blue Burger",
    description:
      "Semi-brioche bun with two smash patties, blue cheese, house sauce, rocket, balsamic vinegar, crispy bacon, sauce and fries.",
    price: "£16.90",
  },
  {
    image: undefined,
    title: "Vegetarian Burger",
    description:
      "Semi-brioche bun with plant-based vegetarian patty, American cheese, garlic & herbs sauce, lettuce, tomato, pickles, sauce and fries.",
    price: "£15.00",
  },
  {
    image: undefined,
    title: "Kids Burger",
    description:
      "Semi-brioche bun with one smash patty, American cheese, house sauce, lettuce, tomato, pickles, bacon, sauce and fries.",
    price: "£9.00",
  },
];

export const SmashBurgersSection = () => {
  return (
    <ProductsSectionBase id="smash-burgers" title="Smash Burgers">
      {smashBurgers.map((item) => (
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

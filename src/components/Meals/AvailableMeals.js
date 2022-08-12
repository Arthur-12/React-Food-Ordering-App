import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'AMALA AND EWEDU',
    description: 'AMALA AND EWEDU WITH GBEGIRI, PONMO, SAKI AND BEEF',
    price: 2500,
  },
  {
    id: 'm2',
    name: 'RICE AND BEANS',
    description: 'RICE AND BEANS, BOILED GOAT MEAT, FRIED PLANTAIN AND RICE SAUCE!',
    price: 3000,
  },
  {
    id: 'm3',
    name: 'Oha Soup',
    description: 'American, raw, meaty',
    price: 3500,
  },
  {
    id: 'm4',
    name: 'goat meat peppersoup',
    description: 'Healthy...and green...',
    price: 2000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

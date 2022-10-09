import CocktailItem from "./CocktailItem";

const CocktailsList = ({ cocktails }) => {
  return (
    <div>
      {cocktails.drinks.map((cocktail) => (
        <CocktailItem cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailsList;

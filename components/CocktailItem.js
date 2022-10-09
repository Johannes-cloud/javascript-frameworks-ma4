const CocktailItem = ({ cocktail }) => {
  return (
    <div>
      <h2>{cocktail.strDrink}</h2>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailItem;

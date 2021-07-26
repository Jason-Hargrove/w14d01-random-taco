const TacoInfo = (props) => {
  return (
    <div className="column">
      <h2>Mixin: {props.taco.mixin.slug}</h2>
      <h3><a href={props.taco.mixin.url}>Link to the Recipe</a></h3>
      <h3>Name: {props.taco.mixin.name}</h3>
      <h3>Recipe: {props.taco.mixin.recipe}</h3>

      <h2>Base Layer: {props.taco.base_layer.slug}</h2>
      <h3><a href={props.taco.base_layer.url}>Link to the Recipe</a></h3>
      <h3>Name: {props.taco.base_layer.name}</h3>
      <h3>Recipe: {props.taco.base_layer.recipe}</h3>

      <h2>Seasoning: {props.taco.seasoning.slug}</h2>
      <h3><a href={props.taco.seasoning.url}>Link to the Recipe</a></h3>
      <h3>Name: {props.taco.seasoning.name}</h3>
      <h3>Recipe: {props.taco.seasoning.recipe}</h3>

      <h2>Shell: {props.taco.shell.slug}</h2>
      <h3><a href={props.taco.shell.url}>Link to the Recipe</a></h3>
      <h3>Name: {props.taco.shell.name}</h3>
      <h3>Recipe: {props.taco.shell.recipe}</h3>

      <h2>Condiment: {props.taco.condiment.slug}</h2>
      <h3><a href={props.taco.condiment.url}>Link to the Recipe</a></h3>
      <h3>Name: {props.taco.condiment.name}</h3>
      <h3>Recipe: {props.taco.condiment.recipe}</h3>
    </div>
  );
};

export default TacoInfo;

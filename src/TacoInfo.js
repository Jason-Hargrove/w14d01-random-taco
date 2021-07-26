const TacoInfo = (props) => {
  return (
    <div className="column">
      <h1>Mixin: {props.taco.mixin}</h1>
      <h2>Base Layer: {props.taco.base_layer}</h2>
      <h3>Seasoning: {props.taco.seasoning}</h3>
      <h4>Shell: {props.taco.shell}</h4>
      <h4>Condiment: {props.taco.condiment}</h4>
    </div>
  );
};

export default TacoInfo;

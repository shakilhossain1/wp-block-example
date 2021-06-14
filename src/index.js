wp.blocks.registerBlockType("ourplugin/are-you-paying-attention", {
  title: "Are You Paying Attention",
  icon: "smiley",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" }
  },
  edit(props) {
    const updateSkyColor = (e) => {
      props.setAttributes({ skyColor: e.target.value });
    };
    const updateGrassColor = (e) => {
      props.setAttributes({ grassColor: e.target.value });
    };

    return (
      <div>
        <input
          type="text"
          placeholder="Sky color"
          value={props.attributes.skyColor}
          onChange={updateSkyColor}
        />
        <input
          type="text"
          placeholder="Grass color"
          value={props.attributes.grassColor}
          onChange={updateGrassColor}
        />
      </div>
    );
  },
  save(props) {
    return (
      <h2>
        Today the sky is {props.attributes.skyColor} and the grass is{" "}
        {props.attributes.grassColor}
      </h2>
    );
  }
});

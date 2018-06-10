export default function ThinkOfTheChildren(module) {

  const registerChildComponents = ({components}) => {
    for(var key in components) {
      let childDefinition = components[key];
      key = key[0].toLowerCase() + key.slice(1);
      module.component(key, childDefinition);
    }
  };

  const registerChildDirectives = ({directives}) => {
    for(var key in directives) {
      let childDefinition = directives[key];
      key = key[0].toLowerCase() + key.slice(1);
      module.directive(key, childDefinition);
    }
  };

  const decorateComponent = originalComponentFunction => {
    module.component = function(name, definition) {
      definition.components && registerChildComponents(definition);
      definition.directives && registerChildDirectives(definition);
      name = name[0].toLowerCase() + name.slice(1);
      originalComponentFunction(name, definition);
      return module;
    }
  };

  decorateComponent(module.component);

  return module;
};

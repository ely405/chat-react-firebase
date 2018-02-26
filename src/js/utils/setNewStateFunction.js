const setNewState = (propertyName, value) => () => ({ [propertyName]: value });


export default setNewState;
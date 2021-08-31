export function convertObjectIntoArray(homeworld: any) {
  return Object.keys(homeworld).reduce((newArray, key) => {
    const subObject: any = { name: [key][0], value: homeworld[key] };

    return newArray.concat(subObject);
  }, []);
}

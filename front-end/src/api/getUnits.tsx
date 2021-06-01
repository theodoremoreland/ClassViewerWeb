export const getUnits = async (route : string) : Promise<any> => {
    const unitsPromise = await fetch(route);
    const response = unitsPromise.json();
    return response;
};

export default getUnits;
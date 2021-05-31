export const getCohorts = async (route : string) : Promise<any> => {
    const cohortsPromise = await fetch(route);
    const response = cohortsPromise.json();
    return response;
};

export default getCohorts;
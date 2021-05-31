// TODO need to also grab name of course type and return it.
export const getCohorts = async (route : string) : Promise<any> => {
    const cohortsPromise = await fetch(route);
    const response = cohortsPromise.json();
    return response;
};

export default getCohorts;
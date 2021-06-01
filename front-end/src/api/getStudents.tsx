export const getStudents = async (route : string) : Promise<any> => {
    const studentsPromise = await fetch(route);
    const response = studentsPromise.json();
    return response;
};

export default getStudents;
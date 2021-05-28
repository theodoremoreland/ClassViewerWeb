export const getCourses = async (route : string) : Promise<any> => {
    const coursesPromise = await fetch(route);
    const response = coursesPromise.json();
    return response;
};

export default getCourses;
const API_URL='https://jsonplaceholder.typicode.com/users';
export async function fetchStudents(signal){const response=await fetch(API_URL,{signal});if(!response.ok)throw new Error(`API request failed with status ${response.status}.`);return response.json()}

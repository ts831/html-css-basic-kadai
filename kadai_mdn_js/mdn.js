const date1= new Date(2024,9,12);
const options={
    year:'numeric',
    month:'long',
    day:'numeric',
};

console.log(date1.toLocaleDateString(undefined,options));
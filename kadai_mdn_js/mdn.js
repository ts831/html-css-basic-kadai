const date1= new Date();
const options={
    year:"numeric",
    month:"long",
    day:"numeric",
}


console.log(new Intl.DateTimeFormat("japanese",options).format(date1));


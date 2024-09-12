import { format } from 'date-fns';

function formatDate(date){
    return format(new Date(date), 'yyyy-MM-dd');
}

function formatTime(time){
    return time.length === 5 ? `${time}:00` : time;
}


export {formatDate, formatTime}
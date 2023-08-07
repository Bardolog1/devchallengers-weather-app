
import {useState, useEffect} from 'react';

export function useDateFormatted(data, order) {

    const [dateFormatted, setDateFormatted] = useState(null);
   

    
    useEffect(() => {

         const today = new Date().getDay();
          const days = [null, 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
           const months = [null, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec'];

        const getDate = () => {
        if(
            data !== null ||
            data !== undefined ||
            order !== null ||
            order !== undefined 

            ) {
            const day = data[0]?.dt_txt.split(' ')[0].split('-')[2]?.split('')[0] === '0'? 
                    data[0]?.dt_txt.split(' ')[0].split('-')[2].split('')[1] : 
                    data[0]?.dt_txt.split(' ')[0].split('-')[2];
            const month = data[0]?.dt_txt.split(' ')[0].split('-')[1];
            const cardDay = (today + Number(order))>7? (today + Number(order)) - 7 : (today + Number(order));
            setDateFormatted(order === '1' ? 'Tomorrow' : days[cardDay] + ', ' + day + ' ' + months[Number(month)]);

        }else {
            const dayMonth = new Date().getDate();
            const monthCurrent = new Date().getMonth();
            setDateFormatted( days[(today-1)<1? 7 : (today-1)] + ', ' + dayMonth + ' ' + months[monthCurrent+1]);
            
        }

    }
        getDate();

        const intervalId = setInterval(() => getDate, 60000);
        return () => clearInterval(intervalId);
    }, [data, order]);


    
    return dateFormatted;
    }



    
  
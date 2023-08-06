import { useState, useEffect } from 'react';

export function useImgSelector(description) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const imgSelector = (description) => {
      switch (description) {

        case 'thunderstorm with light rain':
          return './assets/img/Thunderstorm.png';
        case 'thunderstorm with rain':
          return './assets/img/Thunderstorm.png';
        case 'thunderstorm with heavy rain ':
          return './assets/img/Thunderstorm.png';
        case 'light thunderstorm':
          return './assets/img/Thunderstorm.png';
        case 'thunderstorm':
          return './assets/img/Thunderstorm.png';
        case 'heavy thunderstorm':
          return './assets/img/Thunderstorm.png';
        case 'ragged thunderstorm':
          return './assets/img/Thunderstorm.png';
        case 'thunderstorm with light drizzle':
          return './assets/img/Thunderstorm.png';
        case ' 	thunderstorm with drizzle':
          return './assets/img/Thunderstorm.png';
        case 'thunderstorm with heavy drizzle':
          return './assets/img/Thunderstorm.png';

        case 'light intensity drizzle':
          return './assets/img/LightRain.png';
        case 'drizzle':
          return './assets/img/LightRain.png';
        case 'heavy intensity drizzle':
          return './assets/img/LightRain.png';
        case 'light intensity drizzle rain':
          return './assets/img/LightRain.png';
        case 'drizzle rain':
          return './assets/img/LightRain.png';
        case 'heavy intensity drizzle rain':
          return './assets/img/LightRain.png';
        case 'shower rain and drizzle':
          return './assets/img/LightRain.png';
        case 'lheavy shower rain and drizzle':
          return './assets/img/LightRain.png';
        case 'shower drizzle':
          return './assets/img/LightRain.png';

        case 'light rain':
          return './assets/img/Shower.png';
        case 'moderate rain':
          return './assets/img/Shower.png';
        case 'heavy intensity rain':
          return './assets/img/Shower.png';
        case 'very heavy rain':
          return './assets/img/Shower.png';
        case 'extreme rain':
          return './assets/img/Shower.png';
        case 'freezing rain':
          return './assets/img/Sleet.png';
        case 'light intensity shower rain':
          return './assets/img/HeavyRain.png';
        case 'shower rain':
          return './assets/img/HeavyRain.png';
        case 'heavy intensity shower rain':
          return './assets/img/HeavyRain.png';
        case 'ragged shower rain':
          return './assets/img/HeavyRain.png';    

        case 'light snow':
          return './assets/img/Snow.png';
        case 'snow':
          return './assets/img/Snow.png';
        case 'heavy snow':
          return './assets/img/Snow.png';
        case 'sleet':
          return './assets/img/Sleet.png';
        case 'light shower sleet':
          return './assets/img/Hail.png';
        case 'shower sleet':
          return './assets/img/Hail.png';
        case 'light rain and snow':
          return './assets/img/Hail.png';
        case 'rain and snow':
          return './assets/img/Sleet.png';
        case 'light shower snow':
          return './assets/img/Sleet.png';
        case 'shower snow':
          return './assets/img/Sleet.png';
        case 'heavy shower snow':
          return './assets/img/Sleet.png';

        case 'clear sky':
          return './assets/img/Clear.png';

        case 'mist':
          return './assets/img/Cloud-background.png';
        case 'Smoke':
          return './assets/img/Cloud-background.png';
        case 'Haze':
          return './assets/img/Cloud-background.png';
        case 'sand/dust whirls':
          return './assets/img/Cloud-background.png';
        case 'fog':
          return './assets/img/Cloud-background.png';
        case 'sand':
          return './assets/img/Cloud-background.png';
        case 'dust':
          return './assets/img/Cloud-background.png';
        case 'volcanic ash':
          return './assets/img/Cloud-background.png';
        case 'squalls':
          return './assets/img/Cloud-background.png';
        case 'tornado':
          return './assets/img/Cloud-background.png';
        
        case 'few clouds':
          return './assets/img/LightCloud.png';
        case 'scattered clouds':
          return './assets/img/HeavyCloud.png';
        case 'broken clouds':
          return './assets/img/HeavyCloud.png';
        case 'overcast clouds':
          return './assets/img/HeavyCloud.png';
        
          default:
          return null;
      }
    };

    const selectedImg = imgSelector(description);
    setImg(selectedImg);
  }, [description]);

  return [ img ];
}
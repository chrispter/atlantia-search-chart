import { PriceEvolution, SerieObject } from "../interface";

// Function will be gotten dates and date be ordened 
export const getCategories = (data: PriceEvolution[]): string[] => {
    const categories = data
        .map((date) => date.dateExtraction)
        .reduce((acc: string[], item :string)=> {
        // console.log(acc, item);
        if(!acc.includes(item)){
            acc.push(item);
        }
        return acc;
    },[]).sort((a, b ):any => {
        return a > b;
    });
    return categories;
}


export const getSeries = (data: PriceEvolution[]): SerieObject[] => {
    
    const categories: string[] = data.map((element: PriceEvolution) => element.sku).reduce((acc: string[], item :string)=> {
        // console.log(acc, item);
        if(!acc.includes(item)){
            acc.push(item);
        }
        return acc;
    },[]);

    let result: SerieObject[] = [];

    categories.forEach(element => {
        const arr = data.filter((item) => {
            if(item.sku === element){
                
                return item
            }
        });

        let obj: SerieObject = {
            name: '',
            // price: [],
            data: []
        };

        arr.forEach((item) => {
            if(obj.name !== item.name){
                result.push(obj);
                obj.name = item.name;
                // obj.sku = item.sku;
                obj.data.push(item.price)
            } else {
                obj.data.push(item.price)
            }
        });
    });

    return result;

} 
export interface PriceEvolution {
    sku:            string;
    name:           string;
    price:          number;
    dateExtraction: string;
}

export interface PresenceProduct {
    name:          string;
    presenceShare: number;
}

export interface Product {
    id:              number;
    sku:             string;
    name:            string;
    persistence:     number;
    averagePrice:    number;
    productImage:    string;
    averagePosition: number;
}

export interface SerieObject {
    name: string,
    // sku: string,
    data: number[],
}
export interface Beer {
    id: number;
    name: string; 
    type: string; 
    brauerei: string;
    alkoholAnteil: number; 
    beschreibung: string;
    internationalBitternessUnits: number; 
    bild?: string;
    bewertung: number;
    herkunftsland: string;
    preis: number;
    schlagwörter?: [];
}

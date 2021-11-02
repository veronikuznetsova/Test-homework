import { numberLiteralTypeAnnotation } from "@babel/types";

export function usdcny(usd){
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
};
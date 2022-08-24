import { handleCustomValidation, handleValidInput } from "./custom-input-validation";
import { pattern } from "./RegexPatterns/patterns";

export function handleIdentificationValidity(e:any){
    const idOnlyDigits = (e.target as HTMLInputElement).value.replace(pattern.clearNotDigits,'');

    idOnlyDigits.length !== 11
    ?
    handleCustomValidation(e, "Por favor, ingrese solo los 11 dígitos de su cédula con o sin guiones.") 
    :
    handleValidInput(e)
  }

  export function handlePhoneValidity(e:any){
    const phoneOnlyDigits = (e.target as HTMLFormElement).value.replace(pattern.clearNotDigits, "");

    phoneOnlyDigits.length !== 10?
    handleCustomValidation(e, "Por favor, ingrese un número telefónico o celular válido.")
    :
    handleValidInput(e)
  }

  export function handleSelectInputValidation(e: any){
    const inputValue = (e.target as HTMLFormElement).value;
    inputValue === "default-value" ?
    handleCustomValidation(e, "Por favor, seleccione un valor.")
    :
    handleValidInput(e)

  }


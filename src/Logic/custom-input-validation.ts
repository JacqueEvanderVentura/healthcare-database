import React from "react";

export function handleCustomValidation(element: any, message: string) {
  return element.target.setCustomValidity(
    message ? message : "Por favor, llenar este campo"
  );
}

export function handleValidInput(element: React.FormEvent<HTMLFormElement>) {
  return (element.target as HTMLInputElement).setCustomValidity("");
}

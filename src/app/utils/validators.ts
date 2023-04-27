import { Validators } from "@angular/forms"

export const email=() => {
    return [Validators.required, Validators.email]
}

export const password=() => {
    return [Validators.required, Validators.minLength(8), Validators.maxLength(10)]
}
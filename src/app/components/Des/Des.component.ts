import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-des',
  templateUrl: './Des.component.html',
})
export class DesComponent {
  registerForm: FormGroup;
  result: string = '';
  decryptedResult: string = '';

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      key: ['', Validators.required] // Clave para cifrar y descifrar
    });
  }

  // Método para cifrar los datos del formulario
  encrypt() {
    if (this.registerForm.valid) {
      const nombre = this.registerForm.value.nombre;
      const email = this.registerForm.value.email;
      const password = this.registerForm.value.password;
      const key = this.registerForm.value.key;

      const dataToEncrypt = `Nombre: ${nombre}, Email: ${email}, Password: ${password}`;

      // Cifrar los datos usando CryptoJS DES
      this.result = CryptoJS.DES.encrypt(dataToEncrypt, key).toString();
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  // Método para descifrar los datos
  decrypt() {
    const key = this.registerForm.value.key;

    try {
      const bytes = CryptoJS.DES.decrypt(this.result, key);
      this.decryptedResult = bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      alert('Error al descifrar. Verifica la clave.');
    }
  }
}

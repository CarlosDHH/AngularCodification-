import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-sha1',
  templateUrl: './Sha.component.html',
})
export class ShaComponent {
  registerForm: FormGroup;
  result: string = '';

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // Generar el hash SHA-1
  hash() {
    if (this.registerForm.valid) {
      const { nombre, email, password } = this.registerForm.value;
      const dataToHash = `Nombre: ${nombre}, Email: ${email}, Password: ${password}`;

      // Calcular el hash SHA-1
      this.result = CryptoJS.SHA1(dataToHash).toString();
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}

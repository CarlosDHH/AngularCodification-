import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as forge from 'node-forge';

@Component({
  selector: 'app-dsa',
  templateUrl: './Dsa.component.html',
})
export class DsaComponent {
  registerForm: FormGroup;
  privateKeyPem: string | null = null;
  publicKeyPem: string | null = null;
  signature: string = '';
  verificationResult: string = '';

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Generar el par de claves DSA al hacer clic en el botón
  generateKeyPair() {
    forge.pki.rsa.generateKeyPair({ bits: 2048 }, (err, keypair) => {
      if (err) {
        console.error('Error al generar el par de claves:', err);
        return;
      }

      // Convertir claves a formato PEM
      this.privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);
      this.publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
      alert('Par de claves generado con éxito.');
    });
  }

  // Firmar los datos del formulario
  sign() {
    if (!this.privateKeyPem) {
      alert('Error: Debe generar primero el par de claves.');
      return;
    }

    if (this.registerForm.valid) {
      const { nombre, email, password } = this.registerForm.value;
      const dataToSign = `Nombre: ${nombre}, Email: ${email}, Password: ${password}`;

      // Crear un hash SHA-256 de los datos
      const md = forge.md.sha256.create();
      md.update(dataToSign, 'utf8');

      // Convertir clave privada PEM a formato de uso
      const privateKey = forge.pki.privateKeyFromPem(this.privateKeyPem);

      // Firmar el hash de los datos
      const signatureBytes = privateKey.sign(md);

      // Convertir la firma a formato hexadecimal
      this.signature = forge.util.bytesToHex(signatureBytes);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  // Verificar la firma
  verify() {
    if (!this.publicKeyPem || !this.signature) {
      alert('Por favor, firma los datos primero.');
      return;
    }

    if (this.registerForm.valid) {
      const { nombre, email, password } = this.registerForm.value;
      const dataToVerify = `Nombre: ${nombre}, Email: ${email}, Password: ${password}`;

      // Crear un hash SHA-256 de los datos
      const md = forge.md.sha256.create();
      md.update(dataToVerify, 'utf8');

      // Convertir clave pública PEM a formato de uso
      const publicKey = forge.pki.publicKeyFromPem(this.publicKeyPem);

      // Convertir la firma de hexadecimal a bytes
      const signatureBytes = forge.util.hexToBytes(this.signature);

      // Verificar la firma con la clave pública
      const verified = publicKey.verify(md.digest().bytes(), signatureBytes);

      this.verificationResult = verified ? 'Válida' : 'Inválida';
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}

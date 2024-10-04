import { Component } from '@angular/core';

@Component({
  selector: 'app-caesar',
  template: `<div style="max-width: 400px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
  <h2 style="text-align: center; margin-bottom: 20px; color: #333;">Cifrado César</h2>

  <div style="margin-bottom: 15px;">
    <label for="input" style="display: block; margin-bottom: 5px;">Texto:</label>
    <input id="input" [(ngModel)]="input" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
  </div>

  <div style="margin-bottom: 15px;">
    <label for="shift" style="display: block; margin-bottom: 5px;">Desplazamiento:</label>
    <input id="shift" type="number" [(ngModel)]="shift" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
  </div>

  <div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
    <button (click)="encrypt()" style="background-color: #007bff; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer;">Cifrar</button>
    <button (click)="decrypt()" style="background-color: #28a745; color: white; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer;">Descifrar</button>
  </div>

  <div>
    <p style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ccc; border-radius: 4px; text-align: center;">
      Resultado: {{ result }}
    </p>
  </div>
</div>

  `
})
export class CaesarComponent {
  input: string = '';
  shift: number = 0;
  result: string = '';

  encrypt() {
    this.result = this.caesarCipher(this.input, this.shift);
  }

  decrypt() {
    this.result = this.caesarCipher(this.result, -this.shift);
  }

  private caesarCipher(str: string, shift: number): string {
    return str.replace(/[a-z]/gi, letter => {
      const code = letter.charCodeAt(0);
      const isUpperCase = letter === letter.toUpperCase();
      const base = isUpperCase ? 65 : 97;
      return String.fromCharCode((code - base + shift + 26) % 26 + base);
    });
  }
}

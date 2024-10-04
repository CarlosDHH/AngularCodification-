import { Component } from '@angular/core';

@Component({
  selector: 'app-scytale',
  template: `<div style="max-width: 400px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px; background-color: #f9f9f9;">
  <h2 style="text-align: center; margin-bottom: 20px; color: #333;">Cifrado Escítala</h2>

  <div style="margin-bottom: 15px;">
    <label for="input" style="display: block; margin-bottom: 5px;">Texto:</label>
    <input id="input" [(ngModel)]="input" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
  </div>

  <div style="margin-bottom: 15px;">
    <label for="diameter" style="display: block; margin-bottom: 5px;">Diámetro (número de filas):</label>
    <input id="diameter" type="number" [(ngModel)]="diameter" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
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
export class ScytaleComponent {
  input: string = '';
  diameter: number = 0;
  result: string = '';

  encrypt() {
    if(this.diameter === 0) return

    this.result = this.scytale(this.input, this.diameter, false);
  }

  decrypt() {
    if(this.diameter === 0) return
    this.result = this.scytale(this.input, this.diameter, true);
  }

  private scytale(text: string, rows: number, isEncrypt: boolean): string {
    const cols = Math.ceil(text.length / rows);
    const matrix: string[][] = Array(rows).fill('').map(() => Array(cols).fill(''));

    if (isEncrypt) {
      let index = 0;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (index < text.length) {
            matrix[i][j] = text[index++];
          }
        }
      }
      return matrix.map(row => row.join('')).join('');
    } else {
      let index = 0;
      for (let j = 0; j < cols; j++) {
        for (let i = 0; i < rows; i++) {
          if (index < text.length) {
            matrix[i][j] = text[index++];
          }
        }
      }
      return matrix.flat().join('');
    }
  }
}
